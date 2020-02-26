import Pizza from "../Pizza/Pizza";

export default abstract class PizzaStore {
    abstract createPizza(item: string): Pizza;

    orderPizza(type: string): Pizza {
        let pizza = this.createPizza(type);
        console.log(`----Making a ${pizza.getName()}----`);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}