/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Copyright Craevax LLC
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2:19 PM 1/26/2018
 */

(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';
  
  // This function will contain all our code
  function myLibrary(){
    var _myLibraryObject = {};
    

    // Just create a property to our library object.
    _myLibraryObject.myCustomLog = function(thingToLog){
        console.log("My-Custom-Log > Type of variable : " + typeof(thingToLog));
        console.log("My-Custom-Log > Is number : " + !isNaN(thingToLog));
        console.log("My-Custom-Log > Length : " + (thingToLog).length);    
 
        return console.log(thingToLog); //Will return the original value passed to this function in addition to the console.log details above
    };

    return _myLibraryObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
    window.myWindowGlobalLibraryName = myLibrary();
  }
})(window); // We send the window variable within our function
