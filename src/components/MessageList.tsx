// src/components/MessageList.tsx
import {FC, useEffect, useRef} from "react";
import Message from "./Message";

interface MessageListProps {
	messages: string[];
}

const MessageList: FC<MessageListProps> = ({messages}) => {
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
	};

	useEffect(scrollToBottom, [messages]);

	return (
		<div className="text-white space-y-4">
			{messages.map((message, i) => (
				<Message key={i} content={message} author={""} time={""} />
			))}
			<div ref={messagesEndRef} />
		</div>
	);
};

export default MessageList;
