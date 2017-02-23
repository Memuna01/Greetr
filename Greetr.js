(function (global, $){
  //we create an IIFE and wrap it round all our code. SAFE CODE: since it
    //prevents Greetr from interfering with any other code in your other programs/files

  // console.log(global);
  // console.log($);
  var Greetr = function (firstName, lastName, location){
    ///return an object of the Greetr.init function using the new keyword
    return new Greetr.init(firstName, lastName, location);
  }

  //properties hidden within the body of the IIFE and not accessible outside this code
  // var supportedLangs = ["Hausa", "Yoruba", "Igbo"];

  // var formalGreetings = {
  //   Hausa: "Ina Kwana",
  //   Yoruba: "E ku ojomo o",
  //   Abia: "Igbolachi"
  // };

  var greetings = {
    Abia: "Kachifo",
    Abuja: "Sannu",
    Adamawa: "Sannu",
    Anambra: "Kachifo",
    AkwaIbom: "Kachifo",
    Bauchi: "Sannu",
    Bayelsa: "Kachifo",
    Benue: "Sannu",
    Borno: "Sannu",
    CrossRiver: "Kachifo",
    Delta: "Kachifo",
    Ebonyi: "Kachifo",
    Enugu: "Kachifo",
    Edo: "Kachifo",
    Ekiti: "E kaa bo o",
    Gombe: "Sannu",
    Imo: "Kachifo",
    Jigawa: "Sannu",
    Kaduna: "Sannu",
    Kano: "Sannu",
    Katsina: "Sannu",
    Kebbi: "Sannu",
    Kogi: "Sannu",
    Kwara: "E kaa bo o",
    Lagos: "E kaa bo o",
    Nasarawa: "Sannu",
    Niger: "Sannu",
    Ogun: "E kaa bo o",
    Ondo: "E kaa bo o",
    Osun: "E kaa bo o",
    Oyo: "E kaa bo o",
    Plateau: "Sannu",
    Rivers: "Kachifo",
    Sokoto: "Sannu",
    Taraba: "Sannu",
    Yobe: "Sannu",
    Zamfara: "Sannu",
   };

  Greetr.prototype = {
    //where all objects with Greetr as their prototype points to
    //the *this* variable here refers to all objects pointing to this prototype

    getFullName: function(){
      return this.firstName + " " + this.lastName;
    },

    // validate: function(){
    //   if(supportedLangs.indexOf(this.language) === -1){
    //     return "Welcome " + this.firstName + this.lastName;
    //   }
    // },

    greeting: function(){
      return greetings[this.location] + " " + this.firstName + "!";
    },

    // formalGreeting: function(){
    //   return formalGreeting[this.language] + ", " + this.getFullName();
    // },

    greet: function(){
      var msg;

      // if(formal){
      //   msg = this.formalGreeting();
      // }

      msg = this.greeting();

      if(console){
        console.log(msg);
      }

      //'this' refers to the calling object at execution time
      //returning 'this' makes the method chainable

      return this;
    },

    //changing your preferred language
    setLocation: function(newLocation){
      this.location = newLocation;
      // this.validate();
      return this;
    },

    //adding JQuery Support
    HTMLGreeting : function(selector){
      var msg;
      if(!$){
        throw "JQuery not loaded";
      }
      if(!selector){
        throw "Invalid selector";
      }

      // if(formal){
      //   msg = this.formalGreeting();
      // }

      msg = this.greeting();

      $(selector).html(msg);

      return this;
    },
  };

//the actual object is built here using the new keyword retured in the Greetr function above
  Greetr.init = function (firstName, lastName, location){
    //function consctructor that builds the Greetr.init object
    var self = this;
    self.firstName =  firstName || ""; //defaults to empty string
    self.lastName = lastName || ""; //defaults to empty string
    self.location = location || ""; //defaults to empty string if no argument is entered

    // self.validate();
  }

//this trick is bowrrowed from JQuery so we don't have to use the new keyword when using this library
  Greetr.init.prototype = Greetr.prototype;
  //any objects created with the Greetr.init fxn should point to
  //Greetr.prototype for its prototype chain.


//attach our Greetr object to the global object and create a shorthand $G to ease our fingers
  global.G$ = global.Greetr = Greetr;

}(window, $));
