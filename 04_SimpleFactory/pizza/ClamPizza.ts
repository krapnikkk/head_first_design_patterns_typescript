import Pizza from "./Pizza";
export default class ClamPizza extends Pizza {
    constructor() {
        super();
        this.name = "Clam Pizza";
        this.sauce = "White garlic sauce";
        this.toppings.push("Clams");
        this.toppings.push("Grated parmesan cheese");
    }
}