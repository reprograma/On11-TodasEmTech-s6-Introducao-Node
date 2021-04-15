# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
R = O HTTP é  protocolo em que faz a requisição para o Server, no qual executa um retorno. O CRUD são os métodos do bancos de dados (Server) que são: Create, Read, Update e Delete, então para fazer alterações, altualizações e excluir. O http será a ponte da requisição feita pelo Client para alteração no banco de dados com os métodos GET, POST, DELETE.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
R = O PUT e PATCH, são usados para indicar uma modificação, mas existe uma diferença crucial entre ambos, no PUT quando é requisitado a modificação é completa possível criar a partir de uma única  requisição, então ele substitui todos os dados.
Já no PATCH as modificações são parciais. 

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
R = Idempotente: Não importa quantas vezes será feita a requisão o resultado será o mesmo. 
Uma API pode ser idempotente quando aplica corretamente os métodos seguros: GET, HEADER e OPTIONS. E os não seguros: DELETE, PUT e PATCH também são idempotentes.

5) Cite alguns diferentes padrões de projetos de software
R =  Os padrões de projetos são soluções para problemas conhecidos que são recorrentes ligados a programação orientada a objetos, essas soluções são mais eficientes sendo sugestões que podem ser aplicadas em qualquer linguagem pois são universais e ajuda na reutilização do código, ajuda na manutenção e no entendimento do código.
Os grupos:
.Padrões de criação - Tratam da criação do objeto, e o de referencia.
.Padrões estruturais - Tratam da estrutura do objeto como se relacionam entre si
.Padrões de comportamento - Tratam da comunicação entre os objetos.