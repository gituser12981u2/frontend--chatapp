// src/components/ChatWindow.tsx
import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TextField, Button} from "@mui/material";
import {AppState} from "../redux/store";
import MessageList from "./MessageList";

interface ChatWindowProps {
	chatId: string;
}

const ChatWindow: FC<ChatWindowProps> = ({chatId}) => {
	const [message, setMessage] = useState("");
	const dispatch = useDispatch();
	const messages = useSelector(
		(state: AppState) => state.messages[chatId] || []
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({type: "SET_MESSAGES", payload: {chatId, message}});
		setMessage("");
	};

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="overflow-auto p-4 bg-gray-800">
				<MessageList messages={messages} />
			</div>
			<form onSubmit={handleSubmit} className="mt-4 bg-gray-700 p-4">
				<TextField
					fullWidth
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					variant="outlined"
					InputProps={{
						style: {color: "white"},
					}}
				/>
			</form>
		</div>
	);
};

export default ChatWindow;
