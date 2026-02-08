export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-xl font-semibold tracking-wide">
          DSA Tracker
        </h1>

        <div className="space-x-3">
          <button className="px-4 py-2 text-sm text-slate-300 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm bg-emerald-500 hover:bg-emerald-600 rounded-md transition">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Track Your DSA Journey
            <span className="text-emerald-400"> Together</span>
          </h2>

          <p className="mt-6 text-slate-400 text-lg">
            Create groups, organize problems, and share accepted solutions
            with your friends while preparing consistently.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition">
              Get Started
            </button>

            <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-lg transition">
              Learn More
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-slate-500 py-4 border-t border-slate-800">
        Built for focused learning • DSA Tracker
      </footer>
    </div>
  );
}
