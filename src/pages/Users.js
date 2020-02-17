import React from "react";
import UsersTable from "../components/UsersTable";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import config from "../config";
import store from "../redux/store";
import {setUserList} from "../redux/actions/usersList";
import {hideLoader, showError, showLoader} from "../redux/actions/laoding";

class Users extends React.Component {
    componentDidMount() {
        store.dispatch(showLoader());

        fetch(`${config.apiServer}/${config.rest.user}`)
            .then(response => response.json())
            .then(users => {
                store.dispatch(setUserList(this.usersMiddleware(users)));

                store.dispatch(hideLoader());
            })
            .catch((error) => store.dispatch(showError(`${error}`)));
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button href={"/users/create"} variant={"contained"} color={"primary"}>
                        Create
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <UsersTable/>
                </Grid>
            </Grid>
        )
    }

    usersMiddleware(users) {
        return users;
    }

}

export default Users;