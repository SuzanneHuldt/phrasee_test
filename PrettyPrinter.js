
var likesOutput = "";
var commentsOutput = "";

class PrettyPrinter{

  prettyPrint(array){
    this.printLikes(array)
    this.printComments(array)
    var output = likesOutput.concat(commentsOutput)
    return output;

  }

  printLikes(array){
    var likes = array[0];
    if(likes.length > 0){
      var i;
      var like;
      for(i = 0; i < (likes.length - 1); i++){
        like = likes[i];
        likesOutput = likesOutput.concat(like + ', ');
      }
      likesOutput = likesOutput.concat('and ' + likes[(likes.length - 1)])
      likesOutput = likesOutput.concat(' liked your post ')
    }
  }

  printComments(array){
    var comments = array[1];
    if(comments.length > 0){
      var i;
      var comment;
      var name;
      for(i = 0; i < comments.length; i++){
        comment = comments[i];
        commentsOutput = commentsOutput.concat(comment + ' ')
      }
    }
  }
}
 module.exports = PrettyPrinter;
