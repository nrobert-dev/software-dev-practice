const Subject=function(){
    const observers = [];

    return({
        addObserver : (observer) => observers.push(observer),
        removeObserver : (observer) => observers.filter(e => e !== observer),
        notifyObservers : () => observers.forEach(e => e())
    })
};

