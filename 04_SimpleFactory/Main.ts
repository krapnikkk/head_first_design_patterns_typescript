import SimplePizzaFactory from "./SimplePizzaFactory";
import PizzaStore from "./PizzaStore";

let factory: SimplePizzaFactory = new SimplePizzaFactory(),
    store: PizzaStore = new PizzaStore(factory),
    cheesePizza = store.orderPizza("cheese"),
    veggiePizza = store.orderPizza("veggie");

    console.log(`we order a ${cheesePizza.getName}`);
    cheesePizza.toString();

    console.log(`we order a ${veggiePizza.getName}`);
    veggiePizza.toString();

