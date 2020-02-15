import DVDPlayer from "./DVDPlayer";

export default class Projector {
    description: string;
    dvdPlayer: DVDPlayer;

    constructor(description: string, dvdPlayer: DVDPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }

    on() {
        console.log(this.description + " on");
    }

    off() {
        console.log(this.description + " off");
    }

    wideScreenMode() {
        console.log(this.description + " in widescreen mode (16x9 aspect ratio)");
    }

    tvMode() {
        console.log(this.description + " in tv mode (4x3 aspect ratio)");
    }

    public toString(): string {
        return this.description;
    }
}