/** 
 O sistema de tipos do TypeScript permite que você crie novos tipos a partir dos 
 existentes usando uma grande variedade de operadores. Agora que sabemos como escrever 
 alguns tipos, é hora de começar a combiná- los de maneiras interessantes.
*/

  function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
  }

    // OK
    printId(101);
    // OK
    printId("202");
    // Error
    printId({ myID: 22342 });


  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }
  