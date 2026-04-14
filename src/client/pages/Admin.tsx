import { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Lock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

interface CommentItem {
  id: number;
  post_slug: string;
  email: string;
  content: string;
  approved: number;
  created_at: string;
}

interface TimeseriesPoint {
  date: string;
  pv: number;
  uv: number;
}

interface TopPage {
  path: string;
  views: number;
}

interface CountryStat {
  country: string;
  views: number;
}

interface DeviceStat {
  device: string;
  views: number;
}

function formatNumber(n: number) {
  return n.toLocaleString('zh-CN');
}

const AUTH_KEY = 'admin_api_token';

function getStoredToken(): string | null {
  return sessionStorage.getItem(AUTH_KEY);
}

function setStoredToken(token: string) {
  sessionStorage.setItem(AUTH_KEY, token);
}

function clearStoredToken() {
  sessionStorage.removeItem(AUTH_KEY);
}

function Admin() {
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'comments'>('dashboard');
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const [stats, setStats] = useState({
    totalPv: 0,
    totalUv: 0,
    todayPv: 0,
    commentCount: 0,
  });
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState<string | null>(null);

  const [timeseries, setTimeseries] = useState<TimeseriesPoint[]>([]);
  const [topPages, setTopPages] = useState<TopPage[]>([]);
  const [countries, setCountries] = useState<CountryStat[]>([]);
  const [devices, setDevices] = useState<DeviceStat[]>([]);

  useEffect(() => {
    const stored = getStoredToken();
    if (stored) {
      setIsAuthenticated(true);
    }
  }, []);

  const getAuthHeaders = (): Record<string, string> => {
    const stored = getStoredToken();
    return stored ? { Authorization: `Bearer ${stored}` } : {};
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) {
        setStoredToken(token);
        setIsAuthenticated(true);
      } else {
        setAuthError('API Token 不正确');
      }
    } catch (err) {
      setAuthError('验证失败，请检查网络');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    clearStoredToken();
    setIsAuthenticated(false);
    setToken('');
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    async function fetchComments() {
      try {
        const res = await fetch('/api/comments/admin/all', { headers: getAuthHeaders() });
        if (res.status === 401) {
          clearStoredToken();
          setIsAuthenticated(false);
          return;
        }
        const data = await res.json();
        if (data.success) {
          setComments(data.data || []);
        }
      } catch (err) {
        console.error('Failed to fetch comments:', err);
      } finally {
        setCommentsLoading(false);
      }
    }
    fetchComments();
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    async function fetchDashboard() {
      setStatsLoading(true);
      setStatsError(null);
      try {
        const [statsRes, tsRes, pagesRes, countriesRes, devicesRes] = await Promise.all([
          fetch('/api/analytics/stats?days=30', { headers: getAuthHeaders() }),
          fetch('/api/analytics/timeseries?days=30', { headers: getAuthHeaders() }),
          fetch('/api/analytics/top-pages?limit=10&days=30', { headers: getAuthHeaders() }),
          fetch('/api/analytics/countries?limit=10&days=30', { headers: getAuthHeaders() }),
          fetch('/api/analytics/devices?days=30', { headers: getAuthHeaders() }),
        ]);

        if (statsRes.status === 401 || tsRes.status === 401) {
          clearStoredToken();
          setIsAuthenticated(false);
          return;
        }

        const statsData = await statsRes.json();
        const tsData = await tsRes.json();
        const pagesData = await pagesRes.json();
        const countriesData = await countriesRes.json();
        const devicesData = await devicesRes.json();

        if (statsData.success) {
          setStats({
            totalPv: statsData.data.totalPv || 0,
            totalUv: statsData.data.totalUv || 0,
            todayPv: statsData.data.todayPv || 0,
            commentCount: comments.length,
          });
        } else {
          setStatsError(statsData.error || 'Stats error');
        }

        if (tsData.success) setTimeseries(tsData.data || []);
        if (pagesData.success) setTopPages(pagesData.data || []);
        if (countriesData.success) setCountries(countriesData.data || []);
        if (devicesData.success) setDevices(devicesData.data || []);
      } catch (err: any) {
        setStatsError(err?.message || 'Failed to load analytics');
      } finally {
        setStatsLoading(false);
      }
    }
    fetchDashboard();
  }, [isAuthenticated, comments.length]);

  useEffect(() => {
    setStats((s) => ({ ...s, commentCount: comments.length }));
  }, [comments]);

  const handleApprove = async (id: number) => {
    try {
      const res = await fetch(`/api/comments/approve/${id}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
      });
      if (res.status === 401) {
        clearStoredToken();
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      if (data.success) {
        setComments((prev) =>
          prev.map((c) => (c.id === id ? { ...c, approved: 1 } : c))
        );
      }
    } catch (err) {
      console.error('Failed to approve comment:', err);
    }
  };

  const chartData = useMemo(() => {
    return timeseries.map((d) => ({
      date: d.date.slice(5),
      pv: d.pv,
      uv: d.uv,
    }));
  }, [timeseries]);

  const chartConfig = {
    pv: { label: '浏览量', color: 'rgba(255,255,255,0.9)' },
    uv: { label: '访客数', color: 'rgba(255,255,255,0.4)' },
  } satisfies ChartConfig;

  const StatCard = ({
    title,
    value,
    loading,
  }: {
    title: string;
    value: number;
    loading: boolean;
  }) => (
    <div className="space-y-2">
      {loading ? (
        <Skeleton className="h-14 w-28" />
      ) : (
        <p className="font-doto text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {formatNumber(value)}
        </p>
      )}
      <p className="text-[11px] font-mono uppercase tracking-wider text-white/40">
        {title}
      </p>
    </div>
  );

  const SectionCard = ({
    title,
    children,
    loading,
  }: {
    title: string;
    children: React.ReactNode;
    loading?: boolean;
  }) => (
    <Card className="border-white/10 bg-black">
      <CardHeader className="pb-3">
        <CardTitle className="text-xs font-mono uppercase tracking-wider text-white/60">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-sm border-white/10 bg-black">
          <CardContent className="p-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-5 border border-white/15 p-4 text-white">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-medium tracking-tight text-white">管理后台</h2>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mt-1">
                Enter API Token
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="api-token" className="text-xs font-mono uppercase tracking-wider text-white/50">
                  API Token
                </Label>
                <Input
                  id="api-token"
                  type="password"
                  placeholder="your-secret-api-token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  required
                />
              </div>
              {authError && (
                <p className="font-mono text-xs uppercase tracking-wider text-[#D71921]">
                  {authError}
                </p>
              )}
              <Button type="submit" className="w-full" disabled={authLoading}>
                {authLoading ? '验证中...' : '进入'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">管理后台</h1>
          <p className="text-xs font-mono uppercase tracking-wider text-white/40 mt-2">
            Analytics & Comments
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={handleLogout}>
          退出
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
        <TabsList className="grid w-full max-w-sm grid-cols-2 border-white/10 bg-white/[0.03]">
          <TabsTrigger value="dashboard" className="gap-2 text-xs font-mono uppercase tracking-wider">
            仪表盘
          </TabsTrigger>
          <TabsTrigger value="comments" className="gap-2 text-xs font-mono uppercase tracking-wider">
            评论
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-8 space-y-12">
          {statsError && (
            <div className="flex items-start gap-3 border border-[#D71921]/30 bg-[#D71921]/10 px-4 py-3 text-[#D71921]">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="text-sm">
                <p className="font-medium">分析数据暂时不可用</p>
                <p className="opacity-80">
                  {statsError}。请确认已配置 CF_ACCOUNT_ID 和 CF_ANALYTICS_TOKEN。
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard title="总浏览量 (30天)" value={stats.totalPv} loading={statsLoading} />
            <StatCard title="总访客数 (30天)" value={stats.totalUv} loading={statsLoading} />
            <StatCard title="今日浏览量" value={stats.todayPv} loading={statsLoading} />
            <StatCard title="评论总数" value={stats.commentCount} loading={commentsLoading} />
          </div>

          <Card className="border-white/10 bg-black">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-white/60">
                访问趋势 (30天)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-56 w-full sm:h-64">
                {statsLoading ? (
                  <Skeleton className="h-full w-full" />
                ) : chartData.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-xs font-mono uppercase tracking-wider text-white/40">
                    暂无趋势数据
                  </div>
                ) : (
                  <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="fillPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-pv)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="var(--color-pv)" stopOpacity={0.02} />
                        </linearGradient>
                        <linearGradient id="fillUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--color-uv)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="var(--color-uv)" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.08)" />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={24}
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={11}
                        fontFamily="Space Mono, monospace"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        stroke="rgba(255,255,255,0.4)"
                        fontSize={11}
                        fontFamily="Space Mono, monospace"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="var(--color-pv)"
                        fill="url(#fillPv)"
                        strokeWidth={1.5}
                      />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="var(--color-uv)"
                        fill="url(#fillUv)"
                        strokeWidth={1.5}
                      />
                    </AreaChart>
                  </ChartContainer>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <SectionCard title="热门页面" loading={statsLoading}>
              <div className="space-y-3">
                {topPages.length === 0 ? (
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">暂无数据</p>
                ) : (
                  topPages.map((p, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="truncate pr-4 text-white/60" title={p.path}>
                        {p.path || '/'}
                      </span>
                      <span className="font-mono text-xs text-white/90">{formatNumber(p.views)}</span>
                    </div>
                  ))
                )}
              </div>
            </SectionCard>

            <SectionCard title="国家分布" loading={statsLoading}>
              <div className="space-y-3">
                {countries.length === 0 ? (
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">暂无数据</p>
                ) : (
                  countries.map((c, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="truncate pr-4 text-white/60">{c.country}</span>
                      <span className="font-mono text-xs text-white/90">{formatNumber(c.views)}</span>
                    </div>
                  ))
                )}
              </div>
            </SectionCard>

            <SectionCard title="设备分布" loading={statsLoading}>
              <div className="space-y-3">
                {devices.length === 0 ? (
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">暂无数据</p>
                ) : (
                  devices.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="truncate pr-4 text-white/60">{d.device}</span>
                      <span className="font-mono text-xs text-white/90">{formatNumber(d.views)}</span>
                    </div>
                  ))
                )}
              </div>
            </SectionCard>
          </div>
        </TabsContent>

        <TabsContent value="comments" className="mt-8 space-y-4">
          <Card className="border-white/10 bg-black">
            <CardHeader>
              <CardTitle className="text-xs font-mono uppercase tracking-wider text-white/60">
                评论列表
              </CardTitle>
              <CardDescription>审核并管理所有评论</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto p-0">
              {commentsLoading ? (
                <div className="space-y-2 p-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              ) : comments.length === 0 ? (
                <div className="px-6 py-12 text-center text-xs font-mono uppercase tracking-wider text-white/40">
                  暂无评论
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-14">ID</TableHead>
                      <TableHead>内容</TableHead>
                      <TableHead>文章</TableHead>
                      <TableHead>邮箱</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>时间</TableHead>
                      <TableHead className="text-right">操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comments.map((comment) => (
                      <TableRow key={comment.id}>
                        <TableCell className="text-white/40 font-mono text-xs">{comment.id}</TableCell>
                        <TableCell className="max-w-xs truncate">{comment.content}</TableCell>
                        <TableCell className="text-white/60 font-mono text-xs">{comment.post_slug}</TableCell>
                        <TableCell className="text-white/60 font-mono text-xs">{comment.email}</TableCell>
                        <TableCell>
                          {comment.approved === 1 ? (
                            <Badge variant="outline" className="gap-1 font-normal text-[10px]">
                              <CheckCircle2 className="h-3 w-3" />
                              已通过
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="gap-1 font-normal text-[10px]">
                              <AlertCircle className="h-3 w-3" />
                              待审核
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-white/60 font-mono text-xs">
                          {new Date(comment.created_at).toLocaleDateString('zh-CN')}
                        </TableCell>
                        <TableCell className="text-right">
                          {comment.approved === 0 && (
                            <Button size="sm" variant="ghost" onClick={() => handleApprove(comment.id)}>
                              通过
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Admin;
