import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    ReactMD
                  </Typography>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/"> <Button color="inherit">Home</Button> </Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/about"> <Button color="inherit">About</Button> </Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact"> <Button color="inherit">Contact</Button> </Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/services"> <Button color="inherit">Services</Button> </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;