import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
	Avatar,
	ChatContainer,
	Conversation,
	ConversationHeader,
	ConversationList,
	MainContainer,
	Message,
	MessageInput,
	MessageList,
	Search,
	Sidebar,
} from "@chatscope/chat-ui-kit-react";
import { Box } from "@mui/material";
import oshiDp from "../../resources/oshi-dp.webp";
import lassiDp from "../../resources/lassi-dp.jpg";

export const ChatPage = () => {
	return (
		<Box height={481}>
			<MainContainer>
				<Sidebar position="left">
					<Search placeholder="Search..." />

					<ConversationList>
						<Conversation name="Oshi">
							<Avatar src={oshiDp} />
						</Conversation>
						<Conversation name="Oshi">
							<Avatar src={oshiDp} />
						</Conversation>
						<Conversation name="Oshi">
							<Avatar src={oshiDp} />
						</Conversation>
					</ConversationList>
				</Sidebar>

				<ChatContainer>
					<ConversationHeader>
						<Avatar name="Zoe" src={lassiDp} />
						<ConversationHeader.Content userName="Lassi" />
					</ConversationHeader>

					<MessageList>
						<Message
							model={{
								message: "Hello World",
								sentTime: "just now",
								direction: "incoming",
								sender: "Oshi",
							}}
						/>
						<Message
							model={{
								message: "Hello Heaven",
								sentTime: "just now",
								sender: "Lassi",
								direction: "outgoing",
							}}
						/>
					</MessageList>

					<MessageInput placeholder="Enter your message here" />
				</ChatContainer>
			</MainContainer>
		</Box>
	);
};
