Private- sao classes que possuem metodos e atributos que so podem ser vistos e utilizados pela clase que o implementou

Public - sao metodos e atributos publicos que podem ser compartilhados e ustilizados por outros classes.

Protected - sao metodos e atributos que podem ser utilizados apenas em situaçao de herança, pois ele limita o acesso a apenas classes filhas, que extende da classe pai, é como se fosse do tipo private porem com uma execeçaõ

Static - sao classes que nao necessitam que sejam inicializadas, geralemnte sao utilizadas em funçoes genericas e que podem ser utilizadas amplamente no porjeto ex: Utils.

Abstract - sao metodos que possuem apenas uam assinatura sem ter uma implementaçao, Uma classe abastrata por definiçaõ é uma classe imcompleta, ou seja é uma classe que não posseum inicialização 'new' e que pode possuir medotos abstratos.

Obs:

- Quando um metodo de uma classa pai possui 1 ou mais paratros, a classe que extende desta obrigatoriamente deve tb possuir NO MINIMO a mesma quantidade de parametros, podendo ser para + nunca para -

- para impedir que uma classe seja extendida basta decladar o contrutor como private.

- tipar um metodo define que o mesmo ira retornar aquele tipo de dado declarado na tipagem do mesmo, para metodos que nao retornam dado algum usa-se 'void' como tipi de dado, ou quando quer declarar qualquer tipo de dado se declara 'any'.

-  classes concretas e nao concretas, nada mais sao que do que possuem a declaraçao final do obijeto a ser criado, ou ela é apenas uma abstraçaõ que que sera criado (Personagem - Nao concreto), ou ela é o objeto final (Homem de Ferro - concreta), obrigatoriamente quando uam classe extende de outra ela deve herdar de declarar todos os metodos da classe pai, porem uam maneira de voce contornar isso é extendendo de uma classe abstrata sendo tb uma classe abstrata porem, sera necessario a criação de uam terceira classe para a criação concreta do obj.




