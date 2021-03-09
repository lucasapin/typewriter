const sentence = "hello there from lighthouse labs\n";
let counter = 0;
function myTimeOut() {
  setTimeout(function() {
    process.stdout.write(sentence[counter]);
    if(counter === sentence.length - 1){
      return
    } else {
    myTimeOut();
    counter ++ 
    }
  },50);

}

myTimeOut();