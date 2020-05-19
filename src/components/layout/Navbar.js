import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {

    return (
        <nav className="navbar bg-primary">
            <i className={icon} />{title}
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar;