export const expresionesRegulares = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ\s]+$/,
    usuario: /^[a-z]{4,10}$/,
    contraseña:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
