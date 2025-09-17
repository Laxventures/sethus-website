import { BsGithub, BsLinkedin, BsPhone, BsSend } from "react-icons/bs";
import { ContactLinks } from "../data/contact";

export default function Footer() {
    return (
        <footer className="flex flex-row justify-between py-6 border-t border-teal-200">
            <div className="text-center text-sm text-zinc-500 dark:text-zinc-500">
                <span className="">
                    © {new Date().getFullYear()} Sethu palaniyappan. All rights reserved.
                </span>
            </div>
            <div className="px-4 flex flex-wrap justify-center gap-4 sm:gap-8">
                <a
                    href={ContactLinks.email}
                    className="flex items-center hover:text-red-500 transition-colors"
                >
                    <BsSend />
                </a>
                <a
                    href={ContactLinks.phone}
                    className="flex items-center  hover:text-blue-500 transition-colors"
                >
                    <BsPhone />
                </a>
                <a
                    href={ContactLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  hover:text-[#0077B5] transition-colors"
                >
                    <BsLinkedin />
                </a>
                <a
                    href={ContactLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  hover:text-gray-500 transition-colors"
                >
                    <BsGithub />
                </a>
            </div>

        </footer>
    );
}
