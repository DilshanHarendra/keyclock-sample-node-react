//By default, this will locate a file named keycloak.json in root
const Keycloak = require("keycloak-connect");
const session = require("express-session");

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({ store: memoryStore, });

module.exports = {memoryStore,keycloak}
