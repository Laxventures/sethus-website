// experience.ts

type Experience = {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date | 'Present';
    details: string[];
};

export const experiences: Experience[] = [
    {
        title: "Manager Specialised Services",
        company: "Hitachi Digitals",
        location: "Bangalore, India",
        startDate: new Date(2025, 4, 29), // April 2021
        endDate: "Present",
        details: [
            "Leading a team of developers to design and implement scalable enterprise solutions.",
            "Architected and developed microservices using Java, Spring Boot, and AWS.",
            "Integrated Kafka for real-time data streaming and improved system reliability.",
            "Enhanced CI/CD pipelines with Jenkins and SonarQube, reducing deployment times.",
            "Mentored junior engineers and promoted best coding practices.",
        ],
    },
    {
        title: "Technology Lead",
        company: "Infogain",
        location: "Bangalore, India",
        startDate: new Date(2024, 7, 10),
        endDate: new Date(2025, 4, 22),
        details: [
            "Leading a team of developers to design and implement scalable enterprise solutions.",
            "Architected and developed microservices using Java, Spring Boot, and AWS.",
            "Integrated Kafka for real-time data streaming and improved system reliability.",
            "Enhanced CI/CD pipelines with Jenkins and SonarQube, reducing deployment times.",
            "Mentored junior engineers and promoted best coding practices.",
        ],
    },
    {
        title: "Full Stack Engineer",
        company: "WrkSpot Technologies",
        location: "Coimbatore, India",
        startDate: new Date(2017, 10, 23),
        endDate: new Date(2024, 7, 8),
        details: [
            "Developed full stack applications using React, Node.js, and PostgreSQL.",
            "Implemented RESTful APIs and integrated third-party services.",
            "Worked with AWS (S3, SNS, SQS) for cloud-based solutions.",
            "Collaborated with cross-functional teams to deliver projects on schedule.",
        ],
    },
    {
        title: "Software Engineer",
        company: "KG Financial Software",
        location: "Coimbatore, India",
        startDate: new Date(2015, 12, 1),
        endDate: new Date(2017, 9, 30),
        details: [
            "Built and maintained web applications for financial services clients.",
            "Used Java, Spring, and relational databases for backend development.",
            "Contributed to the adoption of microservice architecture and improved system scalability.",
        ],
    },
    {
        title: "Probational Software Engineer",
        company: "KG Financial Software",
        location: "Coimbatore, India",
        startDate: new Date(2015, 5, 18),
        endDate: new Date(2015, 11, 30),
        details: [
            "Assisted in the development of web applications using Java and MySQL.",
            "Participated in code reviews and contributed to improving code quality.",
            "Gained foundational experience in software engineering and agile methodologies.",
        ],
    },
];
