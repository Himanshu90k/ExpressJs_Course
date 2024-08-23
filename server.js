const express = require('express');
const port = process.env.PORT || 8000;

const app = express();

let posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'},
];

app.get('/api/posts', (req, res) => {

    const limit = parseInt(req.query.limit);

    if( !isNaN(limit) && limit > 0 ) {
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);


});

app.get('/api/posts/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    
    const post = posts.find( (post) => post.id === id);

    if(!post) {
        return res.status(404).json( {msg: `The post with id ${id} was not found`} );
    } 
    
    res.status(200).json(post);
});

app.listen(port, console.log(`server started at port ${port}`));