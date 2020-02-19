import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginTop: 32,
  },
});

function createData(hour, table1, table2, table3, table4, table5, table6) {
  return { hour, table1, table2, table3, table4, table5, table6 };
}

const rows = [
  createData('12:00', null, null, null, null, null, null),
  createData('12:30', null, null, null, null, null, null),
  createData('13:00', null, null, null, null, null, null),
  createData('13:00', null, null, null, null, null, null),
  createData(
    '14:00',
    'Michael Jackson',
    'Bruce Springsteen',
    'Dale Baldwin',
    null,
    null,
    null
  ),
  createData('14:30', null, null, null, null, null, null),
  createData('15:00', null, null, null, 'Kiana Rivers', null, null),
  createData('15:30', null, null, null, null, null, null),
  createData(
    '16:00',
    null,
    'Bluebell Durham',
    'Sonnie Velasquez',
    'Joel Fitzgerald',
    null,
    null
  ),
  createData('16:30', null, null, null, null, null, null),
  createData('17:00', null, null, null, null, null, null),
  createData('17:30', null, null, null, null, null, null),
  createData('18:00', null, null, 'Elvis Presley', null, null, null),
  createData('18:30', null, null, null, null, null, null),
  createData('19:00', null, null, null, null, null, null),
  createData('19:30', null, null, null, null, null, null),
  createData('20:00', null, null, null, null, null, null),
  createData('20:30', null, null, null, null, null, null),
  createData('21:00', null, null, null, null, null, null),
  createData('21:30', null, null, null, 'Paul McCartney', 'Tom Scholz', null),
  createData('22:00', null, null, null, null, null, null),
  createData('22:30', null, null, null, null, null, null),
  createData('23:00', null, null, null, null, null, null),
  createData('23:30', null, null, null, null, null, null),
  createData('00:00', null, null, null, null, null, null),
];

export default function TableMap() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.hour}>
              <TableCell>{row.hour}</TableCell>
              <TableCell>
                {row.table1 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}
                  >
                    {row.table1}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table2 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}
                  >
                    {row.table2}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table3 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}
                  >
                    {row.table3}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table4 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`}
                  >
                    {row.table4}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table5 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`}
                  >
                    {row.table5}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table6 && (
                  <Button
                    startIcon={<InfoOutlinedIcon />}
                    size='small'
                    variant='outlined'
                    color='primary'
                    to={`${process.env.PUBLIC_URL}/tables/booking/${row.table6}`}
                  >
                    {row.table6}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}