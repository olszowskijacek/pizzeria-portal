import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Title from '../../common/Title/Title';
import CssBaseline from '@material-ui/core/CssBaseline';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color='default' {...props} />);

const demoContent = [
  {
    orderTime: '14:00',
    id: '1',
    order: 4567,
    dishes: ['Greek Pizza', 'California Pizza'],
  },
  {
    orderTime: '14:00',
    id: '2',
    order: 5678,
    dishes: ['Four Cheese', 'Water'],
  },
  {
    orderTime: '14:00',
    id: '3',
    order: 6789,
    dishes: ['Bruschetta', 'Spaghetti Bolognese', 'Caffe Latte'],
  },
  {
    orderTime: '15:00',
    id: '4',
    order: 7891,
    dishes: ['Black Label Burger', 'Tea'],
  },
  {
    orderTime: '16:00',
    id: '2',
    order: 8912,
    dishes: ['Blackened Redfish', 'Coffee'],
  },
  {
    orderTime: '16:00',
    id: '3',
    order: 9123,
    dishes: ['Breaded Pork Tenderloin', 'Orange Juice'],
  },
  {
    orderTime: '16:00',
    id: '4',
    order: 12345,
    dishes: ['Buffalo Wings', 'Canlis Salad'],
  },
  {
    orderTime: '16:30',
    id: '5',
    order: 23456,
    dishes: ['Carnitas Burrito', 'Cheese Slice'],
  },
  {
    orderTime: '18:00',
    id: '3',
    order: 1234,
    dishes: ['Margherita', 'Coke', 'Apple Juice'],
  },
  {
    orderTime: '21:30',
    id: '4',
    order: 2345,
    dishes: ['New York-Style Pizza', 'Pepsi'],
  },
  {
    orderTime: '21:30',
    id: '5',
    order: 3456,
    dishes: ['Sicilian Pizza', 'Tonic'],
  },
];

const Kitchen = () => (
  <div className={styles.component}>
    <CssBaseline />
    <Title>Kitchen</Title>
    <Paper className={styles.component}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Order Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Dishes</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.orderTime}</TableCell>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>{row.order}</TableCell>
              <TableCell>
                {row.dishes.map(dish => (
                  <p key={dish}>{dish}</p>
                ))}
              </TableCell>
              <TableCell>
                <GreenCheckbox
                  value='completed'
                  inputProps={{ 'aria-label': 'completed' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
); 

export default Kitchen;
