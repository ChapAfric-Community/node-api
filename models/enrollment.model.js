const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    user: {type: String, required: true},
    track: {type: String, required: true},
    dateEnrollment: {type: Date, default: Date.now()}
});

const Enrollment = mongoose.model('enrollments', enrollmentSchema);

module.exports = Enrollment;