export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      {/* Hero */}
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🐳 Running inside Docker
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-4 leading-tight">
          My Next.js App
        </h1>
        <p className="text-lg text-slate-500 mb-8">
          A production-ready Next.js starter, fully dockerized and ready to deploy.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Next.js Docs →
          </a>
          <a
            href="https://docs.docker.com"
            target="_blank"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition"
          >
            Docker Docs →
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        {[
          { icon: "⚡", title: "Fast", desc: "Next.js 14 with App Router and server components." },
          { icon: "🐳", title: "Dockerized", desc: "Runs in a container — consistent across all environments." },
          { icon: "🎨", title: "Styled", desc: "Tailwind CSS for rapid, responsive UI development." },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-slate-800 mb-1">{f.title}</h3>
            <p className="text-slate-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-16 text-slate-400 text-sm">
        Built with Next.js · Tailwind CSS · Docker
      </p>
    </main>
  );
}
