"use client";

type GlobalErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error: _err, reset }: GlobalErrorProps) {
	return (
		<html lang="en">
			<body className="bg-stone-50 font-sans text-stone-800">
				<main className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-8 py-16">
					<h1 className="font-medium font-serif text-3xl text-stone-800">
						Something went wrong
					</h1>
					<p className="mt-4 text-stone-600">
						An unexpected error occurred. Please try again.
					</p>
					<button
						className="mt-8 w-fit rounded-md bg-lime-500 px-4 py-2 font-medium text-lime-950 text-sm hover:bg-lime-400"
						onClick={reset}
						type="button"
					>
						Try again
					</button>
				</main>
			</body>
		</html>
	);
}
