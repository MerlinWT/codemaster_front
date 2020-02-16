import React from "react";
import UserForm from "../components/UserForm";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import config from "../config";
import store from "../redux/store";
import {hideLoader, showError, showLoader} from "../redux/actions/laoding";
import {initialize} from "redux-form";

class UserEdit extends React.Component {
    componentDidMount() {
        store.dispatch(showLoader());

        fetch(`${config.apiServer}/${config.rest.user}/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(user => {
                store.dispatch(initialize('userForm', this.userMiddleware(user)));

                store.dispatch(hideLoader());
            })
            .catch((error) => store.dispatch(showError(`${error}`)));
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Typography variant="h2" component="h2" gutterBottom>
                        Edit user
                    </Typography>

                    <UserForm
                        onSubmit={this.updateUser}
                    />
                </Grid>
            </Grid>
        )
    }

    updateUser = (user) => {
        store.dispatch(showLoader());

        return fetch(`${config.apiServer}/${config.rest.user}/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => store.dispatch(hideLoader()))
            .catch((error) => store.dispatch(showError(`${error}`)));
    };

    userMiddleware(user) {
        return {
            id: user.id,
            username: user.title.substr(0, 2),
            first_name: user.title.substr(3, 2),
            last_name: user.title.substr(6, 2),
            created: user.title.substr(9, 2),
        }
    }

}

export default UserEdit;