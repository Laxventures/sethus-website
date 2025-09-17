import { BsLink } from "react-icons/bs";
import { Certificate, certificates } from "../data/certificates";
import { formatDate } from "../utils/date";

export default function Certificates() {
    return (
        <section id="certificates">
            <div className="flex flex-row justify-center min-h-100 px-8 pt-24 pb-16 gap-8 sm:px-8 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center gap-2 pb-4 text-zinc-800 dark:text-zinc-100">
                            <h1 className="text-4xl font-bold">Certificates & Courses</h1>
                            <span className="px-7 py-1 rounded-full bg-teal-500"></span>
                        </div>
                        <p className="text-base text-zinc-700 dark:text-zinc-300">
                            Here’s where you’ll get to know me better — what I’m working on, what I love to build, and the tech stack I work with every day.
                        </p>
                    </div>
                    <div className="flex mt-6">
                        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                            {certificates.map((cert: Certificate, idx) => (
                                <li key={idx} className="group relative flex flex-col items-start">
                                    <div className="flex flex-col">
                                        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                                        <div className="relative mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                            <span>{cert.title}</span>
                                        </div>
                                        <div className="relative text-sm text-zinc-600 dark:text-zinc-400">
                                            <span>{cert.issuer} | {formatDate(cert.issueDate)}</span>
                                        </div>
                                        <div className="relative flex items-center mt-4 group-hover:underline text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                            <BsLink />
                                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="ml-2">
                                                {cert.linkDisplayText}
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}