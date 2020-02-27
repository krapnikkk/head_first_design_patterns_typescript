import Menu from "./interface/Menu ";
import Iterator from "./interface/Iterator";
import MenuItem from "./MenuItem ";
export default class Waitress {
    pancakeHouseMenu: Menu;
    dinerMenu: Menu;

    constructor(pancakeHouseMenu: Menu, dinerMenu: Menu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    public printMenu(iterator?: Iterator): void {
        if (iterator) {
            while (iterator.hasNext()) {
                let menuItem: MenuItem = iterator.next();
                console.log(menuItem.getName() + ", ");
                console.log(menuItem.getPrice() + " -- " + menuItem.getDescription());
            }
        } else {
            let pancakeIterator: Iterator = this.pancakeHouseMenu.createIterator(),
                dinerIterator: Iterator = this.dinerMenu.createIterator();

            console.log("MENU\n----\nBREAKFAST");
            this.printMenu(pancakeIterator);
            console.log("\nLUNCH");
            this.printMenu(dinerIterator);
        }


    }


    public printVegetarianMenu(iterator?: Iterator): void {
        if (iterator) {
            while (iterator.hasNext()) {
                let menuItem: MenuItem = iterator.next();
                if (menuItem.isVegetarian()) {
                    console.log(menuItem.getName());
                    console.log("\t\t" + menuItem.getPrice());
                    console.log("\t" + menuItem.getDescription());
                }
            }
        } else {
            this.printVegetarianMenu(this.pancakeHouseMenu.createIterator());
            this.printVegetarianMenu(this.dinerMenu.createIterator());
        }

    }

    public isItemVegetarian(name: string): boolean {
        let breakfastIterator: Iterator = this.pancakeHouseMenu.createIterator();
        if (this.isVegetarian(name, breakfastIterator)) {
            return true;
        }
        let dinnerIterator: Iterator = this.dinerMenu.createIterator();
        if (this.isVegetarian(name, dinnerIterator)) {
            return true;
        }
        return false;
    }

    private isVegetarian(name: string, iterator: Iterator): boolean {
        while (iterator.hasNext()) {
            let menuItem: MenuItem = iterator.next();
            if (menuItem.getName().includes(name)) {
                if (menuItem.isVegetarian()) {
                    return true;
                }
            }
        }
        return false;
    }
}