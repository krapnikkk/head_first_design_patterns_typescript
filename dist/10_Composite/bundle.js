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
/******/ 	return __webpack_require__(__webpack_require__.s = "./10_Composite/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./10_Composite/Main.ts":
/*!******************************!*\
  !*** ./10_Composite/Main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ "./10_Composite/Menu.ts"));
var MenuItem_1 = __importDefault(__webpack_require__(/*! ./MenuItem */ "./10_Composite/MenuItem.ts"));
var Waitress_1 = __importDefault(__webpack_require__(/*! ./Waitress */ "./10_Composite/Waitress.ts"));
var pancakeHouseMenu = new Menu_1.default("PANCAKE HOUSE MENU", "Breakfast"), dinerMenu = new Menu_1.default("DINER MENU", "Lunch"), cafeMenu = new Menu_1.default("CAFE MENU", "Dinner"), dessertMenu = new Menu_1.default("DESSERT MENU", "Dessert of course!"), coffeeMenu = new Menu_1.default("COFFEE MENU", "Stuff to go with your afternoon coffee"), allMenus = new Menu_1.default("ALL MENUS", "All menus combined");
pancakeHouseMenu.add(new MenuItem_1.default("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99));
pancakeHouseMenu.add(new MenuItem_1.default("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99));
pancakeHouseMenu.add(new MenuItem_1.default("Blueberry Pancakes", "Pancakes made with fresh blueberries, and blueberry syrup", true, 3.49));
pancakeHouseMenu.add(new MenuItem_1.default("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59));
dinerMenu.add(new MenuItem_1.default("Vegetarian BLT", "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99));
dinerMenu.add(new MenuItem_1.default("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99));
dinerMenu.add(new MenuItem_1.default("Soup of the day", "A bowl of the soup of the day, with a side of potato salad", false, 3.29));
dinerMenu.add(new MenuItem_1.default("Hotdog", "A hot dog, with saurkraut, relish, onions, topped with cheese", false, 3.05));
dinerMenu.add(new MenuItem_1.default("Steamed Veggies and Brown Rice", "Steamed vegetables over brown rice", true, 3.99));
dinerMenu.add(new MenuItem_1.default("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
dinerMenu.add(dessertMenu);
dessertMenu.add(new MenuItem_1.default("Apple Pie", "Apple pie with a flakey crust, topped with vanilla icecream", true, 1.59));
dessertMenu.add(new MenuItem_1.default("Cheesecake", "Creamy New York cheesecake, with a chocolate graham crust", true, 1.99));
dessertMenu.add(new MenuItem_1.default("Sorbet", "A scoop of raspberry and a scoop of lime", true, 1.89));
cafeMenu.add(new MenuItem_1.default("Veggie Burger and Air Fries", "Veggie burger on a whole wheat bun, lettuce, tomato, and fries", true, 3.99));
cafeMenu.add(new MenuItem_1.default("Soup of the day", "A cup of the soup of the day, with a side salad", false, 3.69));
cafeMenu.add(new MenuItem_1.default("Burrito", "A large burrito, with whole pinto beans, salsa, guacamole", true, 4.29));
cafeMenu.add(coffeeMenu);
coffeeMenu.add(new MenuItem_1.default("Coffee Cake", "Crumbly cake topped with cinnamon and walnuts", true, 1.59));
coffeeMenu.add(new MenuItem_1.default("Bagel", "Flavors include sesame, poppyseed, cinnamon raisin, pumpkin", false, 0.69));
coffeeMenu.add(new MenuItem_1.default("Biscotti", "Three almond or hazelnut biscotti cookies", true, 0.89));
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);
var waitress = new Waitress_1.default(allMenus);
waitress.printMenu();


/***/ }),

/***/ "./10_Composite/Menu.ts":
/*!******************************!*\
  !*** ./10_Composite/Menu.ts ***!
  \******************************/
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
var MenuComponent_1 = __importDefault(__webpack_require__(/*! ./MenuComponent */ "./10_Composite/MenuComponent.ts"));
// interface Iterable {
//     [Symbol.iterator](): Iterator,
// }
// interface Iterator {
//     next(value?: any): IterationResult,
// }
// interface IterationResult {
//     value: any,
//     done: boolean,
// }
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(name, description) {
        var _this = _super.call(this) || this;
        _this.menuComponents = new Set();
        _this.name = name;
        _this.description = description;
        return _this;
    }
    Menu.prototype.add = function (menuComponet) {
        this.menuComponents.add(menuComponet);
    };
    Menu.prototype.remove = function (menuComponet) {
        this.menuComponents.delete(menuComponet);
    };
    Menu.prototype.getChild = function (i) {
        return Array.from(this.menuComponents)[i];
    };
    Menu.prototype.getName = function () {
        return this.name;
    };
    Menu.prototype.getDescription = function () {
        return this.description;
    };
    Menu.prototype.print = function () {
        console.log(this.getName());
        console.log(this.getDescription());
        console.log("---------------------");
        var iterator = this.menuComponents.values();
        while (!iterator.next().done) {
            var menuComponent = iterator.next().value;
            if (menuComponent) {
                menuComponent.print();
            }
        }
    };
    return Menu;
}(MenuComponent_1.default));
exports.default = Menu;


/***/ }),

/***/ "./10_Composite/MenuComponent.ts":
/*!***************************************!*\
  !*** ./10_Composite/MenuComponent.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.add = function (menuComponet) {
        throw new Error("add");
    };
    MenuComponent.prototype.remove = function (menuComponet) {
        throw new Error("remove");
    };
    MenuComponent.prototype.getChild = function (index) {
        throw new Error("getChild");
    };
    MenuComponent.prototype.getName = function () {
        throw new Error("getName");
    };
    MenuComponent.prototype.getDescription = function () {
        throw new Error("getDescription");
    };
    MenuComponent.prototype.getPrice = function () {
        throw new Error("getPrice");
    };
    MenuComponent.prototype.isVegetarian = function () {
        throw new Error("isVegetarian");
    };
    MenuComponent.prototype.print = function () {
        throw new Error("print");
    };
    return MenuComponent;
}());
exports.default = MenuComponent;


/***/ }),

/***/ "./10_Composite/MenuItem.ts":
/*!**********************************!*\
  !*** ./10_Composite/MenuItem.ts ***!
  \**********************************/
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
var MenuComponent_1 = __importDefault(__webpack_require__(/*! ./MenuComponent */ "./10_Composite/MenuComponent.ts"));
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(name, description, vegetarian, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.description = description;
        _this.vegetarian = vegetarian;
        _this.price = price;
        return _this;
    }
    MenuItem.prototype.getName = function () {
        return this.name;
    };
    MenuItem.prototype.getDescription = function () {
        return this.description;
    };
    MenuItem.prototype.getPrice = function () {
        return this.price;
    };
    MenuItem.prototype.isVegetarian = function () {
        return this.vegetarian;
    };
    MenuItem.prototype.print = function () {
        console.log("name:" + this.name);
        if (this.isVegetarian()) {
            console.log("vegetarian");
        }
        console.log("price:" + this.price);
        console.log("description:" + this.description);
    };
    return MenuItem;
}(MenuComponent_1.default));
exports.default = MenuItem;


/***/ }),

/***/ "./10_Composite/Waitress.ts":
/*!**********************************!*\
  !*** ./10_Composite/Waitress.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Waitress = /** @class */ (function () {
    function Waitress(allMenu) {
        this.allMenu = allMenu;
    }
    Waitress.prototype.printMenu = function () {
        this.allMenu.print();
    };
    return Waitress;
}());
exports.default = Waitress;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMTBfQ29tcG9zaXRlL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vMTBfQ29tcG9zaXRlL01lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vMTBfQ29tcG9zaXRlL01lbnVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vMTBfQ29tcG9zaXRlL01lbnVJdGVtLnRzIiwid2VicGFjazovLy8uLzEwX0NvbXBvc2l0ZS9XYWl0cmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw2QkFBNkIsbUJBQU8sQ0FBQyxzQ0FBUTtBQUM3QyxpQ0FBaUMsbUJBQU8sQ0FBQyw4Q0FBWTtBQUNyRCxpQ0FBaUMsbUJBQU8sQ0FBQyw4Q0FBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLHdEQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbkVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvQmE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLHdEQUFpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ25EYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi8xMF9Db21wb3NpdGUvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWVudVwiKSk7XHJcbnZhciBNZW51SXRlbV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVJdGVtXCIpKTtcclxudmFyIFdhaXRyZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vV2FpdHJlc3NcIikpO1xyXG52YXIgcGFuY2FrZUhvdXNlTWVudSA9IG5ldyBNZW51XzEuZGVmYXVsdChcIlBBTkNBS0UgSE9VU0UgTUVOVVwiLCBcIkJyZWFrZmFzdFwiKSwgZGluZXJNZW51ID0gbmV3IE1lbnVfMS5kZWZhdWx0KFwiRElORVIgTUVOVVwiLCBcIkx1bmNoXCIpLCBjYWZlTWVudSA9IG5ldyBNZW51XzEuZGVmYXVsdChcIkNBRkUgTUVOVVwiLCBcIkRpbm5lclwiKSwgZGVzc2VydE1lbnUgPSBuZXcgTWVudV8xLmRlZmF1bHQoXCJERVNTRVJUIE1FTlVcIiwgXCJEZXNzZXJ0IG9mIGNvdXJzZSFcIiksIGNvZmZlZU1lbnUgPSBuZXcgTWVudV8xLmRlZmF1bHQoXCJDT0ZGRUUgTUVOVVwiLCBcIlN0dWZmIHRvIGdvIHdpdGggeW91ciBhZnRlcm5vb24gY29mZmVlXCIpLCBhbGxNZW51cyA9IG5ldyBNZW51XzEuZGVmYXVsdChcIkFMTCBNRU5VU1wiLCBcIkFsbCBtZW51cyBjb21iaW5lZFwiKTtcclxucGFuY2FrZUhvdXNlTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIksmQidzIFBhbmNha2UgQnJlYWtmYXN0XCIsIFwiUGFuY2FrZXMgd2l0aCBzY3JhbWJsZWQgZWdncywgYW5kIHRvYXN0XCIsIHRydWUsIDIuOTkpKTtcclxucGFuY2FrZUhvdXNlTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIlJlZ3VsYXIgUGFuY2FrZSBCcmVha2Zhc3RcIiwgXCJQYW5jYWtlcyB3aXRoIGZyaWVkIGVnZ3MsIHNhdXNhZ2VcIiwgZmFsc2UsIDIuOTkpKTtcclxucGFuY2FrZUhvdXNlTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIkJsdWViZXJyeSBQYW5jYWtlc1wiLCBcIlBhbmNha2VzIG1hZGUgd2l0aCBmcmVzaCBibHVlYmVycmllcywgYW5kIGJsdWViZXJyeSBzeXJ1cFwiLCB0cnVlLCAzLjQ5KSk7XHJcbnBhbmNha2VIb3VzZU1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJXYWZmbGVzXCIsIFwiV2FmZmxlcywgd2l0aCB5b3VyIGNob2ljZSBvZiBibHVlYmVycmllcyBvciBzdHJhd2JlcnJpZXNcIiwgdHJ1ZSwgMy41OSkpO1xyXG5kaW5lck1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJWZWdldGFyaWFuIEJMVFwiLCBcIihGYWtpbicpIEJhY29uIHdpdGggbGV0dHVjZSAmIHRvbWF0byBvbiB3aG9sZSB3aGVhdFwiLCB0cnVlLCAyLjk5KSk7XHJcbmRpbmVyTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIkJMVFwiLCBcIkJhY29uIHdpdGggbGV0dHVjZSAmIHRvbWF0byBvbiB3aG9sZSB3aGVhdFwiLCBmYWxzZSwgMi45OSkpO1xyXG5kaW5lck1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJTb3VwIG9mIHRoZSBkYXlcIiwgXCJBIGJvd2wgb2YgdGhlIHNvdXAgb2YgdGhlIGRheSwgd2l0aCBhIHNpZGUgb2YgcG90YXRvIHNhbGFkXCIsIGZhbHNlLCAzLjI5KSk7XHJcbmRpbmVyTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIkhvdGRvZ1wiLCBcIkEgaG90IGRvZywgd2l0aCBzYXVya3JhdXQsIHJlbGlzaCwgb25pb25zLCB0b3BwZWQgd2l0aCBjaGVlc2VcIiwgZmFsc2UsIDMuMDUpKTtcclxuZGluZXJNZW51LmFkZChuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KFwiU3RlYW1lZCBWZWdnaWVzIGFuZCBCcm93biBSaWNlXCIsIFwiU3RlYW1lZCB2ZWdldGFibGVzIG92ZXIgYnJvd24gcmljZVwiLCB0cnVlLCAzLjk5KSk7XHJcbmRpbmVyTWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIlBhc3RhXCIsIFwiU3BhZ2hldHRpIHdpdGggTWFyaW5hcmEgU2F1Y2UsIGFuZCBhIHNsaWNlIG9mIHNvdXJkb3VnaCBicmVhZFwiLCB0cnVlLCAzLjg5KSk7XHJcbmRpbmVyTWVudS5hZGQoZGVzc2VydE1lbnUpO1xyXG5kZXNzZXJ0TWVudS5hZGQobmV3IE1lbnVJdGVtXzEuZGVmYXVsdChcIkFwcGxlIFBpZVwiLCBcIkFwcGxlIHBpZSB3aXRoIGEgZmxha2V5IGNydXN0LCB0b3BwZWQgd2l0aCB2YW5pbGxhIGljZWNyZWFtXCIsIHRydWUsIDEuNTkpKTtcclxuZGVzc2VydE1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJDaGVlc2VjYWtlXCIsIFwiQ3JlYW15IE5ldyBZb3JrIGNoZWVzZWNha2UsIHdpdGggYSBjaG9jb2xhdGUgZ3JhaGFtIGNydXN0XCIsIHRydWUsIDEuOTkpKTtcclxuZGVzc2VydE1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJTb3JiZXRcIiwgXCJBIHNjb29wIG9mIHJhc3BiZXJyeSBhbmQgYSBzY29vcCBvZiBsaW1lXCIsIHRydWUsIDEuODkpKTtcclxuY2FmZU1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJWZWdnaWUgQnVyZ2VyIGFuZCBBaXIgRnJpZXNcIiwgXCJWZWdnaWUgYnVyZ2VyIG9uIGEgd2hvbGUgd2hlYXQgYnVuLCBsZXR0dWNlLCB0b21hdG8sIGFuZCBmcmllc1wiLCB0cnVlLCAzLjk5KSk7XHJcbmNhZmVNZW51LmFkZChuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KFwiU291cCBvZiB0aGUgZGF5XCIsIFwiQSBjdXAgb2YgdGhlIHNvdXAgb2YgdGhlIGRheSwgd2l0aCBhIHNpZGUgc2FsYWRcIiwgZmFsc2UsIDMuNjkpKTtcclxuY2FmZU1lbnUuYWRkKG5ldyBNZW51SXRlbV8xLmRlZmF1bHQoXCJCdXJyaXRvXCIsIFwiQSBsYXJnZSBidXJyaXRvLCB3aXRoIHdob2xlIHBpbnRvIGJlYW5zLCBzYWxzYSwgZ3VhY2Ftb2xlXCIsIHRydWUsIDQuMjkpKTtcclxuY2FmZU1lbnUuYWRkKGNvZmZlZU1lbnUpO1xyXG5jb2ZmZWVNZW51LmFkZChuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KFwiQ29mZmVlIENha2VcIiwgXCJDcnVtYmx5IGNha2UgdG9wcGVkIHdpdGggY2lubmFtb24gYW5kIHdhbG51dHNcIiwgdHJ1ZSwgMS41OSkpO1xyXG5jb2ZmZWVNZW51LmFkZChuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KFwiQmFnZWxcIiwgXCJGbGF2b3JzIGluY2x1ZGUgc2VzYW1lLCBwb3BweXNlZWQsIGNpbm5hbW9uIHJhaXNpbiwgcHVtcGtpblwiLCBmYWxzZSwgMC42OSkpO1xyXG5jb2ZmZWVNZW51LmFkZChuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KFwiQmlzY290dGlcIiwgXCJUaHJlZSBhbG1vbmQgb3IgaGF6ZWxudXQgYmlzY290dGkgY29va2llc1wiLCB0cnVlLCAwLjg5KSk7XHJcbmFsbE1lbnVzLmFkZChwYW5jYWtlSG91c2VNZW51KTtcclxuYWxsTWVudXMuYWRkKGRpbmVyTWVudSk7XHJcbmFsbE1lbnVzLmFkZChjYWZlTWVudSk7XHJcbnZhciB3YWl0cmVzcyA9IG5ldyBXYWl0cmVzc18xLmRlZmF1bHQoYWxsTWVudXMpO1xyXG53YWl0cmVzcy5wcmludE1lbnUoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNZW51Q29tcG9uZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWVudUNvbXBvbmVudFwiKSk7XHJcbi8vIGludGVyZmFjZSBJdGVyYWJsZSB7XHJcbi8vICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcixcclxuLy8gfVxyXG4vLyBpbnRlcmZhY2UgSXRlcmF0b3Ige1xyXG4vLyAgICAgbmV4dCh2YWx1ZT86IGFueSk6IEl0ZXJhdGlvblJlc3VsdCxcclxuLy8gfVxyXG4vLyBpbnRlcmZhY2UgSXRlcmF0aW9uUmVzdWx0IHtcclxuLy8gICAgIHZhbHVlOiBhbnksXHJcbi8vICAgICBkb25lOiBib29sZWFuLFxyXG4vLyB9XHJcbnZhciBNZW51ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1lbnUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNZW51KG5hbWUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5tZW51Q29tcG9uZW50cyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBfdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE1lbnUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChtZW51Q29tcG9uZXQpIHtcclxuICAgICAgICB0aGlzLm1lbnVDb21wb25lbnRzLmFkZChtZW51Q29tcG9uZXQpO1xyXG4gICAgfTtcclxuICAgIE1lbnUucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChtZW51Q29tcG9uZXQpIHtcclxuICAgICAgICB0aGlzLm1lbnVDb21wb25lbnRzLmRlbGV0ZShtZW51Q29tcG9uZXQpO1xyXG4gICAgfTtcclxuICAgIE1lbnUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1lbnVDb21wb25lbnRzKVtpXTtcclxuICAgIH07XHJcbiAgICBNZW51LnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgTWVudS5wcm90b3R5cGUuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9O1xyXG4gICAgTWVudS5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0RGVzY3JpcHRpb24oKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5tZW51Q29tcG9uZW50cy52YWx1ZXMoKTtcclxuICAgICAgICB3aGlsZSAoIWl0ZXJhdG9yLm5leHQoKS5kb25lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51Q29tcG9uZW50ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAobWVudUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgbWVudUNvbXBvbmVudC5wcmludCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBNZW51O1xyXG59KE1lbnVDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNZW51Q29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVudUNvbXBvbmVudCgpIHtcclxuICAgIH1cclxuICAgIE1lbnVDb21wb25lbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChtZW51Q29tcG9uZXQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhZGRcIik7XHJcbiAgICB9O1xyXG4gICAgTWVudUNvbXBvbmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG1lbnVDb21wb25ldCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlbW92ZVwiKTtcclxuICAgIH07XHJcbiAgICBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImdldENoaWxkXCIpO1xyXG4gICAgfTtcclxuICAgIE1lbnVDb21wb25lbnQucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0TmFtZVwiKTtcclxuICAgIH07XHJcbiAgICBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXREZXNjcmlwdGlvblwiKTtcclxuICAgIH07XHJcbiAgICBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5nZXRQcmljZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRQcmljZVwiKTtcclxuICAgIH07XHJcbiAgICBNZW51Q29tcG9uZW50LnByb3RvdHlwZS5pc1ZlZ2V0YXJpYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaXNWZWdldGFyaWFuXCIpO1xyXG4gICAgfTtcclxuICAgIE1lbnVDb21wb25lbnQucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInByaW50XCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNZW51Q29tcG9uZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNZW51Q29tcG9uZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lbnVDb21wb25lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29tcG9uZW50XCIpKTtcclxudmFyIE1lbnVJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1lbnVJdGVtLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHZlZ2V0YXJpYW4sIHByaWNlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBfdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIF90aGlzLnZlZ2V0YXJpYW4gPSB2ZWdldGFyaWFuO1xyXG4gICAgICAgIF90aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9O1xyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmdldFByaWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlO1xyXG4gICAgfTtcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5pc1ZlZ2V0YXJpYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmVnZXRhcmlhbjtcclxuICAgIH07XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuYW1lOlwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5pc1ZlZ2V0YXJpYW4oKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZlZ2V0YXJpYW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJpY2U6XCIgKyB0aGlzLnByaWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlc2NyaXB0aW9uOlwiICsgdGhpcy5kZXNjcmlwdGlvbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xyXG59KE1lbnVDb21wb25lbnRfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnVJdGVtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgV2FpdHJlc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXYWl0cmVzcyhhbGxNZW51KSB7XHJcbiAgICAgICAgdGhpcy5hbGxNZW51ID0gYWxsTWVudTtcclxuICAgIH1cclxuICAgIFdhaXRyZXNzLnByb3RvdHlwZS5wcmludE1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxNZW51LnByaW50KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFdhaXRyZXNzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBXYWl0cmVzcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==