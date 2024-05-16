"""Listas em python funcionam como vetores (arrays) em outras linguagens, com a diferença de ser dinamico e poder colocar qualquer tipo de dado"""


"""As listas são representadas por []"""

type([])

lista1 = [1, 2, 444, 4, 5, 6, 7, 77]

lista2 = ['G', 'e', 'e', 'K', ' ', 'U', 'n', 'i', 'v', 'e', 'r', 's', 'i,', 't', 'y']

lista3 = []

lista4 = list(range(11))

lista5 = list('Geek University')

# Podemos checar se o valor está contido na lista

if 8 in lista4:
    print('encontrei o 8')
else:
    print('nada encontrado')

# podemos ordenar uma lista

lista1.sort()
print(lista1)

# podemos contar o numero de ocorrencias de um valor em uma lista

print(lista1.count(1))
print(lista5.count('e'))

# adicionar = função append, só é possivel adicionar 1 elemento por vez, entretanto, é possivel colocar uma lista dentro de outra lista

lista1.append('42')
print(lista1)

lista1.append([8, 3, 1])
print(lista1)
