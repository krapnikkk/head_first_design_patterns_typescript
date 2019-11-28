import PizzaStore from "./PizzaStore";
import Pizza from "./Pizza";
import NYStyleCheesePizza from "./NYStyleCheesePizza";
import NYStyleVeggiePizza from "./NYStyleVeggiePizza";
import NYStyleClamPizza from "./NYStyleClamPizza";

export default class NYPizzaStore extends PizzaStore {
    public createPizza(type: string): Pizza {
        let pizza: Pizza = new NYStyleCheesePizza() ;
        if (type === "cheese") {
            pizza = new NYStyleCheesePizza();
        } else if (type === "veggie") {
            pizza = new NYStyleVeggiePizza();
        } else if (type === "clam") {
            pizza = new NYStyleClamPizza();
        }
        return pizza;
    }

}