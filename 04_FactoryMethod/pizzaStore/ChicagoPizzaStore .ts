import PizzaStore from "./PizzaStore";
import IngredientFactory from "../interface/IngredientFactory";
import ChicagoPizzaIngredientFactory from "./ChicagoPizzaIngredientFactory ";
import Pizza from "../Pizza/Pizza";
import CheesePizza from "../pizza/CheesePizza";
import VeggiePizza from "../pizza/VeggiePizza";
import ClamPizza from "../pizza/ClamPizza";
import PepperoniPizza from "../pizza/PepperoniPizza";

export default class ChicagoPizzaStore extends PizzaStore {

    createPizza(item: string): Pizza {
        let pizza!: Pizza;
        let ingredientFactory: IngredientFactory =
            new ChicagoPizzaIngredientFactory();

        if (item.includes("cheese")) {

            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");

        } else if (item.includes("veggie")) {

            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");

        } else if (item.includes("clam")) {

            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");

        } else if (item.includes("pepperoni")) {

            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");

        }
        return pizza;
    }
}