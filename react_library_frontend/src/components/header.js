import React from "react";
import { Link } from "react-router-dom";

const Header = ( {user} ) => {


    
    // Check if user.admin true
    // Hide Admin link if admin false
    
    return (
        <div className='header'>
            {console.log(user)}
            <h1>Digitalents Academy's Library</h1>
            <Link to={"/admin"} className='admin-link'> Admin </Link>
        </div>
    )
}

export default Header;