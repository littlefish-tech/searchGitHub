import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login, html_url } }) => {

    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
            <h3>User Name: {login}</h3>
            <div><Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">read more</Link>
            </div>
        </div>
    )
}

UserItem.propType = {
    user: PropType.object.isRequired
}

export default UserItem;