import React from 'react';
import {ChartAge} from "./ChartAge";
import Customers from "./Customers";
import '../asset/css/Dashboard.css'
import {Grid} from "@material-ui/core";
import {UserData} from "../data";


const Dashboard = () => {

    return (
        <div className={'dashboard'}>
            <Grid container justifyContent={'space-between'}>
                <Grid container className={'chartAge'}>
                    <ChartAge/>

                </Grid>

                <Grid container style={{width:'25%'}}>

                    <Grid container className={'balanceAndAge'}>
                    <p>موجودی کل</p>
                    <p className={'balanceAndAgeValue'}>{UserData.reduce((previousValue, currentValue) =>
                        previousValue + currentValue.deposit
                    ,0)
                    }</p>
                    </Grid>

                    <Grid container className={'balanceAndAge'}>
                        <p>متوسط سن</p>
                        <p className={'balanceAndAgeValue'}>{UserData.map(value =>new Date().getFullYear()-new Date(value.birthDate).getFullYear())
                            .reduce((previousValue, currentValue) =>
                            previousValue + currentValue
                            ,0)/UserData.length
                        }</p>
                    </Grid>
                </Grid>




            </Grid>
            <Customers/>
        </div>
    );
};

export default Dashboard;