/* eslint-disable no-undef */
require("dotenv").config();

const config = {
	environment: process.env.NODE_ENV,
	port: process.env.PORT,
	database_url: process.env.DATABASE_URL,
	jwt_access_secret: process.env.JWT_SECRET_KEY,

	// initial manager body.... start
	Mt5BaseUrl: process.env.MT5_BASE_URL,
	managerID: process.env.MANAGER_ID,
	password: process.env.PASSWORD,
	serverConfig: process.env.SERVER_CONFIG,
	mt5Token: process.env.MT5_TOKEN,
	// initial manager body ...... end

	// base urls
	userManagementUrl: process.env.USER_MANAGEMENT_BASE_URL,
	riskManagementUrl: process.env.RISK_MANAGEMENT_BASE_URL,
	emailManagementUrl: process.env.EMAIL_MANAGEMENT_BASE_URL,
};

module.exports = config;
