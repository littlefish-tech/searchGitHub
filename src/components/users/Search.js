import React, { Component } from "react";
import Proptypes from "prop-types"


class Search extends Component {

    state = {
        text: ""
    }

    static propTypes = {
        searchUsers: Proptypes.func.isRequired,
        clearUsers: Proptypes.func.isRequired,
        showClear: Proptypes.bool.isRequired,
        setAlert: Proptypes.func.isRequired,

    }

    onSubmit = event => {
        event.preventDefault();
        if (this.state.text === "") {
            this.props.setAlert("Please Enter Something ...", "light")
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: "" })
        }
    }
    onChange = (event) => {
        this.setState({ text: event.target.value })

    }


    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search;