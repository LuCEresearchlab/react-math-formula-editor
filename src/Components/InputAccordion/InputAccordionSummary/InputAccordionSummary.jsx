import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputButton from "../InputButton/InputButton";

const useStyles = makeStyles((theme) => ({
  customInputElement: {
    marginRight: theme.spacing(3),
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
}));

function InputAccordionSummary({
  inputType,
  inputValue,
  inputLatex,
  currentAddingType,
  isCreatingMathNode,
  dispatch,
}) {
  const classes = useStyles();

  const handleValueChange = useCallback((e) => {
    dispatch({
      type: `set${inputType}Value`,
      payload: e.target.value,
    });
  });

  const handleWheel = useCallback((e) => {
    e.target.blur();
  });

  const handleKeyDown = useCallback((e) => {
    if (inputType === "Number") {
      const preventSpecial = ["e", "E", "+", "-", "ArrowUp", "ArrowDown"];
      preventSpecial.includes(e.key) && e.preventDefault();
    } else if (inputType === "Variable") {
      const lettersRegex = /^[a-zA-Z]+$/;
      if (!lettersRegex.test(e.key)) {
        e.preventDefault();
      }
    }
  });

  const handlePaste = useCallback((e) => {
    e.preventDefault();
  });

  const handleClick = useCallback((e) => {
    e.stopPropagation();
  });

  const buttonLatex = useMemo(() => {
    return inputLatex || `Text{Write a ${inputType}}`;
  }, [inputLatex]);

  const textFieldType = useMemo(() => {
    return inputType === "Number" ? "number" : "text";
  }, [inputType]);

  const selectedButton = useMemo(() => {
    return inputType === currentAddingType && isCreatingMathNode;
  }, [inputType, currentAddingType, isCreatingMathNode]);

  return (
    <>
      <TextField
        className={classes.customInputElement}
        variant='outlined'
        size='small'
        label={inputType}
        helperText={`Write a ${inputType}`}
        type={textFieldType}
        value={inputValue}
        onChange={handleValueChange}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onClick={handleClick}
      />
      <InputButton
        buttonName={`Create ${inputType}`}
        buttonType={inputType}
        buttonLatex={inputLatex}
        selected={selectedButton}
        isCreatingMathNode={isCreatingMathNode}
        dispatch={dispatch}
      />
    </>
  );
}

InputAccordionSummary.propTypes = {
  /**
   * Type of the input (Number/Variable/mathButton)
   */
  inputType: PropTypes.string,
  /**
   * Value of the input
   */
  inputValue: PropTypes.string,
  /**
   * Latex expression of the input (Number/Variable/mathButton)
   */
  inputLatex: PropTypes.string,
  /**
   * Current input type selected for creating a math node
   */
  currentAddingType: PropTypes.string,
  /**
   * Boolean to keep track if the adding math node mode is active
   */
  isCreatingMathNode: PropTypes.bool,
  /**
   * Function to dispatch an action to be reduced
   */
  dispatch: PropTypes.func,
};

InputAccordionSummary.defaultProps = {
  inputType: "",
  inputValue: "",
  inputLatex: "",
  currentAddingType: "",
  isCreatingMathNode: false,
  dispatch: () => {},
};

export default InputAccordionSummary;
