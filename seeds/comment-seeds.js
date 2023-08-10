const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is rad!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I wonder what others think of me...",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Oh hi Mark.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;