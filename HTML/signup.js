const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = users.find(user => user.email == email)
    if (isUserRegistered){
        return alert('Usuario registrado')
    }
    users.push({name: name, email: email, password: password});
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registro existoso')

    //Redireccion a login
    window.location.href = 'login.html'
})