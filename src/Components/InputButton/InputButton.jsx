import { Button, Grid, styled } from "@mui/material";
import Tex2SVG from "react-hook-mathjax";
import PropTypes from "prop-types";

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

InputButton.propTypes = {
  /**
   * Unique key for the button element in the buttons list
   */
  key: PropTypes.string.isRequired,
  /**
   * Latex expression of the button
   */
  buttonLatex: PropTypes.string.isRequired,
  /**
   * Function to set the current latex expression clicked
   */
  setCurrentLatex: PropTypes.func.isRequired,
  /**
   * Operator character of the button
   */
  buttonOperator: PropTypes.string.isRequired,
  /**
   * Function to set the current operator clicked
   */
  setCurrentOperator: PropTypes.func.isRequired,
  /**
   * Boolean to determine if the button is selected
   */
  selected: PropTypes.bool.isRequired,
};

InputButton.defaultProps = {
  key: "",
  buttonLatex: "\\text{Press a button}",
  setCurrentLatex: () => {},
  buttonOperator: "",
  setCurrentOperator: () => {},
  selected: false,
};

export default InputButton;
