import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class _404 extends React.Component {

    render() {
        return (
            <Grid container justify={"center"} alignItems={"center"} style={{minHeight: '100vh'}}>
                <Grid item>
                    <Typography variant="h1" component="h1" gutterBottom>
                        <b>404</b> Not found
                    </Typography>
                </Grid>
            </Grid>
        )
    }

}

export default _404;