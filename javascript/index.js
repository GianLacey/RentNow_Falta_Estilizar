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



function CarForRent(brand, model, price, availability, img, type) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.availability = availability;
    this.img = img;
    this.type = type;
}

//Chevrolete Car
const car1 = new CarForRent('Chevrolet', 'S10 Double Cabin', 200, true, './assest/imagenes/rental_car/cvrlt/cab-dupla.webp', 'van');

const car2 = new CarForRent('Chevrolet', 'S10 Simple Cabin', 200, true, './assest/imagenes/rental_car/cvrlt/cab-simples.webp', 'van');

const car3 = new CarForRent('Chevrolet', 'Camaro Cupe', 300, true, './assest/imagenes/rental_car/cvrlt/camaro-interior1.png', 'sport-car');

const car4 = new CarForRent('Chevrolet', 'Tahoe', 200, true, './assest/imagenes/rental_car/cvrlt/CHEVROLET_TAHOE_2016.webp', 'family-van');

const car5 = new CarForRent('Chevrolet', 'Cruze Final', 100, true, './assest/imagenes/rental_car/cvrlt/chevrolet-cruze-final.webp', 'family-car');

const car6 = new CarForRent('Chevrolet', 'Corsa Classic', 100, true, './assest/imagenes/rental_car/cvrlt/corsa-classic.webp', 'family-car');

const car7 = new CarForRent('Chevrolet', 'Camaro Cupe', 300, true, './assest/imagenes/rental_car/cvrlt/novo-camaro-cupe.webp', 'sport-car');

const car8 = new CarForRent('Ford', 'Expedition', 100, true, './assest/imagenes/rental_car/ford/ford-expedition.webp', 'family-car');

const car9 = new CarForRent('Ford', 'Focus', 200, true, './assest/imagenes/rental_car/ford/ford-focus.jpg', 'family-van');

const car10 = new CarForRent('Ford', 'Mustang', 300, true, './assest/imagenes/rental_car/ford/ford-mustang.webp', 'sport-car');

const car11 = new CarForRent('Ford', 'Mustang', 300, true, './assest/imagenes/rental_car/ford/ford-mustang-r.webp', 'sport-car');

const car12 = new CarForRent('Ford', 'Ranger', 200, true, './assest/imagenes/rental_car/ford/ford-ranger.png', 'van');

const car13 = new CarForRent('Ford', 'Ranger Simple Cabin', 200, true, './assest/imagenes/rental_car/ford/Ford-Ranger-Cabina-Simple.jpg', 'van');

const car14 = new CarForRent('Ford', 'Ranger Raptor', 300, true, './assest/imagenes/rental_car/ford/Ford-Ranger-Raptor.jpg', 'van');

const car15 = new CarForRent('Volkswagen', 'Amarok', 200, true, './assest/imagenes/rental_car/vkwgn/amarok.png', 'van');

const car16 = new CarForRent('Volkswagen', 'Nivus', 200, true, './assest/imagenes/rental_car/vkwgn/volk-nivus.webp', 'family-van');

const car17 = new CarForRent('Volkswagen', 'Polo', 100, true, './assest/imagenes/rental_car/vkwgn/vw-polo.jpg', 'family-car');

const car18 = new CarForRent('Volkswagen', 'Sciroco', 300, true, './assest/imagenes/rental_car/vkwgn/vw-sciroco.webp', 'sport-car');

const car19 = new CarForRent('Volkswagen', 'Tiguan', 200, true, './assest/imagenes/rental_car/vkwgn/vw-tiguan.jpg', 'family-van');

const car20 = new CarForRent('Volkswagen', 'Vento', 100, true, './assest/imagenes/rental_car/vkwgn/vw-vento.png', 'family-car');


const carsArray = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, car16, car17, car18, car19, car20];

const carsArrayJSON = JSON.stringify(carsArray);

localStorage.setItem('carsArray', carsArrayJSON);

const storedCarsArrayJSON = localStorage.getItem('carsArray');
const storedCarsArray = JSON.parse(storedCarsArrayJSON);

const container = document.getElementById('carsForRent');

storedCarsArray.forEach(car => {
    const carElement = document.createElement('div');
    carElement.classList.add("carCont");
    carElement.innerHTML = `<div class="img-cont"><img src="${car.img}"                        alt="${car.brand} ${car.model}"></div>
                            <p><b> ${car.brand}</b></p>
                            <p> ${car.model}</p>
                            <p>Price: $${car.price} /Day</p>
                            <p> ${car.availability ? 'Available' : 'Not Available'}</p>
                            <button type="button" class="rentNow">Rent Now</button>
                            `;
    container.appendChild(carElement);
});

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
                                <button type="button" class="rentNow">Rent Now</button>
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






