import React, { Component } from 'react';
import axios from "axios";
import './SavedChampionComp.css';

class SavedChampionComp extends Component {
    constructor(){
      super();
      this.state = {
        savedList: []
      }
    }


componentDidMount(){
  axios.get('/api/savedList').then(res => {
    this.setState({ savedList : res.data });
    });
  }
}