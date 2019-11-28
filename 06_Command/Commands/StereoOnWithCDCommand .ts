import Stereo from "../Devices/Stereo";

export default class StereoOnWithCDCommand  implements ICommand {
    public stereo: Stereo;
    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    public execute() {
        this.stereo.setCD();
        this.stereo.setVolume(11);
        this.stereo.on();
    }

    public undo() {
        console.log("====undo====");
        this.stereo.off();
    }
}