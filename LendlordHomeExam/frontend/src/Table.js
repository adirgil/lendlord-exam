import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable(props) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow  style={{backgroundColor:"#808080"}}>
            <TableCell>Property Address</TableCell>
            <TableCell align="left">Date Of Purchase</TableCell>
            <TableCell align="left">Property Value</TableCell>
            <TableCell align="left">Current Mortgage Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((asset) => (
            <TableRow key={asset._id}>
              <TableCell component="th" scope="row">
                {asset.PropertyAddress}
              </TableCell>
              <TableCell align="left">{new Date(asset.PropertyPurchaseDate).toLocaleDateString('en')}</TableCell>
              <TableCell align="left">£{asset.PropertyValue}</TableCell>
              <TableCell align="left">£{asset.MortgageBalance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
