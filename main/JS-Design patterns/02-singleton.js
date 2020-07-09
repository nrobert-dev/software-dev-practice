const Singleton = (function(){
    function ProcessManager(){
        this.numProcess = 0;
    };

    let pManager;

    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }
    return{
        getProcessManager: () => {
            if(!pManager){
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();


const ManagerSingleton = (function(){
    function Manager(){
        this.callAmount = 0;
        this.incrementCall = function(){
            this.callAmount++;
        }
    }

    let manager = null;

    function createManager(){
        _manager = new Manager();
        return _manager;
    }

    return({
        getManager : () => {
            if(!manager){
                manager = createManager();
            }
            manager.incrementCall();
            return manager;
        }
    })
})();

const m = ManagerSingleton.getManager();
ManagerSingleton.getManager();
ManagerSingleton.getManager();
ManagerSingleton.getManager();
console.log(m);
