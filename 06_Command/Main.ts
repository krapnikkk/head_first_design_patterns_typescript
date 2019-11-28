import RemoteControl from "./RemoteControl";
import Light from "./Devices/Light";
import Stereo from "./Devices/Stereo";
import LightOnCommand from "./Commands/LightOnCommand";
import LightOffCommand from "./Commands/lightOffCommand";
import StereoOnWithCDCommand from "./Commands/StereoOnWithCDCommand ";
import StereoOffCommand from "./Commands/StereoOffCommand";
import CeilingFan from "./Devices/CeilingFan";
import CeilingFanHighCommand from "./Commands/CeilingFanHighCommand";
import CeilingFanMediumCommand from "./Commands/CeilingFanMediumCommand";
import CeilingFanLowCommand from "./Commands/CeilingFanLowCommand";
import CeilingFanOffCommand from "./Commands/CeilingFanOffCommand";
import MacroCommand from "./Commands/MacroCommand";

let remoteControl: RemoteControl = new RemoteControl(),
    light: Light = new Light("dining room"),
    stereo: Stereo = new Stereo("living room");

let lightOn: LightOnCommand = new LightOnCommand(light),
    lightOff: LightOffCommand = new LightOffCommand(light),
    stereoOn: StereoOnWithCDCommand = new StereoOnWithCDCommand(stereo),
    stereoOff: StereoOffCommand = new StereoOffCommand(stereo);

remoteControl.setCommand(1, lightOn, lightOff);
remoteControl.setCommand(4, stereoOn, stereoOff);
remoteControl.onButtonWasPushed(4);
remoteControl.offButtonWasPushed(1);
remoteControl.undoButtonWasPushed();
remoteControl.description();
console.log("====多状态Command演示====")
//多状态Command演示
let ceilingFan: CeilingFan = new CeilingFan("bedroom"),
    ceilingFanHigh: CeilingFanHighCommand = new CeilingFanHighCommand(ceilingFan),
    ceilingFanMedium: CeilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan),
    ceilingFanLow: CeilingFanLowCommand = new CeilingFanLowCommand(ceilingFan),
    ceilingFanOff: CeilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.description();
remoteControl.undoButtonWasPushed();

remoteControl.onButtonWasPushed(1);
remoteControl.description();
remoteControl.undoButtonWasPushed();


console.log("====party模式====");
let partyOn: Array<ICommand> = [lightOn, stereoOn, ceilingFanHigh],
    partyOff: Array<ICommand> = [lightOff, stereoOff, ceilingFanOff],


    partyOnMacro: MacroCommand = new MacroCommand(partyOn),
    partyOffMacro: MacroCommand = new MacroCommand(partyOff);

remoteControl.setCommand(5, partyOnMacro, partyOffMacro);

remoteControl.description();
console.log("--- Pushing Macro On---");
remoteControl.onButtonWasPushed(5);
console.log("--- Pushing Macro Off---");
remoteControl.offButtonWasPushed(5);
