import MenuComponent from "./MenuComponent";

export default class MenuItem extends MenuComponent {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;
    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): String {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    print() {
        console.log(`name:${this.name}`);
        if (this.isVegetarian()) {
            console.log("vegetarian");
        }
        console.log(`price:${this.price}`);
        console.log(`description:${this.description}`);
    }
}