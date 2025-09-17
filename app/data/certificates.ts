export type Certificate = {
  title: string;
  issuer: string;
  issueDate: Date;
  credentialUrl?: string;  // Optional link to certificate or course
  linkDisplayText?: String | "View Certificate";
};

export const certificates: Certificate[] = [
  {
    title: "GitHub Copilot for Project Management",
    issuer: "Microsoft",
    issueDate: new Date(2025, 4, 7),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/75MCSFPBX5C2",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Optimizing Your Workflow with GitHub Copilot and VS Code",
    issuer: "Microsoft",
    issueDate: new Date(2025, 4, 10),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KF8MUR0QFLEA",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    issueDate: new Date(2025, 4, 7),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DARTWFC7YREC",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Introduction to GitHub Copilot",
    issuer: "Microsoft",
    issueDate: new Date(2024, 9, 12),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/C3OBVG1UFOVP",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    issueDate: new Date(2024, 8, 20),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/2YN7FMU5QV74",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Introduction to Gemini for Google Workspace",
    issuer: "Google Cloud",
    issueDate: new Date(2024, 8, 22),
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/A8DGW24ET4RR",
    linkDisplayText: "coursera.com"
  },
  {
    title: "Neo4J Certified Professional",
    issuer: "Neo4J",
    issueDate: new Date(2018, 9, 15),
    credentialUrl: "https://graphacademy.neo4j.com/certificates/e65ad335179d2ece3a25a3b97997abf86e94628e3f3694db499074d8fb4a72b1.pdf",
    linkDisplayText: "Neo4j.com"
  }
];
