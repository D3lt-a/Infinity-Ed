function Register() {
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;

    if (fullname && username && email && telephone && gender && password) {
        const user = {
            id: Date.now(), // Unique ID based on current timestamp
            fullname,
            username,
            email,
            telephone,
            gender,
            password,
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if username or email already exists
        const userExists = users.some(u => u.username === username || u.email === email);
        if (userExists) {
            alert('Username or email already exists.');
            return;
        }

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'SignIn.html'; // Correct redirection method
    } else {
        alert('All fields are required!!');
    }
}

function Login() {
    const loginusername = document.getElementById('loginusername').value; // Ensure this ID matches your HTML
    const loginpassword = document.getElementById('loginpassword').value; // Ensure this ID matches your HTML

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === loginusername && u.password === loginpassword);

    if (user) {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = "LoggedIn.html";
    } else {
        alert('Invalid Credentials');
        window.location.href = 'Register.html';
    }
}
