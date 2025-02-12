const AppError = require("../../errors/AppError");
const { StatusCodes } = require("http-status-codes");
const BlogModel = require("./blog.model");

const createBlog = async (data) => {
	const blog = await BlogModel.create(data);
	return blog;
};

const getSingleBlog = async (id) => {
	const blog = await BlogModel.findById(id);

	if (!blog) {
		throw new AppError(
			StatusCodes.NOT_FOUND,
			`Blog with id ${id} not found`,
			`The requested blog with the id ${id} could not be found in the database.`
		);
	}

	return blog;
};

module.exports = {
	createBlog,
	getSingleBlog,
};
