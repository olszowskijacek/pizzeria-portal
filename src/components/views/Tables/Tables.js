import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Title from '../../common/Title/Title';
import DTPicker from '../../features/DateTimePicker/DateTimePicker';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TableMap from '../../features/TableMap/TableMap';

const Tables = () => {
  return (
    <div className={styles.component}>
      <CssBaseline />
      <Title>Tables</Title>

      <Box className={styles.dtPicker}>
        <Title>Pick date</Title>
        <DTPicker />
      </Box>
      <Box className={styles.addNew}>
        <Button component={Link} className={styles.addNewItem} color='primary' variant='outlined' 
          to={`${process.env.PUBLIC_URL}/tables/bookings/new`} >
          New Reservation
        </Button>
        <Button
          component={Link}
          className={styles.addNewItem}
          color='primary'
          variant='outlined'
          to={`${process.env.PUBLIC_URL}/tables/events/new`}
        >
          New Event
        </Button>
      </Box>
      <Paper>
        <TableMap />
      </Paper>
    </div>
  );
};



export default Tables;