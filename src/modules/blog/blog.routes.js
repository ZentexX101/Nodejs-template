const express = require("express");
const { createBlogHandler, getSingleBlogHandler } = require("./blog.controller");
const authMiddleware = require("../../middlewares/authMiddleware");
const router = express.Router();

// Route to create a new blog
router.post("/create-blog", createBlogHandler);

// Router to get a single blog using id
router.get("/get-blog/:id", getSingleBlogHandler);

// Example: Allow only users with the "admin" or "user" role to access this route
// router.get("/get-blog/:id", authMiddleware("admin", "user"), getSingleBlogHandler);

module.exports = router;
