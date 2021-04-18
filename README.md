# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
Geralmente o método HTTP é o GET ou POST. Que são um tipo solução ou qualquer operação que o cliente deseja realizar. Quando o cliente inicia a comunicação e o servidor responde, o HTTP tem o papel entre o cliente e o servidor. Assim o papel do HTTP é o de estabelecer regras de comunicação entre o modelo Cliente-Servidor que funciona na Web. O HTTP. Ele é responsável por definir a forma de como os dados são trafegados na rede através de várias regras. O protocolo HTTP garante a conectividade. 
Já o método do CRUD , em entendimento geral dos sistemas é o GET = request, POST = create, Put = update, DELETE = delete. Que resumidamente dispõe que as solicitações GET são somente leitura, o POST são usadas para criar ou adicionar um novo item a URL. Já o PUT são usadas para modificar ou substituir os dados atuais pelos dados solicitados. E por último a solicitação DELETE que é usada para excluir os dados do local e do caminho solicitado pelo cliente.


2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
O PUT e o PATCH têm por objetivo a atualização de um recurso.
O put eu entendi que é um método para a modificação do recurso em que o cliente (segundo a Analu, é a interface que os usuários interagem, é essa camada que é responsável de solicitar
serviços e informações de um ou mais servidores.  envia os dados completos para sua atualização e atualiza o recurso como um todo. 
Exemplo: (/aluna/1234) 
// {'id': 1234, 'nome': ' Maria ', 'idade': 35, 'cpf': '345.854.457'}

Já o patch seria um método para a atualização parcial de um recurso. No patch você usa quando vai alterar alguns dados de um recurso. Ele não pode criar um novo recurso como é feito no put.
(/aluna/1234) 
//{'nome': "Maria'}


3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente
Idempotência, em alguns métodos, como o GET, podem ser chamados diversas vezes seguidas sem problema nenhum: a resposta será sempre a mesma. Isso porque quando fazermos uma requisição do tipo GET não estamos alterando nada no servidor, somente consultando informações. Os métodos que não alteram nada no servidor e que podemos chamar várias vezes. Um método de solicitação é considerado "idempotente" se o efeito pretendido em o servidor de várias solicitações idênticas com esse método é o mesmo que o efeito para um único pedido. Dos métodos de solicitação  definido por esta especificação, PUT, DELETE e métodos de solicitação segura são idempotentes.Assim a idempotência em API’s REST implicam que o  GET, PUT, DELETE, HEAD e OPTIONS são idempotentes e POST não é idempotente.

5) Cite alguns diferentes padrões de projetos de software.
Os padrões de projetos remetem aquela ideia de Design Patterns que a comunidade menciona. Eles são bem documentados, testados, reutilizáveis em muitas situações diferentes e eficientes e otimiza na rotina de quem coda. Existem três tipos de padrões de design: I)Criacional - a criação das instâncias do objeto; II)Estrutural - a forma como os objetos são projetados; e III)    Comportamental - como os objetos interagem uns com os outros. Citando o Singleton,  Fábrica,  Construtor e  Protótipo. Em nosso caso - aqui na Reprograma – pesquisado para os padrões de projeto para o Node Js.
