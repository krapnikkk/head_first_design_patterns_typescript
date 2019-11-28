import Light from "../Devices/Light";

export default class LightOnCommand implements ICommand {
    private light!: Light;
    public constructor(light:Light){
        this.light = light;
    }
    public execute():void{
        this.light.on();
    }
    public undo():void{
        console.log("====undo====");
        this.light.off();
    }


}