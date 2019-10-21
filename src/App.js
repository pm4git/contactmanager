import React from 'react';
import Header from "./Components/layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from "./Components/contacts/Contacts";
import Provider from "./context";
import AddContact from "./Components/contacts/AddContact";

function App() {

    return (
        <Provider>
            <div className="App">
                <Header branding="Contact Manager"/>
                <div className="container">
                    <AddContact/>
                    <Contacts/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
