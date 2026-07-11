export interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

export const skillGroup: SkillGroup[]= [
     {
        label: "Frontend",
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        skills: ["JavaScript (ES6+)", "React", "Next.js", "HTML5", "CSS3", "Storybook"]
    },
    {
        label: "Backend",
        color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        skills: ["Node.js", "NestJS", "Express", "TypeScript"]
    },
    {
        label: "Bases de datos",
        color: "bg-violet-500/20 text-violet-400 border-violet-500/30",
        skills: ["PostgreSQL", "Sequelize"]
    },
    {
        label: "Herramientas",
        color: "bg-secondary text-secondary-foreground border-secondary",
        skills: ["Git", "GitHub", "Jira", "Slack", "Scrum"]
    }
]