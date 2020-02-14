import MallardDuck from "./MallardDuck";
import WildTurkey from "./WildTurkey";
import DuckAdapter from "./adapter/DuckAdapter";
import TurkeyAdapter from "./adapter/TurkeyAdapter";

let mallardDuck = new MallardDuck(),
    wildTurkey = new WildTurkey();

let duckAdapter = new DuckAdapter(mallardDuck);
testTurkey(duckAdapter);

let turkeyAdapter = new TurkeyAdapter(wildTurkey);
testDuck(turkeyAdapter);


function testDuck(duck: IDuck): void {
    duck.quack();
    duck.fly();
}

function testTurkey(turkey: ITurkey): void {
    turkey.gobble();
    turkey.fly();
}