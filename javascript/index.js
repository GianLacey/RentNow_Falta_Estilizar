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

let sessionStatus = false;

function register() {
    if(document.querySelector('#registerUsername').value && document.querySelector('#registerPassword').value != "") 
    {
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
            

            loggedInUser.style.display = "flex";
            usersLogReg.style.display = "none";
            formCont.style.display = "none";

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
            img.style.marginBottom = '10px'; // Ajusta según sea necesario
    
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

//Chevrolete Car
const car1 = new carForRent('Chevrolet', 'S10 Double Cabin', 200, true, '../assest/imagenes/rental_car/cvrlt/cab-dupla.webp', 'van', 1);

const car2 = new carForRent('Chevrolet', 'S10 Simple Cabin', 200, true, '../assest/imagenes/rental_car/cvrlt/cab-simples.webp', 'van', 2);

const car3 = new carForRent('Chevrolet', 'Camaro Cupe', 300, true, '../assest/imagenes/rental_car/cvrlt/camaro-interior1.png', 'sport-car', 3);

const car4 = new carForRent('Chevrolet', 'Tahoe', 200, true, '../assest/imagenes/rental_car/cvrlt/CHEVROLET_TAHOE_2016.webp', 'family-van', 4);

const car5 = new carForRent('Chevrolet', 'Cruze Final', 100, true, '../assest/imagenes/rental_car/cvrlt/chevrolet-cruze-final.webp', 'family-car', 5);

const car6 = new carForRent('Chevrolet', 'Corsa Classic', 100, true, '../assest/imagenes/rental_car/cvrlt/corsa-classic.webp', 'family-car', 6);

const car7 = new carForRent('Chevrolet', 'Camaro Cupe', 300, true, '../assest/imagenes/rental_car/cvrlt/novo-camaro-cupe.webp', 'sport-car', 7);

const car8 = new carForRent('Ford', 'Expedition', 100, true, '../assest/imagenes/rental_car/ford/ford-expedition.webp', 'family-car', 8);

const car9 = new carForRent('Ford', 'Focus', 200, true, '../assest/imagenes/rental_car/ford/ford-focus.jpg', 'family-van', 9);

const car10 = new carForRent('Ford', 'Mustang', 300, true, '../assest/imagenes/rental_car/ford/ford-mustang.webp', 'sport-car', 10);

const car11 = new carForRent('Ford', 'Mustang', 300, true, '../assest/imagenes/rental_car/ford/ford-mustang-r.webp', 'sport-car', 11);

const car12 = new carForRent('Ford', 'Ranger', 200, true, '../assest/imagenes/rental_car/ford/ford-ranger.png', 'van', 12);

const car13 = new carForRent('Ford', 'Ranger Simple Cabin', 200, true, '../assest/imagenes/rental_car/ford/Ford-Ranger-Cabina-Simple.jpg', 'van', 13);

const car14 = new carForRent('Ford', 'Ranger Raptor', 300, true, '../assest/imagenes/rental_car/ford/Ford-Ranger-Raptor.jpg', 'van', 14);

const car15 = new carForRent('Volkswagen', 'Amarok', 200, true, '../assest/imagenes/rental_car/vkwgn/amarok.png', 'van', 15);

const car16 = new carForRent('Volkswagen', 'Nivus', 200, true, '../assest/imagenes/rental_car/vkwgn/volk-nivus.webp', 'family-van', 16);

const car17 = new carForRent('Volkswagen', 'Polo', 100, true, '../assest/imagenes/rental_car/vkwgn/vw-polo.jpg', 'family-car', 17);

const car18 = new carForRent('Volkswagen', 'Sciroco', 300, true, '../assest/imagenes/rental_car/vkwgn/vw-sciroco.webp', 'sport-car', 18);

const car19 = new carForRent('Volkswagen', 'Tiguan', 200, true, '../assest/imagenes/rental_car/vkwgn/vw-tiguan.jpg', 'family-van', 19);

const car20 = new carForRent('Volkswagen', 'Vento', 100, true, '../assest/imagenes/rental_car/vkwgn/vw-vento.png', 'family-car', 20);


const carsArray = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, car16, car17, car18, car19, car20];

const carsArrayJSON = JSON.stringify(carsArray);

localStorage.setItem('carsArray', carsArrayJSON);

const storedCarsArrayJSON = localStorage.getItem('carsArray');
const storedCarsArray = JSON.parse(storedCarsArrayJSON);

const container = document.getElementById('carsForRent');

if(container) {
    storedCarsArray.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add("carCont");
        carElement.innerHTML = `<div class="img-cont"><img src="${car.img}"                        alt="${car.brand} ${car.model}"></div>
                                <p><b> ${car.brand}</b></p>
                                <p> ${car.model}</p>
                                <p>Price: $${car.price} /Day</p>
                                <p> ${car.availability ? 'Available' : 'Not Available'}</p>
                                <button type="button" id="${car.id}" class="rentNow" onclick="rentNow(${car.id})">Rent Now</button>
                                `;
        container.appendChild(carElement);
    });
}

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

window.onload = function (user) {
    const savedSessionStatus = sessionStorage.getItem('sessionStatus');
    
    if (savedSessionStatus === 'true') {
        // La sesión está iniciada
        sessionStatus = true;

        const savedUsername = sessionStorage.getItem('username');
        // Actualizar la interfaz según el estado de la sesión
        let loggedInUser = document.getElementById('loggedInUser');
        let userLogged = document.getElementById('userLogged');
        let usersLogReg = document.getElementById('usersLogReg');

        loggedInUser.style.display = "flex";
        usersLogReg.style.display = "none";

        // Puedes mostrar el nombre de usuario si lo tienes almacenado
        userLogged.innerHTML = savedUsername.charAt(0).toUpperCase() + savedUsername.slice(1).toLowerCase();
    
    }

    const selectedCarId = sessionStorage.getItem('selectedCarId');

    // Usa el ID para obtener la información del automóvil desde storedCarsArray
    const selectedCar = storedCarsArray.find(car => car.id === parseInt(selectedCarId));

    // Haz lo que necesites con la información del automóvil seleccionado
    if (selectedCarContainer) {
        const selectedCarContainer = document.getElementById('selectedCarContainer');
        
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
                                    <input type="text" class="totalPrice"  readonly></input>
                                    </div>
                                    <div>
                                    <button class="back" onclick="window.history.back()">Back</button>
                                    <button onclick="goToPay()">Go to pay</button></div>
                                    </div>`;
                                    
            selectedCarContainer.appendChild(carElement);
            calculateTotalPrice();
        }
   
        
    } else {
        console.error('Car not found.');
    }

   
};

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
    if (selectedCar) {
        console.log('Automóvil encontrado:', selectedCar);

        // Intenta actualizar la disponibilidad
        selectedCar.availability = false;

        // Imprime el array de autos almacenados después del cambio
        console.log('Array de autos después de la actualización:', storedCarsArray);
    } else {
        console.error('Automóvil no encontrado con el ID:', selectedCarId);
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
            img.style.marginBottom = '10px'; // Ajusta según sea necesario
    
            title.parentNode.insertBefore(img, title);
        },
    });



    setTimeout(function() {
        window.history.back();
    }, 2500);
}
//FILTRO ASIDE
// Obtiene todos los elementos con la clase 'checkbox'
let checkboxes = document.querySelectorAll('.checkbox');

function performSearch() {
    // Obtén los elementos seleccionados
    let selectedBrands = document.querySelectorAll('.filter-item.Brand .checkbox.checked');
    let selectedTypes = document.querySelectorAll('.filter-item.Type .checkbox.checked');
    let selectedAvailability = document.querySelectorAll('.filter-item.Availability .checkbox.checked');

    // Filtra los autos según los elementos seleccionados
    let filteredCars = storedCarsArray.filter(car => {
        const brandFilter = selectedBrands.length === 0 || Array.from(selectedBrands).some(filter => car.brand.toLowerCase() === filter.id);
        const typeFilter = selectedTypes.length === 0 || Array.from(selectedTypes).some(filter => car.type.toLowerCase() === filter.id);
        const availabilityFilter = selectedAvailability.length === 0 || Array.from(selectedAvailability).some(filter => (car.availability && filter.id === 'available') || (!car.availability && filter.id === 'notAvailable'));

        return brandFilter && typeFilter && availabilityFilter;
    });

    // Limpia el contenedor de autos
    container.innerHTML = '';

    // Muestra los autos filtrados
    filteredCars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add("carCont");
        carElement.innerHTML = `<div class="img-cont"><img src="${car.img}" alt="${car.brand} ${car.model}"></div>
                                <p><b> ${car.brand}</b></p>
                                <p> ${car.model}</p>
                                <p>Price: $${car.price} /Day</p>
                                <p> ${car.availability ? 'Available' : 'Not Available'}</p>
                                <button type="button" class="rentNow" onclick="rentNow(${car.id})">Rent Now</button>
                                `;
        container.appendChild(carElement);
    });
}

// Modifica la función que maneja los clics en los checkboxes
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
        this.classList.toggle('checked');
        // Después de cada clic, realiza la búsqueda
        performSearch();
    });
});






