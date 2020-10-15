const R = require("ramda"),
  {
    toCamelCase,
    toCamelCaseF,
    toCamelCaseP,
    toSnakeCase,
    toSnakeCaseF,
    toSnakeCaseP,
  } = require("./fp");

module.exports = {
  toSnakeCase: R.uncurryN(toSnakeCase),
  toCamelCase: R.uncurryN(toCamelCase),
  toSnakeCaseF: R.uncurryN(toSnakeCaseF),
  toSnakeCaseP: R.uncurryN(toSnakeCaseP),
  toCamelCaseF: R.uncurryN(toCamelCaseF),
  toCamelCaseP: R.uncurryN(toCamelCaseP),
};
