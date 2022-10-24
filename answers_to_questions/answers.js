// ### Questions

const { fileURLToPath } = require("url")

// 1. What is responsible for defining the routes of the `games` resource?
// express is used to define the routes in the create_router.js file.

// 2. What do you notice about the folder structure?  Whats the client responsible for? Whats the server responsible for?
//The client is responsible for performing actions in the browser. The client directory contains the front-end functionalities, 
//jsx to render elemets to the page, and css styling.
//The server is responsible for running the software so that the app can respond to requests from clients in the browser.
//The server directory contains the back-end infrastructure including the server.js file and the database.

// 3. What are the the responsibilities of server.js?
//The server is responsible for running the software so that the app can respond to requests from clients in the browser.

// 4. What are the responsibilities of the `gamesRouter`?
//The gamesRouter directs the clients requests to the appropriate database

// 5. What process does the the client (front-end) use to communicate with the server?
//The client uses app in the browser to communicate with the server.

// 6. What optional second argument does the `fetch` method take? And what is it used for in this application? Hint: See [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the MDN docs
//The fetch method can optionally accept a second parameter, an init object, that lets you control a number
//of settings.
//In this app, this feature is being used to create POST and DELETE methods.

// 7. Which of the games API routes does the front-end application consume (i.e. make requests to)?
//the base URL - http://localhost:9000/api/games/

// 8. What are we using the [MongoDB Driver](http://mongodb.github.io/node-mongodb-native/) for?
//The MongoDB Driver allows Node.js apps to connect to MongoDB and work with data. 

// ## Extension

// Why do we need to use [`ObjectId`](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) from the MongoDB driver?

// Add to your diagram the dataflow for removing a game.
