// Singleton + revealing module pattern implementation

function LogSingleton(){
    function LogManager(){
        this.log = [];
        this.amountOfCalls = 0;

        this.notify = (message) => {
            this.log=[];
        }

        this.addLog = (message) => {
            this.log.push( "["+new Date().toLocaleTimeString()+ "]| " + message);
        }

        this.printLog = () => {
            console.warn(this.log);
        }
    }

    let logManager = null;

    function createLogManager(){
        createdLogManager = new LogManager();
        return createdLogManager;
    }

    return({
        getLogManager : () => {
            if(!logManager){
                logManager = createLogManager();
            }
            logManager.amountOfCalls++;
            return logManager;
        }
    })
}

const LogManager = LogSingleton();