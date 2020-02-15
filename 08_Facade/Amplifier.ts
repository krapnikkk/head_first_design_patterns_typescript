import DVDPlayer from "./DVDPlayer";
import Tuner from "./Tuner";
import CDPlayer from "./CDPlayer";

export default class Amplifier {
    description: string;
    tuner?: Tuner;
    dvd?: DVDPlayer;
    cd?: CDPlayer;

    constructor(description: string) {
        this.description = description;
    }

    public on() {
        console.log(this.description + " on");
    }

    public off() {
        console.log(this.description + " off");
    }

    public setStereoSound() {
        console.log(this.description + " stereo mode on");
    }

    public setSurroundSound() {
        console.log(this.description + " surround sound on (5 speakers, 1 subwoofer)");
    }

    public setVolume(level: number) {
        console.log(this.description + " setting volume to " + level);
    }

    public setTuner(tuner: Tuner) {
        this.tuner = tuner;
    }

    public setDvd(dvd: DVDPlayer) {
        this.dvd = dvd;
    }

    public setCd(cd: CDPlayer) {
        this.cd = cd;
    }

    public toString(): string {
        return this.description;
    }
}