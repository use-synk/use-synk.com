import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Text,
} from "@react-email/components";

interface WaitlistConfirmationEmailProps {
	email: string;
}

export function WaitlistConfirmationEmail({
	email,
}: WaitlistConfirmationEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>You're on the Synk waitlist!</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={heading}>You're on the waitlist</Heading>
					<Text style={text}>
						Thanks for signing up, {email}! We'll reach out as soon as Synk is
						ready for you.
					</Text>
					<Text style={footer}>— The Synk Team</Text>
				</Container>
			</Body>
		</Html>
	);
}

const main: React.CSSProperties = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container: React.CSSProperties = {
	backgroundColor: "#ffffff",
	margin: "40px auto",
	padding: "40px",
	borderRadius: "8px",
	maxWidth: "560px",
};

const heading: React.CSSProperties = {
	fontSize: "24px",
	fontWeight: "600",
	color: "#1a1a1a",
	margin: "0 0 16px",
};

const text: React.CSSProperties = {
	fontSize: "16px",
	lineHeight: "1.6",
	color: "#444444",
	margin: "0 0 12px",
};

const footer: React.CSSProperties = {
	fontSize: "14px",
	color: "#888888",
	margin: "24px 0 0",
};
