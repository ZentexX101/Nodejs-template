const express = require("express");
const router = express.Router();

const BlogRoutes = require("../modules/blog/blog.routes");

const moduleRoutes = [
	{
		path: "/blogs",
		route: BlogRoutes,
	},
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
