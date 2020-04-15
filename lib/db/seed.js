const Observation = require('../models/Observation')
const covidData = require('./covid.json')

Observation.deleteMany({}).then(() =>{
  Observation.create(covidData).then(observationData=>{
    console.log(observationData)
    process.exit();
  }).catch(err =>{
    console.log(err)
  })
})