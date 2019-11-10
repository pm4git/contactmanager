import React from 'react';
import Header from "./Components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./Components/contacts/Contacts";
import Provider from "./context";
import AddContact from "./Components/contacts/AddContact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import EditContact from "./Components/contacts/EditContact";

function App() {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Provider>
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
            </Provider>
        </Router>
    );
}

export default App;
