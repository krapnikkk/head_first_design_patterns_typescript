/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./04_FactoryMethod/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./04_FactoryMethod/Main.ts":
/*!**********************************!*\
  !*** ./04_FactoryMethod/Main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NYPizzaStore_1 = __importDefault(__webpack_require__(/*! ./pizzaStore/NYPizzaStore */ "./04_FactoryMethod/pizzaStore/NYPizzaStore.ts"));
var ChicagoPizzaStore_1 = __importDefault(__webpack_require__(/*! ./pizzaStore/ChicagoPizzaStore  */ "./04_FactoryMethod/pizzaStore/ChicagoPizzaStore .ts"));
var nyStore = new NYPizzaStore_1.default(), chicagoStore = new ChicagoPizzaStore_1.default();
var pizza = nyStore.orderPizza("cheese");
console.log("Ethan ordered a " + pizza + "\n");
pizza = chicagoStore.orderPizza("cheese");
console.log("Joel ordered a " + pizza + "\n");
pizza = nyStore.orderPizza("clam");
console.log("Ethan ordered a " + pizza + "\n");
pizza = chicagoStore.orderPizza("clam");
console.log("Joel ordered a " + pizza + "\n");
pizza = nyStore.orderPizza("pepperoni");
console.log("Ethan ordered a " + pizza + "\n");
pizza = chicagoStore.orderPizza("pepperoni");
console.log("Joel ordered a " + pizza + "\n");
pizza = nyStore.orderPizza("veggie");
console.log("Ethan ordered a " + pizza + "\n");
pizza = chicagoStore.orderPizza("veggie");
console.log("Joel ordered a " + pizza + "\n");


/***/ }),

/***/ "./04_FactoryMethod/ingredient/BlackOlives.ts":
/*!****************************************************!*\
  !*** ./04_FactoryMethod/ingredient/BlackOlives.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlackOlives = /** @class */ (function () {
    function BlackOlives() {
    }
    BlackOlives.prototype.toString = function () {
        return "Black Olives";
    };
    return BlackOlives;
}());
exports.default = BlackOlives;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/Eggplant.ts":
/*!*************************************************!*\
  !*** ./04_FactoryMethod/ingredient/Eggplant.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Eggplant = /** @class */ (function () {
    function Eggplant() {
    }
    Eggplant.prototype.toString = function () {
        return "Eggplant";
    };
    return Eggplant;
}());
exports.default = Eggplant;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/FreshClams.ts":
/*!***************************************************!*\
  !*** ./04_FactoryMethod/ingredient/FreshClams.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FreshClams = /** @class */ (function () {
    function FreshClams() {
    }
    FreshClams.prototype.toString = function () {
        return "Fresh Clams from Long Island Sound";
    };
    return FreshClams;
}());
exports.default = FreshClams;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/FrozenClams.ts":
/*!****************************************************!*\
  !*** ./04_FactoryMethod/ingredient/FrozenClams.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FrozenClams = /** @class */ (function () {
    function FrozenClams() {
    }
    FrozenClams.prototype.toString = function () {
        return "Frozen Clams";
    };
    return FrozenClams;
}());
exports.default = FrozenClams;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/Garlic.ts":
/*!***********************************************!*\
  !*** ./04_FactoryMethod/ingredient/Garlic.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Garlic = /** @class */ (function () {
    function Garlic() {
    }
    Garlic.prototype.toString = function () {
        return "Garlic";
    };
    return Garlic;
}());
exports.default = Garlic;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/MarinaraSauce.ts":
/*!******************************************************!*\
  !*** ./04_FactoryMethod/ingredient/MarinaraSauce.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarinaraSauce = /** @class */ (function () {
    function MarinaraSauce() {
    }
    MarinaraSauce.prototype.toString = function () {
        return "MarinaraSauce";
    };
    return MarinaraSauce;
}());
exports.default = MarinaraSauce;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/MozzarellaCheese.ts":
/*!*********************************************************!*\
  !*** ./04_FactoryMethod/ingredient/MozzarellaCheese.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MozzarellaCheese = /** @class */ (function () {
    function MozzarellaCheese() {
    }
    MozzarellaCheese.prototype.toString = function () {
        return "Mozzarella Cheese";
    };
    return MozzarellaCheese;
}());
exports.default = MozzarellaCheese;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/Mushroom.ts":
/*!*************************************************!*\
  !*** ./04_FactoryMethod/ingredient/Mushroom.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mushroom = /** @class */ (function () {
    function Mushroom() {
    }
    Mushroom.prototype.toString = function () {
        return "Mushroom";
    };
    return Mushroom;
}());
exports.default = Mushroom;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/Onion.ts":
/*!**********************************************!*\
  !*** ./04_FactoryMethod/ingredient/Onion.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Onion = /** @class */ (function () {
    function Onion() {
    }
    Onion.prototype.toString = function () {
        return "Onion";
    };
    return Onion;
}());
exports.default = Onion;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/PlumTomatoSauce.ts":
/*!********************************************************!*\
  !*** ./04_FactoryMethod/ingredient/PlumTomatoSauce.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PlumTomatoSauce = /** @class */ (function () {
    function PlumTomatoSauce() {
    }
    PlumTomatoSauce.prototype.toString = function () {
        return "Plum Tomato Sauce";
    };
    return PlumTomatoSauce;
}());
exports.default = PlumTomatoSauce;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/RedPepper.ts":
/*!**************************************************!*\
  !*** ./04_FactoryMethod/ingredient/RedPepper.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RedPepper = /** @class */ (function () {
    function RedPepper() {
    }
    RedPepper.prototype.toString = function () {
        return "Red Pepper";
    };
    return RedPepper;
}());
exports.default = RedPepper;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/ReggianoCheese.ts":
/*!*******************************************************!*\
  !*** ./04_FactoryMethod/ingredient/ReggianoCheese.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReggianoCheese = /** @class */ (function () {
    function ReggianoCheese() {
    }
    ReggianoCheese.prototype.toString = function () {
        return "Reggiano Cheese";
    };
    return ReggianoCheese;
}());
exports.default = ReggianoCheese;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/SlicedPepperoni.ts":
/*!********************************************************!*\
  !*** ./04_FactoryMethod/ingredient/SlicedPepperoni.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SlicedPepperoni = /** @class */ (function () {
    function SlicedPepperoni() {
    }
    SlicedPepperoni.prototype.toString = function () {
        return "Sliced Pepperoni";
    };
    return SlicedPepperoni;
}());
exports.default = SlicedPepperoni;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/Spinach.ts":
/*!************************************************!*\
  !*** ./04_FactoryMethod/ingredient/Spinach.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Spinach = /** @class */ (function () {
    function Spinach() {
    }
    Spinach.prototype.toString = function () {
        return "Spinach";
    };
    return Spinach;
}());
exports.default = Spinach;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/ThickCrustDough.ts":
/*!********************************************************!*\
  !*** ./04_FactoryMethod/ingredient/ThickCrustDough.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ThickCrustDough = /** @class */ (function () {
    function ThickCrustDough() {
    }
    ThickCrustDough.prototype.toString = function () {
        return "Thick Crust Dough";
    };
    return ThickCrustDough;
}());
exports.default = ThickCrustDough;


/***/ }),

/***/ "./04_FactoryMethod/ingredient/ThinCrustDough.ts":
/*!*******************************************************!*\
  !*** ./04_FactoryMethod/ingredient/ThinCrustDough.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ThinCrustDough = /** @class */ (function () {
    function ThinCrustDough() {
    }
    ThinCrustDough.prototype.toString = function () {
        return "Thin Crust Dough";
    };
    return ThinCrustDough;
}());
exports.default = ThinCrustDough;


/***/ }),

/***/ "./04_FactoryMethod/pizza/CheesePizza.ts":
/*!***********************************************!*\
  !*** ./04_FactoryMethod/pizza/CheesePizza.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_FactoryMethod/pizza/Pizza.ts"));
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(ingredientFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    CheesePizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    };
    return CheesePizza;
}(Pizza_1.default));
exports.default = CheesePizza;


/***/ }),

/***/ "./04_FactoryMethod/pizza/ClamPizza.ts":
/*!*********************************************!*\
  !*** ./04_FactoryMethod/pizza/ClamPizza.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_FactoryMethod/pizza/Pizza.ts"));
var ClamPizza = /** @class */ (function (_super) {
    __extends(ClamPizza, _super);
    function ClamPizza(ingredientFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    ClamPizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    };
    return ClamPizza;
}(Pizza_1.default));
exports.default = ClamPizza;


/***/ }),

/***/ "./04_FactoryMethod/pizza/PepperoniPizza.ts":
/*!**************************************************!*\
  !*** ./04_FactoryMethod/pizza/PepperoniPizza.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_FactoryMethod/pizza/Pizza.ts"));
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza(ingredientFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    PepperoniPizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    };
    return PepperoniPizza;
}(Pizza_1.default));
exports.default = PepperoniPizza;


/***/ }),

/***/ "./04_FactoryMethod/pizza/Pizza.ts":
/*!*****************************************!*\
  !*** ./04_FactoryMethod/pizza/Pizza.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.name = "";
        this.veggies = [];
    }
    Pizza.prototype.setName = function (name) {
        this.name = name;
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    Pizza.prototype.bake = function () {
        console.log('baking!');
    };
    Pizza.prototype.cut = function () {
        console.log('cutting!');
    };
    Pizza.prototype.box = function () {
        console.log('boxing!');
    };
    Pizza.prototype.toString = function () {
        console.log("----" + this.name + "----");
        console.log("----" + this.sauce + "----");
        this.veggies.forEach(function (item) {
            console.log("----" + item + "----");
        });
    };
    return Pizza;
}());
exports.default = Pizza;


/***/ }),

/***/ "./04_FactoryMethod/pizza/VeggiePizza.ts":
/*!***********************************************!*\
  !*** ./04_FactoryMethod/pizza/VeggiePizza.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_FactoryMethod/pizza/Pizza.ts"));
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza(ingredientFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    VeggiePizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.veggies = this.ingredientFactory.createVeggies();
    };
    return VeggiePizza;
}(Pizza_1.default));
exports.default = VeggiePizza;


/***/ }),

/***/ "./04_FactoryMethod/pizzaStore/ChicagoPizzaIngredientFactory .ts":
/*!***********************************************************************!*\
  !*** ./04_FactoryMethod/pizzaStore/ChicagoPizzaIngredientFactory .ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThickCrustDough_1 = __importDefault(__webpack_require__(/*! ../ingredient/ThickCrustDough */ "./04_FactoryMethod/ingredient/ThickCrustDough.ts"));
var PlumTomatoSauce_1 = __importDefault(__webpack_require__(/*! ../ingredient/PlumTomatoSauce */ "./04_FactoryMethod/ingredient/PlumTomatoSauce.ts"));
var MozzarellaCheese_1 = __importDefault(__webpack_require__(/*! ../ingredient/MozzarellaCheese */ "./04_FactoryMethod/ingredient/MozzarellaCheese.ts"));
var BlackOlives_1 = __importDefault(__webpack_require__(/*! ../ingredient/BlackOlives */ "./04_FactoryMethod/ingredient/BlackOlives.ts"));
var Spinach_1 = __importDefault(__webpack_require__(/*! ../ingredient/Spinach */ "./04_FactoryMethod/ingredient/Spinach.ts"));
var Eggplant_1 = __importDefault(__webpack_require__(/*! ../ingredient/Eggplant */ "./04_FactoryMethod/ingredient/Eggplant.ts"));
var FrozenClams_1 = __importDefault(__webpack_require__(/*! ../ingredient/FrozenClams */ "./04_FactoryMethod/ingredient/FrozenClams.ts"));
var SlicedPepperoni_1 = __importDefault(__webpack_require__(/*! ../ingredient/SlicedPepperoni */ "./04_FactoryMethod/ingredient/SlicedPepperoni.ts"));
var ChicagoPizzaIngredientFactory = /** @class */ (function () {
    function ChicagoPizzaIngredientFactory() {
    }
    ChicagoPizzaIngredientFactory.prototype.createDough = function () {
        return new ThickCrustDough_1.default();
    };
    ChicagoPizzaIngredientFactory.prototype.createSauce = function () {
        return new PlumTomatoSauce_1.default();
    };
    ChicagoPizzaIngredientFactory.prototype.createCheese = function () {
        return new MozzarellaCheese_1.default();
    };
    ChicagoPizzaIngredientFactory.prototype.createVeggies = function () {
        var veggies = [
            new BlackOlives_1.default(),
            new Spinach_1.default(),
            new Eggplant_1.default()
        ];
        return veggies;
    };
    ChicagoPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new SlicedPepperoni_1.default();
    };
    ChicagoPizzaIngredientFactory.prototype.createClam = function () {
        return new FrozenClams_1.default();
    };
    return ChicagoPizzaIngredientFactory;
}());
exports.default = ChicagoPizzaIngredientFactory;


/***/ }),

/***/ "./04_FactoryMethod/pizzaStore/ChicagoPizzaStore .ts":
/*!***********************************************************!*\
  !*** ./04_FactoryMethod/pizzaStore/ChicagoPizzaStore .ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PizzaStore_1 = __importDefault(__webpack_require__(/*! ./PizzaStore */ "./04_FactoryMethod/pizzaStore/PizzaStore.ts"));
var ChicagoPizzaIngredientFactory_1 = __importDefault(__webpack_require__(/*! ./ChicagoPizzaIngredientFactory  */ "./04_FactoryMethod/pizzaStore/ChicagoPizzaIngredientFactory .ts"));
var CheesePizza_1 = __importDefault(__webpack_require__(/*! ../pizza/CheesePizza */ "./04_FactoryMethod/pizza/CheesePizza.ts"));
var VeggiePizza_1 = __importDefault(__webpack_require__(/*! ../pizza/VeggiePizza */ "./04_FactoryMethod/pizza/VeggiePizza.ts"));
var ClamPizza_1 = __importDefault(__webpack_require__(/*! ../pizza/ClamPizza */ "./04_FactoryMethod/pizza/ClamPizza.ts"));
var PepperoniPizza_1 = __importDefault(__webpack_require__(/*! ../pizza/PepperoniPizza */ "./04_FactoryMethod/pizza/PepperoniPizza.ts"));
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoPizzaStore.prototype.createPizza = function (item) {
        var pizza;
        var ingredientFactory = new ChicagoPizzaIngredientFactory_1.default();
        if (item.includes("cheese")) {
            pizza = new CheesePizza_1.default(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");
        }
        else if (item.includes("veggie")) {
            pizza = new VeggiePizza_1.default(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");
        }
        else if (item.includes("clam")) {
            pizza = new ClamPizza_1.default(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");
        }
        else if (item.includes("pepperoni")) {
            pizza = new PepperoniPizza_1.default(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");
        }
        return pizza;
    };
    return ChicagoPizzaStore;
}(PizzaStore_1.default));
exports.default = ChicagoPizzaStore;


/***/ }),

/***/ "./04_FactoryMethod/pizzaStore/NYPizzaIngredientFactory.ts":
/*!*****************************************************************!*\
  !*** ./04_FactoryMethod/pizzaStore/NYPizzaIngredientFactory.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ThinCrustDough_1 = __importDefault(__webpack_require__(/*! ../ingredient/ThinCrustDough */ "./04_FactoryMethod/ingredient/ThinCrustDough.ts"));
var MarinaraSauce_1 = __importDefault(__webpack_require__(/*! ../ingredient/MarinaraSauce */ "./04_FactoryMethod/ingredient/MarinaraSauce.ts"));
var ReggianoCheese_1 = __importDefault(__webpack_require__(/*! ../ingredient/ReggianoCheese */ "./04_FactoryMethod/ingredient/ReggianoCheese.ts"));
var Garlic_1 = __importDefault(__webpack_require__(/*! ../ingredient/Garlic */ "./04_FactoryMethod/ingredient/Garlic.ts"));
var Onion_1 = __importDefault(__webpack_require__(/*! ../ingredient/Onion */ "./04_FactoryMethod/ingredient/Onion.ts"));
var Mushroom_1 = __importDefault(__webpack_require__(/*! ../ingredient/Mushroom */ "./04_FactoryMethod/ingredient/Mushroom.ts"));
var RedPepper_1 = __importDefault(__webpack_require__(/*! ../ingredient/RedPepper */ "./04_FactoryMethod/ingredient/RedPepper.ts"));
var SlicedPepperoni_1 = __importDefault(__webpack_require__(/*! ../ingredient/SlicedPepperoni */ "./04_FactoryMethod/ingredient/SlicedPepperoni.ts"));
var FreshClams_1 = __importDefault(__webpack_require__(/*! ../ingredient/FreshClams */ "./04_FactoryMethod/ingredient/FreshClams.ts"));
var NYPizzaIngredientFactory = /** @class */ (function () {
    function NYPizzaIngredientFactory() {
    }
    NYPizzaIngredientFactory.prototype.createDough = function () {
        return new ThinCrustDough_1.default();
    };
    NYPizzaIngredientFactory.prototype.createSauce = function () {
        return new MarinaraSauce_1.default();
    };
    NYPizzaIngredientFactory.prototype.createCheese = function () {
        return new ReggianoCheese_1.default();
    };
    NYPizzaIngredientFactory.prototype.createVeggies = function () {
        var veggies = [new Garlic_1.default(), new Onion_1.default(), new Mushroom_1.default(), new RedPepper_1.default()];
        return veggies;
    };
    NYPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new SlicedPepperoni_1.default();
    };
    NYPizzaIngredientFactory.prototype.createClam = function () {
        return new FreshClams_1.default();
    };
    return NYPizzaIngredientFactory;
}());
exports.default = NYPizzaIngredientFactory;


/***/ }),

/***/ "./04_FactoryMethod/pizzaStore/NYPizzaStore.ts":
/*!*****************************************************!*\
  !*** ./04_FactoryMethod/pizzaStore/NYPizzaStore.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PizzaStore_1 = __importDefault(__webpack_require__(/*! ./PizzaStore */ "./04_FactoryMethod/pizzaStore/PizzaStore.ts"));
var NYPizzaIngredientFactory_1 = __importDefault(__webpack_require__(/*! ./NYPizzaIngredientFactory */ "./04_FactoryMethod/pizzaStore/NYPizzaIngredientFactory.ts"));
var CheesePizza_1 = __importDefault(__webpack_require__(/*! ../pizza/CheesePizza */ "./04_FactoryMethod/pizza/CheesePizza.ts"));
var VeggiePizza_1 = __importDefault(__webpack_require__(/*! ../pizza/VeggiePizza */ "./04_FactoryMethod/pizza/VeggiePizza.ts"));
var ClamPizza_1 = __importDefault(__webpack_require__(/*! ../pizza/ClamPizza */ "./04_FactoryMethod/pizza/ClamPizza.ts"));
var PepperoniPizza_1 = __importDefault(__webpack_require__(/*! ../pizza/PepperoniPizza */ "./04_FactoryMethod/pizza/PepperoniPizza.ts"));
var NYPizzaStore = /** @class */ (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzaStore.prototype.createPizza = function (item) {
        var pizza;
        var ingredientFactory = new NYPizzaIngredientFactory_1.default();
        if (item.includes("cheese")) {
            pizza = new CheesePizza_1.default(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        }
        else if (item.includes("veggie")) {
            pizza = new VeggiePizza_1.default(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        }
        else if (item.includes("clam")) {
            pizza = new ClamPizza_1.default(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        }
        else if (item.includes("pepperoni")) {
            pizza = new PepperoniPizza_1.default(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    };
    return NYPizzaStore;
}(PizzaStore_1.default));
exports.default = NYPizzaStore;


/***/ }),

/***/ "./04_FactoryMethod/pizzaStore/PizzaStore.ts":
/*!***************************************************!*\
  !*** ./04_FactoryMethod/pizzaStore/PizzaStore.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        console.log("----Making a " + pizza.getName() + "----");
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports.default = PizzaStore;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9NYWluLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvaW5ncmVkaWVudC9CbGFja09saXZlcy50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL2luZ3JlZGllbnQvRWdncGxhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L0ZyZXNoQ2xhbXMudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L0Zyb3plbkNsYW1zLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvaW5ncmVkaWVudC9HYXJsaWMudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L01hcmluYXJhU2F1Y2UudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L01venphcmVsbGFDaGVlc2UudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L011c2hyb29tLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvaW5ncmVkaWVudC9Pbmlvbi50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL2luZ3JlZGllbnQvUGx1bVRvbWF0b1NhdWNlLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvaW5ncmVkaWVudC9SZWRQZXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L1JlZ2dpYW5vQ2hlZXNlLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvaW5ncmVkaWVudC9TbGljZWRQZXBwZXJvbmkudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L1NwaW5hY2gudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9pbmdyZWRpZW50L1RoaWNrQ3J1c3REb3VnaC50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL2luZ3JlZGllbnQvVGhpbkNydXN0RG91Z2gudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9waXp6YS9DaGVlc2VQaXp6YS50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL3BpenphL0NsYW1QaXp6YS50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL3BpenphL1BlcHBlcm9uaVBpenphLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvcGl6emEvUGl6emEudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9waXp6YS9WZWdnaWVQaXp6YS50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL3BpenphU3RvcmUvQ2hpY2Fnb1BpenphSW5ncmVkaWVudEZhY3RvcnkgLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvcGl6emFTdG9yZS9DaGljYWdvUGl6emFTdG9yZSAudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfRmFjdG9yeU1ldGhvZC9waXp6YVN0b3JlL05ZUGl6emFJbmdyZWRpZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi8wNF9GYWN0b3J5TWV0aG9kL3BpenphU3RvcmUvTllQaXp6YVN0b3JlLnRzIiwid2VicGFjazovLy8uLzA0X0ZhY3RvcnlNZXRob2QvcGl6emFTdG9yZS9QaXp6YVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFDQUFxQyxtQkFBTyxDQUFDLGdGQUEyQjtBQUN4RSwwQ0FBMEMsbUJBQU8sQ0FBQyw0RkFBaUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7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QUNBLENBQUM7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLzA0X0ZhY3RvcnlNZXRob2QvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBOWVBpenphU3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9waXp6YVN0b3JlL05ZUGl6emFTdG9yZVwiKSk7XHJcbnZhciBDaGljYWdvUGl6emFTdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphU3RvcmUvQ2hpY2Fnb1BpenphU3RvcmUgXCIpKTtcclxudmFyIG55U3RvcmUgPSBuZXcgTllQaXp6YVN0b3JlXzEuZGVmYXVsdCgpLCBjaGljYWdvU3RvcmUgPSBuZXcgQ2hpY2Fnb1BpenphU3RvcmVfMS5kZWZhdWx0KCk7XHJcbnZhciBwaXp6YSA9IG55U3RvcmUub3JkZXJQaXp6YShcImNoZWVzZVwiKTtcclxuY29uc29sZS5sb2coXCJFdGhhbiBvcmRlcmVkIGEgXCIgKyBwaXp6YSArIFwiXFxuXCIpO1xyXG5waXp6YSA9IGNoaWNhZ29TdG9yZS5vcmRlclBpenphKFwiY2hlZXNlXCIpO1xyXG5jb25zb2xlLmxvZyhcIkpvZWwgb3JkZXJlZCBhIFwiICsgcGl6emEgKyBcIlxcblwiKTtcclxucGl6emEgPSBueVN0b3JlLm9yZGVyUGl6emEoXCJjbGFtXCIpO1xyXG5jb25zb2xlLmxvZyhcIkV0aGFuIG9yZGVyZWQgYSBcIiArIHBpenphICsgXCJcXG5cIik7XHJcbnBpenphID0gY2hpY2Fnb1N0b3JlLm9yZGVyUGl6emEoXCJjbGFtXCIpO1xyXG5jb25zb2xlLmxvZyhcIkpvZWwgb3JkZXJlZCBhIFwiICsgcGl6emEgKyBcIlxcblwiKTtcclxucGl6emEgPSBueVN0b3JlLm9yZGVyUGl6emEoXCJwZXBwZXJvbmlcIik7XHJcbmNvbnNvbGUubG9nKFwiRXRoYW4gb3JkZXJlZCBhIFwiICsgcGl6emEgKyBcIlxcblwiKTtcclxucGl6emEgPSBjaGljYWdvU3RvcmUub3JkZXJQaXp6YShcInBlcHBlcm9uaVwiKTtcclxuY29uc29sZS5sb2coXCJKb2VsIG9yZGVyZWQgYSBcIiArIHBpenphICsgXCJcXG5cIik7XHJcbnBpenphID0gbnlTdG9yZS5vcmRlclBpenphKFwidmVnZ2llXCIpO1xyXG5jb25zb2xlLmxvZyhcIkV0aGFuIG9yZGVyZWQgYSBcIiArIHBpenphICsgXCJcXG5cIik7XHJcbnBpenphID0gY2hpY2Fnb1N0b3JlLm9yZGVyUGl6emEoXCJ2ZWdnaWVcIik7XHJcbmNvbnNvbGUubG9nKFwiSm9lbCBvcmRlcmVkIGEgXCIgKyBwaXp6YSArIFwiXFxuXCIpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQmxhY2tPbGl2ZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCbGFja09saXZlcygpIHtcclxuICAgIH1cclxuICAgIEJsYWNrT2xpdmVzLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJCbGFjayBPbGl2ZXNcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmxhY2tPbGl2ZXM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEJsYWNrT2xpdmVzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRWdncGxhbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFZ2dwbGFudCgpIHtcclxuICAgIH1cclxuICAgIEVnZ3BsYW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJFZ2dwbGFudFwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFZ2dwbGFudDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRWdncGxhbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBGcmVzaENsYW1zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnJlc2hDbGFtcygpIHtcclxuICAgIH1cclxuICAgIEZyZXNoQ2xhbXMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZyZXNoIENsYW1zIGZyb20gTG9uZyBJc2xhbmQgU291bmRcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRnJlc2hDbGFtcztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRnJlc2hDbGFtcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEZyb3plbkNsYW1zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnJvemVuQ2xhbXMoKSB7XHJcbiAgICB9XHJcbiAgICBGcm96ZW5DbGFtcy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiRnJvemVuIENsYW1zXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEZyb3plbkNsYW1zO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBGcm96ZW5DbGFtcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEdhcmxpYyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhcmxpYygpIHtcclxuICAgIH1cclxuICAgIEdhcmxpYy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiR2FybGljXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhcmxpYztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FybGljO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWFyaW5hcmFTYXVjZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hcmluYXJhU2F1Y2UoKSB7XHJcbiAgICB9XHJcbiAgICBNYXJpbmFyYVNhdWNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJNYXJpbmFyYVNhdWNlXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hcmluYXJhU2F1Y2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hcmluYXJhU2F1Y2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNb3p6YXJlbGxhQ2hlZXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTW96emFyZWxsYUNoZWVzZSgpIHtcclxuICAgIH1cclxuICAgIE1venphcmVsbGFDaGVlc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIk1venphcmVsbGEgQ2hlZXNlXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1venphcmVsbGFDaGVlc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1venphcmVsbGFDaGVlc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNdXNocm9vbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE11c2hyb29tKCkge1xyXG4gICAgfVxyXG4gICAgTXVzaHJvb20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIk11c2hyb29tXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE11c2hyb29tO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNdXNocm9vbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE9uaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT25pb24oKSB7XHJcbiAgICB9XHJcbiAgICBPbmlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiT25pb25cIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT25pb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE9uaW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGx1bVRvbWF0b1NhdWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGx1bVRvbWF0b1NhdWNlKCkge1xyXG4gICAgfVxyXG4gICAgUGx1bVRvbWF0b1NhdWNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJQbHVtIFRvbWF0byBTYXVjZVwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbHVtVG9tYXRvU2F1Y2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBsdW1Ub21hdG9TYXVjZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJlZFBlcHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlZFBlcHBlcigpIHtcclxuICAgIH1cclxuICAgIFJlZFBlcHBlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiUmVkIFBlcHBlclwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWRQZXBwZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlZFBlcHBlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJlZ2dpYW5vQ2hlZXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVnZ2lhbm9DaGVlc2UoKSB7XHJcbiAgICB9XHJcbiAgICBSZWdnaWFub0NoZWVzZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiUmVnZ2lhbm8gQ2hlZXNlXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlZ2dpYW5vQ2hlZXNlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWdnaWFub0NoZWVzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNsaWNlZFBlcHBlcm9uaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNsaWNlZFBlcHBlcm9uaSgpIHtcclxuICAgIH1cclxuICAgIFNsaWNlZFBlcHBlcm9uaS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU2xpY2VkIFBlcHBlcm9uaVwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTbGljZWRQZXBwZXJvbmk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWNlZFBlcHBlcm9uaTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNwaW5hY2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTcGluYWNoKCkge1xyXG4gICAgfVxyXG4gICAgU3BpbmFjaC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU3BpbmFjaFwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcGluYWNoO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTcGluYWNoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGhpY2tDcnVzdERvdWdoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGhpY2tDcnVzdERvdWdoKCkge1xyXG4gICAgfVxyXG4gICAgVGhpY2tDcnVzdERvdWdoLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJUaGljayBDcnVzdCBEb3VnaFwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUaGlja0NydXN0RG91Z2g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRoaWNrQ3J1c3REb3VnaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRoaW5DcnVzdERvdWdoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGhpbkNydXN0RG91Z2goKSB7XHJcbiAgICB9XHJcbiAgICBUaGluQ3J1c3REb3VnaC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiVGhpbiBDcnVzdCBEb3VnaFwiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUaGluQ3J1c3REb3VnaDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVGhpbkNydXN0RG91Z2g7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBDaGVlc2VQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDaGVlc2VQaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENoZWVzZVBpenphKGluZ3JlZGllbnRGYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbmdyZWRpZW50RmFjdG9yeSA9IGluZ3JlZGllbnRGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENoZWVzZVBpenphLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJlcGFyaW5nIFwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLmRvdWdoID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVEb3VnaCgpO1xyXG4gICAgICAgIHRoaXMuc2F1Y2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZVNhdWNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVlc2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZUNoZWVzZSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDaGVlc2VQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2hlZXNlUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBDbGFtUGl6emEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2xhbVBpenphLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2xhbVBpenphKGluZ3JlZGllbnRGYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbmdyZWRpZW50RmFjdG9yeSA9IGluZ3JlZGllbnRGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIENsYW1QaXp6YS5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByZXBhcmluZyBcIiArIHRoaXMubmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb3VnaCA9IHRoaXMuaW5ncmVkaWVudEZhY3RvcnkuY3JlYXRlRG91Z2goKTtcclxuICAgICAgICB0aGlzLnNhdWNlID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVTYXVjZSgpO1xyXG4gICAgICAgIHRoaXMuY2hlZXNlID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVDaGVlc2UoKTtcclxuICAgICAgICB0aGlzLmNsYW0gPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZUNsYW0oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2xhbVBpenphO1xyXG59KFBpenphXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDbGFtUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBQZXBwZXJvbmlQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhQZXBwZXJvbmlQaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFBlcHBlcm9uaVBpenphKGluZ3JlZGllbnRGYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbmdyZWRpZW50RmFjdG9yeSA9IGluZ3JlZGllbnRGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFBlcHBlcm9uaVBpenphLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJlcGFyaW5nIFwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLmRvdWdoID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVEb3VnaCgpO1xyXG4gICAgICAgIHRoaXMuc2F1Y2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZVNhdWNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVlc2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZUNoZWVzZSgpO1xyXG4gICAgICAgIHRoaXMudmVnZ2llcyA9IHRoaXMuaW5ncmVkaWVudEZhY3RvcnkuY3JlYXRlVmVnZ2llcygpO1xyXG4gICAgICAgIHRoaXMucGVwcGVyb25pID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVQZXBwZXJvbmkoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGVwcGVyb25pUGl6emE7XHJcbn0oUGl6emFfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBlcHBlcm9uaVBpenphO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaXp6YSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudmVnZ2llcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgUGl6emEucHJvdG90eXBlLnNldE5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICBQaXp6YS5wcm90b3R5cGUuYmFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmFraW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS5jdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1dHRpbmchJyk7XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLmJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYm94aW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS1cIiArIHRoaXMubmFtZSArIFwiLS0tLVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS1cIiArIHRoaXMuc2F1Y2UgKyBcIi0tLS1cIik7XHJcbiAgICAgICAgdGhpcy52ZWdnaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tXCIgKyBpdGVtICsgXCItLS0tXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaXp6YTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWZWdnaWVQaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZlZ2dpZVBpenphKGluZ3JlZGllbnRGYWN0b3J5KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5pbmdyZWRpZW50RmFjdG9yeSA9IGluZ3JlZGllbnRGYWN0b3J5O1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIFZlZ2dpZVBpenphLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJlcGFyaW5nIFwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICB0aGlzLmRvdWdoID0gdGhpcy5pbmdyZWRpZW50RmFjdG9yeS5jcmVhdGVEb3VnaCgpO1xyXG4gICAgICAgIHRoaXMuc2F1Y2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZVNhdWNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVlc2UgPSB0aGlzLmluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZUNoZWVzZSgpO1xyXG4gICAgICAgIHRoaXMudmVnZ2llcyA9IHRoaXMuaW5ncmVkaWVudEZhY3RvcnkuY3JlYXRlVmVnZ2llcygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWdnaWVQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVnZ2llUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUaGlja0NydXN0RG91Z2hfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9UaGlja0NydXN0RG91Z2hcIikpO1xyXG52YXIgUGx1bVRvbWF0b1NhdWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZ3JlZGllbnQvUGx1bVRvbWF0b1NhdWNlXCIpKTtcclxudmFyIE1venphcmVsbGFDaGVlc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9Nb3p6YXJlbGxhQ2hlZXNlXCIpKTtcclxudmFyIEJsYWNrT2xpdmVzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZ3JlZGllbnQvQmxhY2tPbGl2ZXNcIikpO1xyXG52YXIgU3BpbmFjaF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L1NwaW5hY2hcIikpO1xyXG52YXIgRWdncGxhbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9FZ2dwbGFudFwiKSk7XHJcbnZhciBGcm96ZW5DbGFtc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L0Zyb3plbkNsYW1zXCIpKTtcclxudmFyIFNsaWNlZFBlcHBlcm9uaV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L1NsaWNlZFBlcHBlcm9uaVwiKSk7XHJcbnZhciBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgQ2hpY2Fnb1BpenphSW5ncmVkaWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZURvdWdoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVGhpY2tDcnVzdERvdWdoXzEuZGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIENoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVTYXVjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBsdW1Ub21hdG9TYXVjZV8xLmRlZmF1bHQoKTtcclxuICAgIH07XHJcbiAgICBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlQ2hlZXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTW96emFyZWxsYUNoZWVzZV8xLmRlZmF1bHQoKTtcclxuICAgIH07XHJcbiAgICBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlVmVnZ2llcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmVnZ2llcyA9IFtcclxuICAgICAgICAgICAgbmV3IEJsYWNrT2xpdmVzXzEuZGVmYXVsdCgpLFxyXG4gICAgICAgICAgICBuZXcgU3BpbmFjaF8xLmRlZmF1bHQoKSxcclxuICAgICAgICAgICAgbmV3IEVnZ3BsYW50XzEuZGVmYXVsdCgpXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gdmVnZ2llcztcclxuICAgIH07XHJcbiAgICBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlUGVwcGVyb25pID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2xpY2VkUGVwcGVyb25pXzEuZGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIENoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVDbGFtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRnJvemVuQ2xhbXNfMS5kZWZhdWx0KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YVN0b3JlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFTdG9yZVwiKSk7XHJcbnZhciBDaGljYWdvUGl6emFJbmdyZWRpZW50RmFjdG9yeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5IFwiKSk7XHJcbnZhciBDaGVlc2VQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9waXp6YS9DaGVlc2VQaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9waXp6YS9WZWdnaWVQaXp6YVwiKSk7XHJcbnZhciBDbGFtUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcGl6emEvQ2xhbVBpenphXCIpKTtcclxudmFyIFBlcHBlcm9uaVBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3BpenphL1BlcHBlcm9uaVBpenphXCIpKTtcclxudmFyIENoaWNhZ29QaXp6YVN0b3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENoaWNhZ29QaXp6YVN0b3JlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2hpY2Fnb1BpenphU3RvcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQ2hpY2Fnb1BpenphU3RvcmUucHJvdG90eXBlLmNyZWF0ZVBpenphID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB2YXIgcGl6emE7XHJcbiAgICAgICAgdmFyIGluZ3JlZGllbnRGYWN0b3J5ID0gbmV3IENoaWNhZ29QaXp6YUluZ3JlZGllbnRGYWN0b3J5XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKFwiY2hlZXNlXCIpKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IENoZWVzZVBpenphXzEuZGVmYXVsdChpbmdyZWRpZW50RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBpenphLnNldE5hbWUoXCJDaGljYWdvIFN0eWxlIENoZWVzZSBQaXp6YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXRlbS5pbmNsdWRlcyhcInZlZ2dpZVwiKSkge1xyXG4gICAgICAgICAgICBwaXp6YSA9IG5ldyBWZWdnaWVQaXp6YV8xLmRlZmF1bHQoaW5ncmVkaWVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBwaXp6YS5zZXROYW1lKFwiQ2hpY2FnbyBTdHlsZSBWZWdnaWUgUGl6emFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uaW5jbHVkZXMoXCJjbGFtXCIpKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IENsYW1QaXp6YV8xLmRlZmF1bHQoaW5ncmVkaWVudEZhY3RvcnkpO1xyXG4gICAgICAgICAgICBwaXp6YS5zZXROYW1lKFwiQ2hpY2FnbyBTdHlsZSBDbGFtIFBpenphXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpdGVtLmluY2x1ZGVzKFwicGVwcGVyb25pXCIpKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IFBlcHBlcm9uaVBpenphXzEuZGVmYXVsdChpbmdyZWRpZW50RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBpenphLnNldE5hbWUoXCJDaGljYWdvIFN0eWxlIFBlcHBlcm9uaSBQaXp6YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpenphO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDaGljYWdvUGl6emFTdG9yZTtcclxufShQaXp6YVN0b3JlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDaGljYWdvUGl6emFTdG9yZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRoaW5DcnVzdERvdWdoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2luZ3JlZGllbnQvVGhpbkNydXN0RG91Z2hcIikpO1xyXG52YXIgTWFyaW5hcmFTYXVjZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L01hcmluYXJhU2F1Y2VcIikpO1xyXG52YXIgUmVnZ2lhbm9DaGVlc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9SZWdnaWFub0NoZWVzZVwiKSk7XHJcbnZhciBHYXJsaWNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9HYXJsaWNcIikpO1xyXG52YXIgT25pb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9PbmlvblwiKSk7XHJcbnZhciBNdXNocm9vbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L011c2hyb29tXCIpKTtcclxudmFyIFJlZFBlcHBlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L1JlZFBlcHBlclwiKSk7XHJcbnZhciBTbGljZWRQZXBwZXJvbmlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaW5ncmVkaWVudC9TbGljZWRQZXBwZXJvbmlcIikpO1xyXG52YXIgRnJlc2hDbGFtc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pbmdyZWRpZW50L0ZyZXNoQ2xhbXNcIikpO1xyXG52YXIgTllQaXp6YUluZ3JlZGllbnRGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTllQaXp6YUluZ3JlZGllbnRGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgTllQaXp6YUluZ3JlZGllbnRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVEb3VnaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRoaW5DcnVzdERvdWdoXzEuZGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIE5ZUGl6emFJbmdyZWRpZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlU2F1Y2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXJpbmFyYVNhdWNlXzEuZGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIE5ZUGl6emFJbmdyZWRpZW50RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlQ2hlZXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVnZ2lhbm9DaGVlc2VfMS5kZWZhdWx0KCk7XHJcbiAgICB9O1xyXG4gICAgTllQaXp6YUluZ3JlZGllbnRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVWZWdnaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ZWdnaWVzID0gW25ldyBHYXJsaWNfMS5kZWZhdWx0KCksIG5ldyBPbmlvbl8xLmRlZmF1bHQoKSwgbmV3IE11c2hyb29tXzEuZGVmYXVsdCgpLCBuZXcgUmVkUGVwcGVyXzEuZGVmYXVsdCgpXTtcclxuICAgICAgICByZXR1cm4gdmVnZ2llcztcclxuICAgIH07XHJcbiAgICBOWVBpenphSW5ncmVkaWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZVBlcHBlcm9uaSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNsaWNlZFBlcHBlcm9uaV8xLmRlZmF1bHQoKTtcclxuICAgIH07XHJcbiAgICBOWVBpenphSW5ncmVkaWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZUNsYW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmVzaENsYW1zXzEuZGVmYXVsdCgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOWVBpenphSW5ncmVkaWVudEZhY3Rvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5ZUGl6emFJbmdyZWRpZW50RmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YVN0b3JlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFTdG9yZVwiKSk7XHJcbnZhciBOWVBpenphSW5ncmVkaWVudEZhY3RvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9OWVBpenphSW5ncmVkaWVudEZhY3RvcnlcIikpO1xyXG52YXIgQ2hlZXNlUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcGl6emEvQ2hlZXNlUGl6emFcIikpO1xyXG52YXIgVmVnZ2llUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcGl6emEvVmVnZ2llUGl6emFcIikpO1xyXG52YXIgQ2xhbVBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3BpenphL0NsYW1QaXp6YVwiKSk7XHJcbnZhciBQZXBwZXJvbmlQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9waXp6YS9QZXBwZXJvbmlQaXp6YVwiKSk7XHJcbnZhciBOWVBpenphU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTllQaXp6YVN0b3JlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTllQaXp6YVN0b3JlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIE5ZUGl6emFTdG9yZS5wcm90b3R5cGUuY3JlYXRlUGl6emEgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHZhciBwaXp6YTtcclxuICAgICAgICB2YXIgaW5ncmVkaWVudEZhY3RvcnkgPSBuZXcgTllQaXp6YUluZ3JlZGllbnRGYWN0b3J5XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKFwiY2hlZXNlXCIpKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IENoZWVzZVBpenphXzEuZGVmYXVsdChpbmdyZWRpZW50RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBpenphLnNldE5hbWUoXCJOZXcgWW9yayBTdHlsZSBDaGVlc2UgUGl6emFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uaW5jbHVkZXMoXCJ2ZWdnaWVcIikpIHtcclxuICAgICAgICAgICAgcGl6emEgPSBuZXcgVmVnZ2llUGl6emFfMS5kZWZhdWx0KGluZ3JlZGllbnRGYWN0b3J5KTtcclxuICAgICAgICAgICAgcGl6emEuc2V0TmFtZShcIk5ldyBZb3JrIFN0eWxlIFZlZ2dpZSBQaXp6YVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXRlbS5pbmNsdWRlcyhcImNsYW1cIikpIHtcclxuICAgICAgICAgICAgcGl6emEgPSBuZXcgQ2xhbVBpenphXzEuZGVmYXVsdChpbmdyZWRpZW50RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBpenphLnNldE5hbWUoXCJOZXcgWW9yayBTdHlsZSBDbGFtIFBpenphXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpdGVtLmluY2x1ZGVzKFwicGVwcGVyb25pXCIpKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IFBlcHBlcm9uaVBpenphXzEuZGVmYXVsdChpbmdyZWRpZW50RmFjdG9yeSk7XHJcbiAgICAgICAgICAgIHBpenphLnNldE5hbWUoXCJOZXcgWW9yayBTdHlsZSBQZXBwZXJvbmkgUGl6emFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaXp6YTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTllQaXp6YVN0b3JlO1xyXG59KFBpenphU3RvcmVfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5ZUGl6emFTdG9yZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaXp6YVN0b3JlKCkge1xyXG4gICAgfVxyXG4gICAgUGl6emFTdG9yZS5wcm90b3R5cGUub3JkZXJQaXp6YSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHBpenphID0gdGhpcy5jcmVhdGVQaXp6YSh0eXBlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS1NYWtpbmcgYSBcIiArIHBpenphLmdldE5hbWUoKSArIFwiLS0tLVwiKTtcclxuICAgICAgICBwaXp6YS5wcmVwYXJlKCk7XHJcbiAgICAgICAgcGl6emEuYmFrZSgpO1xyXG4gICAgICAgIHBpenphLmN1dCgpO1xyXG4gICAgICAgIHBpenphLmJveCgpO1xyXG4gICAgICAgIHJldHVybiBwaXp6YTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGl6emFTdG9yZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGl6emFTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==