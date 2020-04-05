import State from "../interface/State";
import GumballMachine from "../GumballMachine";

export default class HasQuarterState implements State {
    // randomWinner: number = Math.round(Math.random() * 10);
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    insertQuarter(): void {
        console.log("You can't insert another quarter");
    }

    ejectQuarter(): void {
        console.log("Quarter returnde");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }

    turnCrank(): void {
        console.log("you turned...");
        let winner: number = Math.round(Math.random() * 10);
        console.log("winner:"+winner);
        if ((winner == 0) && (this.gumballMachine.getCount() > 1)) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        } else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    }

    dispense(): void {
        console.log("no gumball dispensed");
    }

    refill(): void {

    }

    toString(): string {
        return "waiting for turn of crank";
    }

}