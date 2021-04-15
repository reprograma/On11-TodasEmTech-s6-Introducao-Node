# 🧐 Atividade semanal {reprograma}
#### 1) Qual a relação entre os métodos HTTP e o CRUD?
Os métodos HTTP existentes geralmente são associados ao CRUD durante a criação de APIs, como na tabela abaixo:

| Métodos HTTP  |     CRUD      |    
| ------------- |:-------------:|
| GET           |    Read       |
| POST          |    Create     |
| PUT/PATCH     |    Update     |
| DELETE        |    Delete     |

<p>Dependendo da operação feita no CRUD serão usadas nas rotas o equivalente àquele comando desejado. Por exemplo, se eu quiser criar um novo usuário usarei o método POST associado ao Create; já para atualizar a informação usarei PUT (correspondente ao Update no CRUD), e assim sucessivamente conforme mostra a tabela.</p><p>E métodos HTTP e CRUD não são a mesma coisa.</p>

#### 2) Comente, com exemplos, a diferença entre o PUT e o PATCH:

```json
mulheresHistoricas:{ 
'id': 98655, 
'nome': 'Maria de Déa', 
'idade': 23, 
'profissao': 'cangaceira'
} 
```
No método PUT se modifica todas as informações a quem vai se referenciar. Por exemplo, se quisermos modificar o dado acima, colocaríamos o `id: 98655` e se modifica todas as propriedades dele, como `nome, idade, profissao`.

Já no método PATCH podemos ser mais específicos, de forma a selecionarmos que propriedade de `mulheresHistoricas` de `id: 98655`, como no exemplo citado acima, queremos que seja modificada. 
#### 4) Defina o conceito de idempotência e como uma API pode ser idempotente
Idempotência é uma propriedade referente à alteração feita. É também um conceito matemático, além de computacional. Como no caso de multiplicações, quando um valor é multiplicado por 0 e 1, sempre virá o mesmo resultado.<p>Quando se refere a API idempotente quer dizer que operações podem ser feitas diversas vezes e o resultado final não será alterado, o servidor não muda o seu estado, mesmo que faça a solicitação várias vezes seguidas, exemplo o GET para o endereço de um site.</p>
#### 5) Cite alguns diferentes padrões de projetos de software:
Padrões de software são literalmente padrões implementados para que se tenha um melhor aproveitamento no desenvolvimento de software, desde o código até a parte financeira. Irei citar os 3 pedidos na atividade, porém não consegui entender quais suas funções, ainda estão muito abstratas e não consegui visualizar de forma prática como são utilizadas:
1. _FactoryMethod_ 
2. _Singleton_
3. _Template Method_