const blogService = require("./blog.services");
const catchAsync = require("../../helper/utils/catchAsync");
const sendResponse = require("../../helper/utils/sendResponse");
const { StatusCodes } = require("http-status-codes");

const createBlogHandler = catchAsync(async (req, res) => {
	const result = await blogService.createBlog(req.body);

	sendResponse(res, {
		statusCode: StatusCodes.CREATED,
		success: true,
		message: "Blog created successfully",
		data: result,
	});
});

const getSingleBlogHandler = catchAsync(async (req, res) => {
	const id = req.params.id;
	const result = await blogService.getSingleBlog(id);

	sendResponse(res, {
		statusCode: StatusCodes.OK,
		success: true,
		message: "Blog retrieved successfully",
		data: result,
	});
});

module.exports = {
	createBlogHandler,
	getSingleBlogHandler,
};
