"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";

type ErrorBoundaryProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function ErrorBoundary({
	error: _err,
	reset,
}: ErrorBoundaryProps) {
	return (
		<main className="mx-auto w-full max-w-6xl border-stone-200 border-x border-dashed px-8 py-32">
			<h1 className="font-medium font-serif text-3xl text-stone-800">
				Something went wrong
			</h1>
			<p className="mt-4 text-stone-600">
				An unexpected error occurred. Please try again or return to the home page.
			</p>
			<div className="mt-8 flex flex-wrap gap-4">
				<button
					className="rounded-md bg-lime-500 px-4 py-2 font-medium text-lime-950 text-sm hover:bg-lime-400"
					onClick={reset}
					type="button"
				>
					Try again
				</button>
				<Link
					className="inline-flex items-center font-medium text-lime-600 text-sm hover:text-lime-700"
					href={siteConfig.routes.home}
				>
					← Back to home
				</Link>
			</div>
		</main>
	);
}
