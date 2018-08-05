"use strict";

const likes = [];
const comments = [];
const groupedNotifications = []

class Grouper{
  groupNotifications(id, notifications){
    var i;
    var notification;
    for(i = 0; i < notifications.length; i++){
      notification = notifications[i];
      this.getLikes(notification, id);
      this.getComments(notification, id);
    }
    groupedNotifications.push(likes);
    groupedNotifications.push(comments);
    return groupedNotifications;
  }

  getLikes(notification, id){
    if(notification.post.id == id){
      if(notification.type == "Like"){
        likes.push(notification.user.name)
      }
    }
  }

  getComments(notification, id){
    if(notification.post.id == id){
      if(notification.type == "Comment"){
        comments.push(notification.user.name + ' ' + notification.comment.commentText)
      }
    }
  }
}

module.exports = Grouper;
