import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem"
import Users from './components/users/Users';
import axios from 'axios';
import Spinner from "./components/layout/Spinner"

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_TOKEN)
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_TOKEN}`);
    this.setState({ users: res.data, loading: false })
  }

  render() {

    return (
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
