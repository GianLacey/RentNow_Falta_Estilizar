window.onload = function (user) {
    const savedSessionStatus = sessionStorage.getItem('sessionStatus');
    const storedCarsArrayJSON = sessionStorage.getItem('carsArray') || localStorage.getItem('carsArray');
    const storedCarsArray = JSON.parse(storedCarsArrayJSON);

    if (savedSessionStatus === 'true') {
        sessionStatus = true;
        const savedUsername = sessionStorage.getItem('username');
        let loggedInUser = document.getElementById('loggedInUser');
        let userLogged = document.getElementById('userLogged');
        let usersLogReg = document.getElementById('usersLogReg');
        loggedInUser.style.display = "flex";
        usersLogReg.style.display = "none";
        userLogged.innerHTML = savedUsername.charAt(0).toUpperCase() + savedUsername.slice(1).toLowerCase();
    }

    const selectedCarId = sessionStorage.getItem('selectedCarId');
    const selectedCar = storedCarsArray.find(car => car.id === parseInt(selectedCarId));
    const selectedCarContainer = document.getElementById('selectedCarContainer');

    if (selectedCarContainer) {

        if (selectedCar) {
            const carElement = document.createElement('div');
            carElement.classList.add("carCont2");
            carElement.innerHTML = `<div class="img-cont2"><img src="${selectedCar.img}" alt="${selectedCar.brand} ${selectedCar.model}"></div>
            <div class="infoCarRent">
            <div class="info">
            <p><b>${selectedCar.brand},</b></p>
            <p>${selectedCar.model}</p>
            <p>Price: $${selectedCar.price} /Day</p>
            <p>${selectedCar.availability ? 'Available' : 'Not Available'}</p>
            </div>
            <div class="formToRent">
            <label>Days to rent: </label>
            <input type="number" class="daysForRent" min="1" value="1" oninput="calculateTotalPrice()"></input>
            <label>Total price: </label>
            <input type="text" class="totalPrice" readonly></input>
            </div>
            <div>
            <button class="back" onclick="window.history.back()">Back</button>
            <button onclick="goToPay()">Go to pay</button></div>
            </div>`;
            selectedCarContainer.appendChild(carElement);
            calculateTotalPrice();
        }
    } else {
        console.log('');
    }
};

function showForm(formId){
    let formCont = document.getElementById("formContainer");
    formCont.innerHTML = "";
    let div = document.createElement("div");
    if (formId === 'Login') {
        div.innerHTML = "<input type='text' id='loginUsername' placeholder='User'> <input type='password' id='loginPassword' placeholder='Password'> <button onclick='login()'>Login</button>";
    } else if (formId === 'Register') {
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

let sessionStatus = false;

function register() {
    if(document.querySelector('#registerUsername').value && document.querySelector('#registerPassword').value != "") {
        let username = document.getElementById('registerUsername').value;
        let password = document.getElementById('registerPassword').value;
        let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        if(userAlreadyRegistered(registeredUsers, username)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The user is already registered',
            });
        } else {
            let newUser = { username: username, password: password};
            registeredUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
            Swal.fire({
                icon: 'success',
                title: 'Successful registration',
                showConfirmButton: false,
                timer: 1500,
            });
            let loggedInUser = document.getElementById('loggedInUser');
            let userLogged = document.getElementById('userLogged');
            let usersLogReg = document.getElementById('usersLogReg');
            let formContainer = document.getElementById('formContainer');
            loggedInUser.style.display = "flex";
            usersLogReg.style.display = "none";
            formContainer.style.display = "none";
            userLogged.innerHTML = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
            user = userLogged.innerHTML;
            sessionStatus = true;
            sessionStorage.setItem('sessionStatus', 'true');
            sessionStorage.setItem('username', username);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must complete',
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
            user = userLogged.innerHTML;
            sessionStatus = true;
            sessionStorage.setItem('sessionStatus', 'true');
            sessionStorage.setItem('username', username);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect password',
            });
            sessionStatus = false;
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
            img.src = '../assest/logos/WOTG-_2_.webp';
            img.style.width = '100px';
            img.style.marginBottom = '10px'; 
            title.parentNode.insertBefore(img, title);
        },
    });
    sessionStatus = false;
    sessionStorage.removeItem('sessionStatus');
    sessionStorage.removeItem('username');
}

function carForRent(brand, model, price, availability, img, type, id) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.availability = availability;
    this.img = img;
    this.type = type;
    this.id = id;
}

const carsArray = [];
const jsonFilePath = './JSON/carsData.json';
const storedCarsArray = JSON.parse(localStorage.getItem('carsArray'));
window.storedCarsArray = storedCarsArray;

fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        carsArray.push(...data);
        const carsArrayJSON = JSON.stringify(carsArray);
        localStorage.setItem('carsArray', carsArrayJSON);
        const storedCarsArrayJSON = localStorage.getItem('carsArray');
        const container = document.getElementById('carsForRent');
        if (container && storedCarsArray) {
            storedCarsArray.forEach(car => {
                const carElement = document.createElement('div');
                carElement.classList.add("carCont");
                carElement.innerHTML = `<div class="img-cont"><img src="${car.img}" alt="${car.brand} ${car.model}"></div>
                                        <p><b> ${car.brand}</b></p>
                                        <p> ${car.model}</p>
                                        <p>Price: $${car.price} /Day</p>
                                        <p> ${car.availability ? 'Available' : 'Not Available'}</p>
                                        <button type="button" id="${car.id}" class="rentNow" onclick="rentNow(${car.id})">Rent Now</button>`;
                container.appendChild(carElement);
            });
        }
    })
    .catch(error => console.log());

function rentNow(carId){
    if(sessionStatus === true){
        sessionStorage.setItem('selectedCarId', carId);
        window.location.href = './page/rentNow.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Log in first',
        });
    }
}

function calculateTotalPrice() {
    const daysForRent = document.querySelector('.daysForRent').value;
    const selectedCarPrice = storedCarsArray.find(car => car.id === parseInt(sessionStorage.getItem('selectedCarId'))).price;
    const totalPriceInput = document.querySelector('.totalPrice');
    const totalPrice = daysForRent * selectedCarPrice;
    totalPriceInput.value = `$${totalPrice}`;
}

function goToPay() {
    const totalPrice = document.querySelector('.totalPrice').value;
    const selectedCarId = sessionStorage.getItem('selectedCarId');
    const selectedCar = storedCarsArray.find(car => car.id === parseInt(selectedCarId));
    if (selectedCar) {
        selectedCar.availability = false;
        const index = storedCarsArray.findIndex(car => car.id === selectedCar.id);
        if (index !== -1) {
            storedCarsArray[index] = selectedCar;
        }
        localStorage.setItem('carsArray', JSON.stringify(storedCarsArray));
        sessionStorage.setItem('carsArray', JSON.stringify(storedCarsArray));
        console.log('Array de autos después de la actualización:', storedCarsArray);
    } else {
        console.log('Automóvil no encontrado con el ID:', selectedCarId);
    }
    Swal.fire({
       title: 'Payment made successfully. Total paid is: ' + totalPrice,
       customClass: {
           title: 'my-title-class',
       },
       showConfirmButton: false,
       timer: 2500,
       didOpen: () => {
           const title = Swal.getTitle();
           const img = document.createElement('img');
           img.src = '../assest/logos/WOTG-_2_.webp';
           img.style.width = '100px';
           img.style.marginBottom = '10px'; 
           title.parentNode.insertBefore(img, title);
        },
    });
    setTimeout(function() {
         window.history.back();
    }, 2500);
}

let checkboxes = document.querySelectorAll('.checkbox');

function performSearch() {
    let selectedBrands = document.querySelectorAll('.filter-item.Brand .checkbox.checked');
    let selectedTypes = document.querySelectorAll('.filter-item.Type .checkbox.checked');
    let selectedAvailability = document.querySelectorAll('.filter-item.Availability .checkbox.checked');
    const container = document.getElementById('carsForRent');
    let filteredCars = storedCarsArray.filter(car => {
        const brandFilter = selectedBrands.length === 0 || Array.from(selectedBrands).some(filter => car.brand.toLowerCase() === filter.id);
        const typeFilter = selectedTypes.length === 0 || Array.from(selectedTypes).some(filter => car.type.toLowerCase() === filter.id);
        const availabilityFilter = selectedAvailability.length === 0 || Array.from(selectedAvailability).some(filter => (car.availability && filter.id === 'available') || (!car.availability && filter.id === 'notAvailable'));
        return brandFilter && typeFilter && availabilityFilter;
    });
    container.innerHTML = '';
    filteredCars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add("carCont");
        carElement.innerHTML = `<div class="img-cont"><img src="${car.img}" alt="${car.brand} ${car.model}"></div>
                                <p><b> ${car.brand}</b></p>
                                <p> ${car.model}</p>
                                <p>Price: $${car.price} /Day</p>
                                <p> ${car.availability ? 'Available' : 'Not Available'}</p>
                                <button type="button" class="rentNow" onclick="rentNow(${car.id})">Rent Now</button>`;
        container.appendChild(carElement);
    });
}

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        this.classList.toggle('checked');
        performSearch();
    });
});

function inputSearch() {
    const searchText = document.getElementById('filter').value.toLowerCase();
    const carElements = document.querySelectorAll('.carCont');
    carElements.forEach(carElement => {
        const carText = carElement.innerText.toLowerCase();
        if (carText.includes(searchText)) {
            carElement.style.display = 'block';
        } else {
            carElement.style.display = 'none';
        }
    });
}
