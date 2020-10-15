const R = require("ramda"),
  snakeCaseKeys = require("snakecase-keys"),
  camelCaseKeys = require("camelcase-keys");

const toSnakeCase = R.curry(snakeCaseKeys);
const toCamelCase = R.curry(camelCaseKeys);

module.exports = {
  toSnakeCase,
  toCamelCase,
};
