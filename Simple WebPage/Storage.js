function Register(){
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;

    const user = {
        id: Date.now(),
        fullname : fullname,
        username : username,
        email : email,
        telephone : telephone,
        gender : gender,
        password : password
    }

    let users = JSON.parse(localStorage.getItem('users')) || []

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))

    alert('You were registered successfully!!')
}

function Login(){
    const loginusername = document.getElementById('loginUserName').value;
    const loginpassword = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === loginusername && u.password === loginpassword);

    if(!user){
        alert('Invalid Username or Password!!')
        // console.log("Logged in Successfully!!")
    } else {
        alert('Logged in Successfully!!')
    }
}