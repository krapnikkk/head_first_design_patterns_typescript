import Light from "../Devices/Light";

export default class LightOffCommand implements ICommand {
    private light: Light;
    public constructor(light: Light) {
        this.light = light;
    }
    public execute() {
        this.light.off();
    }
    public undo() {
        console.log("====undo====");
        this.light.on();
    }
}