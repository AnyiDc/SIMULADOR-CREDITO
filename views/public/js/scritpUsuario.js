import { login, register } from "../../../controllers/controllerUsuario.js";

document.getElementById("btnRegistrar").addEventListener("click", register);
document.getElementById("btnLogin").addEventListener("click", login);