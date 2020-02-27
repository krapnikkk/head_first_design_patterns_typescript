import PancakeHouseMenu from "./menu/PancakeHouseMenu";
import DinerMenu from "./menu/DinerMenu ";
import Waitress from "./Waitress";
import MenuItem from "./MenuItem ";

let pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu(),
    dinerMenu: DinerMenu = new DinerMenu(),
    waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);

// Without iterators
//printMenu();

// With iterators
waitress.printMenu();

function printMenu() {
    let pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu(),
        dinerMenu: DinerMenu = new DinerMenu();

    let breakfastItems: Map<number, MenuItem> = pancakeHouseMenu.getMenuItems(),
        lunchItems: MenuItem[] = dinerMenu.getMenuItems();

    // Hiding implementation
    console.log("USING FOR EACH");

    breakfastItems.forEach((value, key) => {
        console.log(value.getName());
        console.log("\t\t" + value.getPrice());
        console.log("\t" + value.getDescription());
    })

    lunchItems.forEach((value, key) => {
        console.log(value.getName());
        console.log("\t\t" + value.getPrice());
        console.log("\t" + value.getDescription());
    })
    // for (MenuItem menuItem : lunchItems) {
    //     console.log(menuItem.getName());
    //     console.log("\t\t" + menuItem.getPrice());
    //     console.log("\t" + menuItem.getDescription());
    // }

    // Exposing implementation
    console.log("USING FOR LOOPS");
    for (let i = 0; i < breakfastItems.size; i++) {
        let menuItem: MenuItem = <MenuItem>breakfastItems.get(i);
        console.log(menuItem.getName());
        console.log("\t\t" + menuItem.getPrice());
        console.log("\t" + menuItem.getDescription());
    }

    for (let i = 0; i < lunchItems.length; i++) {
        let menuItem: MenuItem = lunchItems[i];
        console.log(menuItem.getName());
        console.log("\t\t" + menuItem.getPrice());
        console.log("\t" + menuItem.getDescription());
    }
}