import React from 'react';
import logo from './logo.svg';
import firebase from 'firebase'
import './App.css';

var config = {
  apiKey: "AIzaSyD9sh9JBs3mBsOOJ99E8Dh5zoidpIMvB9A",
  authDomain: "fir-demo-00001.firebaseapp.com",
  databaseURL: "https://fir-demo-00001.firebaseio.com",
  projectId: "fir-demo-00001",
  storageBucket: "fir-demo-00001.appspot.com",
  messagingSenderId: "924033909806"
};

firebase.initializeApp(config);

const database = firebase.database()

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      image: logo,
      speed: 2000
    }
  }

  componentDidMount() {
    const imageRef = database.ref("image/");
    const speedRef = database.ref("speed/");
    imageRef.on("value", snapshot => {
      snapshot.val() == null
        ? this.setState({ image: logo })
        : this.setState({ image: snapshot.val() });
    });
    speedRef.on("value", snapshot => {
      this.setState({
        speed: snapshot.val()
      });
    });
  }

  writeData = e => {
    e.preventDefault();
    const image = e.target.elements.imageForm.value;
    const speed = e.target.elements.speed.value;

    database.ref("image/").set(image, function(error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
    database.ref("speed/").set(speed, function(error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
  };

  resetImage = e => {
    e.preventDefault();
    database.ref("image/").set(null, function(error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
  };

  changeSpeed = e => {
    const speed = e.target.value;
    e.preventDefault();
    database.ref("speed/").set(speed, function(error) {
      if (error) {
        alert("That didn't work, please try again.");
      } else {
        console.log("Successful submit!");
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} alt="logo" className="App-logo" style={{animationDuration: `${this.state.speed}ms`}}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.writeData.bind(this)}>
            <button type="submit">Change It Up!</button>
            <input type="text" name="imageForm"/><br/>
            <input type="range" min="0" max="5000" defaultValue="1" name="speed" onChange={this.changeSpeed.bind(this)}/>
            <br/>
            <button onClick={this.resetImage.bind(this)}>Reset</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
