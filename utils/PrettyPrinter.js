
class PrettyPrinter{
  prettyPrint(object){
    if( (this.isEmpty(object.comments) && this.isEmpty(object.likes)) ){
      return "This post received no notifcations or was not found";
    }
    return this.getTemplate(object.likes, object.comments, object.post)
  }

  likePrinter(likes, post){
    var printedLikes = "";
    var i;
    var like;
    for(i = 0; i < (likes.length - 1); i++){
      like = likes[i];
      printedLikes = printedLikes.concat(like + ", ");
    }
    if(this.isEmpty(likes)){
      return "";
    } else {
      printedLikes = printedLikes.concat("and " + likes[(likes.length - 1)]+ " liked your post " + post)
      return printedLikes;
    }

  }

  commentPrinter(comments, post){
    var printedComments = "";
    var i;
    var comment;
    for(i = 0; i < comments.length; i++){
      comment = comments[i];
      printedComments = printedComments.concat(comment.name + " commented on your post with: " + comment.comment);
    }
    if(this.isEmpty(comments)){
      return "";
    } else {
    printedComments = "Your post " + post + " was commented on: " + printedComments
    return printedComments;
    }

  }

  getTemplate(likes, comments, post){
    let template = this.likePrinter(likes, post) + this.commentPrinter(comments, post);
    return template;
  }

  isEmpty(array){
    return array.length == 0
  }
}
 module.exports = PrettyPrinter;
