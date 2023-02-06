import { Container, Grid, styled, Paper } from "@mui/material";
import Display from "./Display";
import { useState } from "react";
import InputButton from "./InputButton";
import { MathJaxContext } from "better-react-mathjax";

const operators = [
  "\\(\\frac{\\{\\}}{\\{\\}}\\)",
  "\\({\\{\\}}^{\\{\\}}\\)",
  "\\(\\sqrt{\\{\\}}\\)",
  "\\(\\int_{\\{\\}}^{\\{\\}}\\)",
  "\\(\\sum_{\\{\\}}^{\\{\\}}\\)",
  "\\(\\prod_{\\{\\}}^{\\{\\}}\\)",
  "\\(\\lim_{\\{\\}}\\)",
  "\\(\\infty\\)",
  "\\(\\frac{10}{4x} \\approx 2^{12}\\)",
];

const InputBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  borderRadius: 5,
}));

function InputComponent() {
  const [currentValue, setCurrentValue] = useState("Press a button");

  return (
    <MathJaxContext>
      <Container maxWidth="md">
        <InputBase elevation={3}>
          <Grid container spacing={1}>
            <Display currentValue={currentValue} />
            {operators.map(operator => (
              <InputButton
                buttonValue={operator}
                selected={currentValue === operator}
                onButtonPress={setCurrentValue}
              ></InputButton>
            ))}
          </Grid>
        </InputBase>
      </Container>
    </MathJaxContext>
  );
}

export default InputComponent;
