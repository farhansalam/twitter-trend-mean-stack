twitter-trend-mean-stack
Coding challenge for Red Buffer.

Usage: To run server side JavaScript and for the database, the following need to be installed: 
1 Node.js - for the web server and running server side JavaScript. 
2 MongoDB - the database.

Open the application directory on the terminal, and run the following commands: 
 $ npm install --dev 
 $ bower install

Start the database service by running the following command (where mongo exists):
 $ mongod

Run the following command to import the sample collection for the database: 
 $ <mongodb directory>/mongoimport --db trendingtwitter-dev --collection trendings --file ~//sampleset.json

Start the application using the command: 
 $ npm start

The server can be accessed at http://localhost:3000

To begin using the application, the user will have to sign up first (dummy values can be used).
