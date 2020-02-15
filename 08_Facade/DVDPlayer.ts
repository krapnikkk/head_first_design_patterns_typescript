import Amplifier from "./Amplifier";

export default class DVDPlayer {
    description: string;
    currentTrack?: number;
    amplifier: Amplifier;
    movie?: string;

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
        this.movie = "";
        console.log(this.description + " eject");
    }

    // play(track: number) {
    //     if (this.movie == null) {
    //         console.log(this.description + " can't play track " + track + " no dvd inserted");
    //     } else {
    //         this.currentTrack = track;
    //         console.log(this.description + " playing track " + this.currentTrack + " of \"" + this.movie + "\"");
    //     }
    // }

    play(movie:string) {
        this.movie = movie;
        this.currentTrack = 0;
        console.log(this.description + " playing \"" + movie + "\"");
    }

    stop() {
        this.currentTrack = 0;
        console.log(this.description + " stopped \"" + this.movie + "\"");
    }

    pause() {
        console.log(this.description + " paused \"" + this.movie + "\"");
    }

    setTwoChannelAudio() {
        console.log(this.description + " set two channel audio");
    }

    setSurroundAudio() {
        console.log(this.description + " set surround audio");
    }

    public toString(): string {
        return this.description;
    }
}
