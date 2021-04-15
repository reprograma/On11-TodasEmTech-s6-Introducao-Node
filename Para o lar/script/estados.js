//No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
var fs = require('fs');
var estados = fs.readFileSync('../Data/estados-cidades.json', 'utf8');

var getEstados = JSON.parse(estados);


for (var i = 0; i < getEstados[0].estados.length; i++) {
    console.log(getEstados[0].estados[i].sigla);
    console.log(getEstados[0].estados[i].nome);
    let cidades = getEstados[0].estados[i].cidades
    for (var j = 0; j < cidades.length ; j++)
        //impressão no console onde não existe quebra de linha
        process.stdout.write(getEstados[0].estados[i].cidades[j] + ", ");
    console.log('\n')
 }