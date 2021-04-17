# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
    Enteni CRUD como sendo uma forma para organizar as operações básicas, que são: Criar,ler,atualizar e deletar. Sendo assim, quando se está fazenod um projeto é necessário seguir o CRUD, dai vem a relação dele com os metodos do HTTP, pois se fizermos uma associção dos 4 metodos principais do HTTP, vamos chegar ao que é indicado no CRUD.
    Create -> POST 
    Read   -> GET
    Update -> PUT
    Delete -> Delete

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
    O PUT deve ser usado quando se deseja substituir todos os atuais dados do recurso de destino pelos novos dados passados pela requisição.Atualização total com apenas uma requisição. O PATCH já funciona alterações parciais, com o PATCH você pode modificar apenas uma parte do recurso por requisição. 

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente.
    Idempotência é quando o você obtem o mesmo resultado independente
    de quantas requisições foram realizadas.Par auma boa idempotência é importante observar o uso dos métodos. Métodos seguros vão garantir que o estados da aplicação não vai alterar independente 
    do número de requisições e já os métodos não seguros não possuem essa gantia, são métodos que alteram conforme requisições são feitas com eles. 

5) Cite alguns diferentes padrões de projetos de software