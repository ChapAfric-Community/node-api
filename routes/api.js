const router = require('express').Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const Enrollment = require('../models/enrollment.model');
const Skill = require('../models/skill.model');
const Track = require('../models/track.model');

// api test
router.get('/test', async (req, res) => {
    await res.json('ChapAfric API works perfectly ...');
});

// TRACK ENDPOINTS

// get tracks
router.get('/tracks', async (req, res) => {
    try{
        Track.find()
            .then(tracks => {
                res.json(tracks)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// get track by id
router.get('/tracks/:id', async (req, res) => {
    try{
        Track.findById(req.params.id)
            .then(track => {
                res.json(track)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// post a track
router.post('/tracks',  async(req, res) => {
    const { title, description, photo} = req.body;
    try{
        const newTrack = new Track(req.body)
        await newTrack.save()
        .then(res.json(newTrack));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// edit a track
router.put('/tracks/:id', async (req, res) => {
    const { title, description, photo} = req.body;
    try{
        await Track.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(res.json(req.body));
    }catch(err){
        res.status(400).json({msg: err})
    }
});


module.exports = router;