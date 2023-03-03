const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector(".atm-system__card-input");
const botonrojo = document.querySelector("#btn-cancel");
const opciones = document.querySelector(".atm-system__button");


var cuentas = [
  { nombre: "usuario1", saldo: 200 },
  { nombre: "usuario2", saldo: 290 },
  { nombre: "usuario3", saldo: 67 },
];
console.log (cuentas[0]);
console.log (cuentas[1]);
console.log (cuentas[2]);
var saldo1 = 200
var saldo2 = 290
var saldo3 = 67


const keys = document.querySelector(".atm-system__input-keys");
let pin = [];
let state = "";


const validatePin = (pin_keys) => {
  if (pin_keys.toLocaleString().replaceAll(",", "") === "0000") {
    // Se Convierte el array a string  reemplazando las comas y validamos  el resultado  igual a 0000
    console.log(pin_keys)
    screen.innerText = "Pin ingresado es correcto";
    setTimeout(() => {
      screen.innerText = "BIENVENIDO persona 1 a su BANCO";
      state = "login";
    }, 2500) ;
    setTimeout(() => {
      screen.innerText = "Eliga  BOTON: 1 CONSULTAR saldo";
     
      state = "login";
    }, 3500) ;
    
    opciones.addEventListener("click", function (){
     
      screen.innerText = "... ";
      setTimeout(() => {
        screen.innerText = "Su saldo es:$200.00", saldo1;
        
        console.log (cuentas[0]);
    state = "login";
     }, 2500) ;

    }
    
    )
   
  } else {
    console.log(pin_keys)
    screen.innerText = "Pin ingresado es incorrecto"
    console.log("OPRIMA EL BOTON ROJO")
    setTimeout(() => {
      screen.innerText = "Oprima el botón rojo";
      state = "login";
    }, 2500);
    
    botonrojo.addEventListener("click", function () {
      screen.innerText = "... ";
       setTimeout(() => {
        screen.innerText = "Ingrese su NIP de nuevo";
        state = "login";
      }, 2500) ;
    });
    let pin = [];
let state = "";

 

keys.addEventListener("click", (event) => {
  if (event.target.id) {
    // Sí tiene id va a entrar
    // Se recoge el valor del  id y hace push al array pin
    if (state === "login" && pin.length <= 4) {
      pin.push(event.target.id);
      // función para validar el pin
      if (pin.length === 4) {
        // Validamos la longitud
        validatePin(pin);
      }
    }
  } else {
    console.log("Tecla sin función");
  }
});
}
};




keys.addEventListener("click", (event) => {
  if (event.target.id) {
    // Sí tiene id va a entrar
    // Recogemos el valor de el id y hacemos push al array pin
    if (state === "login" && pin.length <= 4) {
      pin.push(event.target.id);
      // Ejecutamos la función para validar el pin
      if (pin.length === 4) {
        // Validamos la longitud
        validatePin(pin);
      }
    }
  } else {
    console.log("Tecla sin función");
  }
});

inputCard.addEventListener("click", function () {
  screen.innerText = "Validando tarjeta...";
  setTimeout(() => {
    screen.innerText = "Ingrese su pin";
    state = "login";
  }, 2500);
});


window.addEventListener("load", () => {
  screen.innerText = "Bienvenido al ATM";
  setTimeout(() => {
    screen.innerText = "Introduzca su tarjeta";
    state = "login";
  }, 2000);
 

});

