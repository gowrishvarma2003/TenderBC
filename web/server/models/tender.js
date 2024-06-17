const mongoose = require('mongoose');

const PlaceTenderSchema = new mongoose.Schema({
    tender_id: String,
    title: String,
    description: String,
    email: String,
    files: [String],
    startdate: String,
    starttime: String,
    enddate: String,
    endtime: String,
    dkeys: [Number]
});

module.exports = mongoose.model('PlaceTender', PlaceTenderSchema);