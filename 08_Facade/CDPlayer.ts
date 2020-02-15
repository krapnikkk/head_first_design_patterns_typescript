import Amplifier from "./Amplifier";

export default class CDPlayer {
    description: string;
    currentTrack?: number;
    amplifier: Amplifier;
    title?: string;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on() {
        console.log(this.description + " on");
    }

    off() {
        console.log(this.description + " off");
    }

    eject() {
        this.title = "";
        console.log(this.description + " eject");
    }

    play(title: string) {
        this.title = title;
        this.currentTrack = 0;
        console.log(this.description + " playing \"" + title + "\"");
    }

    stop() {
        this.currentTrack = 0;
        console.log(this.description + " stopped");
    }

    pause() {
        console.log(this.description + " paused \"" + this.title + "\"");
    }

    public toString(): string {
        return this.description;
    }
}