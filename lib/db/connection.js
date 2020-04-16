const mongoose = require('mongoose');
let mongooseURI = '';
if (process.env.NODE_ENV === "production"){
    mongooseURI = process.env.DB_URL;
} else {
    mongooseURI = 'mongodb://localhost/covid_app';
}

mongoose.connect(mongooseURI, {useNewUrlParser: true});
module.exports = mongoose;