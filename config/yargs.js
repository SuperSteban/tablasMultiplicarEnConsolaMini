import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const arv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base en la cual se multiplicara',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Imprime en consola la Tabla de multiplicar',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        describe: 'Elige hasta donde quieres que multiplique la base'
    })
    
    .check( (argv, options) =>{
        if(isNaN(argv.b)){
            throw 'Error Capture numero valido'
        }
        if(isNaN(argv.l, options)){
            return true;
        }
        return true;
    })
.argv;
