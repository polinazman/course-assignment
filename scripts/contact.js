// refer to question 4 before development starts for scope document

document.getElementById("submitContact").onclick = validateForm;

function validateForm() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var telephone = document.getElementById("phone").value;
	var telephoneRegexp = /[0-9]{3}([ .-])[0-9]{3}([ .-])[0-9]{3}/
	var email = document.getElementById("email").value;
	var emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	if (firstName === "" || firstName === null) {
		document.getElementById("firstNameError").style.display = "inline";
		document.getElementById("firstName").focus();
		return false;
	} else {
		document.getElementById("firstNameError").style.display = "none";
	}

	if (lastName === "" || lastName === null) {
		document.getElementById("lastNameError").style.display = "inline";
		document.getElementById("lastName").focus();
		return false;
	} else {
		document.getElementById("lastNameError").style.display = "none";
	}

	if (telephoneRegexp.test(telephone) === false) {
		document.getElementById("phoneError").style.display = "inline";
		document.getElementById("phone").focus();
		return false;
	} else {
		document.getElementById("phoneError").style.display = "none";
	}

	if (emailRegexp.test(email) === false) {
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("email").focus();
		return false;
	} else {
		document.getElementById("emailError").style.display = "none";
	}
}