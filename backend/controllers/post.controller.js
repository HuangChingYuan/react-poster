import Post from "../models/post.model.js";

export const getStoredPosts = async () => {
  return await Post.find();
};

export const getPostById = async (id) => {
  return await Post.findById(id);
};

export const storePosts = (posts) => {
  return Post.create(posts);
};
