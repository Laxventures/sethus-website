"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import menuItems from "../data/menuitems"

export default function MenuBar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("")

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      e.preventDefault()
      const sectionId = href.split("#")[1]
      const element = document.getElementById(sectionId)
      if (element) {
        console.log("[v0] Scrolling to section:", sectionId)
        const headerHeight = 100 // Account for fixed header height
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    console.log(
      "[v0] Found sections:",
      Array.from(sections).map((s) => s.id),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("[v0] Section:", entry.target.id, "Intersecting:", entry.isIntersecting)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            console.log("[v0] Active section set to:", entry.target.id)
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
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8 pt-6 bg-[#18181B] dark:bg-[#18181B]">
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

                  console.log(
                    "[v0] Item:",
                    item.label,
                    "href:",
                    item.href,
                    "sectionId:",
                    sectionId,
                    "activeSection:",
                    activeSection,
                    "isActive:",
                    isActive,
                  )

                  return (
                    <li
                      key={item.label}
                      className={
                        "px-3 py-2 transition-colors duration-200 relative " +
                        (isActive ? "text-teal-400" : "hover:text-teal-500")
                      }
                    >
                      <Link href={item.href} className="" onClick={(e) => handleSectionClick(e, item.href)}>
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
                {/* <button className="px-3 py-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white" aria-label="Toggle theme" onClick={toggleTheme}> */}
                {/* {theme === "dark" ? <BsSun width={24} height={24} className="dark:invert" /> : <BsMoon width={24} height={24} className="dark:invert" />} */}
                {/* <Image aria-hidden hidden={theme === "dark"} className="dark:invert" src="/light.svg" alt="Light Theme" width={24} height={24} />
                                    <Image aria-hidden hidden={theme === "light"} className="dark:invert" src="/dark.svg" alt="Dark Theme" width={24} height={24} /> */}
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
