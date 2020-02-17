import React from "react";
import UserForm from "../components/UserForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import config from "../config";
import store from "../redux/store";
import {hideLoader, showError, showLoader} from "../redux/actions/laoding";

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
        store.dispatch(showLoader());

        return fetch(`${config.apiServer}/${config.rest.user}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => store.dispatch(hideLoader()))
            .catch((error) => store.dispatch(showError(`${error}`)));
    };

}

export default UserCreate;