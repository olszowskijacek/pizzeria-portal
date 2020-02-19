import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';

// Generate Order Data
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
    'Michael Jackson',
    'Gary, IN',
    '1',
    '14:00',
    'AMEX ⠀•••• 2000',
    654.39
  ),
  createData(
    1,
    '18 February, 2020',
    'Bruce Springsteen',
    'Long Branch, NJ',
    '2',
    '14:00',
    'VISA ⠀•••• 5919',
    212.79
  ),
  createData(
    2,
    '18 February, 2020',
    'Dale Baldwin',
    'Green Bay, WI',
    '3',
    '14:00',
    'MC ⠀•••• 3349',
    412.22
  ),
  createData(
    3,
    '18 February, 2020',
    'Kiana Rivers',
    'Denver, CO',
    '4',
    '15:00',
    'VISA ⠀•••• 5919',
    156.39
  ),
  createData(
    4,
    '18 February, 2020',
    'Bluebell Durham',
    'Alexandria, VA',
    '2',
    '16:00',
    'AMEX ⠀•••• 2210',
    600.02
  ),
  createData(
    5,
    '18 February, 2020',
    'Sonnie Velasquez',
    'San Jose, CA',
    '3',
    '16:00',
    'MC ⠀•••• 4836',
    345.72
  ),
  createData(
    6,
    '18 February, 2020',
    'Joel Fitzgerald',
    'Henderson, NV',
    '4',
    '16:00',
    'VISA ⠀•••• 5919',
    201.44
  ),
  createData(
    7,
    '18 February, 2020',
    'Theodore Acosta',
    'Filadelfia, PA',
    '5',
    '16:30',
    'MC ⠀•••• 5789',
    451.73
  ),
  createData(
    8,
    '18 February, 2020',
    'Elvis Presley',
    'Tupelo, MS',
    '3',
    '18:00',
    'VISA ⠀•••• 3719',
    312.44
  ),
  createData(
    9,
    '18 February, 2020',
    'Paul McCartney',
    'London, UK',
    '4',
    '21:30',
    'VISA ⠀•••• 2574',
    866.99
  ),
  createData(
    10,
    '18 February, 2020',
    'Tom Scholz',
    'Boston, MA',
    '5',
    '21:30',
    'MC ⠀•••• 1253',
    100.81
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

export default function Reservations() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Reservations</Title>
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
          See more reservations
        </Link>
      </div>
    </React.Fragment>
  );
}