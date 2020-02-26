import IngredientFactory from "../interface/IngredientFactory";
import Dough from "../interface/Dough";
import ThickCrustDough from "../ingredient/ThickCrustDough";
import PlumTomatoSauce from "../ingredient/PlumTomatoSauce";
import Sauce from "../interface/Sauce";
import Cheese from "../interface/Cheese";
import MozzarellaCheese from "../ingredient/MozzarellaCheese";
import BlackOlives from "../ingredient/BlackOlives";
import Veggies from "../interface/Veggies";
import Spinach from "../ingredient/Spinach";
import Pepperoni from "../interface/Pepperoni";
import Eggplant from "../ingredient/Eggplant";
import Clams from "../interface/Clams";
import FrozenClams from "../ingredient/FrozenClams";
import SlicedPepperoni from "../ingredient/SlicedPepperoni";

export default class ChicagoPizzaIngredientFactory implements IngredientFactory {

    public createDough(): Dough {
        return new ThickCrustDough();
    }

    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    public createVeggies(): Veggies[] {
        let veggies: Veggies[] = [
            new BlackOlives(),
            new Spinach(),
            new Eggplant()
        ];
        return veggies;
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClam(): Clams {
        return new FrozenClams();
    }
}