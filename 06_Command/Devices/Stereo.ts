export default class Stereo {
    public location: string;
    public constructor(location: string) {
        this.location = location;
    }

    public on(): void {

    }

    public off(): void {

    }

    public setCD() {
        console.log(this.location + " stereo is set for CD input");
    }

    public setDVD() {
        console.log(this.location + " stereo is set for DVD input");
    }

    public setRadio() {
        console.log(this.location + " stereo is set for Radio");
    }

    public setVolume(volume: number): void {
        console.log(this.location + " Stereo volume set to " + volume);
    }
}