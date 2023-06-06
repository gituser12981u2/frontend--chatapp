// src/components/ErrorHandler.tsx
import {useState} from "react";
import Snackbar, {SnackbarCloseReason} from "@mui/material/Snackbar";
import Alert, {AlertProps} from "@mui/material/Alert";

interface ErrorHandlerProps {
	error: string;
}

function AlertWrapper(props: AlertProps) {
	return <Alert elevation={6} variant="filled" {...props} />;
}

export default function ErrorHandler({error}: ErrorHandlerProps) {
	const [open, setOpen] = useState(true);

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason: SnackbarCloseReason
	) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	return (
		<Snackbar
			anchorOrigin={{vertical: "bottom", horizontal: "center"}}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<AlertWrapper severity="error">{error}</AlertWrapper>
		</Snackbar>
	);
}
