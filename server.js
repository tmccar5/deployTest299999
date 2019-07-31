const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// let root = path.join(__dirname, '..', 'myapp/fron-end/build');
//   app.use(express.static(root));
//   app.use(function(req, res, next) {
//   if (req.method === 'GET' && req.accepts('html') && !req.is('json') && 
//      !req.path.includes('.')) {
//          res.sendFile('index.html', { root });
//     } else next();
//   });


app.get("*", (req, res) => {
  console.log('we hit the * route!!!!!')
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
