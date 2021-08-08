import { AppBar, Button, IconButton, Toolbar, Typography, makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header({ }) {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menuButton}>
                    logo
                </IconButton>
                {/* Name */}
                <Typography variant="h5" className={classes.title}>
                    ShopStore
                </Typography>
                {/* Login */}
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}