export default class Light {
    public light: string = "";
    public constructor(light: string) {
        this.light = light;
    }

    public on(): void {
        console.log('light is on');
    }

    public off():void{
        console.log("light is off");
    }
}