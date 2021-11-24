import React from 'react';
import {Divider, Grid} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";
import '../asset/css/RightSideBar.css'
import logo from '../asset/img/metodataLogo.jpg'

const RightSideBar = () => {
    return (
        <div>
            <Grid container justifyContent={'center'}>
                <img src={logo} className={'logo'} alt={'logo'}/>
            </Grid>
            <Grid container className={'itemMenu'} justifyContent={'space-around'} direction={"row-reverse"}>
                <p>داشبورد</p>
                <ShoppingBasket/>
            </Grid>
            <Grid container className={'itemMenu'} justifyContent={'space-around'} direction={"row-reverse"}>
                <p>سفارش</p>
                <ShoppingBasket/>
            </Grid>
            <Grid container  className={'itemMenu'} justifyContent={'space-around'} direction={"row-reverse"}>
                <p>مشتریان</p>
                <ShoppingBasket/>
            </Grid>
            <Divider/>

        </div>
    );
};

export default RightSideBar;