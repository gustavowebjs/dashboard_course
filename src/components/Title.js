import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { AppBar,Toolbar } from '@material-ui/core'

export default function Title(props) {
  return (
    <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {props.children}
      </Typography>
    </Toolbar>
    </AppBar>

  );
}

Title.propTypes = {
  children: PropTypes.node,
};