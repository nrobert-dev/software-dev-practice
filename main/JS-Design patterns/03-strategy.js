/* Behavioural pattern : Allows you to swap strategies in and out easily */
/* Represents a collection of algorithms */


/* Data */
const pointA = { x : 2, y : 5};
const pointB = { x : 5, y : -2};

function Line(pointA, pointB){
    this.a = pointA;
    this.b = pointB;
}

/* Algorithms */
function SlopeFunction(){
    this.calculate = (line) => (line.b.y - line.a.y)/(line.b.x - line.a.x);
};

function DistanceFunction(){
    this.calculate = (line) => Math.sqrt(Math.pow((line.b.x - line.a.x), 2) + Math.pow((line.b.y - line.a.y),2));
};


/* Algorithm Manager to easily interchange between them */
function LineCalculator(){
    this.setStrategy = (_strategy) => {
        this.strategy = _strategy;
    }
    this.calculate = (_line) => this.strategy.calculate(_line);
}

const lineCalculator = new LineCalculator();
lineCalculator.setStrategy(new SlopeFunction());

const line = new Line(pointA,pointB);

console.log("Slope", lineCalculator.calculate(line));

lineCalculator.setStrategy(new DistanceFunction());
console.log("Distance", lineCalculator.calculate(line));

