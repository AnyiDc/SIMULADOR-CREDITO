import { usuarios } from "../models/ModelUsuario.js";

export function login() {
  let loginUsuario = document.getElementById("login-usuario").value;
  let loginContrasena = document.getElementById("login-contrasena").value;
  console.log(usuarios);
  usuarios.some(function (index) {
    // console.log(index)
    if (loginUsuario == index.usuario && loginContrasena == index.contrasena) {
      let timerInterval;
      Swal.fire({
        title: "Bienvenido: " + index.nombre,
        html: "Será redireccionado en: <b></b> milliseconds.",
        timer: 4000,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          window.location.href = "/views/pages/viewCredito.html";
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario y/contraseña incorrecto o no existe",
        icon: "error",
      });
    }
  });
}

export function register() {
  let registroNombre = document.getElementById("register-nombre").value;
  let registroUsuario = document.getElementById("register-usuario").value;
  let registroCorreo = document.getElementById("register-correo").value;
  let registroContrasena = document.getElementById("register-contrasena").value;
  let registroConfirmar = document.getElementById("register-confirmar").value;
  let newRegistro = {
    nombre: registroNombre,
    usuario: registroUsuario,
    correo: registroCorreo,
    contrasena: registroContrasena,
    confirmar: registroConfirmar,
  };
  usuarios.unshift(newRegistro);
  document.getElementById("form-register").style.display = "none";
  document.getElementById("form-login").style.display = "flex";
  console.log(usuarios);
}

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros)
// numeros.pop()
// console.log(numeros)
// numeros.pop()
// console.log(numeros)
// numeros.shift()
// console.log(numeros)
// numeros.shift()
// console.log(numeros)
// numeros.shift()
// console.log(numeros)