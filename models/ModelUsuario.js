import { usuarios } from "../models/ModelUsuario.js";
export function login() {
  console.log(usuarios);
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
  usuarios.push(newRegistro)
  console.log(usuarios);
}