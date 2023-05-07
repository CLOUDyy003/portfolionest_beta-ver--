const form = document.getElementById('form');
const username = document.getElementById('username');
const goal = document.getElementById('goal');
const email = document.getElementById('email');
const interest = document.getElementById('interest');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const skill = document.getElementById('skill');
const cirtificate = document.getElementById('cirtificate');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs(); 
});

function checkInputs() {
	const usernameValue = username.value.trim();
    const goalValue = goal.value.trim();
    const interestValue = interest.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cityValue = city.value.trim();
	const phoneValue = phone.value.trim();
	const password2Value = password2.value.trim();
	const dateValue = date.value.trim();
	const skillValue = skill.value.trim();
	const cirtificateValue = cirtificate.value.trim();
	
	if(usernameValue === '' ) {
		setErrorFor(username, 'This block cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(skillValue === '' ) {
		setErrorFor(skill, 'This block cannot be blank');
	} else {
		setSuccessFor(skill);
	}

	if(cirtificateValue === '' ) {
		setErrorFor(cirtificate, 'This block cannot be blank');
	} else {
		setSuccessFor(cirtificate);
	}
	
	
    if(goalValue === '' ) {
		setErrorFor(goal, 'This block cannot be blank');
	} else {
		setSuccessFor(goal);
	}

	if(interestValue === '' ) {
		setErrorFor(interest, 'This block cannot be blank');
	} else {
		setSuccessFor(interest);
	}

	if(cityValue === '' ) {
		setErrorFor(city, 'This block cannot be blank');
	} else {
		setSuccessFor(city);
	}

	if(phoneValue === '' ) {
		setErrorFor(phone, 'This block cannot be blank');
	} else {
		setSuccessFor(phone);
	}

	if(dateValue === '' ) {
		setErrorFor(date, 'This block cannot be blank');
	} else {
		setSuccessFor(date);
	}

	if(emailValue === '') {
		setErrorFor(email, 'This block cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
