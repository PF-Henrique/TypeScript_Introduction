/**
    O conceito de interfaces é outro recurso poderoso do TypeScript, que permite definir a estrutura das variáveis. 
    Uma interface é como um contrato sintático ao qual um objeto deve estar em conformidade.

    1. string
    2. number
    3. boolean
    4. Função que recebe um argumento do tipo `string` e tem como retorno o tipo `void`
    5. Array de strings
    **/

// Assinatura
interface ICar {  
    model: String,  
    make: String,  
    display(): void  
  };
  
  // Criacao do OBJ
  const car: ICar = {  
    model: 'Prius',  
    make: 'Toyota',  
    display() => console.log('hi');  
  }

  console.log(car);

  
//  exemplo completo
interface EveryExampleInOne {
	str: string;
	num: number;
	bool: boolean;
	func(arg1: string): void;
	arr: string[];
}

/**
## Optional Properties

Uma possibilidade interessante nas interfaces é definir uma propriedade como opcional. Exemplo:
Onde temos que o nome do cachorro é obrigatório, mas o nome do dono é opcional.
**/

interface Dog {
	name: string;
	owner?: string;
}

/**

## Dynamic Properties

Além disso, outro caso interessante é quando além das propriedades que declaramos, queremos deixar em aberto que novas propriedades de um certo tipo sejam sejam adicionadas. Exemplo:
**/

interface User {
	name: string;
	email: string;
	[propName: string]: string;
}

/**
Onde temos uma interface **User** na qual, além das 2 propriedades que definimos, 
deixamos em aberto a possibilidade de **N** novas propriedades de nome (propName) 
`string` cujo valor também é do tipo `string`. Poderíamos implementar algo do tipo:
**/

const doge: User = {
	name: "Joseph Oliveira",
	email: "doge@rocketseat.com.br",
	nickname: "Dogim",
	address: "Dogeland"
}

/**
## Readonly Properties

Além disso, podemos também definir que uma propriedade é apenas para leitura, pode atribuir um valor a ela apenas uma vez. Segue um exemplo:
**/

interface Avengers {
	readonly thanos: string;
}

let theEnd: Avengers = { thanos: "I'm inevitable" }
theEnd.thanos = "I'm not inevitable" // erro

/**
## Extends

Outro conceito importante já apresentado nessas linguagens é a possibilidade de 
uma interface herdar propriedades de outra interface. Exemplo:
**/

interface Aircraft {
    speed: number;
}

interface Fighter extends Aircraft {
    hasMissiles: boolean;
		missiles?: number;
}

const f22: Fighter = {
	  speed: 2000,
	  hasMissiles: true,
		missiles: 4,
};

/**
## Implements

Utilizando conceitos já comuns em linguagens tipadas como C# e Java, temos a 
possibilidade de reforçar que uma classe (ou uma função) atenda os critérios 
definidos em uma interface. Exemplo:
**/

interface BalanceInterface {
  increment(income: number): void;
  decrement(outcome: number): void;
}

class Balances implements BalanceInterface {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  increment(income: number): void {
    this.balance += income;
  }

  decrement(outcome: number): void {
    this.balance -= outcome;
  }
}

/**
Lembrando que ao utilizar o `implements` para que a interface 
force a classe a seguir os padrões impostos, só conseguimos referenciar o 
lado público (`public`) da classe.
**/