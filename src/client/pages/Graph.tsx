import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface GraphNode {
  id: string;
  title: string;
  tags: string[];
}

interface GraphLink {
  source: string;
  target: string;
}

function Graph() {
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [links, setLinks] = useState<GraphLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    async function fetchGraph() {
      try {
        const res = await fetch('/api/blog/graph-data');
        const data = await res.json();
        if (data.success) {
          setNodes(data.data.nodes);
          setLinks(data.data.links);
        }
      } catch (err) {
        console.error('Failed to fetch graph:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchGraph();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setSize({ width: rect.width, height: Math.max(400, window.innerHeight - 200) });
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simple force simulation
  const simulationNodes = useMemo(() => {
    return nodes.map((n) => ({ ...n, x: size.width / 2 + (Math.random() - 0.5) * 200, y: size.height / 2 + (Math.random() - 0.5) * 200 }));
  }, [nodes, size.width, size.height]);

  useEffect(() => {
    if (simulationNodes.length === 0) return;
    let raf = 0;
    const positions = new Map(simulationNodes.map((n) => [n.id, { x: n.x, y: n.y, vx: 0, vy: 0 }]));

    function tick() {
      // repulsion
      const ids = Array.from(positions.keys());
      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          const a = positions.get(ids[i])!;
          const b = positions.get(ids[j])!;
          let dx = a.x - b.x;
          let dy = a.y - b.y;
          let dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 2000 / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          a.vx += fx;
          a.vy += fy;
          b.vx -= fx;
          b.vy -= fy;
        }
      }
      // links
      for (const link of links) {
        const a = positions.get(link.source);
        const b = positions.get(link.target);
        if (!a || !b) continue;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - 100) * 0.005;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;
      }
      // center gravity
      for (const [_id, p] of positions) {
        p.vx += (size.width / 2 - p.x) * 0.005;
        p.vy += (size.height / 2 - p.y) * 0.005;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.x += p.vx;
        p.y += p.vy;
        p.x = Math.max(20, Math.min(size.width - 20, p.x));
        p.y = Math.max(20, Math.min(size.height - 20, p.y));
      }

      setSimPositions(new Map(positions));
      raf = requestAnimationFrame(tick);
    }

    let mounted = true;
    const setSimPositions = (map: Map<string, { x: number; y: number; vx: number; vy: number }>) => {
      if (!mounted) return;
      // force re-render with new positions
      const next: Record<string, { x: number; y: number }> = {};
      map.forEach((v, k) => (next[k] = { x: v.x, y: v.y }));
      setPos(next);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
    };
  }, [simulationNodes, links, size.width, size.height]);

  const [pos, setPos] = useState<Record<string, { x: number; y: number }>>({});

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[1.875rem] font-semibold tracking-tight text-foreground sm:text-[2rem]">知识图谱</h1>
        <p className="text-sm text-muted-foreground">
          {nodes.length} 个节点 · {links.length} 条连接
        </p>
      </div>

      {nodes.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-sm text-muted-foreground">暂无文章数据</p>
        </div>
      ) : (
        <div className="w-full rounded-[3px] border border-border bg-card overflow-hidden">
          <svg ref={svgRef} width={size.width} height={size.height} className="block">
            {links.map((l, idx) => {
              const a = pos[l.source];
              const b = pos[l.target];
              if (!a || !b) return null;
              return (
                <line
                  key={idx}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="currentColor"
                  className="text-border"
                  strokeWidth={1}
                />
              );
            })}
            {nodes.map((n) => {
              const p = pos[n.id];
              if (!p) return null;
              const isHovered = hovered === n.id;
              const linked = new Set(links.filter((l) => l.source === n.id || l.target === n.id).map((l) => (l.source === n.id ? l.target : l.source)));
              const dimmed = hovered && hovered !== n.id && !linked.has(hovered);
              return (
                <g key={n.id} transform={`translate(${p.x}, ${p.y})`} className="cursor-pointer" onMouseEnter={() => setHovered(n.id)} onMouseLeave={() => setHovered(null)}>
                  <Link to={`/${n.id}`}>
                    <circle
                      r={isHovered ? 8 : 5}
                      className={`transition-all ${dimmed ? 'opacity-30' : 'opacity-100'} ${isHovered ? 'fill-primary' : 'fill-muted-foreground'}`}
                    />
                    <text
                      y={18}
                      textAnchor="middle"
                      className={`text-[11px] fill-foreground select-none ${dimmed ? 'opacity-30' : 'opacity-100'}`}
                    >
                      {n.title}
                    </text>
                  </Link>
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
}

export default Graph;
