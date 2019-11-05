import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1 className="display-4">Page Not Found</h1>
            <p className="lead">Sorry, that page does not exist.</p>
            <p className="lead"><Link to="/">Go back</Link> to home page.</p>
        </div>
    );
};

export default NotFound;
