const express = require('express')
 const app = express(),
        cors = require('cors'),
        { json } = require('body-parser'),
        port = process.env.PORT || 3001,
        league = require('./controllers/league_controller');
app.use(json());
app.use(cors());


app.get('/api/getChampions', league.getChampions);

app.get('/api/getItems', league.getItems);

// app.get('/api/getChampionComp', savedList.getChamp);
// app.post('/api/postChampionComp', savedList.postChamp);
// app.put('/api/itemSet', league.updateItemSetName);
// app.delete('/api/deleteItems', league.deleteItemSet);

app.listen(port, () => 
console.log(`${port}, I READ YOU`)
);