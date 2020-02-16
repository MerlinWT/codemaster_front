import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Users from "../pages/Users";
import UserCreate from "../pages/UserCreate";
import UserEdit from "../pages/UserEdit";
import _404 from "../pages/_404";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"  component={() => <Redirect to="/users"/>}/>

                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/users/create" component={UserCreate}/>
                    <Route exact path="/users/edit/:id" component={UserEdit}/>

                    <Route exact path="/404" component={_404}/>

                    <Route path="*" component={() => <Redirect to="/404"/>}/>
                </Switch>
            </BrowserRouter>
        )
    }

}

export default App;