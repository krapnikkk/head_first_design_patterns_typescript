export default class MenuComponent {
    add(menuComponet: MenuComponent) {
        throw new Error("add");
    }

    remove(menuComponet: MenuComponent) {
        throw new Error("remove");
    }

    getChild(index: number): MenuComponent {
        throw new Error("getChild");
    }

    getName(): String {
        throw new Error("getName");
    }

    getDescription(): String {
        throw new Error("getDescription");
    }

    getPrice() {
        throw new Error("getPrice");
    }

    isVegetarian(): boolean {
        throw new Error("isVegetarian");
    }

    print(){
        throw new Error("print");
    }

}