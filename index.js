// index.js

/**
 * Required External Modules
 */
 const express = require("express");
 const path = require("path");
/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
/**
 * Routes Definitions
 */ 
/*
 app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs, privet Kiryuja");
  });
  */

  app.get("/", (req, res) => {
    // petición a BD
    if (true) res.render(stranica)
    else res.render(PNH)
    res.render("index", { title: "Home" });
  });

  app.get("/user", (req, res) => {
    res.render("user", { title: "Home" });
  });
/**
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });