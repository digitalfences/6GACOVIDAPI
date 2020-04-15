const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const Observation = new Schema({
    SNo: Number,
    ObservationDate: String,
    ProvinceState: String,
    CountryRegion: String,
    LastUpdate: String,
    Confirmed: Number,
    Deaths: Number,
    Recovered: Number
})

module.exports = mongoose.model("Observation", Observation)