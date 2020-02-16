import * as React from "react";
import {LinearProgress} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import {connect} from "react-redux";

class Loading extends React.Component {

    render() {
        if (this.props.loading.pending) return <LinearProgress/>;

        if (this.props.loading.error) {
            return (
                <Alert severity="error">
                    <AlertTitle>Loading error</AlertTitle>
                    {this.props.loading.errorText}
                </Alert>
            )
        }

        return <template/>
    }

}

const mapStateToProps = (store) => store.loading;
export default connect(mapStateToProps)(Loading);