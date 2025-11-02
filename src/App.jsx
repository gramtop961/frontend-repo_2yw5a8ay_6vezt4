import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />

        <section id="get-started" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to build?</h3>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Describe your app idea and I’ll create the backend endpoints, database schemas, and a polished UI — all in this live environment.
            </p>
            <div className="mt-8 inline-flex gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Start building</a>
              <a href="#features" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50">See what’s included</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
