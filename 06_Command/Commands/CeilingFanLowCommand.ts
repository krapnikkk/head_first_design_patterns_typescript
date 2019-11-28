import CeilingFan from "../Devices/CeilingFan";

export default class CeilingFanLowCommand implements ICommand{
    private ceilingFan: CeilingFan;
    private prevSpeed!: number;
    public constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }
    public execute() {
        this.prevSpeed = this.ceilingFan.getSpeed();
        console.log("prevSpeed:" + this.prevSpeed);
        this.ceilingFan.low();
        console.log("nowSpeed:" + this.ceilingFan.getSpeed());
    }

    public undo() {
        console.log("====undo====");
        switch (this.prevSpeed) {
            case CeilingFan.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    }
}