import { usuarios } from "../models/ModelUsuario";

export function login() {
    let loginUsuario = document.getElementById("login-usuario").value;
    let loginContrasena = document.getElementById("login-contrasena").value;
    console.log(usuarios);
    usuarios.some(function (index) {
      // console.log(index)
      if (loginUsuario == index.usuario && loginContrasena == index.contrasena) {
        window.location.href = "/views/pages/viewCredito.html";
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