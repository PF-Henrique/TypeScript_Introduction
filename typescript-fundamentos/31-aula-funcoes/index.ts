/**
# Funções

No caso das funções, precisamos definir a tipagem dos argumentos e do retorno. 
Exemplos:
**/

// example 1
function overkillConsoleLog(arg1: string, arg2: number): void {
    console.log(arg1, arg2);
}

// example 2
function anotherCallbackExample(callback: (arg: number) => string): string {
  return callback(9);
}

/**
No primeiro exemplo temos uma função chamada **overkillConsoleLog** 
que recebe dois argumentos: **arg1** é uma `string` e **arg2** é um `number`. 
Como não queremos retornar nenhum valor da função, atribuímos o tipo `void` **ao retorno.**

No segundo exemplo, declaramos uma função chamada **anotherCallbackExample** 
que recebe um parâmetro **callback** que representa uma função. Essa função 
recebe um argumento chamado **arg** do tipo **number** e retorna uma `string`.  
Como na função **anotherCallbackExample** estamos retornando diretamente o valor 
de **callback**, atribuímos também ao retorno dela o tipo `string`.
**/