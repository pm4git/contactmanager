import React from 'react';
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <Header branding="Contact Manager"/>
            <div className="container">
                <Contact name={"John Doe"} email={"johndoe@gmail.com"} phone={"555-555-555"}/>
                <Contact name={"Joanna Dark"} email={"jodark@gmail.com"} phone={"333-333-333"}/>
            </div>
        </div>
    );
}

export default App;
