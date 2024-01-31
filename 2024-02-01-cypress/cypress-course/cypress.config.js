import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    projectId: "TheIncredibleCourseOfCypress",
    baseUrl: "http://localhost:5173",
    viewportWidth: 1200,
    viewportHeight: 960,
    video: false,
    specPattern: './cypress/integration'    
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    indexHtmlFile: './cypress/support/component-index.html',
    specPattern: './cypress/**/*.cy.{js,jsx,ts,tsx}'
  },
});
