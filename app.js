//const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo} = require('./multiplicar/multiplicar');

let base = 'abv';


crearArchivo(base).then((archivo) => {
    console.log(`Archivo creado: ${archivo}`);
}).catch((err) => {
    console.log(err);
});

