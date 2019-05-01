import React from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyA29l8FaEpsfOzU2oH5N4DgrPh0tZJYQzU",
  authDomain: "in-class-example-18daf.firebaseapp.com",
  databaseURL: "https://in-class-example-18daf.firebaseio.com",
  projectId: "in-class-example-18daf",
  storageBucket: "in-class-example-18daf.appspot.com",
  messagingSenderId: "646283714590"
};

firebase.initializeApp(config);

const database = firebase.database()

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: "default value"
    }
  }

  componentDidMount() {
    const textRef = database.ref("text/")

    textRef.on("value", snapshot => {
      this.setState({
        text: snapshot.val()
      })
    })
  }

  writeData = e => {
    e.preventDefault()
    const textValue=e.target.elements.inputText.value
    
    database.ref("text/").set(textValue,function(error){
      error ? alert("error") : console.log("It works!")
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest?cb=20190316204818" className="App-logo" alt="logo" />
          <h1>
            {this.state.text}
          </h1>
          <form onSubmit={this.writeData}>
          <input type="submit" name="submitButton" value="Do Stuff"/>
          <input type="text" name="inputText"/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
