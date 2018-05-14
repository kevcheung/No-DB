const axios = require('axios');
let championsArray = [];
let championItems = [];
const _=require('lodash.map');
let champs;
let items;

const getChampions = (req, res, next) => 
{axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
.then(resp => {
        // console.log(res.data)
    champsArray = _(resp.data.data, (e) =>  e.name);
    res.status(200).json(champsArray);
}).catch(err => console.log(err));
}
//Shows Champs




const getItems = (req, res, next) => {axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json')
.then(res => {
    // console.log(res)
    items = _(res.data.data, (e) =>  e.name);
    res.status(200).json(items);
}).catch(err => console.log(err));
}//Shows Items




const getChamp = (req, res) => {
    res.status(200).json(champs);
}

const postChamp = (req, res) => {
    res.status(200).json(champs);
}





module.exports = {
    getChampions,
    getItems,
    getChamp,
    postChamp,
    
    // updateItemSetName(req, res){
    //     res.status(200).json(items);
    // },
    // deleteItemSet(req, res){
    //     res.status(200).json(items);
    // }
};





// axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Ahri.json').then(res => (
//     champions = res.data.results
// ))

// axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json').then(res => (
//     items = res.data.results
// ));