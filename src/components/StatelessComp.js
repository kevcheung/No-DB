import React, { Component } from 'react';
import ShowChamps from './ShowChamps'






function championList(props){
    return(
        <div className="champStyle">
            {props.champ}
            <button className="add">ADD</button>
        </div>
    )
}
export default championList;