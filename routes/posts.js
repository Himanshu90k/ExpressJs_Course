import express from 'express';
const router = express.Router();
import { 
    getPosts, 
    getPost,
    createPost, 
    updatePost, 
    deletePost 
} from '../controllers/postsController.js';

// to get limited or all posts
router.get('/', getPosts);

// to get single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);

export default router;