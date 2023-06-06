import {FC} from "react";

interface MessageProps {
	content: string;
	author: string;
	time: string;
}

const Message: FC<MessageProps> = ({content}) => {
	return <p>{content}</p>;
};

export default Message;
