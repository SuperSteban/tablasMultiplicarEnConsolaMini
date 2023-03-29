import { crearTabla } from './helpers/multiplicar.js';
import { arv } from './config/yargs.js';


console.clear();

console.log('base: yargs', arv.base);


crearTabla(arv.b, arv.l, arv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado!!!'))
    .catch(err => console.log(err)); 