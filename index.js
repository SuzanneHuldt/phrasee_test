"use strict";

const notifications = require("./notifications.json");
const Grouper = require("./Grouper.js");
const grouper = new Grouper;

function groupNotifications(id, notifications){
  grouper.groupNotifications(id, notifications)

}

groupNotifications("b1638f970c3ddd528671df76c4dcf13e", notifications)
