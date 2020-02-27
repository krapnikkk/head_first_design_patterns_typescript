import Menu from "../interface/Menu ";
import MenuItem from "../MenuItem ";
import Iterator from "../interface/Iterator";
import DinerMenuIterator from "../iterator/DinerMenuIterator";

export default class DinerMenu implements Menu {
    static MAX_ITEMS: number = 6;
    numberOfItems: number = 0;
    menuItems: MenuItem[];

    constructor() {
        this.menuItems = new Array(DinerMenu.MAX_ITEMS);

        this.addItem("Vegetarian BLT",
            "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT",
            "Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day",
            "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog",
            "A hot dog, with saurkraut, relish, onions, topped with cheese",
            false, 3.05);
        this.addItem("Steamed Veggies and Brown Rice",
            "Steamed vegetables over brown rice", true, 3.99);
        this.addItem("Pasta",
            "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
            true, 3.89);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void{
        let menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
        if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            console.log("Sorry, menu is full!  Can't add item to menu");
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems++;
        }
    }

    public getMenuItems(): MenuItem[] {
        return this.menuItems;
    }

    public createIterator(): Iterator {
        return new DinerMenuIterator(this.menuItems);
        // To test Alternating menu items, comment out above line,
        // and uncomment the line below.
        //return new AlternatingDinerMenuIterator(menuItems);
    }
}