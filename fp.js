const R = require("ramda"),
  F = require("fluture"),
  snakeCaseKeys = require("snakecase-keys"),
  camelCaseKeys = require("camelcase-keys");

const toSnakeCase = R.curry(snakeCaseKeys);
const toCamelCase = R.curry(camelCaseKeys);

const toSnakeCaseF = R.curry((p, options) =>
  R.pipe(R.map(toSnakeCase(options)))(F.attemptP(promise))
);

const toCamelCaseF = R.curry((p, options) =>
  R.pipe(R.map(toCamelCase(options)))(F.attemptP(promise))
);

const toSnakeCaseP = R.curry((p, options) => F.promise(toSnakeCaseF));
const toCamelCaseP = R.curry((p, options) => F.promise(toCamelCaseF));

module.exports = {
  toSnakeCase,
  toCamelCase,
  toSnakeCaseF,
  toCamelCaseF,
  toSnakeCaseP,
  toCamelCaseP
};
