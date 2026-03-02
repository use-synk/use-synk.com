"use server";

import { db } from "@/db";
import { waitlistSignups } from "@/db/schema";
import { resend } from "@/lib/resend";
import { WaitlistConfirmationEmail } from "@/emails/waitlist-confirmation";

type SignupResult =
	| { success: true }
	| { success: false; error: "already_registered" | "unknown" };

export async function joinWaitlist(email: string): Promise<SignupResult> {
	try {
		await db.insert(waitlistSignups).values({ email });
	} catch (err) {
		// Postgres unique violation code
		if (
			typeof err === "object" &&
			err !== null &&
			"code" in err &&
			err.code === "23505"
		) {
			return { success: false, error: "already_registered" };
		}
		console.error("Waitlist signup error:", err);
		return { success: false, error: "unknown" };
	}

	const { error } = await resend.emails.send({
		from: "Synk <hello@synk.dev>",
		to: [email],
		subject: "You're on the waitlist!",
		react: WaitlistConfirmationEmail({ email }),
		idempotencyKey: `waitlist-confirmation/${email}`,
	});

	if (error) {
		console.error("Resend error:", error);
	}

	return { success: true };
}
