import PizzaStore from "./pizzaStore/PizzaStore";
import NYPizzaStore from "./pizzaStore/NYPizzaStore";
import ChicagoPizzaStore from "./pizzaStore/ChicagoPizzaStore ";
import Pizza from "./Pizza/Pizza";

let nyStore: PizzaStore = new NYPizzaStore(),
    chicagoStore: PizzaStore = new ChicagoPizzaStore();

let pizza: Pizza = nyStore.orderPizza("cheese");
console.log("Ethan ordered a " + pizza.getName() + "\n");

pizza = chicagoStore.orderPizza("cheese");
console.log("Joel ordered a " + pizza.getName() + "\n");

pizza = nyStore.orderPizza("clam");
console.log("Ethan ordered a " + pizza.getName() + "\n");

pizza = chicagoStore.orderPizza("clam");
console.log("Joel ordered a " + pizza.getName() + "\n");

pizza = nyStore.orderPizza("pepperoni");
console.log("Ethan ordered a " + pizza.getName() + "\n");

pizza = chicagoStore.orderPizza("pepperoni");
console.log("Joel ordered a " + pizza.getName() + "\n");

pizza = nyStore.orderPizza("veggie");
console.log("Ethan ordered a " + pizza.getName() + "\n");

pizza = chicagoStore.orderPizza("veggie");
console.log("Joel ordered a " + pizza.getName() + "\n");