/*
Qual a relação entre os métodos HTTP e o CRUD?

Quando acessamos um site na web o navegador envia uma requisição HTTP para o servidor, quando o servidor verifica se pode atender ao pedido e quando encontra envia os arquivos em uma resposta que o navegador interpreta e mostra o site na tela. O CRUD se relaciona com o HTTP pois ele representa as 4 operações básicas que um sistema deve possuir operações estão dentro dos métodos HTTP.

2 – Comente a diferença entre PUT e PATCH

Quando eu quero fazer uma requisição para modificar um recurso, usando o PUT irei modificar todos os dados do recurso. Já o PATCH é usado quando a alteração é em alguns dados do recurso, o patch não possibilita a criação de um novo recurso por exemplo e no PUT essa criação pode ser feita.

4 – Defina o conceito de idempotência e como uma API pode ser idempotente.
A idempotência significa que ao aplicar uma operação uma vez ou várias vezes tem o mesmo efeito sem alterar o resultado, ou seja é a propriedade de fazer algo duas vezes e o resultado permanecerá o mesmo, por exemplo 2 x 0 = 0 porque sabemos que todo número multiplicado por 0 é igual a zero e como isso não muda esse é um exemplo de idempotência.  Quando executamos um método HTTP várias vezes e nele há uma mudança então ele não é idempotente, logo ele não é seguro. Uma API pode ser idempotente se toda vez que eu fizer um request eu obter o mesmo resultado através do método utilizado.

5 –Cite alguns diferentes padrões de projetos de software 
Padrões de Criação, Padrões Estruturais, Padrões Comportamentais







*/