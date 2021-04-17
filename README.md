# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

Exercicio

Resolução dos exercicios:

Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
O que é um CRUD: CRUD (acrónimo do inglês Create, Read, Update and Delete) são as quatro operações básicas (criação, consulta, atualização e destruição de dados) utilizadas em bases de dados relacionais (RDBMS) fornecidas aos utilizadores do sistema. O HTTP tem uma relação com o CRUD no processo de criação de APIs, onde os recursos são manipulados através de HTTP, utilizando-se do método (GET, POST, PUT, PATCH e DELETE). O princípio RESTful possui estratégias para as ações do CRUD (CRUDAR, LER, ATUALIZAR e EXCLUIR) que se relaciona diretamente através de métodos do HTTP de forma mapeada.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo. PUT: é quando tu faz uma requisição a um recurso para modificá-lo.

Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.
Exemplo: (/usuario/1234) :
Resultado: {'id': 1234, 'name': 'Joao', 'idade': 25, 'documento': '123.321.12-X'}
O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.
Exemplo: (/usuario/1234) :
Resultado: {'name': 'João'}

3) Assim como na aula, apresente os dados dos JSONs no console

Nao entendi onde que era para colocar o código, pois tentei na pagina do colors-rgb.json e ficou dando erro

No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.


4) Defina o conceito de idempotência e como uma API pode ser idempotente

Idempotência é a propriedade que algumas operações têm de poderem ser aplicadas várias vezes sem que o valor do resultado se altere após a aplicação inicial.

Uma API é considerada idempotente, se o resultado para ser alcançado conforme for pretendido, em servidor de formar idêntica em todas as suas ocorrências. Neste caso como a execução pode ser executada repetidamente, mesmo com o retorno de falha, o cliente consegue ler a resposta do servidor, sem alterar o estado do servidor. Os métodos idempotente quando implementados corretamente são o GET, HEAD, PUT, e DELETE, e todos os métodos seguros.


5) Cite alguns diferentes padrões de projetos de software

Existem em torno de 23 padrões, divididos nas seguintes três categorias:

Criacionais: padrões que propõem soluções flexíveis para criação de objetos. São eles: Abstract Factory, Factory Method, Singleton, Builde, Prototype.

Estruturais: padrões que propõem soluções flexíveis para composição de classes e objetos. São eles: Proxy, Adapter, Facade, Decorator, Bridge, Composite e Flyweight.

Comportamentais: padrões que propõem soluções flexíveis para interação e divisão de responsabilidades entre classes e objetos. São eles: Strategy  Observer, Template Method, Visitor, Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento e State.


