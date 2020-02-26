import Pizza from "./Pizza";
import IngredientFactory from "../interface/IngredientFactory";

export default class CheesePizza extends Pizza {
    ingredientFactory!: IngredientFactory;
    constructor(ingredientFactory: IngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    prepare(): void {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }

}