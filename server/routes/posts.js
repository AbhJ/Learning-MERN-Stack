/**
 * @class       : posts
 * @author      : abj (abj@abj)
 * @created     : Tuesday Aug 24, 2021 19:51:37 IST
 * @description : posts
 */

import express from 'express';
import {getPosts} from '../controllers/posts.js';
import {createPosts} from '../controllers/posts.js';
const router = express.Router();
router.get('/', getPosts);
router.post('/',createPosts);
export default router;
