export function About() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "On-time Rate", value: "95%" },
  ];
  const bullets = [
    "Transparent timelines and budgets",
    "Skilled in RCC, masonry, interiors, MEP coordination",
    "Single point of contact from start to finish",
  ];
  return (
    <section id="about" className="section-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">About</h2>
          <p className="mt-4 text-[var(--muted-foreground)] max-w-prose">
            Bricks Infraspace is a multidisciplinary construction partner trusted for homes, villas, apartments,
            and commercial fit-outs. We combine engineering rigor with attention to finishes to deliver spaces
            that perform and inspire.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-black dark:bg-white" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card card-base p-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-semibold">{s.value}</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-[var(--muted-foreground)]">
            Licensed and insured. Safety-first execution and quality checks throughout every stage.
          </div>
        </div>
      </div>
    </section>
  );
}
