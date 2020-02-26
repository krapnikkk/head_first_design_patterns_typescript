import Dough from "./Dough";
import Sauce from "./Sauce";
import Cheese from "./Cheese";
import Veggies from "./Veggies";
import Pepperoni from "./Pepperoni";
import Clams from "./Clams";

export default interface IngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}