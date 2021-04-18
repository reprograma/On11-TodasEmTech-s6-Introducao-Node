# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
O CRUD utiliza os métodos HTTP POST e GET.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
O PUT é usado para se fazer uma atualização completa do resurso como.
O PACTCH é utilizado para atualizar apenas um subconjuto de dados do recurso.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
Idempotência é é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial. Um método HTTP idempotente é um método HTTP que pode ser chamado muitas vezes sem resultados diferentes. Não importa se o método é chamado apenas uma vez ou dez vezes.
Quando se fala em idempotência em API, quer dizer que os verbos: GET, PUT, DELETE, HEAD e OPTIONS são idempotentes. Mas, o POST não é.

5) Cite alguns diferentes padrões de projetos de software:
-Mvc (Model View Controler)
-Dependency Injection (Injeção de dependência)