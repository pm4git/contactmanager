import React from 'react';
import Header from "./Components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import EditContact from "./Components/contacts/EditContact";
import store from "./Components/store/store";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Header branding="Contact Manager"/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Contacts}/>
                            <Route exact path="/contact/add" component={AddContact}/>
                            <Route exact path="/contact/edit/:id" component={EditContact}/>
                            <Route exact path="/about" component={About}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
