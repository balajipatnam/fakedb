const users = require("./users.json");
const posts = require("./posts.json");
// Something more

module.exports = { ...users, ...posts };
