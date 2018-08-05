"use strict";


class Grouper{

  groupNotifications(id, notifications){
    let likes = [];
    let replies = [];
    var i;
    var notification;
    for(i = 0; i < notifications.length; i++){
      notification = notifications[i];
      if(notification.post.id == id){
        if(notification.type == "Like"){
          likes.push(notification.user.name)
        }
      }
      if(notification.post.id == id){
        if(notification.type == "Comment"){
          replies.push(notification.user.name)
          replies.push(notification.comment.commentText)
        }
      }
    }
    console.log(likes)
    console.log(replies)
  }
}

module.exports = Grouper;
