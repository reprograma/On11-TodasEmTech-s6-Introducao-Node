1) Qual a relação entre os métodos HTTP e o CRUD?
    O HTTP é um protocolo de comunicação entre o client e o server.
    CRUD significa "criar, ler, atualizar e excluir" que são as quatro operações básicas de banco de dados. 
    Tanto o método HTTP e o CRUD, tem seus verbos que determinam as ações entre client e server.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
    O put substitui todos os dados do recurso  na requisição.
    O patch aplica modificações parciais em um recurso.

3) Defina o conceito de idempotência e como uma API pode ser idempotente.
    Um método HTTP idempotente é um método HTTP que pode ser chamado muitas vezes sem resultados diferentes. 
    GET, PUT, DELETE, HEAD e OPTIONS são idempotentes.
    POST não é idempotentes porque sua requisição muda o estado do recurso.
    Uma API é idempotente se o resultado dela for bem sucedido independente do numero de vezes que ela for modificada.

4) Cite alguns diferentes padrões de projetos de software
     Factory Method;
     Singleton.


