import { Console } from 'node:console';
import { writeFileSync } from 'node:fs';

export const crearTabla = async(base, listar=false, hasta=null) =>{
    

    try {
        let tablaString = `# _TABLA DEL ${base}_ \n`;

        if(hasta>0){
            console.log(`******************* HASTA ************* : ${hasta}`);
            for (let i = 0; i < (hasta+1); i++) {
    
                tablaString += `## *${base}* X _${i}_ ===== *${base * i}* \n`;
                
            }
        }else{
            for (let i = 0; i < 11; i++) {
    
                tablaString += `## *${base}* X _${i}_ ===== *${base * i}* \n`;
                
            }
        }
        
        let nombreArchivo = `./salida/tabla-del-${base}.md`;
        

        //Check if listar isTrue
        (listar)? console.log(tablaString): console.log('sin listar'); 
        writeFileSync( nombreArchivo , tablaString);
        tablaString =  `# _TABLA DEL ${base}_ \n`   
        return nombreArchivo;
    } catch (error) {
        return error;
    }
    
    
}

