export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-20 px-6 sm:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto text-center">

      {/* Announcement Pill Badge */}
      <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-full px-4 py-1.5 shadow-sm mb-6 text-xs sm:text-sm font-medium text-gray-800">
        <span className="flex h-2 w-2 rounded-full bg-ted-red animate-pulse"></span>
        <span className="text-gray-500">October 2026 • Live at Phinisi Hall</span>
        <span className="text-gray-300">|</span>
        <span className="font-semibold text-ted-red">100+ Attendees</span>
      </div>

      {/* Main Headline with Floating Visual Tags */}
      <div className="relative max-w-4xl mx-auto mb-6">
        <span className="hidden lg:inline-block absolute -left-12 top-2 -rotate-12 bg-[#FFF4D9] text-[#8C5D00] border border-[#FFE7A8] text-xs font-bold px-3 py-1 rounded-full shadow-sm">TEDxUNM 2026</span>
        <span className="hidden lg:inline-block absolute -right-8 bottom-3 rotate-6 bg-[#E8F8F0] text-[#127943] border border-[#BDEFD4] text-xs font-bold px-3 py-1 rounded-full shadow-sm">Every voice matters</span>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-ted-dark tracking-tight leading-[1.08]" id="hero-heading">
          The Art of <br className="hidden sm:inline" />
          <span className="text-ted-red underline decoration-ted-red/20 underline-offset-8">Human Language</span>
        </h1>
      </div>

      {/* Subtitle & Tagline */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
        The way you speak shapes who you are, what you believe, and how you see the world.
        <span className="font-semibold text-gray-900 block mt-1">"Every voice, a language of its own."</span>
      </p>

      {/* CTA Buttons Group */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
        <a className="w-full sm:w-auto inline-flex items-center justify-center bg-ted-red hover:bg-ted-hover text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-ted-red/20 hover:scale-[1.02] transition-all" href="#tickets">
          Get Your Spot
        </a>
        <a className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-colors" href="#speakers">
          See the Lineup
        </a>
      </div>

      {/* Hero Dashboard / Interactive Stage Showcase Card */}
      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:flex items-center gap-2 absolute -top-8 left-8 text-xs font-medium text-gray-500">
          <svg className="w-5 h-5 text-gray-400 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span>Main Auditorium Stage</span>
        </div>

        <div className="hidden md:flex items-center gap-2 absolute -top-8 right-8 text-xs font-medium text-gray-500">
          <span>Live Acoustic Visualizer</span>
          <svg className="w-5 h-5 text-gray-400 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch text-left">

          {/* Card 1: Live Experience */}
          <div className="bg-white text-gray-900 border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-all relative group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 font-semibold">01 / Phinisi Ballroom</span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-1 leading-tight tracking-tight">Voices of <span className="text-ted-red">Resonance</span></h3>
                </div>
                <a className="w-11 h-11 rounded-full bg-gray-50 hover:bg-ted-red hover:text-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 transition-all group-hover:scale-105 shadow-sm" href="#about">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">Join 500+ educators, creators, and thinkers exploring dialectal heritage, cognitive grammar, and digital semantics.</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200/80">
              <img
                alt="TEDxUNM Speaker & Cultural Dialogue"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W5CZ2n3VLLr3ujOpDkfTatJrP74IMQ-F6j4eHQbJZNP0LEQfxRkEbNyay7bsKozrPKpLaDJB1EPSa07z580ASzKBOCA4LxNvBf1lNvE1QRVRQq5VrWjHTmniiwRY67-MybKlRCmouLkh9gWa3-B6rJisnm70IUhUTTp_uWkSt5sp6SyjqXbsxhsdGC14IZRtgq-P-Y7iaKPB9ITwm_ffGtFYgYt6t3JHIoMJE81jnbP730UO4RVPy8ygmW"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/40 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-ted-red"></span>Cultural Semantics</span>
                <span className="text-ted-red font-bold">Live Talk</span>
              </div>
            </div>
          </div>

          {/* Card 2: Signature TED Red Feature Hero Card */}
          <div className="bg-ted-red text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative md:-translate-y-2 group transition-all border border-ted-red">
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-ted-red font-black flex items-center justify-center shadow-xl border-4 border-[#F8F9FA] z-20 hover:scale-110 transition-transform cursor-pointer">
              <svg className="w-7 h-7 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>

            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-mono tracking-wider uppercase font-bold px-2.5 py-0.5 rounded-full mb-2">02 / 6 Curated Talks</span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1 leading-tight tracking-tight">Syntax of<br />The Mind</h3>
                </div>
                <a className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 border border-white flex items-center justify-center text-ted-red shrink-0 transition-transform group-hover:scale-105 shadow-md" href="#speakers">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-6 font-normal">Unraveling cognitive grammar, algorithmic vernaculars, and Toraja-Bugis oral traditions in rapid 18-minute keynotes.</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/20 flex items-center justify-center p-2">
              <img
                alt="3D Soundwave Emblem"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wg95A4IHQj7mIYePuu4HwCVfCgv2W4Uzo44v7yGbLbq0z0BT7cbfs29BCwij-cmnpBP6g0dPnXoUY1q8ZkeyZqMz6UHZftmKhVKw831qroR-lWNo7RWvJQMn5u_41qVQSx23rWJggCEvHm4aNrJa4UZYLiJ26mTx7JLCAEzfUqFNfSP0uA8tnRrZLcGS32qXhjffjbEsoVBwEuJOf6FycWh4nFJabeuApFsMddF44O09QIVUPw8n5NZyoE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/30 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span className="font-medium">Main Stage Keynotes</span>
                <span className="text-ted-red font-bold">18 Min Format</span>
              </div>
            </div>
          </div>

          {/* Card 3: Phinisi Gathering */}
          <div className="bg-white text-gray-900 border border-gray-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-ted-red/30 transition-all relative group">
            <div>
              <div className="flex items-start justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500 font-semibold">03 / October 2026</span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 mt-1 leading-tight tracking-tight">Human <span className="text-ted-red">Connection</span></h3>
                </div>
                <a className="w-11 h-11 rounded-full bg-gray-50 hover:bg-ted-red hover:text-white border border-gray-200 flex items-center justify-center text-gray-700 shrink-0 transition-all group-hover:scale-105 shadow-sm" href="#tickets">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-6">Unscripted dialogues, interactive experience lounges, networking banquets, and collaborative live installations.</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200/80">
              <img
                alt="TEDx Community Attendees"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvJ2hh-ikrotGmIxmCmfXJuSQX_BAd1PqjNfar0hob5Aq3yvwUW2EZ51VWc1cWmC6VDG6JuGqRJCp3otVnKJDsyKFBsSxcMOhWCSQ_wS9mHiPfRDQi30CvP8ppVvxOrc4rSTV_N2dNrr1fiwBjJSALwnUhN4YLqsDhSRnB96cIvq9Q78v0TU3_keXxuLDqXY5KXE4VkWjWk-trKdJzaD0ppMCbd6MhIYUz0zNN6xCB9Q20BDFlmjH_jg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between backdrop-blur-md bg-white/90 border border-white/40 rounded-full px-3.5 py-1.5 text-[11px] text-gray-900 font-medium shadow-sm">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-ted-red"></span>Auditorium & Lounge</span>
                <span className="text-ted-red font-bold">100 Seats</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner / Institutional Supporters Strip */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-6">Supported By & Institutional Affiliates</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">UNIVERSITAS NEGERI MAKASSAR</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">KEMENDIKBUDRISTEK</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">MAKASSAR CREATIVE HUB</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">KALLA FOUNDATION</span>
          <span className="font-display font-bold text-lg text-gray-800 tracking-tight">RADIO SONORA MAKASSAR</span>
        </div>
      </div>
    </section>
  )
}