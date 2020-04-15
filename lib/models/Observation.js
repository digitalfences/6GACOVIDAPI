const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Observation = new Schema({
    Serial: Number,
    ObservationDate: String,
    Province: String,
    Country: String,
    LastUpdate: String,
    ConfirmedCases: Number,
    Deaths: Number,
    Recovered: Number
})

module.exports = mongoose.model("Observation", Observation)