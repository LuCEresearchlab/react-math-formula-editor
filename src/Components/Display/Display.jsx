import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tex2SVG from "react-hook-mathjax";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 5,
    textAlign: "center",
    overflow: "auto",
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: "1.5em",
    width: "100%",
  },
}));

function Display({ currentLatex }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <Tex2SVG display="inline" latex={currentLatex} />
      </Paper>
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
