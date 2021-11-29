const fs = require("fs"); 
const colors = require("colors"); 

const crearArchivo = async (base = 5, listar=false, h = 20) => {

    try {

      
        let salida = '' 
 
         for (let i = 1; i <= h ; i++) {
        salida +=`5 x ${i} = ${base * i}  \n`;
     
        }

        if(listar){
            console.log("Tabla del:", base);
            console.log(salida);
        }
 
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
 
        
    } catch (error) {
        console.log("Ha ocurrido un error, error");
    }
    
}
 

 module.exports = {
     crearArchivo
 }