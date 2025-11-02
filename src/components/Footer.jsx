export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Coding Platform. All rights reserved.</p>
        <div className="text-sm text-gray-500">
          Built in a live sandbox. Ready to ship.
        </div>
      </div>
    </footer>
  )
}
