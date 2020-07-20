// Revealing module pattern implementation

const ErrorManager = function(){
    let watchedElementIds = [];

    const logManager = LogManager.getLogManager();

    return({
        addWatchedElement : (element) => watchedElementIds.push(element),
        errorCheck : () => {
            let valid = true;
            watchedElementIds.forEach(e => {
                const selected = document.getElementById(e.id);
                if(!selected.value || selected.value === e.errorValue) {

                    logManager.addLog(e.errorMessage);
                    valid = false;
                    selected.style.border="2px solid red";
                }
                else{
                    selected.style.border="2px solid green";
                }
         
            });
            return valid;
        },
        displayWatchedElements : () => console.log(watchedElementIds)
    });
}

