function User(_name,_surname){
    this.name = _name;
    this.surname = _surname;

    this.taxStrategy = null;
    this.calculateTax = () => {
        this.tax = this.taxStrategy.calculate(this.income, this.cost);
    }
}

function UserBuilder(_name,_surname){
    this.user = new User(_name, _surname);
}

UserBuilder.prototype.setType = function(_type){
    if(_type){
        this.user.type = _type;
        this.user.taxID = null;
    }  
    return this;
}

UserBuilder.prototype.setId = function(_id){
    if(_id){
        this.user.taxID = _id;  
    } 
    return this;
}

UserBuilder.prototype.setIncome = function(_income) {
    if(_income && _income >=0){
        this.user.income = _income;
    }   
    return this;
}

UserBuilder.prototype.setCost = function(_cost) {
    if(_cost && _cost >=0){
        this.user.cost = _cost;
    }   
    return this;
}

UserBuilder.prototype.setStrategy = function(_strategy) {
    this.user.taxStrategy = _strategy;
    return this;
}

UserBuilder.prototype.setTaxExempt = function(_exempt) {
    this.user.taxExempt = _exempt;
    return this;
}

UserBuilder.prototype.build = function() {
    if(!this.user.income || !this.user.cost || !this.user.taxStrategy){
        alert("Please set income, cost and tax algorithm");
        return {};
    }  
    this.user.calculateTax();
    return this.user;
}



