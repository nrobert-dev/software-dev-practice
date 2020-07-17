//Used when we have multiple entities which want to interact with each other without coupling them

const button = document.getElementById('button');

const Subject = function(){
  const observers = [];
  
  return({
    subscribe : (observer) => {
      observers.push(observer)
    },
    notifyObservers : () => {
      observers.forEach(e => e.notify())
    }
  });
}

const APICall = function(){
  return {
    notify : function(){
      console.log("Doing a call");
    }
  };
}

const RefreshCache = function(){
  return {
    notify : function(){
      console.log("Refreshing cache");
    }
  }
};

var mainSubject = new Subject();

var o1 = new APICall();
var o2 = new RefreshCache();

mainSubject.subscribe(o1);
mainSubject.subscribe(o2);

button.addEventListener('click',() => mainSubject.notifyObservers());
