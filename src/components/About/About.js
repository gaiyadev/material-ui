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
const About = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <h2>About</h2>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default About;