import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Paper)((theme)=>({
    backgroundColor:"#fff",
    borderRadius: 0,
    height:"90vh"
}))

const RightSidebar = () => {
  return (
    <Grid item xs={3}>
      <Container>
        <h4>User Info</h4>
      </Container>
    </Grid>
  );
};

export default RightSidebar;
