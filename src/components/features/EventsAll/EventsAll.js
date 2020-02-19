import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../common/Title/Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function EventsAll() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>All events today</Title>
      <Typography component="p" variant="h3">
        5
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      on 18 February, 2020
      </Typography>
    </React.Fragment>
  );
}