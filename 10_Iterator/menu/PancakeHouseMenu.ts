import Menu from "../interface/Menu ";
import MenuItem from "../MenuItem ";
import Iterator from "../interface/Iterator";
import PancakeHouseMenuIterator from "../iterator/PancakeHouseMenuIterator";

export default class PancakeHouseMenu implements Menu {
    menuItems: Map<number, MenuItem>;
    numberOfItems: number = 0;
    constructor() {
        this.menuItems = new Map();

        this.addItem("K&B's Pancake Breakfast",
            "Pancakes with scrambled eggs, and toast",
            true,
            2.99);

        this.addItem("Regular Pancake Breakfast",
            "Pancakes with fried eggs, sausage",
            false,
            2.99);

        this.addItem("Blueberry Pancakes",
            "Pancakes made with fresh blueberries",
            true,
            3.49);

        this.addItem("Waffles",
            "Waffles, with your choice of blueberries or strawberries",
            true,
            3.59);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.set(this.numberOfItems, menuItem);
        this.numberOfItems++;
    }

    public getMenuItems(): Map<number, MenuItem> {
        return this.menuItems;
    }

    public createIterator(): Iterator {
        return new PancakeHouseMenuIterator(this.menuItems);
    }

    public toString(): string {
        return "Objectville Pancake House Menu";
    }
}