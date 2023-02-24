import { Paper, styled, Grid } from "@mui/material";
import Tex2SVG from "react-hook-mathjax";
import PropTypes from "prop-types";

const DisplayComponent = styled(Paper)(({ theme }) => ({
  borderRadius: 5,
  textAlign: "center",
  overflow: "auto",
  paddingBottom: theme.spacing(2),
  fontSize: "1.5em",
  width: "100%",
}));

function Display({ currentLatex }) {
  return (
    <Grid item xs={12}>
      <DisplayComponent>
        <Tex2SVG display="inline" latex={currentLatex} />
      </DisplayComponent>
    </Grid>
  );
}

Display.propTypes = {
  /**
   * Latex expression to be displayed
   */
  currentLatex: PropTypes.string.isRequired,
};

Display.defaultProps = {
  currentLatex: "\\text{Press a button}",
};

export default Display;
