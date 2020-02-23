import NYPizzaStore from "./NYPizzaStore";

let nyStore = new NYPizzaStore,
    pizza =  nyStore.orderPizza("cheese");
    console.log(pizza.getName());
    
    pizza =  nyStore.orderPizza("clam");
    console.log(pizza.getName());
