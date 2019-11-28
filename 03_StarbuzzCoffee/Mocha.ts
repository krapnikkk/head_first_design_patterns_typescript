import CondimentDecorator from './CondimentDecorator';
import Beverage from './Beverage';
export default class Mocha extends CondimentDecorator {
    public beverage: Beverage;
    public constructor(ber: Beverage) {
        super();
        this.beverage = ber;
    }
    public getDescription(): string {
        return this.beverage.getDescription() + "Mocha";
    }

    public cost(): number {
        return this.beverage.cost() + 1.1;
    }
}