const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } =  require("cypress-image-snapshot/plugin")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pokedexpokemon.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config)
      config.env.variable = process.env.variable ?? 'NO HAY VARIABLE';
    },
    viewportHeight: 1200,
    env: {
      credentials: {
        user: 'username',
        password: 'password'
      }
    }
  },
});
