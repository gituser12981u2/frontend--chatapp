// src/pages/chat.tsx
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {AppState} from "../redux/store";
import ChatWindow from "../components/ChatWindow";
import ChatList from "../components/ChatList";

export default function Chat() {
	const dispatch = useDispatch();
	const chats = useSelector((state: AppState) => state.chats);
	const selectedChat = useSelector((state: AppState) => state.selectedChat);

	useEffect(() => {
		// set dummy chats
		dispatch({
			type: "SET_CHATS",
			payload: [
				{id: "1", name: "Chat 1"},
				{id: "2", name: "Chat 2"},
			],
		});

		// TODO: call backend for chats
	}, [dispatch]);

	const handleChatSelect = (chatId: string) => {
		dispatch({
			type: "SELECT_CHAT",
			payload: chatId,
		});

		dispatch({
			type: "SET_MESSAGES",
			// load dummy messages
			payload: {chatId, message: "Message from chat " + chatId},
		});
	};

	return (
		<div className="flex h-screen">
			<div className="w-1/4 bg-chatListBg text-chatListText">
				<h1 className="text-white">Chats</h1>
				<ChatList chats={chats} onChatSelect={handleChatSelect} />
			</div>
			<div className="flex-grow bg-chatBg">
				{selectedChat && (
					<>
						<h1>Chat {selectedChat}</h1>
						<ChatWindow chatId={selectedChat} />
					</>
				)}
			</div>
		</div>
	);
}
