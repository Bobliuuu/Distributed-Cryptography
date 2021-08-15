let timeout;
let password = document.getElementById('PassEntry');
let button = document.getElementById("button1ID");
let strengthBadge = document.getElementById('StrengthDisp');

/*
Strength requirements: 
The password is at least 8 characters long.
The password has at least one uppercase letter.
The password has at least one lowercase letter.
The password has at least one digit.
The password has at least one special character.

Strong: Meets all the requirements
Medium: If the password is at least six characters long and meets all the other requirements, or has no digit but meets the rest of the requirements.
*/

// Regex patterns: (?=.{8,}) (?=.*[A-Z]) (?=.*[a-z]) (?=.*[0-9]) ([^A-Za-z0-9])

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function StrengthChecker(PasswordParameter){
	if(strongPassword.test(PasswordParameter)) {
		strengthBadge.style.backgroundColor = "green";
		strengthBadge.textContent = 'Strong';
	} 
	else if(mediumPassword.test(PasswordParameter)) {
		strengthBadge.style.backgroundColor = 'blue';
		strengthBadge.textContent = 'Medium';
	} 
	else {
		strengthBadge.style.backgroundColor = 'red';
		strengthBadge.textContent = 'Weak';
	}
}

button.addEventListener("click", () => {
	strengthBadge.style.display = 'block';
	//clearTimeout(timeout);
	//timeout = setTimeout(() => StrengthChecker(password.value), 500);
	StrengthChecker(password.value);
	if(password.value.length !== 0) {
		strengthBadge.style.display != 'block';
	} 
	else {
		strengthBadge.style.display = 'none';
	}
});