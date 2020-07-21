function factoryCreateUser(){
    const type = document.getElementById('type').value;
    const strategy = document.getElementById('strategy').value;

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const income = document.getElementById('income').value;
    const costs = document.getElementById('cost').value;
 
    const user = new UserBuilder(name,surname);
    user.setIncome(income).setCost(costs);
           
    switch(parseInt(strategy)){
        case 0:
            user.setStrategy(new SimpleTax());
            break;
        case 1:
            user.setStrategy(new NewlyIntroducedTax());
            break;
    }

    switch(parseInt(type)){
        case 0:
            user.setType("LLC").setId(null).setTaxExempt(false);
            break;
        case 1:
            const id = document.getElementById('taxID').value;
            user.setType("Individual").setId(id).setTaxExempt(true);
            break;

    };

    return user.build();
}