"use strict";
const Controller = require("./utils/controller.js")
const notifications = require("./notifications.json");
const express = require("express");
const controller = new Controller;
const app = express();


// app.get('/:id', function (req, res){
//   let prettyPrinter = new PrettyPrinter;
//   let grouper = new Grouper;
//   console.log(grouper.groupedNotifications)
//   res.send(prettyPrinter.prettyPrint(grouper.groupNotifications(req.params.id, notifications)));
// })


app.get('/:id', function (req, res){
  res.send(controller.showNotifications(req.params.id, notifications));
})


// console.log(controller.showNotifications("57e0d6328c9287bd1b66bc327efbcdfa", notifications))
// console.log(controller.showNotifications("b1638f970c3ddd528671df76c4dcf13e", notifications))


app.listen(8080)
