const express = require("express");
const connectDB = require("./db/db");
const postModel = require("./model/model");

const app = express();
app.use(express.json());

connectDB();

// post route
app.post("/create-post", async (req, res) => {
  const post = req.body;

  if (!post.caption || !post.subject) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const postStructure = {
    caption: post.caption,
    subject: post.subject,
    date: new Date().toLocaleString(),
    user: "Lithium Guest",
  };

  await postModel.create(postStructure);

  res.status(201).json({
    message: "Post created successfully",
  });
});

// get route
app.get("/get-post", async (req, res) => {
  const posts = await postModel.find();

  if (!posts) {
    return res.status(404).json({
      message: "No posts found",
    });
  }

  res.status(200).json({
    message: "Post fetched successfully",
    Posts: posts,
  });
});

module.exports = app;
