import Pizza from "./Pizza";

export default class NYStyleVeggiePizza extends Pizza{
    public constructor(){
        super();
        this.name = "NY Style Veggie Pizza";
        this.sauce = "Marinara Sauce";

        this.toppings.push("Grated Reggiano Cheese");
        this.toppings.push("Garlic");
        this.toppings.push("Onion");
        this.toppings.push("Mushrooms");
        this.toppings.push("Red Pepper");
    }
}