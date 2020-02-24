import Pizza from "./pizza/Pizza";
import CheesePizza from "./pizza/CheesePizza";
import PepperoniPizza from "./pizza/PepperoniPizza";
import ClamPizza from "./pizza/ClamPizza";
import VeggiePizza from "./pizza/VeggiePizza";

export default class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza!: Pizza;
        if (type === "cheese") {
            pizza = new CheesePizza();
        } else if (type === "veggie") {
            pizza = new PepperoniPizza();
        } else if (type === "clam") {
            pizza = new ClamPizza();
        } else if (type === "veggie") {
            pizza = new VeggiePizza();
        }
        return pizza;
    }
}