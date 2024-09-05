import React, { useCallback, useReducer, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { Grid, Paper, AppBar, Tabs, Tab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { tabsContent } from "../../initialState";
import { mathInputReducer } from "../../store/reducer";
import { initialInputState } from "../../store/initialState";

import InputAccordion from "../InputAccordion/InputAccordion";

const useStyles = makeStyles((theme) => ({
  inputComponent: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: 5,
  },
}));

function InputComponent({
  setCurrentMathSelection,
  setIsCreatingMathNode,
  isCreatingMathNode,
}) {
  const [
    { currentTab, numberData, variableData, mathButtonData, currentAddingType },
    dispatch,
  ] = useReducer(mathInputReducer, initialInputState);

  // Width of a character at fontSize: 1 (based on default font used)
  // TODO adjust if fontFamily is changed from default
  const unitFontSizeWidth = 0.60009765625;

  const computePeriodicLinePoints = useCallback(
    (numberValue, periodicIndex, fontSize) => {
      const noPeriodicTextWidth =
        numberValue.substring(0, numberValue.length - periodicIndex).length *
        unitFontSizeWidth *
        fontSize;
      const periodicTextWidth =
        numberValue.substring(numberValue.length - periodicIndex).length *
        unitFontSizeWidth *
        fontSize;
      return {
        x1: noPeriodicTextWidth,
        y1: -2,
        x2: noPeriodicTextWidth + periodicTextWidth,
        y2: -2,
      };
    },
  );

  useEffect(() => {
    if (currentAddingType !== "mathButton") {
      const pieces = [
        {
          type: "text",
          x: 0,
          y: 0,
          fontSize:
            currentAddingType === "Number"
              ? numberData.fontSize
              : variableData.fontSize,
          value:
            currentAddingType === "Number"
              ? (numberData.value.startsWith(".") ? "0" : "") +
                numberData.value +
                (numberData.isIrrationalNumber ? "…" : "")
              : variableData.value,
        },
      ];
      if (
        currentAddingType === "Number" &&
        Number(numberData.periodicIndex) !== 0
      ) {
        pieces.push({
          type: "line",
          linePoints: computePeriodicLinePoints(
            numberData.value,
            numberData.periodicIndex,
            numberData.fontSize,
          ),
          lineStrokeWidth: numberData.fontSize / 15,
        });
      }
      if (
        currentAddingType === "Variable" &&
        variableData.subscriptIndex !== ""
      ) {
        pieces.push({
          type: "text",
          x:
            unitFontSizeWidth *
              variableData.fontSize *
              variableData.value.length +
            3,
          y: variableData.fontSize * 0.6,
          fontSize: variableData.fontSize * 0.6,
          value: variableData.subscriptIndex,
        });
      }
      setCurrentMathSelection(pieces);
    } else {
      setCurrentMathSelection(mathButtonData.pieces);
    }
    setIsCreatingMathNode(currentAddingType !== "");
  }, [currentAddingType, mathButtonData]);

  useEffect(() => {
    !isCreatingMathNode &&
      dispatch({
        type: "setCurrentAddingType",
        payload: {
          buttonType: "",
          mathButtonData: { latex: "", pieces: [] },
        },
      });
  }, [isCreatingMathNode]);

  const classes = useStyles();

  const handleTabChange = useCallback((e, newValue) => {
    dispatch({ type: "setCurrentTab", payload: newValue });
  });

  const tabInputs = useMemo(() => {
    return tabsContent[currentTab].inputs;
  }, [currentTab]);

  const tabButtons = useMemo(() => {
    return tabsContent[currentTab].buttons;
  }, [currentTab]);

  return (
    <Paper elevation={3} className={classes.inputComponent}>
      <Grid container spacing={1}>
        <AppBar position='static' className={classes.tabsBar}>
          <Box display='flex' justifyContent='center' width='100%'>
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant='scrollable'
              scrollButtons='auto'
              selectionFollowsFocus
            >
              {tabsContent.map((tab, index) => (
                <Tab label={tab.name} key={`tab-${index}`} />
              ))}
            </Tabs>
          </Box>
        </AppBar>
        {tabInputs.numbers && (
          <InputAccordion
            inputType={"Number"}
            inputs={tabInputs.numbers}
            inputData={numberData}
            currentAddingType={currentAddingType}
            isCreatingMathNode={isCreatingMathNode}
            dispatch={dispatch}
          />
        )}
        {tabInputs.variables && (
          <InputAccordion
            inputType={"Variable"}
            inputs={tabInputs.variables}
            inputData={variableData}
            currentAddingType={currentAddingType}
            isCreatingMathNode={isCreatingMathNode}
            dispatch={dispatch}
          />
        )}
        {tabInputs.buttons && (
          <InputAccordion
            inputType={"mathButton"}
            inputs={{ buttons: tabButtons }}
            inputData={mathButtonData}
            currentAddingType={currentAddingType}
            isCreatingMathNode={isCreatingMathNode}
            dispatch={dispatch}
          />
        )}
      </Grid>
    </Paper>
  );
}

InputComponent.propTypes = {
  /**
   * Function to set the currently selected math expression pieces
   */
  setCurrentMathSelection: PropTypes.func,
  /**
   * Function to set the isCreatingMathNode state
   */
  setIsCreatingMathNode: PropTypes.func,
  /**
   * Boolean to keep track if the adding math node mode is active
   */
  isCreatingMathNode: PropTypes.bool,
};

InputComponent.defaultProps = {
  setCurrentMathSelection: () => {},
  setIsCreatingMathNode: () => {},
  isCreatingMathNode: false,
};

export default InputComponent;
