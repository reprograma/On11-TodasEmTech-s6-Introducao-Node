# exercicio  4 - Defina o conceito de idempotência e como uma API pode ser idempotente


idempotencia seria o mesmo que retornar a mesma estrutura,  ou seja

usuarios = [{
    'nome': 'nome',
    'email' : 'email@email.com'
}]


eu poderia alterar por ex o valor da chave email:  de email@email.com para   bia@email.com,  ou inserir um novo usuário, mas não poderia alterar a estrutura de dados.