import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputButton from "../InputButton/InputButton";

const useStyles = makeStyles((theme) => ({
  customInputElement: {
    marginRight: theme.spacing(3),
  },
  customInputLabel: {
    alignSelf: "center",
  },
  inputButtonsContainer: {
    display: "grid",
    rowGap: theme.spacing(1),
    columnGap: theme.spacing(1),
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    width: "100%",
  },
}));

const periodicIndexValues = [
  { value: "", label: "Clear" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
];

const subscriptIndexValues = [
  { value: "", label: "Clear" },
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
];

const fonSizeOptions = [
  { value: 12, label: "Small" },
  { value: 24, label: "Medium" },
  { value: 36, label: "Large" },
];

function InputAccordionDetails({
  inputType,
  inputs,
  inputData,
  currentAddingType,
  isCreatingMathNode,
  dispatch,
}) {
  const classes = useStyles();

  const handlePeriodicIndexChange = useCallback((e) => {
    dispatch({ type: "setPeriodicIndex", payload: e.target.value });
  });

  const handleInfiniteNumberChange = useCallback((e) => {
    dispatch({ type: "setIsInfiniteNumber", payload: e.target.checked });
  });

  const handleSubscriptIndexChange = useCallback((e) => {
    dispatch({ type: "setSubscriptIndex", payload: e.target.value });
  });

  const handleFontSizeChange = useCallback((e) => {
    dispatch({
      type: `set${inputType}FontSize`,
      payload: Number(e.target.value),
    });
  });

  const decimalsLength = useMemo(() => {
    const decimals = inputData.value && inputData.value.split(".")[1];
    return decimals ? decimals.length : 0;
  }, [inputData]);

  const disabledPeriodic = useMemo(() => {
    return decimalsLength === 0;
  }, [decimalsLength]);

  const disabledInfinite = useMemo(() => {
    return inputData.value === "";
  }, [inputData]);

  return (
    <>
      {inputs.periodic && (
        <TextField
          className={classes.customInputElement}
          variant='outlined'
          size='small'
          label='Periodic decimals'
          helperText='Select last X periodic decimals'
          select
          disabled={disabledPeriodic}
          value={inputData.periodicIndex}
          onChange={handlePeriodicIndexChange}
        >
          {periodicIndexValues.map((index) => (
            <MenuItem
              key={`periodicIndex-${index.value}`}
              value={index.value}
              disabled={decimalsLength < index.value}
            >
              {index.label}
            </MenuItem>
          ))}
        </TextField>
      )}
      {inputs.infinite && (
        <FormControl>
          <FormLabel>Infinite number</FormLabel>
          <FormControlLabel
            className={classes.customInputLabel}
            control={
              <Checkbox
                color='primary'
                disabled={disabledInfinite}
                checked={inputData.isInfiniteNumber}
                onChange={handleInfiniteNumberChange}
              />
            }
            labelPlacement='top'
          />
        </FormControl>
      )}
      {inputs.subscript && (
        <TextField
          className={classes.customInputElement}
          variant='outlined'
          size='small'
          label='Variable index'
          helperText='Select the variable index'
          select
          disabled={inputData.value === ""}
          value={inputData.subscriptIndex}
          onChange={handleSubscriptIndexChange}
        >
          {subscriptIndexValues.map((subscriptIndex) => (
            <MenuItem
              key={`subscriptIndex-${subscriptIndex.value}`}
              value={subscriptIndex.value}
            >
              {subscriptIndex.label}
            </MenuItem>
          ))}
        </TextField>
      )}
      {inputs.fontSize && (
        <FormControl>
          <FormLabel className={classes.customInputLabel}>Font size</FormLabel>
          <RadioGroup
            row
            value={inputData.fontSize}
            onChange={handleFontSizeChange}
          >
            {fonSizeOptions.map((fontSizeOption) => (
              <FormControlLabel
                key={`variableFontSize-${fontSizeOption.value}`}
                value={fontSizeOption.value}
                control={<Radio color='primary' />}
                label={fontSizeOption.label}
                labelPlacement='bottom'
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
      {inputs.buttons && (
        <div className={classes.inputButtonsContainer}>
          {inputs.buttons.map((button) => (
            <InputButton
              key={`mathButton-${button.latex}`}
              buttonName={button.name}
              buttonType={inputType}
              buttonLatex={button.latex}
              buttonPieces={button.pieces}
              selected={inputData.latex === button.latex && isCreatingMathNode}
              dispatch={dispatch}
            ></InputButton>
          ))}
        </div>
      )}
    </>
  );
}

InputAccordionDetails.propTypes = {
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
    periodicIndex: PropTypes.string,
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

InputAccordionDetails.defaultProps = {
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
    periodicIndex: "",
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

export default InputAccordionDetails;
