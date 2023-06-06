// src/redux/store.ts
import {configureStore, Action} from "@reduxjs/toolkit";
import {combineReducers} from "redux";

interface Chat {
	id: string;
	name: string;
}

interface ChatState {
	chats: Chat[];
	messages: Record<string, string[]>;
	selectedChat: string | null;
}

interface ChatAction extends Action {
	payload: any;
}

const chatReducer = (state: Chat[] = [], action: ChatAction) => {
	switch (action.type) {
		case "SET_CHATS":
			return action.payload;
		default:
			return state;
	}
};

const messageReducer = (
	state: Record<string, string[]> = {},
	action: ChatAction
) => {
	switch (action.type) {
		case "SET_MESSAGES":
			return {
				...state,
				[action.payload.chatId]: [
					...(state[action.payload.chatId] || []),
					action.payload.message,
				],
			};
		default:
			return state;
	}
};

const selectedChatReducer = (
	state: string | null = null,
	action: ChatAction
) => {
	switch (action.type) {
		case "SELECT_CHAT":
			return action.payload;
		case "DESELECT_CHAT":
			return null;
		default:
			return state;
	}
};

const rootReducer = combineReducers<ChatState>({
	chats: chatReducer,
	messages: messageReducer,
	selectedChat: selectedChatReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default store;
