const router = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');

const { BlogComment } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;

      const data = await BlogComment.findAll({
        where: {
            blog_id: id
        },
        include: [{ all: true, nested: true }],
    });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', (req, res) => {
    console.log(req.body);

    BlogComment.create(req.body)
      .then((blog) => {
        res.status(200).json(blog);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.get('/edit/:id', async (req, res) => {
    try {
        const blogId = req.params.id;

        res.sendFile(path.join(__dirname, '../../blogcomment.html'), {blogId});
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;