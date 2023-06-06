// src/app/signup.tsx
import {useState} from "react";
import {useRouter} from "next/router";

import ErrorHandler from "../components/ErrorHandler";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const router = useRouter();

	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password != confirmPassword) {
			setError("Passwords do not match");
			return;
		}
		console.log(email, password, confirmPassword);

		// TODO: implement signup logic

		// navigate to chat
		router.push("/chat");
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			bgcolor="grey.200"
		>
			<form
				onSubmit={handleSubmit}
				style={{maxWidth: "50%", minWidth: "370px"}}
			>
				<Box mb={2}>
					<Typography variant="h4" className="font-bold mb-4">
						Welcome
					</Typography>
				</Box>
				{error && <ErrorHandler error={error} />}
				<Box mb={2}>
					<TextField
						fullWidth
						label="Email"
						variant="outlined"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</Box>
				<Box mb={2}>
					<TextField
						fullWidth
						label="Username"
						type="username"
						variant="outlined"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						required
					/>
				</Box>
				<Box mb={2}>
					<TextField
						fullWidth
						label="Password"
						type="password"
						variant="outlined"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Box>
				<Box mb={2}>
					<TextField
						fullWidth
						label="Confirm Password"
						type="password"
						variant="outlined"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</Box>
				<Button
					fullWidth
					type="submit"
					variant="contained"
					color="primary"
					className="mb-2"
				>
					Sign Up
				</Button>
				<Box mt={2}>
					<Typography variant="body2">
						Already have an account?{" "}
						<Link href="/login" color="secondary">
							Login
						</Link>
					</Typography>
				</Box>
			</form>
		</Box>
	);
}
