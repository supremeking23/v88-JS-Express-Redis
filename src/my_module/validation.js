module.exports = () => {
	return {
		registrationValidation: (form, validateEmail) => {
			const { firstname, lastname, email, password, confirm_password } = form;
			let form_error_array = [];

			if (firstname == "") {
				form_error_array.push("Firstname field cannot be blank");
			}

			if (lastname == "") {
				form_error_array.push("Lastname field cannot be blank");
			}

			if (email == "") {
				form_error_array.push("Email field cannot be blank");
			} else if (!validateEmail(email)) {
				form_error_array.push("Email should be valid");
			}

			if (password == "") {
				form_error_array.push("Password field cannot be blank");
			}

			if (confirm_password == "") {
				form_error_array.push("Confirm field cannot be blank");
			}

			if (password != confirm_password) {
				form_error_array.push("Password and Confirm password does not match");
			}

			return form_error_array;
		},

		loginValidation: (form, validateEmail) => {
			const { email, password } = form;
			let form_error_array = [];

			if (email == "") {
				form_error_array.push("Email field cannot be blank");
			} else if (!validateEmail(email)) {
				form_error_array.push("Email should be valid");
			}

			if (password == "") {
				form_error_array.push("Password field cannot be blank");
			}

			return form_error_array;
		},
	};
};
