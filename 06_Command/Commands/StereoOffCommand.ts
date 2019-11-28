import Stereo from "../Devices/Stereo";

export default class StereoOffCommand implements ICommand{
    private stereo:Stereo;
    public constructor(stereo:Stereo){
        this.stereo = stereo;
    }

    public execute():void{
        this.stereo.off();
    }

    public undo():void{
        console.log("====undo====");
        this.stereo.on();
    }
}