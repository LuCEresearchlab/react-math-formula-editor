import { Paper, Grid, IconButton, Tooltip } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Tex2SVG from 'react-hook-mathjax';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  display: {
    fontSize: '1em',
    borderRadius: 5,
    textAlign: 'center',
    overflow: 'auto',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  displayContainer: {
    display: 'flex',
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  gridCell: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Display({ currentLatex, toggleIsCreatingNode, isCreatingNode }) {
  const classes = useStyles();

  return (
    <div className={classes.displayContainer}>
      <Grid item xs={11}>
        <Paper className={classes.display}>
          <Tex2SVG display="inline" latex={currentLatex} />
        </Paper>
      </Grid>
      <Grid item xs={1} className={classes.gridCell}>
        <Tooltip
          title={isCreatingNode ? 'Clear adding' : 'Add node'}
          placement="bottom"
        >
          <IconButton
            size="medium"
            color={isCreatingNode ? 'secondary' : 'primary'}
            disabled={currentLatex === '\\text{Press a button}'}
            onClick={toggleIsCreatingNode}
          >
            <AddRounded />
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  );
}

Display.propTypes = {
  /**
   * Latex expression to be displayed
   */
  currentLatex: PropTypes.string.isRequired,
  /**
   * Function to toggle the isCreatingNode state
   */
  toggleIsCreatingNode: PropTypes.func,
  /**
   * Boolean to keep track if the adding node mode is active
   */
  isCreatingNode: PropTypes.bool,
};

Display.defaultProps = {
  currentLatex: '\\text{Press a button}',
  toggleIsCreatingNode: () => {},
  isCreatingNode: false,
};

export default Display;
