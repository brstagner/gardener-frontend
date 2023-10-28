# Gardener

Deployed at https://gardener.brstagner.com/

## Overview

This is the Node.js React frontend for a web application that gives users a visual interface for planning a flower garden. A user can save plants to a personal list, then place those plants in a virtual garden bed that displays the colors of the flowers that will be blooming in a selected month.

The features chosen for the site are those that will help a home gardener plant species that will present visual interest year-round.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Express.js backend repository can be found here: [gardener-backend](https://github.com/brstagner/gardener-backend)

## Standard User Flow

A non-logged-in user should see options to "Log In" or "Register" on the home page. After logging in or registering, they can select "Plants" from the navigation menu to view their saved plants, or click the link on the home page. If they'd like to add plants to their list, they can select "Add a new plant" to find the new plant page.

A user can select "Gardens" from the navigation bar to see a list of their saved gardens. Clicking "Add a garden" takes them to the new garden page. Clicking a saved garden link sends the user to the display page where they can see a visual representation of it at any month of the year. Selecting the "edit" button takes them to the garden editing page.

## Setup

1. Install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Install packages:

   ```
   $ npm i
   ```

3. Create a config.json file in the src folder with the appropriate values:

   ```
   {
   "GARDENER_DEV_SERVER_BASE_URL": "[development server url, backend is set up for http://localhost:3000/]",
   "GARDENER_PROD_SERVER_BASE_URL": "[production server url]"
   }
   ```

4. To deploy:

   Run the app in development mode.  
   Opens in your default browser at localhost:[your port #]:

   ```
   $ npm start
   ```

   Build for production:

   ```
   $ npm build
   ```

   Test with Jest:

   ```
   $ npm test
   ```
