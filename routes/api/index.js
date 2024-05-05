const router = require('express').Router();
const blogCommentRoutes = require('./blog-comment-routes');
const techBlogRoutes = require('./tech-blog-routes');

router.use('/comments', blogCommentRoutes);
router.use('/blogs', techBlogRoutes);

module.exports = router;
