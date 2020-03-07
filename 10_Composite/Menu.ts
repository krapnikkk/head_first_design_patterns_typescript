import MenuComponent from "./MenuComponent";

// interface Iterable {
//     [Symbol.iterator](): Iterator,
// }

// interface Iterator {
//     next(value?: any): IterationResult,
// }

// interface IterationResult {
//     value: any,
//     done: boolean,
// }

export default class Menu extends MenuComponent {
    menuComponents: Set<MenuComponent> = new Set();
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    add(menuComponet: MenuComponent) {
        this.menuComponents.add(menuComponet);
    }

    remove(menuComponet: MenuComponent) {
        this.menuComponents.delete(menuComponet);
    }

    getChild(i: number): MenuComponent {
        return Array.from(this.menuComponents)[i];
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    print(): void {
        console.log(this.getName());
        console.log(this.getDescription());
        console.log("---------------------");

        let iterator: Iterator<MenuComponent> = this.menuComponents.values();
        while (!iterator.next().done) {
            let menuComponent: MenuComponent = iterator.next().value;
            if (menuComponent) {
                menuComponent.print();
            }
        }
    }
}