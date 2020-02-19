import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';

// Generate Event Data
function createData(
  id,
  date,
  name,
  shipTo,
  table,
  hour,
  paymentMethod,
  amount
) {
  return { id, date, name, shipTo, table, hour, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '18 February, 2020',
    'Ezmae Marshall',
    'Fargo, ND',
    '2',
    '12:00',
    'VISA ⠀•••• 2704',
    659.72
  ),
  createData(
    1,
    '18 February, 2020',
    'Eddie Benton',
    'Grand Prairie, TX',
    '3',
    '12:00',
    'MC ⠀•••• 5612',
    222.32
  ),
  createData(
    2,
    '18 February, 2020',
    'Rose Leonard',
    'Huntsville, AL',
    '4',
    '14:30',
    'AMEX ⠀•••• 4590',
    411.57
  ),
  createData(
    3,
    '18 February, 2020',
    'Joe Bowers',
    'Murfreesboro, TN',
    '5',
    '14:30',
    'VISA ⠀•••• 6723',
    541.22
  ),
  createData(
    4,
    '18 February, 2020',
    'Dan Lynn',
    'Boise, ID',
    '1',
    '19:30',
    'VISA ⠀•••• 5678',
    378.11
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Events() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Events</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Table No.</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align='right'>Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.table}</TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more events
        </Link>
      </div>
    </React.Fragment>
  );
}