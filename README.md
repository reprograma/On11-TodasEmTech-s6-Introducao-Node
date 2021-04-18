# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?
São os verbos http que que determinam as as requisições. CRUD singnifica Create Read Update Delete, e no CRUD 
normalmente usamos os os verbos gttp Get, Put, patch e Delete.

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.
   O PUT é ultilizado parar criar os dados ou para atualizar os dados por inteiro.
   Por exemplo se tenho um usuario e quero mudar o nome dele nos dados e uso o PUT, todos os
   outros dados relacionados a esse cliente precisam ser reenviados e serão atualizados.

   O PATCH é ultilizado para atualizar dados especificos, usando o PATCH eu conseguiria atualizar apenas o 
   nome do cliente em seus dados.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

Metodos idempotentes são aqueles que podem ter varias requisições feitas em sequência 
atingindo o mesmo resultado e sem alterar o estado do servidor. Em API's temos o metodo GET por exemplo.

5) Cite alguns diferentes padrões de projetos de software

com varias subdivisões os padrões são divididos em 3 categorias basicas: Criacionais, estruturais e behaviorais.

