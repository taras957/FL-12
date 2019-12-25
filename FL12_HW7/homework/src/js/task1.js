// Your code goes here
let email = prompt('Enter your email?');
let password;
let changePassword;
let confirmPass;

if (email === null || email.trim() === '') {
    alert('Canceled');
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Enter your password?');
} else {
    alert('I don’t know you');
}

if (password === null || password.trim() === '') {
    alert('Canceled');
} else if (password !== 'UserPass' && password !== 'AdminPass') {
    alert('Wrong password');
} else {
    changePassword = confirm('Do you want to change your password?');
}



if (!changePassword) {
    alert('You have failed the change');
} else {
    password = prompt('Enter your old password?');
}

if (password === null || password.trim() === '') {
    alert('Canceled');
} else if (password !== 'UserPass' && password !== 'AdminPass') {
    alert('Wrong password');
} else {
    password = prompt('Enter your new password?');
}

if (password === null || password.trim() === '') {
    alert('Canceled');
} else if (password.length < 6) {
    alert('It’s too short password. Sorry.');
} else {
    confirmPass = password = prompt('Confirm your new password');
}

if (password === confirm) {
    alert('You have successfully changed your password.');
} else {
    alert('You wrote the wrong password.')
}