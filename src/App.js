import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem"
import Users from './components/users/Users';
import axios from 'axios';
import Spinner from "./components/layout/Spinner";
import Search from "./components/users/Search"

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true })

  // }

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text.trim()}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false })
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  render() {

    return (
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
