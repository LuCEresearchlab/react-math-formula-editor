import { Button, Grid, styled } from "@mui/material";
import Tex2SVG from "react-hook-mathjax";

const StyledButton = styled(Button)(props => ({
  borderColor: props.selected ? "green" : "blue",
  fontSize: "1em",
  "& > *:first-of-type": {
    margin: 0,
  },
}));

function InputButton({
  key,
  buttonLatex,
  setCurrentLatex,
  buttonOperator,
  setCurrentOperator,
  selected,
}) {
  return (
    <Grid item xs={2}>
      <StyledButton
        value={buttonLatex}
        key={key}
        variant="outlined"
        color="primary"
        onClick={() => {
          setCurrentLatex(buttonLatex);
          setCurrentOperator(buttonOperator);
          console.log(buttonLatex, buttonOperator);
        }}
        selected={selected}
        startIcon={<Tex2SVG latex={buttonLatex} />}
      ></StyledButton>
    </Grid>
  );
}

export default InputButton;
