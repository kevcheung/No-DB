import React, { Component } from 'react';
import axios from "axios";
import './ShowChamps.css';
import SavedChampionComp from './SavedChampionComp.js'
import StatelessComp from './StatelessComp.js'
import ItemComp from './ItemComp.js'


class ShowChamps extends Component {
    constructor(){
      super();
      this.state = {
        champions: [],
        // items: [],
        // pickedChamp: [],
        // postChamp: [],
        // itemSetName: ""
      };
    }
  
    // componentDidMount(){
    //   axios.get('/api/pickChampion').then(res => {
    //     console.log(res);
    //     // let name = [];
    //     // for(let i = 0; i < res.data.results.length; i++){
    //     //     name.push(res.data.results[i].key);
    //     // }
    //     this.setState({ champions: res.data.results });
    //   });
    // }
    
    componentDidMount(){
        axios.get('/api/getChampions').then(res => {
        // console.log(res);
        this.setState({ champions : res.data });
        });//Displaying All Champions
    //   axios.get('/api/getItems').then(res => {
    //       // console.log(res);
    //       this.setState({ items : res.data });
    //     });
    }//Displaying All Items
    getChamp(){
        axios.get('/api/getChamp').then(res => {
        this.setState({ pickedChamp : res.data });
        });
    }
    postChamp(){
        axios.post('/api/postChamp').then(res => {
        this.setState({ postChamp : res.data });
        });
    }//createTeam info
  
    // updateItemSetName(){
    //   axios.put().then(res => {
    //     this.setState({ itemSetName: res.data });
    //   });
    // }//updateTeam
  
  
    // deleteItemSet(){
    //   axios.delete().then(res => {
    //     this.setState({ deleteSet: res.data });
    //   });
    // }//deleteTeam
  
    render() {
      console.log(this.state.champions)
      let champRender = this.state.champions.map((champs) =>{
      return <StatelessComp champ={champs}/>
    }
      );
      return (
        <div className="App">
            <header>
            <h1 className="LeagueOfLegends"></h1>
            </header>
            <div>{champRender}</div>
        </div>
      );
    }
  }

  export default ShowChamps;