export default abstract class Pizza {
    public name: string = "";
    public sauce: string = "";
    public toppings: Array<string> = [];
    public getName(): string {
        return this.name;
    }
    public bake() {
        console.log('baking!');
    }

    public cut() {
        console.log('cutting!');
    }

    public box() {
        console.log('boxing!');
    }

    public prepare() {
        console.log('Prepare => Adding toppings');
        for (let i = 0; i < this.toppings.length; i++) {
            let item = this.toppings[i];
            console.log(item + "\n");
        }
    }

    public toString() {
        console.log(`----${this.name}----`);
        console.log(`----${this.sauce}----`);
        this.toppings.forEach((item) => {
            console.log(`----${item}----`);
        })
    }
}