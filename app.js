
const { crearArchivo } = require("./helpers/multiplicar.js"); 
const argv = require("./config/yargs.js"); 



//console.log(process.argv);


//const [,,arg3 = 9] = process.argv; 
//console.log(arg3);
//const [, base = 5] = arg3.split("="); 
//console.log(base);

//console.log(process.argv);
//console.log(argv);

//console.log("base de yargs", argv.base);

 //const base = 3;
 
 
 crearArchivo(argv.base, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, "creado"))
.catch(err => console.log(err)); 

