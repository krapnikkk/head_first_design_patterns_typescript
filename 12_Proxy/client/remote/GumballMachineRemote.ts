import State from "../machine/interface/State";

export interface GumballMachineRemote {
    getCount(): number;
    getLocation(): string;
    getState(): State;
}