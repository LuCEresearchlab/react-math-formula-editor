import { Paper, styled, Grid } from "@mui/material";
import { MathJax } from "better-react-mathjax";

const DisplayComponent = styled(Paper)(({ theme }) => ({
  borderRadius: 5,
  textAlign: "center",
  overflow: "auto",
  paddingBottom: theme.spacing(2),
  fontSize: "3em",
  width: "100%",
}));

function Display({ currentValue }) {
  return (
    <Grid item xs={12}>
      <MathJax>
        <DisplayComponent>{currentValue}</DisplayComponent>
      </MathJax>
    </Grid>
  );
}

export default Display;
