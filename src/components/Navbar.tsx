// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<Link href="/signup">
				<a>Sign Up</a>
			</Link>
			<Link href="/login">
				<a>Login</a>
			</Link>
			<Link href="/chat">
				<a>Chat</a>
			</Link>
		</nav>
	);
}
