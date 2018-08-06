"use strict";
const Controller = require("./utils/controller.js")
const notifications = require("./notifications.json");
const express = require("express");
const controller = new Controller;
const app = express();

app.get('/:id', function (req, res){
  res.send(controller.showNotifications(req.params.id, notifications));
})


app.listen(8080)
