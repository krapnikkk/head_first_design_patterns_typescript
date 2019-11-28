import NoCommand from "./Commands/NoCommand";

export default class RemoteControl {
    public onCommands: Array<ICommand> = [];
    public offCommands: Array<ICommand> = [];
    public undoComand: ICommand;

    public constructor() {
        let noCommand: NoCommand = new NoCommand();
        for (let index = 0; index < 7; index++) {
            this.onCommands[index] = noCommand;
            this.offCommands[index] = noCommand;
        }
        this.undoComand = noCommand;
    }

    public setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot:number):void{
        this.onCommands[slot].execute();
        this.undoComand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot:number):void{
        this.offCommands[slot].execute();
        this.undoComand = this.offCommands[slot];
    }

    public undoButtonWasPushed():void{
        this.undoComand.undo();
    }

    public description(){
        for (let index = 0; index < 7; index++) {
            let onCommandName = this.onCommands[index].__proto__.constructor.name,
                offCommandName = this.offCommands[index].__proto__.constructor.name;

            console.log(`[slot ${index}]${onCommandName} ${offCommandName}`);
        }
        console.log("undo:" + this.undoComand.__proto__.constructor.name);
    }
}