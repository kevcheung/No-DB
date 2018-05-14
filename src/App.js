import React, { Component } from 'react';
import './App.css';
import ShowChamps from './components/ShowChamps.js'
import SavedChampionComp from './components/SavedChampionComp.js'
import ItemComp from './components/ItemComp.js'


class App extends Component{
  render(){
    return(
      <div className="App">
      <ShowChamps />
      
      </div>
    )
  }
}


export default App;
