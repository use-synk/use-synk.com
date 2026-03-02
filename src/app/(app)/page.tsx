import { Footer } from "@/components/footer";
import { CalloutSection } from "@/components/sections/callout";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { RoadmapSection } from "@/components/sections/roadmap";

export default function HomePage() {
	return (
		<main className="relative min-h-svh">
			<HeroSection />
			<FeaturesSection />
			<RoadmapSection />
			<CalloutSection />
			<Footer />
		</main>
	);
}
