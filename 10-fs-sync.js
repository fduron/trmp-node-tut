const {readFileSync, writeFileSync} = require('fs');
const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

const Afirst = fs.readFileSync('./content/first.txt', 'utf8');
const Asecond = fs.readFileSync('./content/second.txt', 'utf8');
console.log(Afirst, Asecond);

//guardar en un archivo:
writeFileSync('./content/result-file.txt',
    `He aquí el resultado: ${first}, ${second}`,
    //sin parametros, se reemplaza el texto del archivo result-file
    {flag:'a'}); //con este objeto se indica agregar datos al archivo