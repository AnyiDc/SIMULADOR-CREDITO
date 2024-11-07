// function Persona(nombre, edad, estatura, color) {
//     this.nombre = nombre
//     this.edad = edad
//     this.estatura = estatura
//     this.color = color
//     this.moverse = function (nombre) {
//         this.nombre = nombre
//         console.log(nombre + ' Se movió')
//     }
//     this.expresarse = function () {
//         console.log('Se expresó...')
//     }
// }
// let personaUno = new Persona('Laura', 18, 1.55, 'Blanco')
// let personaDos = new Persona('Daniel', 18, 1.74, 'Blanco')
// let personaTres = new Persona('Anyis', 18, 1.60, 'Blanco')
// personaUno.moverse()
// personaDos.moverse()
// personaTres.moverse()
// console.log(personaUno, personaDos, personaTres)

// let persona = {
//     nombre: 'Juan Felipe',
//     apellido: 'Niño',
//     edad: 19,
//     moverse: function () {
//         console.log('Se esta moviendo...')
//     },
//     direccion: {
//         calle: 23,
//         carrera: 23,
//         interior: 20
//     }
// }

document.querySelector('#btnFormRegistro').addEventListener('click', function () {
    document.querySelector('#form-login').style.display = 'flex'
    document.querySelector('#form-register').style.display = 'none'
})
document.querySelector('#btnFormLogin').addEventListener('click', function () {
    document.querySelector('#form-login').style.display = 'none'
    document.querySelector('#form-register').style.display = 'flex'
})
let inputs = document.getElementsByTagName('input')
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('keyup', validarFormulario)
}
function validarFormulario(e) {
    switch (e.target.name) {
        case 'login-usuario':
            console.log('Este es el input de login usuario')
            break;

        default:
            break;
    }
}

// console.log(document.querySelectorAll('input'))




// let arreglo = [1, 'jaime', true, function () { }, { nombre: 'jaime' }, []]
// console.log(arreglo)
// console.log(arreglo[4])
// console.log(arreglo[2])