import Pizza from "./Pizza";

export default class NYStyleCheesePizza extends Pizza{

    public constructor(){
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.sauce = "Marinara Sauce";
    
        this.toppings.push("Grated Reggiano Cheese");
    }

}