export async function FeaturesSection({
	...props
}: React.ComponentProps<"section">) {
	return (
		<section {...props}>
			<div className="mx-auto w-full max-w-6xl px-8 py-32">
				<div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					<div className="rounded-lg p-8 shadow-sm ring-1 ring-stone-700/10 sm:col-span-2">
						<p className="font-medium text-sm text-stone-700">
							Keeps code in sync with documentation
						</p>
						<p className="mt-1 text-sm text-stone-500">
							Don't worry about keeping docs up to date.
						</p>
					</div>
					<div className="row-span-2 rounded-lg p-8 shadow-sm ring-1 ring-stone-700/10">
						<p className="font-medium text-sm text-stone-700">Framework agnostic</p>
						<p className="mt-1 text-sm text-stone-500">
							No need to change your workflow.
						</p>
					</div>
					<div className="rounded-lg p-8 shadow-sm ring-1 ring-stone-700/10">
						<p className="font-medium text-sm text-stone-700">Open source</p>
						<p className="mt-1 text-sm text-stone-500">
							Backed by a community of developers.
						</p>
					</div>
					<div className="row-span-2 rounded-lg p-8 shadow-sm ring-1 ring-stone-700/10">
						<p className="font-medium text-sm text-stone-700">AI native</p>
						<p className="mt-1 text-sm text-stone-500">
							Uses AI to generate documentation.
						</p>
					</div>
					<div className="rounded-lg p-8 shadow-sm ring-1 ring-stone-700/10">
						<p className="font-medium text-sm text-stone-700">Self-hostable</p>
						<p className="mt-1 text-sm text-stone-500">
							Self-host your own instance of Synk for free.
						</p>
					</div>
					<div className="rounded-lg bg-stone-100 p-8">
						<p className="font-medium text-sm text-stone-700">More to come</p>
						<p className="mt-1 text-sm text-stone-500">
							We're working hard on bringing you more features.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
