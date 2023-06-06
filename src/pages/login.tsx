// src/app/signup.tsx
import {useState} from "react";
import ErrorHandler from "../components/ErrorHandler";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email, password);

		// TODO: implement signup logic
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
				<Typography variant="h4" className="font-bold mb-4">
					Welcome Back
				</Typography>
				{/* {error && <ErrorHandler error={error} />} */}
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
						label="Password"
						type="password"
						variant="outlined"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
					Login
				</Button>
				<Typography variant="body2">
					Don&apos;t have an account?{" "}
					<Link href="/signup" color="secondary">
						Signup
					</Link>
				</Typography>
			</form>
		</Box>
	);
}
