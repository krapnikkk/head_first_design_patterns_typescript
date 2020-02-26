import IngredientFactory from "../interface/IngredientFactory";
import Dough from "../interface/Dough";
import ThinCrustDough from "../ingredient/ThinCrustDough";
import Sauce from "../interface/Sauce";
import MarinaraSauce from "../ingredient/MarinaraSauce";
import Cheese from "../interface/Cheese";
import ReggianoCheese from "../ingredient/ReggianoCheese";
import Veggies from "../interface/Veggies";
import Garlic from "../ingredient/Garlic";
import Onion from "../ingredient/Onion";
import Mushroom from "../ingredient/Mushroom";
import RedPepper from "../ingredient/RedPepper";
import Pepperoni from "../interface/Pepperoni";
import SlicedPepperoni from "../ingredient/SlicedPepperoni";
import FreshClams from "../ingredient/FreshClams";
import Clams from "../interface/Clams";

export default class NYPizzaIngredientFactory implements IngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }

    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
        return veggies;
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FreshClams();
    }
}