import Image from "next/image";
import Link from "next/link";
import { BsBriefcase, BsDownload } from "react-icons/bs";

export default function Home() {
    return (
        <section id="home">
            <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col items-center justify-center gap-4 text-zinc-800 dark:text-zinc-100">
                    <span className="text-4xl font-bold ">Hi, I'm Sethu Palaniyappan.</span>
                    <span className="text-2xl font-semibold"> Full Stack Engineer • Tech Lead • Cloud and AI Enthusiast</span>
                </div>
                <div>
                    <span className="text-lg text-zinc-600 dark:text-zinc-400 text-justify">
                        With 10+ years of experience building scalable backend systems and modern web applications. Passionate about solving real-world problems through clean architecture, intuitive design, and strong product thinking.
                    </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-16">
                    <button className="flex flex-row items-center p-3 rounded-full pointer-events-auto text-base font-normal text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-700/70 hover:text-teal-400">
                        <BsBriefcase />
                        <Link className="pl-3" href="/#experience">Work Experience</Link>
                    </button>
                    <button className="flex flex-row items-center p-3 rounded-full pointer-events-auto text-base font-normal text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:bg-zinc-700/70 hover:text-teal-400">
                        <BsDownload />
                        <Link className="pl-3" href="/#uses">Resume</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}