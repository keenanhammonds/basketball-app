import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Comparison from "./Components/Comparison";
import Home from "./Components/home/Home";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Create from './Components/Create'
import Delete from './Components/Delete'
<<<<<<< HEAD
import WebFont from 'webfontloader';
=======
import Update from './Components/Update'
>>>>>>> e7a679f6eecd33360053b1a8a2746adc4d1cfad2

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      matchup: []
    };
  }



  handleClick = (player, evt) => {
    evt.preventDefault();
    if (this.state.matchup.length < 2) {
      this.setState({ matchup: [...this.state.matchup, { player }] });
    } 
    if (this.state.matchup.length === 2) {
      const arr =  [...this.state.matchup, { player }]
      const newArr = arr.pop()
      this.setState({ matchup: [newArr] });
    }
<<<<<<< HEAD

    console.log(this.state);
=======
    
    
>>>>>>> e7a679f6eecd33360053b1a8a2746adc4d1cfad2
  };


  handleReset = (evt) => {
    evt.preventDefault();
    this.setState({
      matchup: []
    })
  }
  
  getData = () => {
    axios.get("https://basketball-era.herokuapp.com").then(res => {
      this.setState({
        players: res.data
      });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <header className="headerContainer">
          <Link to="/">
            <h1>Header</h1>
          </Link>
        </header>
        <Search
          handleClick={this.handleClick}
          players={this.state.players}
          className="searchContainer"
        />
        <main>
          <Route path="/" exact render={routerProps => <Home />} />
          <Route
            path="/compare"
            exact
            render={routerProps => <Comparison handleReset={this.handleReset} matchup={this.state.matchup} players={this.state.players} />}
          />
          <Route path="/create" exact render= {() => <Create/>}/>
          <Route path="/delete" exact render= {() => <Delete/>}/>
          <Route path="/update" exact render= {() => <Update/>}/>
        </main>
        <footer className="footerContainer">
        <Link to= "compare"> <h3>Compare Players</h3></Link>
        <Link to='/create'> <h3>Add Player</h3></Link>
        <Link to='/update'> <h3>Update Player</h3></Link>
        <Link to='/delete'> <h3>Delete Player</h3></Link>
        </footer>
      </div>
    );
  }
}

export default App;
