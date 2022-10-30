import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';

import styles from './Cards.module.css';

export const Cards = (props) =>{

    return(
        <div className={styles.container}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant='h4' color="#ffffff">
                            <CountUp start={0} end={props.data.confirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="#ffffff">
                            +<CountUp start={0} end={props.data.todayConfirmed} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of confirmed cases till now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant='h4' color="#ffffff">
                        <CountUp start={0} end={props.data.active} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of active cases right now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h4'color="#ffffff">
                            <CountUp start={0} end={props.data.recovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="#ffffff">
                            +<CountUp start={0} end={props.data.todayRecovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of recovered cases till now</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2.5} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deceased</Typography>
                        <Typography variant='h4' color="#ffffff">
                            <CountUp start={0} end={props.data.deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="#ffffff">
                            +<CountUp start={0} end={props.data.todayDeaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant='body2'>Number of deaths till now</Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={Card} xs={12} md={4} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Full Vaccination</Typography>
                        <Typography variant='h4' color="#ffffff">
                            <CountUp start={0} end={props.data.secondDose} duration={2.5} separator=","/>
                        </Typography>
                        {/* <Typography color="#ffffff">
                            +<CountUp start={0} end={props.data.todaySecondDose} duration={2.5} separator=","/>
                        </Typography> */}
                        <Typography variant='body2'>Number of people fully vaccinated.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={4} className={styles.card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Partial Vaccination</Typography>
                        <Typography variant='h4' color="#ffffff">
                            <CountUp start={0} end={props.data.firstDose} duration={2.5} separator=","/>
                        </Typography>
                        {/* <Typography color="#ffffff">
                            +<CountUp start={0} end={props.data.todayFirstDose} duration={2.5} separator=","/>
                        </Typography> */}
                        <Typography variant='body2'>Number of people vaccinated with at least one dose.</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            {props.data.lastUpdate ? (
                <Typography className={styles.update} varient='h4' color="#ffffff">Last Updated: {new Date(props.data.lastUpdate).toDateString()}, {new Date(props.data.lastUpdate).toTimeString().split('GMT+0530 (India Standard Time)')}</Typography>
            ):(
                <Typography className={styles.update} varient='h4' color="#ffffff">Loading...</Typography>
            )}
            
        </div>
    );
}