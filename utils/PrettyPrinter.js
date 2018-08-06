
class PrettyPrinter{
  prettyPrint(object){
    if( (this.isEmpty(object.comments) && this.isEmpty(object.likes)) ){
      return "This post received no notifcations";
    }
    return this.getTemplate(object.likes, object.comments, object.post)
  }

  likePrinter(likes){
    if(this.isEmpty(likes)){
      return "";
    }
    var printedLikes = "";
    var i;
    var like;
    for(i = 0; i < (likes.length - 1); i++){
      like = likes[i];
      printedLikes = printedLikes.concat(like + ", ");
    }
    printedLikes = printedLikes.concat('and ' + likes[(likes.length - 1)])
    return printedLikes;
  }

  commentPrinter(comments){
    if(this.isEmpty(comments)){
      return "";
    }
    var printedComments = "";
    var i;
    var comment;
    for(i = 0; i < comments.length; i++){
      comment = comments[i];
      printedComments = printedComments.concat(comment.name + " commented on your post with: " + comment.comment + "\n");
    }
    return printedComments;
  }

  getTemplate(likes, comments, post){
    let template = post + " " + this.likePrinter(likes) + " liked your post" + "\n" + post + " " + this.commentPrinter(comments) + "END";
    return template;
  }

  isEmpty(array){
    return array.length == 0
  }
}
 module.exports = PrettyPrinter;
