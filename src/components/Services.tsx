import { BuildingOffice2Icon, HomeIcon, PaintBrushIcon, CubeIcon, SparklesIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const services = [
	{
		title: "New Builds",
		desc: "End-to-end construction for residential and commercial projects.",
		Icon: HomeIcon,
	},
	{
		title: "Renovations",
		desc: "Modernize kitchens, bathrooms, and entire interiors with care.",
		Icon: PaintBrushIcon,
	},
	{
		title: "Commercial Fit-outs",
		desc: "Office and retail spaces delivered on-time and on-budget.",
		Icon: BuildingOffice2Icon,
	},
	{ title: "Structural Works", desc: "Foundations, RCC, steel, and masonry expertise.", Icon: CubeIcon },
	{ title: "Maintenance", desc: "Repairs, waterproofing, and annual upkeep plans.", Icon: WrenchScrewdriverIcon },
	{ title: "Turnkey", desc: "Design-build delivery with a single accountable partner.", Icon: SparklesIcon },
];

export function Services() {
	return (
		<section id="services" className="section-muted py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex items-end justify-between mb-10">
					<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Services</h2>
					<p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-[52ch]">
						From planning and permits to final finishes—transparent process and dependable workmanship.
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map(({ title, desc, Icon }) => (
						<div key={title} className="card card-base p-6">
							<div className="h-10 w-10 grid place-items-center rounded-lg bg-[var(--brand)] text-[var(--brand-foreground)]">
								<Icon className="h-6 w-6" />
							</div>
							<h3 className="mt-4 text-lg font-medium">{title}</h3>
							<p className="mt-1.5 text-sm text-[var(--muted-foreground)]">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
