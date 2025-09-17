import { experiences } from "../data/experience";
import { calculateDuration, formatDate } from "../utils/date";


function Experience() {
    return (
        <section id="experience">
            <div className="flex flex-col items-center justify-center min-h-screen p-8 py-24 gap-8 sm:px-8 font-[family-name:var(--font-geist-sans)]">
                <div className="flex flex-col items-center gap-2 pb-4 text-zinc-800 dark:text-zinc-100">
                    <h1 className="text-4xl font-bold">Work Experience</h1>
                    <span className="px-7 py-1 rounded-full bg-teal-500"></span>
                </div>
                <div className="flex flex-col items=start w-full">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="mb-8">
                            <h3 className="text-xl font-semibold">
                                {exp.title} – {exp.company}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                {exp.location} | {formatDate(exp.startDate)} – {formatDate(exp.endDate)}{' '}
                                <span className="mx-1">•</span>
                                {calculateDuration(exp.startDate, exp.endDate)}
                            </p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-base text-zinc-600 dark:text-zinc-400">
                                {exp.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;