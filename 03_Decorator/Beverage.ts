import { Size } from "./Size";
export default abstract class Beverage {
    public size: Size = Size.TALL;
    public description: string = "Unknown Beverage";

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;

    public setSize(size: Size) {
        this.size = size;
    }

    public getSize(): Size {
        return this.size;
    }
}

