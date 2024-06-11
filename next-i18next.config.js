const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "uz",
    locales: ["uz", "ru", "en"],
    localePath: path.resolve("./public/locales"),
  },
};
