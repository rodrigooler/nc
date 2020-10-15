const R = require("ramda"),
  fp = require("./fp");

module.exports = {
  toSnakeCase: R.uncurryN(fp.toSnakeCase),
  toCamelCase: R.uncurryN(fp.toCamelCase),
};
