import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Paper)((theme)=>({
    backgroundColor:"#fff",
    borderRadius: 0,
    height:"90vh",
    boxShadow: "inset 0 0 30px 10px #eee"
}))

const ChatArea = () => {
  return (
    <Grid item xs={6}>
      <Container>
        <h4>Chats</h4>
      </Container>
    </Grid>
  );
};

export default ChatArea;
