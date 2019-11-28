export default class MacroCommand implements ICommand{
    public commands:Array<ICommand>;
    public constructor(commands:Array<ICommand>){
        this.commands = commands;
    }
    public execute(){
        for (let index = 0; index < this.commands.length; index++) {
            this.commands[index].execute();
        }
    }
    public undo(){
        for(let i = this.commands.length-1;i>=0;i--){
            this.commands[i].undo();
        }
    }
}