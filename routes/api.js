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

// ================================================================

// SKILL ENDPOINTS

// get skills
router.get('/skills', async (req, res) => {
    try{
        Skill.find()
            .then(skills => {
                res.json(skills)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// get Skill by id
router.get('/skills/:id', async (req, res) => {
    try{
        Skill.findById(req.params.id)
            .then(skill => {
                res.json(skill)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// post a Skill
router.post('/skills',  async(req, res) => {
    const { title, description, user} = req.body;
    try{
        const newSkill = new Skill(req.body)
        await newSkill.save()
            .then(res.json(newSkill));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// edit a Skill
router.put('/skills/:id', async (req, res) => {
    const { title, description, user} = req.body;
    try{
        await Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(res.json(req.body));
    }catch(err){
        res.status(400).json({msg: err})
    }
});


// ================================================================

// POST ENDPOINTS

// get posts
router.get('/posts', async (req, res) => {
    try{
        Post.find()
            .then(posts => {
                res.json(posts)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// get Post by id
router.get('/posts/:id', async (req, res) => {
    try{
        Post.findById(req.params.id)
            .then(post => {
                res.json(post)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// post a Post
router.post('/posts',  async(req, res) => {
    const { title, subtitle, content, photo, author} = req.body;
    try{
        const newPost = new Post(req.body)
        await newPost.save()
            .then(res.json(newPost));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// edit a Post
router.put('/Posts/:id', async (req, res) => {
    const { title, subtitle, content, photo, author} = req.body;
    try{
        await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(res.json(req.body));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// ENROLLMENT ENDPOINTS

// get enrollments
router.get('/enrollments', async (req, res) => {
    try{
        Enrollment.find()
            .then(enrollments => {
                res.json(enrollments)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// get Enrollment by id
router.get('/enrollments/:id', async (req, res) => {
    try{
        Enrollment.findById(req.params.id)
            .then(enrollments => {
                res.json(enrollments)
            })
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// Enrollment a Enrollment
router.post('/enrollments',  async(req, res) => {
    const { user, track} = req.body;
    try{
        const newEnrollment = new Enrollment(req.body)
        await newEnrollment.save()
            .then(res.json(newEnrollment));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// edit a Enrollment
router.put('/enrollments/:id', async (req, res) => {
    const { user, track} = req.body;
    try{
        await Enrollment.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(res.json(req.body));
    }catch(err){
        res.status(400).json({msg: err})
    }
});

// ENROLLMENT ENDPOINTS



module.exports = router;