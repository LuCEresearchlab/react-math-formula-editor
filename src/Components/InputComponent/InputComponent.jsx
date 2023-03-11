import { Grid, Paper, AppBar, Tabs, Tab, Box } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Display from '../Display/Display';
import InputButton from '../InputButton/InputButton';
import React from 'react';
import PropTypes from 'prop-types';

const content = [
  {
    name: 'unary',
    buttons: [
      { latex: '-{\\square}', operator: '-' },
      { latex: '\\pm{\\square}', operator: '±' },
      { latex: '\\sin{\\square}', operator: 'sin' },
      { latex: '\\cos{\\square}', operator: 'cos' },
      { latex: '\\tan{\\square}', operator: 'tan' },
      { latex: '\\exists{\\square}', operator: '∃' },
      { latex: '\\forall{\\square}', operator: '∀' },
    ],
  },
  {
    name: 'binary',
    buttons: [
      { latex: '{\\square}+{\\square}', operator: '+' },
      { latex: '{\\square}-{\\square}', operator: '-' },
      { latex: '{\\square}\\times{\\square}', operator: '×' },
      { latex: '{\\square}\\div{\\square}', operator: '÷' },
      { latex: '{\\square}={\\square}', operator: '=' },
      { latex: '{\\square}\\approx{\\square}', operator: '≈' },
      { latex: '{\\square}\\neq{\\square}', operator: '≠' },
      { latex: '{\\square}>{\\square}', operator: '>' },
      { latex: '{\\square}<{\\square}', operator: '<' },
      { latex: '{\\square}\\leq{\\square}', operator: '≤' },
      { latex: '{\\square}\\geq{\\square}', operator: '≥' },
      { latex: '{\\square}\\in{\\square}', operator: '∈' },
      { latex: '{\\square}\\notin{\\square}', operator: '∉' },
      { latex: '{\\square}\\subset{\\square}', operator: '⊂' },
      { latex: '{\\square}\\supset{\\square}', operator: '⊃' },
    ],
  },
  {
    name: 'special',
    buttons: [
      { latex: '\\frac{{\\square}}{\\square}', operator: '—' },
      { latex: '{\\square}^{\\square}', operator: '^' },
      { latex: '\\sqrt[\\square]{\\square}', operator: '√' },
      { latex: '\\int_{\\square}^{\\square}{\\square}', operator: '∫' },
      { latex: '\\sum_{\\square}^{\\square}{\\square}', operator: 'Σ' },
      { latex: '\\prod_{\\square}^{\\square}{\\square}', operator: '∏' },
      { latex: '\\lim_{\\square}{\\square}', operator: 'lim' },
      { latex: '\\log_{\\square}{\\square}', operator: 'log' },
    ],
  },
  {
    name: 'operands',
    buttons: [
      { latex: '\\infty', operator: '∞' },
      { latex: '\\alpha', operator: 'α' },
      { latex: '\\pi', operator: 'π' },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  inputComponent: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  tabsBar: {
    marginBottom: theme.spacing(2),
  },
  inputContainer: {
    display: 'grid',
    rowGap: theme.spacing(2),
    columnGap: theme.spacing(1),
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    width: '100%',
  },
}));

function InputComponent({
  currentLatex,
  setCurrentLatex,
  currentOperator,
  setCurrentOperator,
  toggleIsCreatingNode,
  isCreatingNode,
}) {
  const [currentTab, setCurrentTab] = useState(0);

  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.inputComponent}>
      <Grid container spacing={1}>
        <Display
          currentLatex={currentLatex}
          toggleIsCreatingNode={toggleIsCreatingNode}
          isCreatingNode={isCreatingNode}
        />
        <AppBar position="static" className={classes.tabsBar}>
          <Box display="flex" justifyContent="center" width="100%">
            <Tabs
              value={currentTab}
              onChange={(e, newValue) => setCurrentTab(newValue)}
              centered
              variant="scrollable"
              scrollButtons="auto"
              selectionFollowsFocus
            >
              {content.map((tab, index) => (
                <Tab label={tab.name} id={`tab-${index}`} key={index} />
              ))}
            </Tabs>
          </Box>
        </AppBar>
        <div className={classes.inputContainer}>
          {content[currentTab].buttons.map((button) => (
            <InputButton
              buttonLatex={button.latex}
              setCurrentLatex={setCurrentLatex}
              buttonOperator={button.operator}
              setCurrentOperator={setCurrentOperator}
              selected={currentLatex === button.latex}
            ></InputButton>
          ))}
        </div>
      </Grid>
    </Paper>
  );
}

InputComponent.propTypes = {
  /**
   * Currently selected Latex expression
   */
  currentLatex: PropTypes.string.isRequired,
  /**
   * Function to set the currently selected Latex expression
   */
  setCurrentLatex: PropTypes.func.isRequired,
  /**
   * Currently selected math operator
   */
  currentOperator: PropTypes.string.isRequired,
  /**
   * Function to set the currently selected math operator
   */
  setCurrentOperator: PropTypes.func.isRequired,
  /**
   * Function to toggle the isCreatingNode state
   */
  toggleIsCreatingNode: PropTypes.func,
  /**
   * Boolean to keep track if the adding node mode is active
   */
  isCreatingNode: PropTypes.bool,
};

InputComponent.defaultProps = {
  currentLatex: '\\text{Press a button}',
  setCurrentLatex: () => {},
  currentOperator: '',
  setCurrentOperator: () => {},
  toggleIsCreatingNode: () => {},
  isCreatingNode: false,
};

export default InputComponent;
