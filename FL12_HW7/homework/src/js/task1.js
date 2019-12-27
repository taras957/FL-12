// Your code goes here
let email = prompt('Enter your email?');
let passwords = { 'user@gmail.com': 'UserPass', 'admin@gmail.com': 'AdminPass' };


if (email === null || email.trim() === '') {
    alert('Canceled');
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Enter your password?');
    if (password === null || password.trim() === '') {
        alert('Canceled');
    } else if (passwords[email] !== password) {
        alert('Wrong password');
    } else {
        let changePassword = confirm('Do you want to change your password?');
        if (!changePassword) {
            alert('You have failed the change');
        } else {
            password = prompt('Enter your old password?');
            if (password === null || password.trim() === '') {
                alert('Canceled');
            } else if (passwords[email] !== password) {
                alert('Wrong password');
            } else {
                password = prompt('Enter your new password?');
                if (password === null || password.trim() === '') {
                    alert('Canceled');
                } else if (password.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let confirmPass = prompt('Confirm your new password');
                    if (password === confirmPass) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.')
                    }
                }

            }
        }
    }
} else {
    alert('I don’t know you');
}