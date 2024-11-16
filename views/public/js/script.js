import { expresionesRegulares } from "../../../helpers/expresiones.js";

// console.log(expresionesRegulares.nombre);

document
    .querySelector("#btnFormRegistro")

    .addEventListener("click", function () {
        document.querySelector("#form-login").style.display = "flex";
        document.querySelector("#form-register").style.display = "none";
    });
document.querySelector("#btnFormLogin").addEventListener("click", function () {
    document.querySelector("#form-login").style.display = "none";
    document.querySelector("#form-register").style.display = "flex";
});
let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("keyup", validarFormulario);
}
function validarFormulario(e) {

    // console.log(e.target.name);
    switch (e.target.name) {

        case "register-nombre":

            if (expresionesRegulares.nombre.test(e.target.value)) {
                console.log("Correcto")

                document.getElementById("register-nombre").classList.add("correcto");
                document.getElementById("register-nombre").classList.remove("incorrecto");
                document.getElementById("mensaje-nombre").textContent = ""
                (e.target.value);
            } else {

                document.getElementById("register-nombre").classList.add("incorrecto");
                document.getElementById("register-nombre").classList.remove("correcto");
                document.getElementById("mensaje-nombre").textContent = "Solo se permiten mayusculas";
            }
            break;

        case "register-usuario":

            if (expresionesRegulares.usuario.test(e.target.value)) {
                document.getElementById("register-usuario").classList.add("correcto");
                document.getElementById("register-usuario").classList.remove("incorrecto");
                document.getElementById("mensaje-usuario").textContent = ""
                
            } else {
                document.getElementById("register-usuario").classList.add("incorrecto");
                document.getElementById("register-usuario").classList.remove("correcto");
                document.getElementById("mensaje-usuario").textContent = "solo minusculas y una longitud entre 4 y 10 caracteres"
                // document.getElementById("mensaje-usuario").textContent =
                //   "El nombre solo puede ir en minúsculas y debe tener entre 4 y 10 caracteres";
            }
            break;

        case "register-correo":
            if (expresionesRegulares.correo.test(e.target.value)) {
                document.getElementById("register-correo").classList.add("correcto");
                document.getElementById("register-correo").classList.remove("incorrecto");
                (e.target.value);
                console.log("correcto")
            } else {
                document.getElementById("register-correo").classList.add("incorrecto");
                document.getElementById("register-correo").classList.remove("correcto");


            }
            break;
        case "register-contrasena":
            if (expresionesRegulares.contraseña.test(e.target.value)) {
                document.getElementById("register-contrasena").classList.add("correcto");
                document.getElementById("register-contrasena").classList.remove("incorrecto");
                (e.target.value);
                console.log("correcto")
            } else {
                document.getElementById("register-contrasena").classList.add("incorrecto");
                document.getElementById("register-contrasena").classList.remove("correcto");
                console.log("solo mayuscula")
            }
            break;

        case "register-confirmar":
            if (e.target.value === document.getElementById('register-contrasena').value) {
                document.getElementById("register-confirmar").classList.add("correcto");
                document.getElementById("register-confirmar").classList.remove("incorrecto");
                
                console.log("correcto")
            } else {
                document.getElementById("register-confirmar").classList.add("incorrecto");
                document.getElementById("register-confirmar").classList.remove("correcto");
                console.log("solo mayuscula")
            }
            break;
        default:

    }
}

// console.log(document.querySelectorAll('input'))
// let arreglo = [1, 'jaime', true, function () { }, { nombre: 'jaime' }, []]
// console.log(arreglo)
// console.log(arreglo[4])
// console.log(arreglo[2])
