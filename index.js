"use strict";

const notifications = require("./notifications.json");
const Grouper = require("./Grouper.js");
const grouper = new Grouper;
const express = require("express");
const app = express();

function groupNotifications(id, notifications){
  grouper.groupNotifications(id, notifications)

}

app.get('/:id', function (req, res){
  groupNotifications(req.params.id, notifications)
})
 app.listen(8080)
