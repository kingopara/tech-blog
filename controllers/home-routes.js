const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['post_url', 'title', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage',{ posts });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.render('homepage', {
    //     id: 1,
    //     post_url: 'https://handlebarsjs.com/guide/',
    //     title: 'handlebars docs',
    //     created_at: new Date(),
    //     comments: [{}, {}],
    //     user: {
    //         username: 'test_user'
    //     }
    // });
});

module.exports = router;