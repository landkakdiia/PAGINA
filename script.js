
const registeredUsers = [];


function registerUser(username, password) {
    registeredUsers.push({ username, password });
}


function authenticateUser(username, password) {
    const user = registeredUsers.find(user => user.username === username && user.password === password);
    return user;
}

document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
  
    registerUser(username, password);
    
   
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    
   
    document.getElementById('reg-username').value = '';
    document.getElementById('reg-password').value = '';
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
   
    const authenticatedUser = authenticateUser(username, password);
    
    if (authenticatedUser) {
        alert(`Inicio de sesión exitoso para el usuario: ${authenticatedUser.username}`);
        
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
    
    
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
