// skills.ts

type SkillsMap = {
    [category: string]: string[];
};

export const skills: SkillsMap = {
    Backend: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Microservices",
        "Microservice Architecture",
        "API Gateway",
        "Design Patterns",
        "Node.js (basic)",
    ],
    Frontend: [
        "React.js",
        "Next.js (basic)",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
    ],
    Databases: [
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Neo4j",
    ],
    "Cloud & DevOps": [
        "AWS S3",
        "AWS SNS",
        "AWS SQS",
        "AWS CloudWatch",
        "AWS EC2 (basic)",
        "Kafka",
        "Jenkins (CI/CD pipelines)",
        "SonarQube",
        "SonarCloud",
    ],
    Other: [
        "Static Code Analysis",
        "Team Leadership",
        "Mentoring",
        "Agile Methodologies",
        "Exploring AI (GitHub Copilot)",
    ],
};
