export default class TurkeyAdapter implements IDuck {
    turkey: ITurkey
    constructor(turkey: ITurkey) {
        this.turkey = turkey;
    }
    quack(): void {
        this.turkey.gobble();
    }
    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }


}