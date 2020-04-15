const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/covid_app', {useNewUrlParser: true});
module.exports = mongoose;