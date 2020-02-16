import * as React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import store from "../redux/store";
import {hideLoader, showError, showLoader} from "../redux/actions/laoding";
import {connect} from "react-redux";
import {setUser} from "../redux/actions/user";

class UserForm extends React.Component {
    render() {
        let fields = [
            { name: 'username', label: 'Username' },
            { name: 'first_name', label: 'First name'},
            { name: 'last_name', label: 'Last name'},
        ];

        return (
            <form onSubmit={this.onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>

                            {fields.map((field) => {
                                return (
                                    <Grid key={field.name} item xs={12}>
                                        <TextField
                                            fullWidth
                                            name={field.name}
                                            label={field.label}
                                            value={this.props.user[field.name]}
                                            onChange={this.onChangeField}
                                        />
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify="flex-end" spacing={2}>
                            <Grid item>
                                <Button variant="contained" color="primary" type="submit">
                                    Save
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" href={"/users"}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }

    onChangeField = (e) => {
        let field = e.target.name;
        let value = e.target.value;

        let user = this.props.user;
        user[field] = value;

        store.dispatch(setUser(user));
    };

    onSubmit = (e) => {
        e.preventDefault();
        store.dispatch(showLoader());

        this.props.onSubmit(this.state.user)
            .then((result) => {
                store.dispatch(hideLoader());
                //TODO show success message
            })
            .catch((error) => store.dispatch(showError(`${error}`)));

    };

}

const mapStateToProps = (store) => {
    console.log(store.user.user);
    return store.user;
};
export default connect(mapStateToProps)(UserForm);