import Sauce from "../interface/Sauce";
import Dough from "../interface/Dough";
import Cheese from "../interface/Cheese";
import Pepperoni from "../interface/Pepperoni";
import Clams from "../interface/Clams";
import Veggies from "../interface/Veggies";

export default abstract class Pizza {
    public name: string = "";
    public sauce!: Sauce;
    public dough!: Dough;
    public cheese!: Cheese;
    public pepperoni!: Pepperoni;
    public clam!: Clams;
    public veggies: Array<Veggies> = [];

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
    public bake() {
        console.log('baking!');
    }

    public cut() {
        console.log('cutting!');
    }

    public box() {
        console.log('boxing!');
    }

    abstract prepare(): void;

    public toString() {
        console.log(`----${this.name}----`);
        console.log(`----${this.sauce}----`);
        this.veggies.forEach((item) => {
            console.log(`----${item}----`);
        })
    }
}