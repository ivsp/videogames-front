# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run local`

Runs the app in the development mode with the local environment variables.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `Description`

The web reads 2 types of files, an excel and a json containing video game data. The data from both files is merged and written to the database.
Also, It has a filter, a search engine and a button to sort the search results.
In addition, new games registrations can be made as long as the user is logged in. These registrations are confirmed by sending an e-mail to the user who registered the game.
This project has been created with the MERN stack. Calls are made to the server to fetch and insert data into the database. 
Furthermore, a logging system with first level authentication is implemented and jsonwebtoken has been used for the encryption of the user's password.
Additionally, the middleware "multer" has been used to allow uploading images of the games.

