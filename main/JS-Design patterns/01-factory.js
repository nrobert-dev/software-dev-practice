/* Creational pattern */
/* Centralized location for custom object creation */


/* Type One */
function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

const employeeFactory = new EmployeeFactory();
const _database = [];

_database.push(employeeFactory.create("Darby", 2));
_database.push(employeeFactory.create("Patrick",1));

_database.forEach(e => console.log(e.name + " " + e.type));


/* Type Two */
let registeredFactories = {};
registeredFactories['compress'] = function(data){
    //Mocking a compression algorithm here
    this.data = data.reduce((accumulator, currentValue) => accumulator+currentValue);
}
registeredFactories['double'] = function(data){
    this.data = data.map(e => e * 2);
}


function DataProcessorFactory(type,data){
    let processedData;
    processedData = new registeredFactories[type](data);

    processedData.display = () => console.log(processedData.data);
    processedData.type = type;

    return processedData;
}

const originalData = [1,45,3454,34,23];

const compressedData = DataProcessorFactory('compress',originalData);
const doubledData = DataProcessorFactory('double', originalData);

compressedData.display();
doubledData.display();