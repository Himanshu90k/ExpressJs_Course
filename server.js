import express from 'express';
const port = process.env.PORT || 8000;
import posts from './routes/posts.js';

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

// Routes
app.use('/api/posts', posts);

app.listen(port, console.log(`server started at port ${port}`));