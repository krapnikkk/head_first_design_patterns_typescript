import SimplePizzaFactory from "./SimplePizzaFactory";
import PizzaStore from "./PizzaStore";
import Pizza from "./pizza/Pizza";

let factory: SimplePizzaFactory = new SimplePizzaFactory(),
    store: PizzaStore = new PizzaStore(factory),
    pizza:Pizza = store.orderPizza("cheese");

    console.log(`we order a ${pizza.getName()}`);
    pizza.toString();

    pizza = store.orderPizza("veggie");
    console.log(`we order a ${pizza.getName()}`);
    pizza.toString();

