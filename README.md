# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

Resposta:
O HTTP tem uma relação com o CRUD no processo da criação de APIs, onde os recursos necessários são manipulados através de solicitações HTTP, utilizando-se do método (GET,POST,PUT,PATCH e DELETE). O princípio RESTful possui estratégias para as ações do CRUD (CREATE,READ,UPDATE e DELETE) que se relaciona diretamente através de métodos do HTTP de forma mapeada.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

Resposta:
O PUT troca os por completo, os dados atuais do recurso de destino pelos dados atribuídos na requisição. 
Ex: (/user/402040) :
Saída: {
'id': 402040, 
'name': 'Maria', 
'idade': 45, 
}
O PATCH realizada alterações parciais em um recurso, permite a modificar apenas uma parte do recurso.
Ex: (/user/402040) :
Saída: {'name': 'Maria'}

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

Resposta:

A idempotência é a propriedade de operar várias vezes sem mudar o valor do resultado após a aplicação inicial. 

Uma API é considerada idempotente, se o resultado alcançado for atingido conforme fora pretendido, em servidor de formar idêntica em todas as suas solicitações. Neste caso as solicitações podem ser realizadas repetidamente, mesmo com o retorno de falha o cliente consegue ler a resposta do servidor, sem alterar o estado do servidor. Os métodos idempotente quando implementados corretamente são o GET, HEAD, PUT, e DELETE, e todos os métodos seguros.

5) Cite alguns diferentes padrões de projetos de software

Resposta:
Padrões de projeto podem ser descritos como uma solução testada para um determinado problema, compondo uma solução que fora utilizada para resolver um problema específico. A aplicação de um modelo padrão é documentada e pode ser adaptado integralmente ou de acordo com a necessidade de uma solução, considerando sua eficácia. 
Alguns exemplos de padrões;
•	Padrões de Criação (Creational)
     Abstract Factory
     Builder
     Factory Method
     Prototype
     Singleton
•	Padrões de Estrutura (Structural)
     Adapter 
     Bridge 
     Composite
     Decorator
     Facade
     Flyweight
     Proxy 
•	Padrões de Comportamento (Behavioral)
    Chain of Responsability 
    Command
    Interpreter
    Iterator
    Mediator
    Memento
    Observer
    State 
    Strategy 
    Template Method
    Visitor
