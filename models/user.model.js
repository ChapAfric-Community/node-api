const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

const addressSchema = mongoose.Schema({
    originCountry: {type: String},
    residenceCountry: {type: String},
    city: {type: String},
    town: {type: String},
    commune: {type: String},
    avenue: {type: String},
    street: {type: String},
    number: {type: String},
});

const socialSchema = mongoose.Schema({
    twitter: {type: String},
    linkedin: {type: String},
    facebook: {type: String},
    instagram: {type: String},
    behance: {type: String},
    github: {type: String}
});

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: String, required: true},
    placeOfBirth: {type: String},
    dateOfBirth: {type: Date},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    nationality: {type: String},
    photo: {type: String},
    profession: {type: String},
    address: addressSchema,
    socialMedia: socialSchema,
    login: loginSchema
});

const User = mongoose.model('users', userSchema);

module.exports = User;