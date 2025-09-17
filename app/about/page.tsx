import SkillsTabs from "../components/SkillsTabs"

export default function About() {
  return (
    <section id="about">
      <div className="flex flex-row justify-center min-h-screen p-8 py-24 gap-16 sm:px-8 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-2 pb-4 text-foreground">
              <h1 className="text-4xl font-bold">About</h1>
              <span className="px-7 py-1 rounded-full bg-teal-500"></span>
            </div>
            <p className="text-base text-muted-foreground">
              Here’s where you’ll get to know me better — what I’m working on, what I love to build, and the tech stack
              I work with every day.
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-1/2 text-base text-muted-foreground text-justify gap-4">
              <p className="">
                I'm <b className="text-foreground">Sethu Palaniyappan Subramanian</b>, Technology Lead and Full Stack
                Developer with expertise in Java, Spring Boot, microservices, and cloud solutions.
              </p>
              <p>
                Skilled in architecting scalable systems, mentoring teams, and building modern web applications using
                React, Next.js, and Tailwind CSS.
              </p>
              <p>
                Experienced with AWS, DevOps, and a wide range of web technologies.{" "}
                {/* replacing bold text color with foreground */}
                <b className="text-foreground">
                  Passionate about leveraging technology and exploring AI to drive innovation.
                </b>
              </p>
              <p>
                Outside of work, I enjoy following cricket and staying active with morning runs and walks to stay fit
                and energized for the day.
              </p>
              <p>
                Feel free to connect with me on{" "}
                <a href="https://www.linkedin.com/in/sethu-palaniyappan-subramanian/">LinkedIn</a> to follow my journey.
                Open to collaboration and new opportunities.
              </p>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="text-xl font-bold text-foreground">
                <span>My Skills</span>
              </div>
              <div>
                <SkillsTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
