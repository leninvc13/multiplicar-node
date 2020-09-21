
let fs = require('fs');


let count = 10;

let data = '';

let crearArchivo = (base) =>{
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject('No es un numero');
            return;
        }
        for (let index = 1; index <= count; index++) {
            let resultado = base * index;
            data +=`${base} * ${index} = ${resultado} \n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if(err){
                reject(err);
            }
            else{
                resolve(`tabla-${base}.txt`);
            }
                
        });

    });
}

module.exports = {
        crearArchivo
}


