
(function() {
    var speakWord = "Hello";
  
    var speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    window.speak = speak;
  })();
  
 
  (function() {
    var speakWord = "Goodbye";
  
    var speak = function(name) {
      console.log(speakWord + " " + name);
    };
  
    window.speak = speak;
  })();
  
 
  (function() {
    var names = ["John", "Alice", "Jack", "Julia"];
  
    names.forEach(function(name) {
      if (name.charAt(0).toLowerCase() === 'j') {
        speak(name);
      } else {
        speak(name.toLowerCase());
      }
    });
  })();
  
  
  
  
  function selectNames(names) {
    var selectedNames = [];
  
    names.forEach(function(name) {
      
      if (name.charAt(0).toLowerCase() === 'j') {
        speak(name, "Hello"); 
        selectedNames.push(name);
      }
    });
  
    return selectedNames;
  }
  
  
  console.log("Selected names:");
  console.log(selectNames(["John", "Alice", "Jack", "Julia"]));
  