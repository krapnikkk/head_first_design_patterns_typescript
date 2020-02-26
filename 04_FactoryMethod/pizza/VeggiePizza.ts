import IngredientFactory from "../interface/IngredientFactory";
import Pizza from "./Pizza";

export default class VeggiePizza extends Pizza {
    ingredientFactory: IngredientFactory;
    constructor(ingredientFactory: IngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
    }
}