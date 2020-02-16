import React from "react";
import UserForm from "../components/UserForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import config from "../config";

class UserCreate extends React.Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Typography variant="h2" component="h2" gutterBottom>
                        Create user
                    </Typography>

                    <UserForm
                        onSubmit={this.createUser}
                    />
                </Grid>
            </Grid>
        )
    }

    createUser = (user) => {
        return fetch(`${config.apiServer}/${config.rest.user}`, {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    };

}

export default UserCreate;