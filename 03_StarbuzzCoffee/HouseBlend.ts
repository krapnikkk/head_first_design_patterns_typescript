import Beverage from './Beverage';
export default class HouseBlend extends Beverage{
    public cost(): number {
        return 1.8;
    }

    public getDescription():string{
        return "HouseBlend";
    }
    
}