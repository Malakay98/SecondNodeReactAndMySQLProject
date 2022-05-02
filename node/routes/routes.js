// The routes folder is created to forward the supported requests to the appropiate controller functions

import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/blogController.js";

// I create the router instance, this is a middleware and full addressing system
const router = express.Router()

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.post('/', createBlog)

router.put('/:id', updateBlog)

router.delete('/:id', deleteBlog)

export default router