const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig.js");

const server = express();
server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).send("OK");
});

server.get("/projects/:id", async (req, res) => {
  try {
    const projects = await db("projects as p").where({
      "p.id": req.params.id
    });
    const actions = await db("actions as a").where({ "a.id": req.params.id });

    res.status(200).json({ ...projects, actions });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retriving that project" });
  }
});

server.post("/projects", async (req, res) => {
  if (req.body.name && req.body.description) {
    try {
      const id = await db.insert(req.body).into("projects");
      res.status(201).json({ id });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "There was an error adding that project" });
    }
  } else {
    res.status(400).json({ message: "Please include a name and description" });
  }
});

module.exports = server;
