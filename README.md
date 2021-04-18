# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

Abra o PullRequest Respondendo as seguintes questões:
1) Qual a relação entre os métodos HTTP e o CRUD?
Create (criar), Read (ler), Update (atualizar) e Delete (excluir) – as iniciais em inglês formam CRUD – são as quatro funções básicas que geralmente os sistemas que manipulam banco de dados devem poder executar.
  O HTTP tem uma relação com o CRUD no processo de criação de APIs, utilizando-se do método (GET, POST, PUT, PATCH e DELETE), que se relacionam conforme abaixo:
  
  Update: PUT
  Delete: Delete
  Create: POST 
  Read: GET
 

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
 Os métodos  HTTP PUT e PATCH são usados para indicar um requisição de alteração de dados.

  PUT: Requisita que um entidade seja armazenada embaixo da URI fornecida. 
  Se a URI se refere a um recurso que já existe, ele é modificado; 
  Se a URI não aponta para um recurso existente, então o servidor pode criar o recurso com essa URI.

   Geralmente, ao usar-se o PUT, fica legível que a alteração do dado será com referência a entidade completa.  

  Exemplo: (/user/2021);
  Resultado:  {'id': 2021, 'name': 'Amanda', 'idade': 29, 'documento': '086.156.1xx-xx'}
   PATCH: Usado para aplicar modificações parciais a um recurso.

    O PATCH é usado para atualização parcial, quando você não quer mandar o payload completo.   

   Exemplo:  (/user/2021) :

  Resultado: {'name': 'Amanda'}


3) Assim como na aula, apresente os dados dos JSONs no console

No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.
4) Defina o conceito de idempotência e como uma API pode ser idempotente

A idempotência é a propriedade de operar várias vezes sem mudar o valor do resultado após a aplicação inicial. 

Uma API é considerada idempotente, se o resultado alcançado for atingido conforme fora pretendido, em servidor de formar idêntica em todas as suas solicitações. Neste caso as solicitações podem ser realizadas repetidamente, mesmo com o retorno de falha o cliente consegue ler a resposta do servidor, sem alterar o estado do servidor. Os métodos idempotente quando implementados corretamente são o GET, HEAD, PUT, e DELETE, e todos os métodos seguros.

5) Cite alguns diferentes padrões de projetos de software

Padrões de projeto podem ser descritos como uma solução testada para um determinado problema, compondo uma solução que fora utilizada para resolver um problema específico. A aplicação de um modelo padrão é documentada e pode ser adaptado integralmente ou de acordo com a necessidade de uma solução, considerando sua eficácia. 
Alguns exemplos de padrões;
	Padrões de Criação (Creational)
     Abstract Factory
     Builder
     Factory Method
     Prototype
     Singleton
	Padrões de Estrutura (Structural)
     Adapter 
     Bridge 
     Composite
     Decorator
     Facade
     Flyweight
     Proxy
     Padrões de Comportamento (Behavioral)
    Chain of Responsability 
    Command
    Interpreter
    Iterator