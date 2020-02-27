import Iterator from "../interface/Iterator";
import MenuItem from "../MenuItem ";
export default class DinerMenuIterator implements Iterator {
    items: MenuItem[];
    position: number = 0;
numberOfItems: number = 0;
    constructor(items: MenuItem[]) {
        this.items = items;
    }

    public next(): MenuItem {
        let menuItem: MenuItem = this.items[this.position];
        this.position = this.position + 1;
        return menuItem;
    }

    public hasNext(): boolean {
        if (this.position >= this.items.length || this.items[this.position] == null) {
            return false;
        } else {
            return true;
        }
    }

}