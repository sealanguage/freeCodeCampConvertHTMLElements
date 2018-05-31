function convertHTML(str) {
  // &colon;&rpar;

  var entity =  { 
  "&" : "&amp;",  
  "<" : "&lt;", 
  ">" : "&gt;",  
  '"' : "&quot;",
  "'" : "&apos;",
  };
  
  var xxxx = str.replace(/&|>|<|"|'/g, 
    function(x) {
    //entity[x]; //"&amp;"
    return entity[x];
  });
  
  
  return xxxx;
}

convertHTML("Dolce & Gabbana");
