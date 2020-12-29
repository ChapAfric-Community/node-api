const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: String, required: true}
});

const Skill = mongoose.model('skills', skillSchema);

module.exports = Skill;