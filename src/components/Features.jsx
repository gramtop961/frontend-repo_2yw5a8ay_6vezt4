import { Code, Database, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-first workflow',
    desc: 'Describe what you want; get APIs, UI, and data models wired up in seconds.'
  },
  {
    icon: Code,
    title: 'Full-stack in one place',
    desc: 'React frontend and FastAPI backend run together in a live sandbox.'
  },
  {
    icon: Database,
    title: 'Built-in persistence',
    desc: 'MongoDB is pre-configured with clean schemas for real data, not demos.'
  },
  {
    icon: Shield,
    title: 'Safe & isolated',
    desc: 'Experiment freely in an ephemeral environment before you ship.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to ship</h2>
          <p className="mt-4 text-gray-600">From idea to live preview with one assistant. No yak shaving, just momentum.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
