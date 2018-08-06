"use strict";

class Grouper{

  groupNotifications(id, notifications){
    this.getNotificationObject();
    this.setLikes();
    this.setComments();
    this.setPost(id, notifications);
    var i;
    var notification;
    for(i = 0; i < notifications.length; i++){
      notification = notifications[i];
      this.getLikes(notification, id);
      this.getComments(notification, id);
    }

    return this.groupedNotifications;
  }

  getLikes(notification, id){
    if(notification.post.id == id){
      if(notification.type == "Like"){
        this.likes.push(notification.user.name)
      }
      this.groupedNotifications["likes"] = this.likes
    }
  }

  getComments(notification, id){
    if(notification.post.id == id){
      if(notification.type == "Comment"){
        this.comments.push(this.setComment(notification.user.name, notification.comment.commentText));
      }
      this.groupedNotifications["comments"] = this.comments
    }
  }

  setPost(id, notifications){
    var i;
    var notification;
    for(i = 0; i < notifications.length; i++){
      notification = notifications[i];
        if(notification.post.id == id){
          this.groupedNotifications["post"] = notification.post.title
        }
    }
  }

  setComment(name, comment){
    let commentPair = {"name": name, "comment": comment}
    return commentPair
  }

  getNotificationObject(){
    this.groupedNotifications = {"post": "", "likes": [], "comments":[]};
  }

  setLikes(){
    this.likes = []
  }

  setComments(){
    this.comments = []
  }
}

module.exports = Grouper;
