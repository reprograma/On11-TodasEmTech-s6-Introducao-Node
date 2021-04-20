# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

O CRUD são as siglas de CREAT, READ, UPDATE E DELETE e são utilizadas na referência das operações que são realizadas no banco de dados relacional sendo elas consulta, inclusão, alteração e exclusão dos registros. Os métodos HTTP são métodos de requisição responsáveis por indicar a ações que serão executada para determinados recursos. Os primcipais métodos HTTP são: POST, GET, PUT, PATCH, DELETE. 

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

Para a matematica e a ciência da computação é a propriedade que uma operação têm de poderem ser aplicadas varias vezes e não sofrer alteração no seu resultado. Ao relacionarmos com API's temos que uma API é idempotente quando um método é idempotente ou seja, quando o resultado de uma requisição com sucesso é o mesmo independente das vezes que ela foi executada seus requisitos não são alterados um exemplo de metodo idempotentes GET, PUT, DELETE, como o método POST é de criar um recurso ele não pode ser um método idempotente.

5) Cite alguns diferentes padrões de projetos de software