import React, { useCallback, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { Button, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import katex from "katex";

const useStyles = makeStyles((theme) => ({
  inputButton: {
    fontSize: "0.8em",
    textTransform: "none",
    overflowX: "auto",
  },
  customInputButton: {
    width: "200px",
    height: "60px",
    alignSelf: "center",
  },
  unselectedButton: {
    borderColor: "#3f51b5",
  },
  selectedButton: {
    borderColor: "#f40454",
    borderWidth: "2px",
  },
}));
function InputButton({
  buttonName,
  buttonType,
  buttonLatex,
  buttonPieces,
  selected,
  dispatch,
}) {
  const classes = useStyles();
  const katexContainerRef = useRef();

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    dispatch({
      type: "setCurrentAddingType",
      payload: {
        buttonType: buttonType,
        mathButtonData:
          buttonType === "mathButton"
            ? { latex: buttonLatex, pieces: buttonPieces }
            : { latex: "", pieces: [] },
      },
    });
  });

  useEffect(() => {
    katex.render(buttonLatex, katexContainerRef.current, {
      displayMode: true,
    });
  }, [buttonLatex]);

  const disabled = useMemo(() => {
    return (
      buttonType !== "mathButton" &&
      (buttonLatex === "\\text{Write a Number}" ||
        buttonLatex === "\\text{Write a Variable}")
    );
  }, [buttonLatex]);

  const tooltipPlacement = useMemo(() => {
    return buttonType === "mathButton" ? "top" : "right";
  }, [buttonType]);

  return (
    <Tooltip
      title={!selected ? buttonName : "Clear Adding"}
      placement={tooltipPlacement}
      arrow
    >
      <Button
        className={`
          ${classes.inputButton} ${
          buttonType === "mathButton" ? "" : classes.customInputButton
        } ${selected ? classes.selectedButton : classes.unselectedButton}
        `}
        value={buttonLatex}
        variant='outlined'
        onClick={handleButtonClick}
        disabled={disabled}
      >
        <span ref={katexContainerRef} />
      </Button>
    </Tooltip>
  );
}

InputButton.propTypes = {
  /**
   * Name of the button (displayed on tooltip)
   */
  buttonName: PropTypes.string,
  /**
   * Type of the button (Number/Variable/mathButton)
   */
  buttonType: PropTypes.string,
  /**
   * Latex expression of the button
   */
  buttonLatex: PropTypes.string,
  /**
   * Array of hole/text pieces of the math operator
   */
  buttonPieces: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      x: PropTypes.number,
      width: PropTypes.number,
      y: PropTypes.number,
      height: PropTypes.number,
      value: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  ),
  /**
   * Boolean to determine if the button is selected
   */
  selected: PropTypes.bool,
  /**
   * Function to dispatch an action to be reduced
   */
  dispatch: PropTypes.func,
};

InputButton.defaultProps = {
  buttonName: "",
  buttonType: "",
  buttonLatex: "",
  buttonPieces: [],
  selected: false,
  dispatch: () => {},
};

export default InputButton;
