import MallardDuck from './MallardDuck';
import Quack from './Quack';
import FlyWithWings from './FlyWithWings';
import FlyNoWay from './FlyNoWay';
let mallardDuck =  new MallardDuck(new Quack(), new FlyWithWings());
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();
mallardDuck.setFlyBehavior(new FlyNoWay());
mallardDuck.performFly();