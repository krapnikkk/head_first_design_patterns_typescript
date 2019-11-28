import CondimentDecorator from './CondimentDecorator';
import Beverage from './Beverage';
import { Size } from './Size';
export default class Soy extends CondimentDecorator {
    public beverage: Beverage;
    public constructor(ber: Beverage) {
        super();
        this.beverage = ber;
    }
    public getDescription(): string {
        return this.beverage.getDescription() + "Soy";
    }

    public cost(): number {
        let cost = this.beverage.cost();
        if (this.beverage.getSize() == Size.TALL) {
            cost += 0.1;
        } else if (this.beverage.getSize() == Size.GRANDE) {
            cost += 0.15;
        } else if (this.beverage.getSize() == Size.VENTI) {
            cost += 0.20;
        }
        return cost;
    }
}