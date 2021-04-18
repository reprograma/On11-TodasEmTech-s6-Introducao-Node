# On11-TodasEmTech-s6-Introducao-Node
Turma Online 11 - Todas em Tech | Back-end | 2021 | Introdução à API:
HTTP e NodeJS

## Para o lar
Abra o PullRequest Respondendo as seguintes questões:

1) Qual a relação entre os métodos HTTP e o CRUD?

2) Comente, com exemplos, a diferença entre o PUT e o PATCH.

3) Assim como na aula, apresente os dados dos JSONs no console 
    - No colors-rgb.js apresente o nome da cor e o codigo RGB como no exemplo: "gainsboro - rgb(220, 220, 220, 1)"
    - No estados-cidade.js apresente o nome do Estado, a sigla e todas as cidadades, sem arrays aparentes no console
    - No filmes.js apresente titulo, plot, generos e lingua. Genero e lingua devem ser apresentados em arrays no console.

4) Defina o conceito de idempotência e como uma API pode ser idempotente

5) Cite alguns diferentes padrões de projetos de software

/-------------------------------------------------------------
RESPOSTAS:

1) A relação entre eles é que o CRUD recebe as informações dadas pelo HTTP e faz ações de acordo com cada comando.

/-------------------------------------------------------------

2) A diferença entre PUT e PATCH é que o PUT fará uma alteração mais completa nos dados da API fazendo uma substituição de valores, ou seja, se for preciso alterar um objeto inteiro ou mais, usaremos esse verbo. E o PATCH faz uma alteração parcial, ou seja, quando queremos apenas alterar uma parte do código, devemos utilizá-lo.

/-------------------------------------------------------------

3) ...

/-------------------------------------------------------------

4) Acontece de um método ser idempotente quando uma requisição for igual, podendo ser feita várias vezes sem que o servidor seja sobrecarregado. Apenas o back-end de um servidor poderá informar o status de uma requisição, ocorre também de variar de acordo com o resultado que a API estará naquele momento solicitado.

/-------------------------------------------------------------

5) Os padrões de projeto de software focam na reutilização de soluções, podendo ser aplicado para a resolução de outros problemas; é uma forma de deixar uma padronização e uma forma mais compreensível na leitura dos códigos e também serve para a manutenção mais simples deles, levando em consideração que refatorar e fazer a atualização não é uma tarefa fácil, já podemos considerar que os padrões salvam casos e estão aí pra isso, mas para poder utilizá-los é preciso ter um conhecimento adentro dos projetos, pois existem casos que não precisam. Isso depende da linguagem de que está trabalhando e do tamanho do projeto que estaremos trabalhando.

23 é o total de Padrões de Projeto de Softwares, cotendo neles 3 grupos para diferenciá-los:

- Grupo 1

Creational Patterns: Tratam da construção do objeto e de referência. Esse grupo é importante pois sustenta o princípio mais relevante: programe para interfaces e não para implementações.

Dentro desse grupo temos o Abstract Factory que cria famílias de objetos on the fly com alta flexíbilidade.

- Grupo 2 

Structural patterns: São padrões de projetos de softwares estruturais, que tratam da relação dos objetos e como eles interagem entre si para formares grandes objetos completos.

Aqui encontramos o Flyweigth que compartilha de pequenos recursos para economizar espaço.

- Grupo 3 

Behavioral Patterns: Como o nome já diz, os padrões são comportamentais que tratam da comunicação entre os objetos, especialmente em termos de responsabilidade e de algoritimo.

 E aqui um dos é o Interpreter que define uma gramática e um interpretador.