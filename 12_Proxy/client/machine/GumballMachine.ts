import State from "./interface/State";
import SoldOutState from "./state/SoldOutState";
import NoQuarterState from "./state/NoQuarterState";
import HasQuarterState from "./state/HasQuarterState";
import SoldState from "./state/SoldState";
import WinnerState from "./state/WinnerState";
export default class GumballMachine {
    soldOutState: State;
    noQuarterState: State;
    hasQuarterState: State;
    soldState: State;
    state: State;
    winnerState: State;
    location:string;

    count: number = 0;
    constructor(numberGumballs: number,location:string) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);
        this.winnerState = new WinnerState(this);

        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        } else {
            this.state = this.soldOutState;
        }
        this.location = location;
    }

    getLocation():string{
        return this.location;
    }

    insertQuarter(): void {
        this.state.insertQuarter();
    }

    ejectQuarter(): void {
        this.state.ejectQuarter();
    }

    turnCrank(): void {
        this.state.turnCrank();
        this.state.dispense();
    }

    setState(state: State): void {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }

    releaseBall(): void {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count -= 1;
        }
    }

    getCount(): number {
        return this.count;
    }

    refill(count: number): void {
        this.count += count;
        console.log("The gumball machine was just refilled; it's new count is: " + this.count);
        this.state.refill();
    }

    getSoldOutState(): State {
        return this.soldOutState;
    }

    getNoQuarterState(): State {
        return this.noQuarterState;
    }

    getHasQuarterState(): State {
        return this.hasQuarterState;
    }

    getSoldState(): State {
        return this.soldState;
    }

    getWinnerState(): State {
        return this.winnerState;
    }

    toString(): string {
        return `Mighty Gumball, Inc.\n
                TS-enabled Standing Gumball Model #2020\n
                Inventory: ${this.count} ${this.count > 1 ? "gumballs" : "gumball"}\n
                Machine is ${this.state.toString()}`;
    }
}