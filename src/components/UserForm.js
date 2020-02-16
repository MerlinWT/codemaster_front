import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";

const required = value => value ? undefined : 'Required'

class UserForm extends React.Component {
    render() {
        let fields = [
            { name: 'username', label: 'Username' },
            { name: 'first_name', label: 'First name'},
            { name: 'last_name', label: 'Last name'},
        ];

        const renderField = ({ input, label, meta: { touched, error }}) => (
            <div>
                <TextField
                    {...input}
                    fullWidth
                    error={touched && !!error}
                    helperText={touched ? error : ''}
                    label={label}
                />
            </div>
        );

        return (
            <form onSubmit={this.props.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>

                            {fields.map((field) => {
                                return (
                                    <Grid key={field.name} item xs={12}>
                                        <Field
                                            name={field.name}
                                            label={field.label}
                                            type={"text"}
                                            component={renderField}
                                            validate={[required]}
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
                                    Go to list
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

UserForm = reduxForm({form: 'userForm'})(UserForm);
export default UserForm;