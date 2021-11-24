import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {UserData} from '../data'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        direction:'rtl'
    },
});



export default function Customers() {
    const classes = useStyles();

    return (
        <TableContainer style={{padding:'15px'}} component={Paper}>
            <p style={{textAlign:'right'}}>
                اطلاعات مشتریان
            </p>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">نام و نام خانوادگی</TableCell>
                        <TableCell align="center">شهر سکونت</TableCell>
                        <TableCell align="center">شغل</TableCell>
                        <TableCell align="center">سن</TableCell>
                        <TableCell align="center">موجودی حساب</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {UserData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <AccountCircleIcon/>
                            </TableCell>
                            <TableCell align="center">{row.firstName + ' ' + row.lastName}</TableCell>
                            <TableCell align="center">{row.city}</TableCell>
                            <TableCell align="center">{row.job}</TableCell>
                            <TableCell align="center">{new Date().getFullYear()-new Date(row.birthDate).getFullYear()}</TableCell>
                            <TableCell align="center">{row.deposit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
