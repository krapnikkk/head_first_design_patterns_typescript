import Mocha from './Mocha';
import DarkRoast from './DarkRoast';
import Whip from './Whip';
import HouseBlend from './HouseBlend';
import Soy from './Soy';
import { Size } from './Size';
let darkRoast: DarkRoast = new DarkRoast();
console.log(darkRoast.getDescription(), darkRoast.cost());
darkRoast = new Mocha(darkRoast);
darkRoast = new Whip(darkRoast);
console.log(darkRoast.getDescription(), darkRoast.cost());

let houseBlend:HouseBlend = new HouseBlend();
houseBlend.setSize(Size.TALL);
console.log(darkRoast.getDescription(), darkRoast.cost());
houseBlend = new Soy(houseBlend);
houseBlend =  new Mocha(houseBlend);
console.log(darkRoast.getDescription(), darkRoast.cost());
