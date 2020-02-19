import Tea from "./Tea";
import Coffee from "./Coffee";
import TeaWithHook from "./TeaWithHook";
import CoffeeWithHook from "./CoffeeWithHook";

let tea = new Tea(),
    coffee = new Coffee();

console.log("making tea...");
tea.prepareRecipe();

console.log("making coffee...");
coffee.prepareRecipe();

let teaHook = new TeaWithHook(),
    coffeeHook = new CoffeeWithHook();

console.log("making tea...");
teaHook.prepareRecipe();

console.log("making coffee...");
coffeeHook.prepareRecipe();

