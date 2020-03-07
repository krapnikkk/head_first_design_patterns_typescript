import MenuComponent from "./MenuComponent";

export default class Waitress{
    allMenu:MenuComponent;

    constructor(allMenu:MenuComponent){
        this.allMenu = allMenu;
    }

    printMenu(){
        this.allMenu.print();
    }
}