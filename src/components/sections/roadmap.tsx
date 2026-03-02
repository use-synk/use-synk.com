import Link from "next/link";
import { siteConfig } from "@/lib/config";

export async function RoadmapSection({
	...props
}: React.ComponentProps<"section">) {
	return (
		<section {...props}>
			<div className="mx-auto grid w-full max-w-6xl gap-8 px-8 py-32 md:grid-cols-2">
				<div>
					<h2 className="font-serif text-4xl">Build in progress</h2>
					<p className="mt-4 text-stone-500 text-xs italic">We're getting there.</p>
				</div>
				<div className="max-w-lg space-y-4">
					<p className="mx-auto text-[0.9375rem] text-stone-600 leading-7">
						Synk is in active development. We're building toward our first beta and
						will share it as soon as it's ready.
					</p>
					<p className="mx-auto text-[0.9375rem] text-stone-600 leading-7">
						Want early access? Join the waitlist below.
					</p>
					<p className="mx-auto text-[0.9375rem] text-stone-600 leading-7">
						Follow us on{" "}
						<Link
							className="text-lime-500 hover:text-lime-600"
							href={"https://x.com/synk_dev"}
						>
							X
						</Link>{" "}
						for updates, or check out our{" "}
						<Link
							className="text-lime-500 hover:text-lime-600"
							href={siteConfig.projectRepo.url}
						>
							GitHub
						</Link>{" "}
						to contribute and stay in the loop.
					</p>
				</div>
			</div>
		</section>
	);
}
