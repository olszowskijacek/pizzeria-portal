import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Subtitle(props) {
  return (
    <Typography variant="h6" gutterBottom>
      {props.children}
    </Typography>
  );
}

Subtitle.propTypes = {
  children: PropTypes.node,
};