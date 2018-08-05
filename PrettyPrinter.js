
class PrettyPrinter{

  prettyPrint(array){
    this.printLikes(array)
    this.printComments(array)
  }

  printLikes(array){
    var likes = array[0];
    if(likes.length > 0){
      var i;
      var like;
      for(i = 0; i < (likes.length - 2); i++){
        like = likes[i];
        console.log(like + ', ')
      }
      console.log('and ' + likes[(likes.length - 1)])
      console.log('liked your post')
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
        console.log(comment)
      }
    }
  }
}
 module.exports = PrettyPrinter;
