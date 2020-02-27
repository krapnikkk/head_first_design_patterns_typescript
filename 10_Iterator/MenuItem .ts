export default class MenuItem {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;
    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    toString(): string {
        return this.name + "$" + this.price + "\n" + this.description;
    }
}