export default abstract class CaffeineBeverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();

    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater() {
        console.log("Boiling water");
    }

    pourInCup() {
        console.log("Pouring into cup");
    }

}