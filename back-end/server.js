const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient 
const uri = 'mongodb+srv://tonimarke:mTfMK8f6KkJjRd6c@progweb-1yw1g.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(uri, (err, client) => {
        if(err) return console.log(err)
        db = client.db('ProgWeb')

        app.listen(3300, () => console.log('server running on port 3300'))
});

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')


app.get('/', (req, res) =>{
    res.render('index.ejs')
});

app.post('/show',(req, res) => {
    db.collection('data').save(req.body, (err, result) =>{
        if(err) return console.log(err)

        console.log("salvo no banco de dados")
        res.redirect('/')
        db.collection('data').find().toArray((err, results)=> {
            console.log(results)
        })
    })
})



console.log("funfou")