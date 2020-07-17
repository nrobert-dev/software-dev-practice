// IIFE
const app = (function(){
  let width = 200;
  
  const privateVar = "345_ID";
  const publicVar = "445_ID";
  
  function setWidth(_width){
    width = _width;
  }
  
  function getWidth(){
    return width;
  }
  
  return({
    setWidth,
    getWidth,
    publicVar
  })
  
})();

console.log(app.getWidth());
app.setWidth(777);
console.log(app.getWidth());

//not accessible - undefined
console.log(app.privateVar);

//accessible because returned
console.log(app.publicVar);
