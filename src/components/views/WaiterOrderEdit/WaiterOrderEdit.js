import React from 'react';
import styles from './WaiterOrderEdit.module.scss';

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
  createData('Menu Products', 'pizza tonno, cola, ice-cream, chips'),
  createData('Options', 'additional cheese, black olives, no onion'),
  createData('Subtotal', 305, 3.7, 67, 4.3),
  createData('Total Price', 356, 16.0, 49, 3.9),
];

const WaiterOrderEdit = () => (
  <div className={styles.component}>
    <CssBaseline />
    <Title>Waiter Edit Order</Title>
    <Paper className={styles.component}>
      <Table className={styles.table} size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>
              <Subtitle>Order no. 320</Subtitle>
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

export default WaiterOrderEdit;