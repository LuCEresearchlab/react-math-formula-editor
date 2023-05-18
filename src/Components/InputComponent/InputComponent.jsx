import React, { useCallback, useReducer, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import { Grid, Paper, AppBar, Tabs, Tab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { tabsContent } from "../../initialState";
import { mathInputReducer } from "../../store/reducer";
import { initialInputState } from "../../store/initialState";

import InputAccordion from "../InputAccordion/InputAccordion";

import "../../../node_modules/katex/dist/katex.min.css";

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

  useEffect(() => {
    if (currentAddingType !== "mathButton") {
      const pieces = [
        {
          type: "text",
          x: 12,
          y: 12,
          fontSize:
            currentAddingType === "Number"
              ? numberData.fontSize
              : variableData.fontSize,
          value:
            currentAddingType === "Number"
              ? (numberData.value.startsWith(".") ? "0" : "") +
                numberData.value +
                (numberData.isInfiniteNumber ? "…" : "")
              : variableData.value,
          periodicIndex:
            currentAddingType === "Number" && Number(numberData.periodicIndex),
          subscript:
            currentAddingType === "Variable" && variableData.subscriptIndex,
        },
      ];
      setCurrentMathSelection(pieces);
    } else {
      setCurrentMathSelection(mathButtonData.pieces);
    }
    setIsCreatingMathNode(currentAddingType !== "");
  }, [currentAddingType]);

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
            inputs={{ buttons: tabsContent[currentTab].buttons }}
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
