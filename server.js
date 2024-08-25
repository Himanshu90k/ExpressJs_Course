import express from 'express';
const port = process.env.PORT || 8000;
import logger from './middleware/logger.js';
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

// Middleware
app.use(logger);

// Routes
app.use('/api/posts', posts);

app.use(notFound);

// ErrorHandler
app.use(errorHandler);


app.listen(port, console.log(`server started at port ${port}`));