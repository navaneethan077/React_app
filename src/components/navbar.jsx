import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand">soft_io</h1>
                <button className="btn btn-primary">Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
