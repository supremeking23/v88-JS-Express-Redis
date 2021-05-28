const userModel = require("../models/user");
const { validateEmail, formError, messageHandler } = require("../my_module/utilities")();
const { registrationValidation, loginValidation } = require("../my_module/validation")();
const bcrypt = require("bcrypt");
const saltRounds = 10;

const redis = require("redis");
const client = redis.createClient(6379); //port number is optional

client.on("connect", function () {
	console.log("Connected to Redis...");
});

client.on("error", function (error) {
	console.error(error);
});

class Users {
	constructor() {}

	index(req, res) {
		res.render("index", {
			message: req.session.message != undefined ? req.session.message : undefined,
			form_errors: req.session.form_errors != undefined ? req.session.form_errors : undefined,
		});
		req.session.destroy();
	}

	async create(req, res) {
		try {
			// testing

			let form_error_array = registrationValidation(req.body, validateEmail);
			if (form_error_array.length > 0) {
				req.session.form_errors = formError("register", form_error_array);
				res.redirect("/");
				return false;
			}

			let user = await userModel.findByEmail(req.body.email);

			// console.log(findEmail);
			let message;
			if (user.length > 0) {
				//email already exist
				message = messageHandler("error", "Error, email already in the database");
			} else {
				// hash password

				bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
					req.body.password = hash;
					let user_data = userModel.userData(req.body);

					let created_user = await userModel.create(user_data);

					console.log("return");
					console.log(created_user);
				});

				message = messageHandler("success", "User has been registered successfully");
			}

			req.session.message = message;
			res.redirect("/");
		} catch (error) {
			console.log(error);
		}
	}

	async login_process(req, res) {
		try {
			let form_error_array = loginValidation(req.body, validateEmail);

			if (form_error_array.length > 0) {
				req.session.form_errors = formError("login", form_error_array);
				res.redirect("/");
				return false;
			}

			let user = await userModel.findByEmail(req.body.email);

			if (user.length > 0) {
				bcrypt.compare(req.body.password, user[0].password, async function (err, result) {
					if (result) {
						console.log("correct credentials");

						// req.session.user = user[0];
						client.hmset(
							"user_session",
							["first_name", user[0].first_name, "last_name", user[0].last_name, "email", user[0].email, "is_logged_in", true],
							(err, result) => {
								console.log(`here are the results ${result}`);
								res.redirect("/welcome");
							}
						);

						//
					} else {
						console.log("wrong password");
						req.session.form_errors = formError("login", ["Wrong Email or Password"]);
						res.redirect("/");
						return false;
					}
				});
			} else {
				// wrone credentials
				req.session.form_errors = formError("login", ["Wrong Email or Password"]);
				res.redirect("/");
				return false;
			}
		} catch (error) {}
	}

	async welcome(req, res) {
		client.exists("user_session", (err, result) => {
			if (result == 0) {
				res.redirect("/");
			} else {
				client.hgetall("user_session", (err, obj) => {
					res.render("welcome", { user: obj });
				});
			}
		});
	}

	logoff(req, res) {
		// req.session.destroy();
		// res.redirect("/");
		client.del("user_session", (err, obj) => {
			res.redirect("/");
		});
	}
}

module.exports = new Users();
