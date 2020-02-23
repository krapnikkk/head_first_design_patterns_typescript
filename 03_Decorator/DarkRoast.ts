import Beverage from './Beverage';
export default class DarkRoast extends Beverage{

    public getDescription():string{
        return "DarkRoast";
    }

    public cost(): number {
        return 1.2;
    } 
}