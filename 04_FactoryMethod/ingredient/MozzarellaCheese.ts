import Cheese from "../interface/Cheese";

export default class MozzarellaCheese implements Cheese {
    toString(): string {
        return "Mozzarella Cheese";
    }
}