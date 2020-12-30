const router = require('express').Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const Enrollment = require('../models/enrollment.model');
const Skill = require('../models/skill.model');
const Track = require('../models/track.model');

// api test
router.get('/test', async (req, res) => {
    await res.json('ChapAfric API works perfectly ...');
})




module.exports = router;