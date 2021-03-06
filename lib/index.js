const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const Observation = require('./models/Observation')
app.use(bodyParser.json())
/**
 * @api {get} / Request index of all data
 * @apiName GetIndex
 * @apiGroup Index
 *
 */
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    next();
});

app.get('/', (req,res) => {
   res.redirect('/index')
})
app.get('/index', (req,res)=>{
    Observation.find({}).sort({SNo: 1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {post} / Add new data to database
 * @apiName PostIndex
 * @apiGroup Index
 *
 */
app.post('/', (req,res) => {
    console.log(req);
    Observation.create(req.body).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find data by Serial Number
 * @apiName GetObservationBySno
 * @apiGroup Observation
 * 
 * 
 */
app.get('/SNo/:SNo', (req,res) => {
    Observation.find({SNo : req.params.SNo}).sort({SNo: 1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find cases by Deaths
 * @apiName GetByDeaths
 * @apiGroup Cases
 * 
 * 
 */
app.get('/cases/deaths/:deaths', (req,res) => {
    Observation.find({Deaths : {$gte: req.params.deaths}}).sort({Deaths: -1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find cases by Confirmed
 * @apiName GetByConfirmed
 * @apiGroup Cases
 * 
 * 
 */
app.get('/cases/confirmed/:confirmed', (req,res) => {
    Observation.find({ Confirmed : {$gte: req.params.confirmed}}).sort({Confirmed: -1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find cases by Recovered
 * @apiName GetByRecovered
 * @apiGroup Cases
 * 
 * 
 */
app.get('/cases/recovered/:recovered', (req,res) => {
    Observation.find({ Recovered: {$gte: req.params.recovered}}).sort({Recovered: -1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find data by Observaton Date
 * @apiName GetObservationByDate
 * @apiGroup Observation
 * 
 * 
 */
app.get('/date/:date', (req,res) => {
    Observation.find({ ObservationDate: req.params.date}).sort({ObservationDate: -1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {get} / Find data by Country
 * @apiName GetObservationByCountry
 * @apiGroup Observation
 * 
 * 
 */
app.get('/country/:country', (req,res) => {
    Observation.find({ CountryRegion: req.params.country}).sort({SNo: 1}).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {put} / Edit data at SNo
 * @apiName UpdateObservationBySNo
 * @apiGroup Update
 * 
 * 
 */
app.put('/:SNo', (req,res) => {
    Observation.findOneAndUpdate({SNo : req.params.SNo}, req.body).then(observation => {
        res.json(observation)
    })
})
/**
 * @api {delete} / Delete data by SNo
 * @apiName DeleteObservationBySNo
 * @apiGroup Deletion
 * 
 * 
 */
app.delete('/:SNo' , (req,res) => {
    Observation.findOneAndDelete({SNo: req.params.SNo}).then(observation => {
        res.json(observation)
    })
})
app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), () => console.log(`PORT: ${app.get('port')}`))