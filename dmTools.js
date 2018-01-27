/*!
 * Dungeon Master Library v0.0.1
 * https://jquery.com/
 *
 * Copyright Craevax LLC
 * Released under - no license
 * https://craevax.com/license
 *
 * Date: 2:19 PM 1/26/2018
 */

(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';
  
  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};
    

    // This is just a property for our library object
    // Remove at later date
    _myLibraryObject.myCustomLog = function(thingToLog){
        console.log("My-Custom-Log > Type of variable : " + typeof(thingToLog));
        console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
        console.log("My-Custom-Log > Length : " + (thingToLog).length);    
 
        return console.log(thingToLog); //Will return the original value passed to this function in addition to the console.log details above
    };

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, so we save in the window object
  if(typeof(window.dmTools) === 'undefined'){
    window.dmTools = myLibrary();
  }
})(window); // We pass the window object to our function
