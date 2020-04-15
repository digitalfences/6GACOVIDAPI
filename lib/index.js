const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const Observation = require('./models/Observation')
app.use(bodyParser.json())
app.get('/', (req,res) => {
   res.redirect('/index')
})
app.post('/', (req,res) => {
    Observation.create(req.body).then(observation => {
        res.json(observation)
    })
})
app.get('/index', (req,res)=>{
    Observation.find({}).then(observation => {
        res.json(observation)
    })
})
app.get('/SNo/:SNo', (req,res) => {
    Observation.find({SNo : req.params.SNo}).then(observation => {
        res.json(observation)
    })
})
app.get('/cases/deaths/:deaths', (req,res) => {
    Observation.find({Deaths : {$gte: req.params.deaths}}).then(observation => {
        res.json(observation)
    })
})
app.get('/cases/confirmed/:confirmed', (req,res) => {
    Observation.find({ Confirmed : {$gte: req.params.confirmed}}).then(observation => {
        res.json(observation)
    })
})
app.get('/cases/recovered/:recovered', (req,res) => {
    Observation.find({ Recovered: {$gte: req.params.recovered}}).then(observation => {
        res.json(observation)
    })
})
app.get('/date/:date', (req,res) => {
    Observation.find({ ObservationDate: req.params.date}).then(observation => {
        res.json(observation)
    })
})
app.get('/country/:country', (req,res) => {
    Observation.find({ CountryRegion: req.params.country}).then(observation => {
        res.json(observation)
    })
})


app.listen(3000, () => console.log('listening on port 3000'))