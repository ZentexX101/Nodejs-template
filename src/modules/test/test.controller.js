const testService = require("./test.services");
const catchAsync = require("../../helper/utils/catchAsync");
const sendResponse = require("../../helper/utils/sendResponse");
const { StatusCodes } = require("http-status-codes");

const createTestHandler = catchAsync(async (req, res) => {
	const result = await testService.createTest(req.body);

	sendResponse(res, {
		statusCode: StatusCodes.CREATED,
		success: true,
		message: "Test created successfully",
		data: result,
	});
});

const getSingleTestHandler = catchAsync(async (req, res) => {
	const id = req.params.id;
	const result = await testService.getSingleTest(id);

	sendResponse(res, {
		statusCode: StatusCodes.OK,
		success: true,
		message: "Test retrieved successfully",
		data: result,
	});
});

module.exports = {
	createTestHandler,
	getSingleTestHandler,
};
