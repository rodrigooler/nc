# nc

> Tired of converting snackCase to camelCase and other types of conversions? This lib solves this problem so you don't have to have a headache to integrate third-party APIs.

## Install

```
$ npm install nc
```

```
$ yarn add nc
```

## Usage

```js
const nc = require('nc');

const personSnakeCase = {
    first_name: "Rodrigo",
    last_name: "Oler",
};

const personCamelCase = {
    first_name: "Rodrigo",
    last_name: "Oler",
};


nc.toCamelCase(personSnakeCase)
// { firstName: "Rodrigo", lastName: "Oler" } 

nc.toSnakeCase(personCamelCase)
// { first_name: "Rodrigo", last_name: "Oler" } 
```