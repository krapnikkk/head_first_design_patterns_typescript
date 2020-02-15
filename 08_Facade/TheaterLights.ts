export default class TheaterLights {
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    on() {
        console.log(this.description + " on");
    }

    off() {
        console.log(this.description + " off");
    }

    dim(level: number) {
        console.log(this.description + " dimming to " + level + "%");
    }

    public toString(): string {
        return this.description;
    }
}