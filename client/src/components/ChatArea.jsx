import { Button, Grid, Paper, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Textbar from "./Textbar";
import ScrollToBottom from "react-scroll-to-bottom";

import "./style.css";

const ChatArea = ({ sendMessage, message, messages, setMessage }) => {
  return (
    <Grid item xs={6}>
      <Container>
        <ChatsContainer>
          <ScrollToBottom className="messages">
            {messages.map((message) => (
              <Textbar message={message} />
            ))}
          </ScrollToBottom>
        </ChatsContainer>
        <InputContainer>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" ? sendMessage(message) : null
            }
            placeholder="Hello"
          />
          <SendButton variant="contained">Send</SendButton>
        </InputContainer>
      </Container>
    </Grid>
  );
};

const Container = styled(Paper)((theme) => ({
  backgroundColor: "#fff",
  borderRadius: 0,
  height: "80vh",
  boxShadow: "inset 0 0 30px 10px #eee",
}));

const ChatsContainer = styled("div")((theme) => ({
  height: "72vh",
  overflow: "hidden",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

const InputContainer = styled("div")((theme) => ({
  height: "8vh",
  display: "flex",
}));
const Input = styled(TextField)((theme) => ({
  width: "80%",
  height: "100%",
  borderRadius: 0,
}));
const SendButton = styled(Button)((theme) => ({
  width: "20%",
  //   borderRadius: 0,
  borderRight: 0,
}));

export default ChatArea;
