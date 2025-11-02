export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-indigo-200">
              New • Ship full-stack apps faster
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Build, run, and iterate with an AI pair‑dev
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              An immersive coding workspace where your assistant creates APIs, UI, and data models in a live sandbox. No setup, just flow.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800"
              >
                Start a new project
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[16/10] w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-rows-6">
                <div className="row-span-1 px-4 flex items-center gap-2 border-b border-gray-100">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="row-span-5 p-6 text-sm text-gray-700">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <code>
{`# Create endpoint\nPOST /api/tasks\n\n# Generate UI\n- Task list\n- Filters\n- New task modal\n\n# Connect database\nMongoDB with schemas`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
