const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    photo: {type: String}
});

const Track = mongoose.model('tracks', trackSchema);

module.exports = Track;