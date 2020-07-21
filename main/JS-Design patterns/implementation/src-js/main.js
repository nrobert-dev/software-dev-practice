window.addEventListener('load', function(){
    console.log("Initializing page...");
    const errorManagerInputs = ErrorManager();
    const errorManagerTaxes = ErrorManager();

    /* Adding the inputs which we want watched */
    errorManagerInputs.addWatchedElement({id : 'name', errorValue:'', errorMessage:"Name cannot be empty"});
    errorManagerInputs.addWatchedElement({id : 'surname', errorValue:'', errorMessage:"Surname cannot be empty"});
    errorManagerInputs.addWatchedElement({id : 'type', errorValue:'', errorMessage:"Type cannot be empty"});
    errorManagerInputs.addWatchedElement({id : 'income', errorValue:'', errorMessage:"Income cannot be empty"});
    errorManagerInputs.addWatchedElement({id : 'cost', errorValue:'', errorMessage:"Cost cannot be empty"});

    errorManagerTaxes.addWatchedElement(({id : 'tax', errorValue:'0', errorMessage:"Tax cannot be 0"}));
    errorManagerTaxes.addWatchedElement(({id : 'tax-pension', errorValue:'0', errorMessage:"Tax cannot be 0"}));
    errorManagerTaxes.addWatchedElement(({id : 'tax-health', errorValue:'0', errorMessage:"Tax cannot be 0"}));


    /* Adding functionality on the Add User button */
    document.getElementById('add-user').addEventListener('click', function(){
        if(errorManagerInputs.errorCheck() && errorManagerTaxes.errorCheck()){
            const user = factoryCreateUser();

            const table = document.getElementById('t-body');
            table.innerHTML+=`
                <tr>
                    <td>${user.name}</td>
                    <td>${user.surname}</td>
                    <td>${user.type}</td>
                    <td>${user.taxID}</td>
                    <td>${user.taxExempt}</td>
                    <td>${user.income}</td>         
                    <td>${user.cost}</td>
                    <td>${user.income-user.cost-user.tax}</td>
                    <td>${user.tax}</td>
                </tr>
            `;
        }
        else{
            alert("Validation errors found. Check log for details");
        }
    });

    const resetSubject = new Subject();   
    resetSubject.addObserver(function(){
        const table = document.getElementById('t-body');
        table.innerHTML='';
    });
    resetSubject.addObserver(function(){
        LogManager.getLogManager().notify();
    });
    resetSubject.addObserver(() => alert('Setting new fiscal year!'));

    document.getElementById('reset').addEventListener('click', () => resetSubject.notifyObservers());
});


document.getElementById('log-button').addEventListener('click', function(){
    console.warn("Printing log here");
    LogManager.getLogManager().printLog();
});

document.getElementById('log-calls').addEventListener('click', function(){
    alert(LogManager.getLogManager().amountOfCalls);
});

