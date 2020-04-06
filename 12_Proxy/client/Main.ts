import { GumballMachineRemote } from "./remote/GumballMachineRemote";
import GumballMachine from "./machine/GumballMachine";
import GumballMonitor from "./remote/GumballMonitor";

let gumballMachine: GumballMachineRemote;
let count: number = 0;
count = Math.floor(Math.random() * 2);
let locations = ["santafe","boulder","seattle"];
gumballMachine = new GumballMachine(count, locations[count]);
// fetch();

// let monitor:GumballMonitor[] = new Array(locations.length);
// for (let i=0;i < locations.length; i++) {
//     try {
//            let machine:GumballMachineRemote = (GumballMachineRemote) Naming.lookup(location[i]);
//            monitor[i] = new GumballMonitor(machine);
//         System.out.println(monitor[i]);
//     } catch (Exception e) {
//         e.printStackTrace();
//     }
// }

// for(int i=0; i < monitor.length; i++) {
//     monitor[i].report();
// }