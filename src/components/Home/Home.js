import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '10px',
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h2>Slider</h2>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <h2>Side</h2>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <h2>hello</h2>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Home;