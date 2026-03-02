import { Navbar } from "@/components/navbar";

export default async function ServerLayout(params: LayoutProps<"/">) {
	const { children } = params;
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
