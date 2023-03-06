import {
  Container,
  Grid,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Display from "../Display/Display";
import InputButton from "../InputButton/InputButton";
import React from "react";

const content = [
  {
    name: "unary",
    buttons: [
      { latex: "-{\\square}", operator: "-" },
      { latex: "\\pm{\\square}", operator: "±" },
      { latex: "\\sin{\\square}", operator: "sin" },
      { latex: "\\cos{\\square}", operator: "cos" },
      { latex: "\\tan{\\square}", operator: "tan" },
      { latex: "\\exists{\\square}", operator: "∃" },
      { latex: "\\forall{\\square}", operator: "∀" },
    ],
  },
  {
    name: "binary",
    buttons: [
      { latex: "{\\square}+{\\square}", operator: "+" },
      { latex: "{\\square}-{\\square}", operator: "-" },
      { latex: "{\\square}\\times{\\square}", operator: "×" },
      { latex: "{\\square}\\div{\\square}", operator: "÷" },
      { latex: "{\\square}={\\square}", operator: "=" },
      { latex: "{\\square}\\approx{\\square}", operator: "≈" },
      { latex: "{\\square}\\neq{\\square}", operator: "≠" },
      { latex: "{\\square}>{\\square}", operator: ">" },
      { latex: "{\\square}<{\\square}", operator: "<" },
      { latex: "{\\square}\\leq{\\square}", operator: "≤" },
      { latex: "{\\square}\\geq{\\square}", operator: "≥" },
      { latex: "{\\square}\\in{\\square}", operator: "∈" },
      { latex: "{\\square}\\notin{\\square}", operator: "∉" },
      { latex: "{\\square}\\subset{\\square}", operator: "⊂" },
      { latex: "{\\square}\\supset{\\square}", operator: "⊃" },
    ],
  },
  {
    name: "special",
    buttons: [
      { latex: "\\frac{{\\square}}{\\square}", operator: "—" },
      { latex: "{\\square}^{\\square}", operator: "^" },
      { latex: "\\sqrt[\\square]{\\square}", operator: "√" },
      { latex: "\\int_{\\square}^{\\square}{\\square}", operator: "∫" },
      { latex: "\\sum_{\\square}^{\\square}{\\square}", operator: "Σ" },
      { latex: "\\prod_{\\square}^{\\square}{\\square}", operator: "∏" },
      { latex: "\\lim_{\\square}{\\square}", operator: "lim" },
      { latex: "\\log_{\\square}{\\square}", operator: "log" },
    ],
  },
  {
    name: "operands",
    buttons: [
      { latex: "\\infty", operator: "∞" },
      { latex: "\\alpha", operator: "α" },
      { latex: "\\pi", operator: "π" },
    ],
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
}));

function InputComponent() {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentLatex, setCurrentLatex] = useState("\\text{Press a button}");
  const [currentOperator, setCurrentOperator] = useState("");
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.root}>
        <Grid container spacing={1}>
          <Display currentLatex={currentLatex} />
          <AppBar position="static" className={classes.appBar}>
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
          {content[currentTab].buttons.map(button => (
            <InputButton
              buttonLatex={button.latex}
              setCurrentLatex={setCurrentLatex}
              buttonOperator={button.operator}
              setCurrentOperator={setCurrentOperator}
              selected={currentLatex === button.latex}
            ></InputButton>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default InputComponent;
