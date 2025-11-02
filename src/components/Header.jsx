import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
            <Rocket size={18} />
          </span>
          <span className="font-semibold text-gray-900">Vibe Coding Platform</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a
            href="#get-started"
            className="ml-2 inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  )
}
