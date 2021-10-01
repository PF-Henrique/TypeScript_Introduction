# TypeScript
---
O TypeScript é um superconjunto tipado de JavaScript, destinado a tornar a linguagem mais escalável e confiável.

É de código aberto e é mantido pela Microsoft desde que o criou em 2012. No entanto, o TypeScript teve sua inovação inicial como a principal linguagem de programação no Angular 2. Continua crescendo desde então, também nas comunidades React, Vue e agora mais recentemente com o lançamento do Deno 1.0.

TypeScript - como o próprio nome sugere - é a versão tipada do JavaScript. Isso significa que podemos especificar tipos para diferentes variáveis ​​no momento da declaração. A tipagem é um recurso muito útil para garantir confiabilidade e escalabilidade. A verificação de tipo ajuda a garantir que nosso código funcione conforme o esperado. Além disso, ajuda na busca de bugs e erros e na documentação adequada do nosso código.


:pushpin: ➜ Todo o código JavaScript também é um código TypeScript válido

---

### Inicializando um projeto

```
$ npm init -y
```

### Instalando o TypeScript

```
$ npm install -g typescript
ou
$ yarn global add typescript
```
---

### Verificando a versao

```
$ tsc -v
```

### Gerando o tsconfig.json

```
tsc --init
```
ex:
```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

**module:** define o método de geração de código do módulo. O Node usa o commonjs. <br>
**target:** especifica o nível de linguagem de saída. <br>
**moduleResolution:** isso ajuda o compilador a descobrir a que uma importação se refere. O valor node imita o mecanismo de resolução de módulo do Node. <br>
**outDir:** essa é a localização onde serão gerados os arquivos .js após a transcompilação. Neste tutorial, você irá salvá-lo como dist.<br>


### Gerando o tslint.json

```
$ ./node_modules/.bin/tslint --init
```
Abra o arquivo tslint.json recém-gerado e adicione a regra no-console adequadamente:

tslint.json

```
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {
    "no-console": false
  },
  "rulesDirectory": []
}
 
```

Por padrão, o linter do TypeScript impede a depuração usando declarações de console. Dessa forma, é necessário dizer explicitamente ao linter para revogar a regra no-console padrão.


---

### Compilando TypeScript de forma manual

```
$ tsc example.ts
```



:pushpin: Referencia ➜ [Typescript Tutorials](https://tkssharma.com/Typescript-Basic-and-Advance-Types-with-Interface-and-Classes/#object) 
:::

<br/>

:pushpin: Referencia ➜ [Typescript Doc](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) 

## ✨ Me

<a href="https:https://github.com/PF-Henrique/">
  <img src="https://avatars1.githubusercontent.com/u/48561196?s=460&u=5b39cdc8c6d447868ca0caac900f1ee7a1793962&v=4" width= "50px;" height= "50px;" alt="Avatar"/>
  <br />
 <sub>
  <b>
    Pedro Ferreira
  </b>
</sub>
</a> 
<a href="<a href="https:https://github.com/PF-Henrique/" title="proffy">🚀</a>
<br />

Made with 💙 by Pedro Ferreira 👋 [Talk to me!](https://www.linkedin.com/in/pedro-ferreira-148503b8/) :octocat:
