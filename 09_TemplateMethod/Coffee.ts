import CaffeineBeverage from "./CaffeineBeverage";

export default class Coffee extends CaffeineBeverage{
    brew(): void {
        console.log("Dripping Coffee through filter");
    }    
    
    addCondiments(): void {
        console.log("Adding Sugar and Milk");
    }

    
}