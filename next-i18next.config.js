const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru"],
    localePath: path.resolve("./public/locales"),
  },
};
