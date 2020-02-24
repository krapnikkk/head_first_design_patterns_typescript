import Pizza from "./Pizza";

export default class NYStyleClamPizza extends Pizza{
    public constructor(){
        super();
        this.name = "NY Style Clam Pizza";
        this.sauce = "Marinara Sauce";

        this.toppings.push("Grated Reggiano Cheese");
        this.toppings.push("Fresh Clams from Long Island Sound");
    }
}