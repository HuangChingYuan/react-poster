import { Router } from "express";
import {
  getStoredPosts,
  getPostById,
  storePosts,
} from "../controllers/post.controller.js";

const router = Router();

router.get("/", async (req, res) => {
  const storedPosts = await getStoredPosts();
  res.json({ posts: storedPosts });
});

router.get("/:id", async (req, res) => {
  const post = await getPostById(req.params.id);
  res.json({ post });
});

router.post("/", async (req, res) => {
  const newPost = req.body;
  await storePosts(newPost);
  res.status(201).json({ message: "Stored new post.", post: newPost });
});

export default router;
