export default class CeilingFan {
    public static HIGH: number = 3;
    public static MEDIUM: number = 2;
    public static LOW: number = 1;
    public static OFF: number = 0;
    private location: string;
    private speed: number;
    public constructor(location: string) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }
    public high(): void {
        // turns the ceiling fan on to high
        this.speed = CeilingFan.HIGH;
        console.log(this.location + " ceiling fan is on high");
    }

    public medium(): void {
        // turns the ceiling fan on to medium
        this.speed = CeilingFan.MEDIUM;
        console.log(this.location + " ceiling fan is on medium");
    }

    public low(): void {
        // turns the ceiling fan on to low
        this.speed = CeilingFan.LOW;
        console.log(this.location + " ceiling fan is on low");
    }

    public off(): void {
        // turns the ceiling fan off
        this.speed = CeilingFan.OFF;
        console.log(this.location + " ceiling fan is off");
    }

    public getSpeed(): number {
        return this.speed;
    }
}