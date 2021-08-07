import React from "react"
import Header from "./headers"
import Footer from "./footer"
import { Container, Grid, makeStyles, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
}))

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Header />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Container className="" maxWidth="xl">
                        <Paper className={classes.paper}>
                            {children}
                        </Paper>
                    </Container>

                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Footer />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}