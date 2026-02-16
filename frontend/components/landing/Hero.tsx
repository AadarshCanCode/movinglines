'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Paperclip, Play, Settings2, Sparkles, TriangleAlert } from 'lucide-react'

const categories = [
  { label: 'calculus', color: 'bg-blue-500' },
  { label: 'linear algebra', color: 'bg-cyan-500' },
  { label: 'geometry', color: 'bg-pink-500' },
  { label: 'physics', color: 'bg-green-500' },
  { label: 'neural networks', color: 'bg-purple-500' },
  { label: 'anything', color: 'bg-amber-400', icon: '✨' },
]

export function Hero({ onLaunchAction }: { onLaunchAction: () => void }) {
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      onLaunchAction()
    }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden grid-pattern">
      {/* Radial Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] glow-effect pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] glow-effect pointer-events-none opacity-10" />
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 animate-fade-in">

        {/* Pill Badge */}
        <button
          onClick={onLaunchAction}
          className="group flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-sm text-white/80 text-sm font-medium hover:border-blue-400/30 hover:bg-blue-500/5 transition-all duration-300"
        >
          <Play className="h-3.5 w-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
          See the magic — Try it free
          <ArrowRight className="h-3.5 w-3.5 text-white/40 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] pb-4 pt-2">
          <span className="bg-linear-to-b from-white to-white/60 bg-clip-text text-transparent">
            Turn Ideas Into
          </span>
          <br />
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Stunning Animations
          </span>
        </h1>

        {/* Server Status Banner */}
        <div className="w-full max-w-lg rounded-xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm px-5 py-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              <TriangleAlert className="h-5 w-5 text-amber-400" />
            </div>
            <div className="text-left space-y-1">
              <p className="text-sm font-semibold text-amber-300">
                Servers Temporarily Offline
              </p>
              <p className="text-xs text-white/40 leading-relaxed">
                Our animation servers are undergoing maintenance and upgrades.
                Generation is temporarily unavailable. We&apos;re working to bring them back soon — stay tuned!
              </p>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                <span className="text-[11px] text-amber-400/70 font-medium">Maintenance in progress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/40 max-w-2xl">
          <span className="whitespace-nowrap">Animate</span>
          {categories.map((cat) => (
            <span key={cat.label} className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-black ${cat.color}`}>
              {cat.label}
              {cat.icon && <span>{cat.icon}</span>}
            </span>
          ))}
          <span className="whitespace-nowrap">with AI</span>
        </div>

        {/* Central Prompt Input */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-6 opacity-50 pointer-events-none">
          <div className="dark-card rounded-xl overflow-hidden border border-white/6 transition-colors duration-300 shadow-2xl shadow-blue-500/5">
            <div className="p-4">
              <input
                id="hero-prompt"
                name="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Visualize the beauty of Fourier transforms..."
                aria-label="Describe what you want to animate"
                className="w-full bg-transparent text-white/90 text-base placeholder:text-white/25 outline-none"
                disabled
              />
            </div>

            {/* Input Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-t border-white/5 gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button type="button" disabled className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-white/70 text-xs font-medium">
                  <Settings2 className="h-3.5 w-3.5" />
                  Auto
                  <ChevronDown className="h-3 w-3" />
                </button>
                <button type="button" disabled className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-white/70 text-xs font-medium">
                  <Settings2 className="h-3.5 w-3.5" />
                  Tools
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
              <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  disabled
                  className="p-2 rounded-md text-white/30"
                  aria-label="Attach file"
                  title="Attach file"
                >
                  <Paperclip className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/50 text-white/50 text-sm font-semibold cursor-not-allowed"
                  disabled
                >
                  <Sparkles className="h-4 w-4" />
                  Generate
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
