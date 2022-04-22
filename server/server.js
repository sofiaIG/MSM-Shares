const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helper/create_route.js');

MongoClient.connect('mongodb://0.0.0.0:27017', { useUnifiedTopology: true})
.then((client) => {
    const db = client.db('Shares_Portfolio');
    const sharesCollection = db.collection('shares');
    const sharesRouter = createRouter(sharesCollection);
    app.use('/api/shares',sharesRouter);
})
.catch(console.err);

app.listen(9000, function (){
    console.log(`Listening on port ${ this.address().port}`);
});