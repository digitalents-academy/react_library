import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div className='header'>
            <h1>Digitalents Academy's Library</h1>
            <Link to={"/admin"} className='admin-link'> Admin </Link>
        </div>
    )
}

export default Header;