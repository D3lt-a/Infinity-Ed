function Register(){
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;

    if (fullname && username && email && telephone && gender && password) {
        const user = {
            fullname,
            username,
            email,
            telephone,
            gender,
            password,
        };

        let users = JSON.parse(localStorage.getItem('users')) || []


        users.push(user)        
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'SignIn.html';

    } else {
        alert('All fields are required!!')
    }
}

function Login(){
    const loginusername = document.getElementById('loginUserName').value;
    const loginpassword = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === loginusername && u.password === loginpassword);

    if(user){
        sessionStorage.setItem('loggedIn', 'true') 
        window.location.href = "LoggedIn.html";

    } else {
        alert('Invalid Credentials')
    }
}