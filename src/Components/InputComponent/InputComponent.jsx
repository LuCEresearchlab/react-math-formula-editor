import { Container, Grid, styled, Paper } from "@mui/material";
import Display from "../Display/Display";
import { useState } from "react";
import InputButton from "../InputButton/InputButton";

const buttons = [
  { latex: "\\frac{{\\square}}{\\square}", operator: "—" },
  { latex: "{\\square}^{\\square}", operator: "^" },
  { latex: "\\sqrt[\\square]{\\square}", operator: "√" },
  { latex: "\\int_{\\square}^{\\square}{\\square}", operator: "∫" },
  { latex: "\\sum_{\\square}^{\\square}{\\square}", operator: "Σ" },
  { latex: "\\prod_{\\square}^{\\square}{\\square}", operator: "∏" },
  { latex: "\\lim_{\\square}{\\square}", operator: "lim" },
  { latex: "\\infty", operator: "∞" },
  { latex: "\\alpha", operator: "α" },
  { latex: "\\pi", operator: "π" },
  { latex: "\\sin{\\square}", operator: "sin" },
  { latex: "\\cos{\\square}", operator: "cos" },
  { latex: "{\\square}+{\\square}", operator: "+" },
  { latex: "{\\square}-{\\square}", operator: "-" },
  { latex: "{\\square}\\times{\\square}", operator: "×" },
  { latex: "{\\square}\\div{\\square}", operator: "÷" },
  { latex: "{\\square}\\in{\\square}", operator: "∈" },
  { latex: "{\\square}\\notin{\\square}", operator: "∉" },
  { latex: "{\\square}\\subset{\\square}", operator: "⊂" },
  { latex: "{\\square}\\supset{\\square}", operator: "⊃" },
  { latex: "{\\square}>{\\square}", operator: ">" },
  { latex: "{\\square}<{\\square}", operator: "<" },
  { latex: "{\\square}\\leq{\\square}", operator: "≤" },
  { latex: "{\\square}\\geq{\\square}", operator: "≥" },
  { latex: "\\exists{\\square}", operator: "∃" },
  { latex: "\\forall{\\square}", operator: "∀" },
  { latex: "{\\square}={\\square}", operator: "=" },
  { latex: "{\\square}\\approx{\\square}", operator: "≈" },
  { latex: "{\\square}\\neq{\\square}", operator: "≠" },
  { latex: "\\pm{\\square}", operator: "±" },
];

const InputBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  borderRadius: 5,
}));

function InputComponent() {
  const [currentLatex, setCurrentLatex] = useState("\\text{Press a button}");
  const [currentOperator, setCurrentOperator] = useState("");

  return (
    <Container maxWidth="md">
      <InputBase elevation={3}>
        <Grid container spacing={1}>
          <Display currentLatex={currentLatex} />
          {buttons.map(button => (
            <InputButton
              key={button.latex}
              buttonLatex={button.latex}
              setCurrentLatex={setCurrentLatex}
              buttonOperator={button.operator}
              setCurrentOperator={setCurrentOperator}
              selected={currentLatex === button.latex}
            ></InputButton>
          ))}
        </Grid>
      </InputBase>
    </Container>
  );
}

export default InputComponent;
