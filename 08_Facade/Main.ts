import Amplifier from "./Amplifier";
import Tuner from "./Tuner";
import DVDPlayer from "./DVDPlayer";
import CDPlayer from "./CDPlayer";
import Projector from "./Projector";
import TheaterLights from "./TheaterLights";
import PopcornPopper from "./PopcornPopper";
import Screen from "./Screen";
import HomeTheaterFacade from "./HomeTheaterFacade";

let amp: Amplifier = new Amplifier("Top-O-Line Amplifier"),
    tuner: Tuner = new Tuner("Top-O-Line AM/FM Tuner"),
    dvd: DVDPlayer = new DVDPlayer("Top-O-Line DVD Player", amp),
    cd: CDPlayer = new CDPlayer("Top-O-Line CD Player", amp),
    projector: Projector = new Projector("Top-O-Line Projector", dvd),
    lights: TheaterLights = new TheaterLights("Theater Ceiling Lights"),
    screen: Screen = new Screen("Theater Screen"),
    popper: PopcornPopper = new PopcornPopper("Popcorn Popper");

const homeTheater: HomeTheaterFacade =
    new HomeTheaterFacade(amp, tuner, dvd, cd,
        projector, screen, lights, popper);

homeTheater.watchMovie("Raiders of the Lost Ark");
homeTheater.endMovie();