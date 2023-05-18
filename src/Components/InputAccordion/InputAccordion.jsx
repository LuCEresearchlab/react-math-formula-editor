import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import InputAccordionSummary from "./InputAccordionSummary/InputAccordionSummary";
import InputAccordionDetails from "./InputAccordionDetails/InputAccordionDetails";

const useStyles = makeStyles((theme) => ({
  customInputAccordion: {
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  customAccordionSummary: {
    paddingTop: theme.spacing(1),
    backgroundColor: "white !important",
  },
  customInputAccordionDetails: {
    display: "block",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    paddingTop: theme.spacing(2),
  },
  accordionSummaryText: {
    textDecoration: "underline",
    fontWeight: "bold",
  },
}));

function InputAccordion({
  inputType,
  inputs,
  inputData,
  currentAddingType,
  isCreatingMathNode,
  dispatch,
}) {
  const classes = useStyles();

  const defaultExpanded = useMemo(() => {
    return inputType === "mathButton";
  }, [inputType]);

  return (
    <Box className={classes.customInputAccordion}>
      <Accordion defaultExpanded={defaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreRounded />}
          className={classes.customAccordionSummary}
        >
          {inputType !== "mathButton" ? (
            <InputAccordionSummary
              inputType={inputType}
              inputValue={inputData.value}
              inputLatex={inputData.latex}
              currentAddingType={currentAddingType}
              isCreatingMathNode={isCreatingMathNode}
              dispatch={dispatch}
            />
          ) : (
            <Typography
              variant='subtitle1'
              className={classes.accordionSummaryText}
            >
              Math Buttons
            </Typography>
          )}
        </AccordionSummary>
        <AccordionDetails className={classes.customInputAccordionDetails}>
          <InputAccordionDetails
            inputType={inputType}
            inputs={inputs}
            inputData={inputData}
            currentAddingType={currentAddingType}
            isCreatingMathNode={isCreatingMathNode}
            dispatch={dispatch}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

InputAccordion.propTypes = {
  /**
   * Type of the input (Number/Variable/mathButton)
   */
  inputType: PropTypes.string,
  /**
   * Object containing the used custom inputs elements (periodic decimals, infinite numbers, variable subscript index, number/variable font size, math buttons)
   */
  inputs: PropTypes.shape({
    periodic: PropTypes.bool,
    infinite: PropTypes.bool,
    subscript: PropTypes.bool,
    fontSize: PropTypes.bool,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        latex: PropTypes.string,
        name: PropTypes.string,
        pieces: PropTypes.array,
      }),
    ),
  }),
  /**
   * Object containing the input data for each input type
   */
  inputData: PropTypes.shape({
    value: PropTypes.string,
    periodicIndex: PropTypes.number,
    isInfiniteNumber: PropTypes.bool,
    subscriptIndex: PropTypes.string,
    fontSize: PropTypes.number,
    latex: PropTypes.string,
    pieces: PropTypes.array,
  }),
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

InputAccordion.defaultProps = {
  inputType: "",
  inputs: {
    periodic: false,
    infinite: false,
    subscript: false,
    fontSize: false,
    buttons: null,
  },
  inputData: {
    value: "",
    periodicIndex: 0,
    isInfiniteNumber: false,
    subscriptIndex: "",
    fontSize: 24,
    latex: "",
    pieces: [],
  },
  currentAddingType: "",
  isCreatingMathNode: false,
  dispatch: () => {},
};

export default InputAccordion;
