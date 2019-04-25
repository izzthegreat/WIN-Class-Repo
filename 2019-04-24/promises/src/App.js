import React from 'react';
import Axios from 'axios'
import UserForm from './components/UserForm';
import './App.css';

class App extends React.Component {

  getUser = (e) => {
    e.preventDefault()
    const user = e.target.elements.userName.value
    Axios.get(`https://api.github.com/users/${user}`).then(response => console.log(response.data))
  }

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          HTTP Requests in REACT
        </h1>
      </header>
      <UserForm getUser={this.getUser}/>
    </div>
    )
  }
}

export default App;
