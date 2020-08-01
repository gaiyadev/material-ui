import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';


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


const About = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <Container>
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper>
                                <h2>About</h2>
                                <Fab color="primary" aria-label="add">
                                </Fab>
                                <Fab color="secondary" aria-label="edit">
                                </Fab>
                                <Fab variant="extended">
  Navigate
</Fab>
                                <Fab disabled aria-label="like">
                                </Fab>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default About;