const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/main.html"))
})
app.use(routes);
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port http://localhost:${PORT}`);
  });
});

// app.use(express.static(path.join(__dirname, 'public')));

//mongoose takes mongoDB adds some abstraction to it and wraps it in a bow
//models take schema/applies it to each document in the collection
//models responsible for each document interaction(CRUD)
//mongoose automatically takes the collection name and makes it plural/lowercase


//setup
//mongoDB atlas can create a Cluster/get connection string from atlas Dashboard
//add user/password to the connection string as well as database name

//then create folder structure for models/schemas
//create a new schema and add the fields for the document
//define the model and add your schema to it
//export the file
//nest data within the same schema when it makes sense
