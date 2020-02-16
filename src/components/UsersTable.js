import React from "react";
import MaterialTable from "material-table";
import {Button, Paper} from "@material-ui/core";
import IconEdit from "@material-ui/icons/Edit";
import {connect} from "react-redux";

class UsersTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {render: rowData => <Button href={`/users/edit/${rowData.id}`}><IconEdit /></Button>},
                {title: 'Id', field: 'id'},
                {title: 'Username', field: 'username'},
                {title: 'First name', field: 'first_name'},
                {title: 'Last name', field: 'last_name'},
                {title: 'Created', field: 'created'}
            ],
        }
    }

    render() {
        return (
            <Paper elevation={3}>
                <MaterialTable title="Users" columns={this.state.columns} data={this.props.usersList} />
            </Paper>
        )
    }

}

const mapStateToProps = (store) => store.usersList;
export default connect(mapStateToProps)(UsersTable);