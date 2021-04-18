1 -  Qual a relação entre os métodos HTTP e o CRUD?
O método CRUD consiste em
C - Create (Criar)
R - Read (Ler)
U - Update (Atualizar)
D - Delete (Deletar)
os dados de um registro.
Com os métodos HTTP, podemos executar um CRUD, sendo:
Create - POST
Read - GET
Update - PUT para Substituir e PATCH para Modificar
Delete - DELETE

2 - Comente, com exemplos, a diferença entre o PUT e o PATCH.
Como já foi comentado, usamos o PUT para substituir e o PATCH para modificar. No PUT, alteramos todos os dados do recurso, enquanto que no PATCH alteramos alguns dados do recurso.
Escolhemos PUT para quando queremos uma atualização completa e PATCH para quando queremos uma atualização parcial.

4 - Defina o conceito de idempotência e como uma API pode ser idempotente
Um método é considerado idempotente se o resultado de uma requisição realizada com sucesso é independente do número de vezes que é executada. Um exemplo, suponha que tenho meu X valendo 0, qualquer alteração que eu fizer nele, o valor sempre continuará o inicial, no caso 0.
Uma API pode ser idempotente quando utiliza métodos idempotentes. Dos métodos HTTP já mencionados nessa atividade, temos que GET, PUT e DELETE são idempotentes, enquanto que POST não é idempotente

5) Cite alguns diferentes padrões de projetos de software
Padrões de Projeto são descrições prontas que dão soluções a problemas repetitivos em projetos.  Os padrões são categorizados em 3 grupos: Padrões de Criação, Padrões Estruturais e Padrões Comportamentais.

Padrões de Criação:
Padrões Estruturais: Os Padrões Estruturais estão diretamente ligados à composição de uma classe, ou seja, como é formada a sua estrutura. Esse tipo de padrão define formas para criar composições ou adicionar comportamentos à um determinado objeto, sem necessariamente precisar alterar o código-fonte da classe que o implementa.

Padrões Estruturais: Os Padrões Estruturais estão diretamente ligados à composição de uma classe, ou seja, como é formada a sua estrutura. Esse tipo de padrão define formas para criar composições ou adicionar comportamentos à um determinado objeto, sem necessariamente precisar alterar o código-fonte da classe que o implementa.

Padrões Comportamentais: Os Padrões Comportamentais, como o próprio nome diz, têm o objetivo de lidar com a forma com que um objeto se comunica com outro(s), sem que eles precisem conhecer muito uns dos outros. A interação entre objetos é um dos pontos principais de um bom projeto de software.