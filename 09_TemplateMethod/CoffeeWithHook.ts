import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class CoffeeWithHook extends CaffeineBeverageWithHook{
    brew(): void {
       console.log("Dripping Coffee through filter");
    }    
    
    addCondiments(): void {
        console.log("Adding Sugar and Milk");
    }

    
    custonmerWantsCondiments(): boolean {
        let answer: string = this.getUserInput();
        if (answer.toLocaleLowerCase().startsWith("y")) {
            return true;
        } else {
            return false;
        }
    }

    getUserInput(): string {
        let answer = prompt("Would you like milk and sugar with your coffee (y/n)?", "yes")||"no";
        return answer;
    }
}