import PizzaStore from "./PizzaStore";
import Pizza from "../Pizza/Pizza";
import NYPizzaIngredientFactory from "./NYPizzaIngredientFactory";
import IngredientFactory from "../interface/IngredientFactory";
import CheesePizza from "../pizza/CheesePizza";
import VeggiePizza from "../pizza/VeggiePizza";
import ClamPizza from "../pizza/ClamPizza";
import PepperoniPizza from "../pizza/PepperoniPizza";

export default class NYPizzaStore extends PizzaStore {

    createPizza(item: string): Pizza {
        let pizza!: Pizza;
        let ingredientFactory: IngredientFactory = new NYPizzaIngredientFactory();

        if (item.includes("cheese")) {

            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");

        } else if (item.includes("veggie")) {

            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");

        } else if (item.includes("clam")) {

            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");

        } else if (item.includes("pepperoni")) {

            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");

        }
        return pizza;
    }
}
