function showForm(formId){
    let formCont = document.getElementById("formContainer");

    // Limpiar el contenido anterior - Clean up the previous content
    formCont.innerHTML = "";

    let div = document.createElement("div");

   
    if (formId === 'Login') {
        //form LOGIN
        div.innerHTML = "<input type='text' id='loginUsername' placeholder='User'> <input type='password' id='loginPassword' placeholder='Password'> <button onclick='login()'>Login</button>";
       

    } else if (formId === 'Register') {
        //form Register
        div.innerHTML = "<input type='text' id='registerUsername' placeholder='User'> <input type='password' id='registerPassword' placeholder='Password'> <button onclick='register()'>Register</button>";

    }

    
    formCont.appendChild(div);
    formCont.style.display = formCont.style.display ==="none" ? "block" : "none";
}



function userAlreadyRegistered(registeredUsers, username) {
    return registeredUsers.some(function(users) {
        return users.username === username;
      });
}

function register() {
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    if(userAlreadyRegistered(registeredUsers, username)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario ya está registrado',
        });
    } else {

        let newUser = { username: username, password: password};
        registeredUsers.push(newUser);

        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500,
        });
    }
}

function login() {
    
    let formCont = document.getElementById("formContainer");
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    let user = registeredUsers.find(user => user.username === username);

    if(!user) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unregistered user',
        });
    } else {
        
        if (user.password === password) {
            Swal.fire({
                icon: 'success',
                title: 'Successful login',
                showConfirmButton: false,
                timer: 1500,
            });

            let loggedInUser = document.getElementById('loggedInUser');
            let userLogged = document.getElementById('userLogged');
            let usersLogReg = document.getElementById('usersLogReg');

            loggedInUser.style.display = "flex";
            usersLogReg.style.display = "none";
            formCont.style.display = "none";

            userLogged.innerHTML = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect password',
            });
        }
    }
}

function logout() {
    let loggedInUser = document.getElementById('loggedInUser');
    let usersLogReg = document.getElementById('usersLogReg');

    loggedInUser.style.display = "none";
    usersLogReg.style.display = "flex";
    
    Swal.fire({
        title: 'Thank you for visiting us!',
        customClass: {
            title: 'my-title-class',
        },
        showConfirmButton: false,
        timer: 2500,
        didOpen: () => {
            const title = Swal.getTitle();
            const img = document.createElement('img');
            img.src = './assest/logos/WOTG-_2_.webp';
            img.style.width = '100px';
            img.style.marginBottom = '10px'; // Ajusta según sea necesario
    
            title.parentNode.insertBefore(img, title);
        },
    });
    


}