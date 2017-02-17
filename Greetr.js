(function (global, $){
  //we create an IIFE and wrap it round all our code. SAFE CODE: since it
    //prevents Greetr from interfering with any other code in your other programs/files

  // console.log(global);
  // console.log($);
  var Greetr = function (firstName, lastName, language){
    ///return an object of the Greetr.init function using the new keyword
    return new Greetr.init(firstName, lastName, language);
  }

  //properties hidden within the body of the IIFE and not accessible outside this code
  var supportedLangs = ["Hausa", "Yoruba", "Igbo"];

  var greetings = {
    Hausa: "Ina Kwana",
    Yoruba: "E ku ojomo o",
    Igbo: "Igbolachi"
  };

  var formalGreeting = {
    Hausa: "Sannu",
    Yoruba: "E nle o",
    Igbo: "Kachifo"
  };

  Greetr.prototype = {
    //where all objects with Greetr as their prototype points to
    //the this variable here refers to all objects pointing to this prototype

    getFullName: function(){
      return this.firstName + " " + this.lastName;
    },

    validate: function(){
      if(supportedLangs.indexOf(this.language) === -1){
        throw "Greeting is not available in this language";
      }
    },

    greeting: function(){
      return greetings[this.language] + " " + this.firstName + "!";
    },

    formalGreeting: function(){
      return formalGreeting[this.language] + ", " + this.getFullName();
    },

    greet: function(formal){
      var msg;

      if(formal){
        msg = this.formalGreeting();
      }

      else{
        msg = this.greeting();
      }

      if(console){
        console.log(msg);
      }

      //'this' refers to the calling object at execution time
      //returning 'this' makes the method chainable

      return this;
    },

    //changing your preferred language
    setLang: function(newLang){
      this.language = newLang;
      this.validate();
      return this;
    },

    //adding JQuery Support
    HTMLGreeting : function(selector, formal){
      var msg;
      if(!$){
        throw "JQuery not loaded";
      }
      if(!selector){
        throw "Invalid selector";
      }

      if(formal){
        msg = this.formalGreeting();
      }

      else{
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    },
  };

//the actual object is built here using the new keyword retured in the Greetr function above
  Greetr.init = function (firstName, lastName, language){
    //function consctructor that builds the Greetr.init object
    var self = this;
    self.firstName =  firstName || ""; //defaults to empty string
    self.lastName = lastName || ""; //defaults to empty string
    self.language = language || "Hausa"; //defaults to empty string if no argument is entered

    self.validate();
  }

//this trick is bowrrowed from JQuery so we don't have to use the new keyword when using this library
  Greetr.init.prototype = Greetr.prototype;
  //any objects created with the Greetr.init fxn should point to
  //Greetr.prototype for its prototype chain.


//attach our Greetr object to the global object and create a shorthand $G to ease our fingers
  global.G$ = global.Greetr = Greetr;

}(window, $));
