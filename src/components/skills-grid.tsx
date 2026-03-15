type SkillCategory = {
  name: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: ["Java", "Python", "C", "JavaScript (ES6+)"],
  },
  {
    name: "Frameworks",
    items: ["Node.js (fundamentals)", "Express.js (basics)", "Flutter", "Flask"],
  },
  {
    name: "Databases",
    items: ["Firebase Realtime Database", "MySQL (basics)", "MongoDB (learning)"],
  },
  {
    name: "UI Technologies",
    items: ["HTML5", "CSS3", "Responsive Design", "Figma (basic)"],
  },
  {
    name: "Tools",
    items: ["VS Code", "Git", "GitHub", "Bitbucket", "Docker (basic)"],
  },
  {
    name: "Development Methodology",
    items: ["Agile"],
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((category) => (
        <article
          key={category.name}
          className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background/80 via-background/70 to-background/40 p-[1px] shadow-[0_18px_60px_rgba(15,23,42,0.55)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="relative flex h-full flex-col gap-3 rounded-2xl bg-background/90 px-4 py-4 backdrop-blur">
            <h3 className="text-sm font-semibold text-foreground">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full bg-muted/70 px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground transition group-hover:bg-emerald-500/10 group-hover:text-foreground"
                >
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

