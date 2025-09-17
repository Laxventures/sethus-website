import Link from "next/link"

export default function Home() {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center justify-center gap-4 text-foreground">
          <span className="text-4xl font-bold ">Hi, I'm Sethu Palaniyappan.</span>
          <span className="text-2xl font-semibold"> Full Stack Engineer • Tech Lead • Cloud and AI Enthusiast</span>
        </div>
        <div>
          <span className="text-lg text-muted-foreground text-justify">
            With 10+ years of experience building scalable backend systems and modern web applications. Passionate about
            solving real-world problems through clean architecture, intuitive design, and strong product thinking.
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-16">
          <button className="flex flex-row items-center p-3 rounded-full pointer-events-auto text-base font-normal text-foreground shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm bg-card dark:ring-white/10 hover:bg-accent hover:text-accent-foreground">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
            </svg>
            <Link className="pl-3" href="/#experience">
              Work Experience
            </Link>
          </button>
          <button className="flex flex-row items-center p-3 rounded-full pointer-events-auto text-base font-normal text-foreground shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm bg-card dark:ring-white/10 hover:bg-accent hover:text-accent-foreground">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            <Link className="pl-3" href="/#uses">
              Resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
