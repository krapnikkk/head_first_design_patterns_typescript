interface ICommand{
    [x: string]: any;
    execute():void;
    undo():void;
}