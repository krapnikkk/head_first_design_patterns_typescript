import Iterator from "../interface/Iterator";
import MenuItem from "../MenuItem ";
export default class PancakeHouseMenuIterator implements Iterator {
    items: Map<number, MenuItem>;
    position: number = 0;

    constructor(items: Map<number, MenuItem>) {
        this.items = items;
    }

    public next(): MenuItem {
        let menuItem: MenuItem = this.items.get(this.position)!;
        this.position = this.position + 1;
        return menuItem;
    }

    public hasNext(): boolean {
        if (this.position >= this.items.size || this.items.has(this.position) == false) {
            return false;
        } else {
            return true;
        }
    }
}