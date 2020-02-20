import React from 'react';
import styles from './TablesBookingEdit.module.scss';
import Subtitle from '../../common/Subtitle/Subtitle';
import Title from '../../common/Title/Title';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

function createData(details, products) {
  return { details, products };
}

const rows = [
  createData('Table No.', 1),
  createData('Date', '12.12.2019'),
  createData('Time', '19:00-20:30'),
  createData('People', 3),
];

const TablesBookingEdit = () => (
  <div className={styles.component}>
    <CssBaseline />
    <Title>Tables Edit Booking</Title>
    <Paper className={styles.component}>
      <Table className={styles.table} size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>
              <Subtitle>Booking no. 32</Subtitle>
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.products}>
              <TableCell align='left'>{row.details}</TableCell>
              <TableCell component='th' scope='row'>
                {row.products}
              </TableCell>
              <TableCell align='right'>
                <Button
                  className={styles.button}
                  color='primary'
                  variant='outlined'
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default TablesBookingEdit;