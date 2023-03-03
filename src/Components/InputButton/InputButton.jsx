import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tex2SVG from "react-hook-mathjax";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: "1.1em",
  },
  unselected: {
    borderColor: "green",
  },
  selected: {
    borderColor: "red",
  },
}));

function InputButton({
  buttonLatex,
  setCurrentLatex,
  buttonOperator,
  setCurrentOperator,
  selected,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={2}>
      <Button
        className={`
          ${classes.root} 
          ${selected ? classes.selected : classes.unselected}
        `}
        value={buttonLatex}
        key={buttonLatex}
        variant="outlined"
        onClick={() => {
          setCurrentLatex(buttonLatex);
          setCurrentOperator(buttonOperator);
          console.log(buttonLatex, buttonOperator);
        }}
        selected={selected}
        startIcon={<Tex2SVG latex={buttonLatex} />}
      ></Button>
    </Grid>
  );
}

InputButton.propTypes = {
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
