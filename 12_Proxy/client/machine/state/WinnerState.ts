import State from "../interface/State";
import GumballMachine from "../GumballMachine";

export default class WinnerState implements State {
    gumballMachine: GumballMachine;

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    insertQuarter(): void {
        console.log("Please wait, we're already giving you a Gumball");
    }
    ejectQuarter(): void {
        console.log("Please wait, we're already giving you a Gumball");
    }
    turnCrank(): void {
        console.log("Turning again doesn't get you another gumball!");
    }
    dispense(): void {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!congratulations!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.gumballMachine.releaseBall();
		if (this.gumballMachine.getCount() == 0) {
			this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
		} else {
			this.gumballMachine.releaseBall();
			console.log("YOU'RE A WINNER! You got two gumballs for your quarter");
			if (this.gumballMachine.getCount() > 0) {
				this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
			} else {
            	console.log("Oops, out of gumballs!");
				this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
			}
        }
        
    }
    refill(): void {

    }

    toString(): string {
        return "despensing two gumballs for your quarter, because YOU'RE A WINNER!";
    }

}