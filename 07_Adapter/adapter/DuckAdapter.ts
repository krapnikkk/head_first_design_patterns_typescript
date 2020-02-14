export default class DuckAdapter implements ITurkey {
    duck: IDuck
    _random: number;
    constructor(duck: IDuck) {
        this.duck = duck;
        this._random = Math.random() * 10;
    }
    gobble(): void {
        this.duck.quack();
    }

    fly(): void {
        if (this._random > 5) {
            this.duck.fly();
        }
    }


}