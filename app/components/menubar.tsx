"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import menuItems from "../data/menuitems"

export default function MenuBar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -50% 0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <header className="">
      <div className="fixed w-full z-50">
        <div className="">
          <div className="mx-auto w-full max-w-7xl pt-6 bg-[#18181B] dark:bg-[#18181B] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between items-center text-black  dark:text-white">
              <div>
                <Image
                  aria-hidden
                  className="p-0.5 rounded-full"
                  src="/profile.jpg"
                  alt="profile_photo"
                  width={40}
                  height={40}
                />
              </div>
              <ul className="flex flex-row gap-4 px-2 rounded-full pointer-events-auto text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                {menuItems.map((item) => {
                  const sectionId = item.href.includes("#") ? item.href.split("#")[1] : ""
                  const isActive = activeSection === sectionId || (item.href === "/" && activeSection === "home")

                  return (
                    <li
                      key={item.label}
                      className={
                        "px-3 py-2 transition-colors duration-200 relative " +
                        (isActive ? "text-teal-400" : "hover:text-teal-500")
                      }
                    >
                      <Link href={item.href} className="">
                        {item.label}
                      </Link>
                      {isActive && (
                        <div className="absolute bottom-0 left-[15%] right-[15%] h-0.5 bg-teal-400 rounded-full" />
                      )}
                    </li>
                  )
                })}
              </ul>
              <div className="pointer-events-auto">
                {mounted && (
                  <button
                    className="px-3 py-2 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white transition-colors duration-200"
                    aria-label="Toggle theme"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
