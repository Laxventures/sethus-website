"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import menuItems from "../data/menuitems"

export default function MenuBar() {
  const pathname = usePathname()
  // const { theme, setTheme } = useTheme();

  // const toggleTheme = (): void => {
  //     setTheme(theme === 'dark' ? 'light' : 'dark')
  // };

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
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={
                      "px-3 py-2  hover:text-teal-500 " + (pathname === item.href ? "text-teal-400 active" : "")
                    }
                  >
                    <Link href={item.href} className="">
                      {item.label}
                    </Link>
                  </li>
                ))}
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
