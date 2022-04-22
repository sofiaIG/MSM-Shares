const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('.helper/create_router');

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('.helper/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: ture})
.then((client) => {
    const db = client.db('shares_portfolio');
    const sharesColection = db.collection('shares');
    const sharesRouter = createRouter(sharesColection);
    app.use('/api/',sharesRouter);
})
.catch(console.err);

app.listen(9000, function (){
    console.log(`Listening on port ${ this.address().port}`);
});