import SingletonClassic from "./SingletonClassic";
import Singletonts from "./Singletonts";

let singletonClassic = SingletonClassic.getInstance();
console.log(singletonClassic.getDescription());

let singletonts =  Singletonts.getInstance();
console.log(singletonts.getDescription());