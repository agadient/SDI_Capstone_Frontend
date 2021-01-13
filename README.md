# Installation and Setup
1. Press the green button that says "Use this template"
   ![Green Button](https://i.imgur.com/vRuyLNh.png)
2. Name your repo
3. Press button that says "Create repository from template"
4. Make sure to run the following command inside of your backend repo top level folder. If you don't have a backend repo, checkout this [repository](https://github.com/agadient/SDI_Capstone_Backends)
5. `git clone YOUR_REPO`
6. `cd /YOUR_REPO/frontend`
7. `npm install`
8. `npm start`
9. Before interacting with the frontend, make sure the backend is up an running!! That means the express or spring and points and the database that you decided to use.
9. You're done! There are three buttons on the frontend that exercise corresponding endpoints on the backend. They are listed below:
# Buttons #
1. Write Data to Database: This button will write whatever you input in the textbox to the database.
2. Read Data from Database: This button will read whatever you have written to the database thus far.
3. Parse Token: This button will parse a JWT token located in your browser's headers and display the parsed data.

# Testing #

To test with [enzyme](https://enzymejs.github.io/enzyme/) run `npm run test`. Make sure to press 'a' when the dialog pops up on your terminal.

To test with [cypress](https://www.cypress.io), run the following commands:
```
npm run start
npx cypress open
``` 
Then, click on the file called `app.spec.js` to run the tests contained within that file.

the frontend, run `npm run test`. Make sure the backend endpoints and database are both up before running the tests.
# Coverage #

To check the code coverage of the tests, run:

```CI=true npm test -- --env=jsdom --coverage```
