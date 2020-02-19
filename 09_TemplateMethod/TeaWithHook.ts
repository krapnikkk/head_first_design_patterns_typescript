import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class TeaWithHook extends CaffeineBeverageWithHook {
    brew(): void {
        console.log("Steeping the tea");
    }

    addCondiments(): void {
        console.log("Adding Lemon");
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
        let answer = prompt("Would you like lemon with your tea (y/n)?", "yes")||"no";
        return answer;
    }

}