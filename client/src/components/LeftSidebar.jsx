import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Paper)((theme)=>({
    backgroundColor:"#fff",
    borderRadius: 0,
    height:"90vh"
}))

const LeftSidebar = () => {
  return (
    <Grid item xs={3} sm>
      <Container>
        <h4>H</h4>
      </Container>
    </Grid>
  );
};

export default LeftSidebar;
