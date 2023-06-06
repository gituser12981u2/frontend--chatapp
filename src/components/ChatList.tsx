import {FC} from "react";
import {List, ListItem, ListItemText} from "@mui/material";

interface Chat {
	id: string;
	name: string;
}

interface ChatListProps {
	chats: Chat[];
	onChatSelect: (chatId: string) => void;
}

const ChatList: FC<ChatListProps> = ({chats, onChatSelect}) => {
	return (
		<List>
			{chats.map((chat) => (
				<ListItem button key={chat.id} onClick={() => onChatSelect(chat.id)}>
					<ListItemText primary={chat.name} />
				</ListItem>
			))}
		</List>
	);
};

export default ChatList;
