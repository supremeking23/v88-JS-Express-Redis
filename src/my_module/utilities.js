// function validateEmail(input) {
// 	if (/(^\w.*@\w+\.\w)/.test(input)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

module.exports = () => {
	return {
		validateEmail: (input) => {
			if (input && /(^\w.*@\w+\.\w)/.test(input)) {
				return true;
			} else {
				return false;
			}
		},
		formError: (type, errors) => {
			return {
				type,
				errors,
			};
		},

		messageHandler: (title, content) => {
			return {
				title,
				content,
			};
		},
	};
};
