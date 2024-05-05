const router = require('express').Router();
const express = require('express');
const app = express();
const path = require('path');

const { Blog, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const data = await Blog.findAll({
        include: [{ all: true, nested: true }],
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/blog/edit/:id', async (req, res) => {
    try {
        const blogId = req.params.id;

        res.sendFile(path.join(__dirname, '../../blog.html'), {blogId});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/blog/:id', async (req, res) => {
    try {
        const data = await Blog.findByPk(req.params.id, {
            include: [{ all: true, nested: true }],
        });
    
        res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/logo', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../assets/images/The_Tech_Blog.png'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/home', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../index.html'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/script', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../assets/script/script.js'));

    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', (req, res) => {
    Blog.create(req.body)
      .then((blog) => {
        res.status(200).json(blog);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put('/blog/update/:id', (req, res) => {
    // update product data
    Blog.update(req.body, {
      where: {
        blog_id: req.params.id,
      },
    })
      .then((blog) => {
        return res.json(blog);
      })
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

  module.exports = router;