import Amplifier from "./Amplifier";
import Tuner from "./Tuner";
import DVDPlayer from "./DVDPlayer";
import CDPlayer from "./CDPlayer";
import Projector from "./Projector";
import TheaterLights from "./TheaterLights";
import PopcornPopper from "./PopcornPopper";
import Screen from "./Screen";

export default class HomeTheaterFacade {
    amp: Amplifier;
    tuner: Tuner;
    dvd: DVDPlayer;
    cd: CDPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;

    constructor(amp: Amplifier,
        tuner: Tuner,
        dvd: DVDPlayer,
        cd: CDPlayer,
        projector: Projector,
        screen: Screen,
        lights: TheaterLights,
        popper: PopcornPopper) {

        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }

    watchMovie(movie:string) {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }


    endMovie() {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }

    listenToCd(cdTitle:string) {
        console.log("Get ready for an audiopile experence...");
        this.lights.on();
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setCd(this.cd);
        this.amp.setStereoSound();
        this.cd.on();
        this.cd.play(cdTitle);
    }

    endCd() {
        console.log("Shutting down CD...");
        this.amp.off();
        this.amp.setCd(this.cd);
        this.cd.eject();
        this.cd.off();
    }

    listenToRadio(frequency:number) {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }

    endRadio() {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    }
}