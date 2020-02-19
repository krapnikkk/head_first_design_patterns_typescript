export default abstract class CaffeineBeverageWithHook {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.custonmerWantsCondiments()) {
            this.addCondiments();
        }
    }

    abstract brew(): void;

    abstract addCondiments(): void;

    boilWater(): void {
        console.log("Boiling water");
    }

    pourInCup(): void {
        console.log("Pouring into cup");
    }

    custonmerWantsCondiments(): boolean {
        return true;
    }
}