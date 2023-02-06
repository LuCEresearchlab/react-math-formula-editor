import { Button, Grid } from "@mui/material";
import { MathJax } from "better-react-mathjax";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(props => ({
  borderColor: props.selected ? "green" : "blue",
  fontSize: "1.5em",
}));

function InputButton({ selected, buttonValue, onButtonPress }) {
  return (
    <Grid item xs={2}>
      <StyledButton
        variant="outlined"
        color="primary"
        onClick={() => onButtonPress(buttonValue)}
        selected={selected}
      >
        <MathJax>{buttonValue}</MathJax>
      </StyledButton>
    </Grid>
  );
}

export default InputButton;
