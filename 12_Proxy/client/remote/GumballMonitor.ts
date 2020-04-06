import { GumballMachineRemote } from "./GumballMachineRemote";

export default class GumballMonitor {
    machine: GumballMachineRemote;
    constructor(machine: GumballMachineRemote) {
        this.machine = machine;
    }

    report() {
        try {
            console.log("Gumball Machine: " + this.machine.getLocation());
            console.log("Current inventory: " + this.machine.getCount() + " gumballs");
            console.log("Current state: " + this.machine.getState());
        } catch (e) {
            console.log(e);
        }
    }
}