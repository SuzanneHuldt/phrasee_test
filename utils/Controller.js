const Grouper = require("./Grouper.js");
const PrettyPrinter = require("./PrettyPrinter.js");

class Controller{

  showNotifications(id, notifications){
    this.setInstances();
    return this.printer.prettyPrint(this.grouper.groupNotifications(id, notifications))
  }

  getGrouper(){
    this.grouper = new Grouper;
  }
   getPrinter(){
     this.printer = new PrettyPrinter;
   }

   setInstances(){
     this.getGrouper();
     this.getPrinter();
   }


}

module.exports = Controller;
