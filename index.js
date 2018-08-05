"use strict";

const notifications = require("./notifications.json");
const Grouper = require("./Grouper.js");
const grouper = new Grouper;
const express = require("express");
const app = express();
const PrettyPrinter = require("./PrettyPrinter.js");
const prettyPrinter = new PrettyPrinter;

function groupNotifications(id, notifications){
  return grouper.groupNotifications(id, notifications)
}

app.get('/:id', function (req, res){
  res.send(prettyPrinter.prettyPrint(groupNotifications(req.params.id, notifications)));
})

app.listen(8080)
