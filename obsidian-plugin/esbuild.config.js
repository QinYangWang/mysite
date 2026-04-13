const esbuild = require("esbuild");

const production = process.argv.includes("--production");
const watch = process.argv.includes("--watch");

async function main() {
  const ctx = await esbuild.context({
    entryPoints: ["src/main.ts"],
    bundle: true,
    format: "cjs",
    target: "es2018",
    logLevel: "info",
    sourcemap: "inline",
    outdir: ".",
    external: [
      "obsidian",
      "electron",
      "@codemirror",
      "@lezer",
      "@rollup",
    ],
    define: {
      "process.env.NODE_ENV": production ? '"production"' : '"development"',
    },
    plugins: watch
      ? [
          {
            name: "reload",
            setup(build) {
              build.onEnd(() => {
                console.log("Build complete, reloading...");
              });
            },
          },
        ]
      : [],
  });

  if (watch) {
    await ctx.watch();
    console.log("Watching for changes...");
  } else {
    await ctx.rebuild();
    await ctx.dispose();
    console.log("Build complete");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
