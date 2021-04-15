let fs = require('fs');
let filmes = fs.readFileSync('../Data/filmes.json', 'utf8');


let getFilmes = JSON.parse(filmes);
let arrayGenero = [];
let arrayLingua = [];
for(itens in getFilmes){
  console.log(getFilmes[itens].Title);
  console.log(getFilmes[itens].Plot);
  
  arrayGenero = getFilmes[itens].Genre; // Colocados  em arrays, e apresentado no console
  arrayLingua = getFilmes[itens].Language; // Colocados em arrays, e apresentado no console
  console.log(arrayGenero);
  console.log(arrayLingua);
}
