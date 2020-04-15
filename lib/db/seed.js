const Observation = require('../models/Observation')
const covidData = require('./covid.json')

Observation.deleteMany({}).then(() =>{
  Observation.create(observationData).then(observationData=>{
    console.log(observationData)
    process.exit();
  }).catch(err =>{
    console.log(err)
  })
})