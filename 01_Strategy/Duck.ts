export default abstract class Duck {
    private quackBehavior: IQuackBehavior;
    private flyBehavior: IFlyBehavior;
    public constructor(qb: IQuackBehavior,fb: IFlyBehavior) {
        this.quackBehavior = qb;
        this.flyBehavior = fb;
    }

    public abstract display(): void;

    public performQuack() {
        this.quackBehavior.quack();
    }

    public performFly() {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(fb: IFlyBehavior) {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior) {
        this.quackBehavior = qb;
    }

}
