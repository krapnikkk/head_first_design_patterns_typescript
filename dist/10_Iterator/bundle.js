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
/******/ 	return __webpack_require__(__webpack_require__.s = "./10_Iterator/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./10_Iterator/Main.ts":
/*!*****************************!*\
  !*** ./10_Iterator/Main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PancakeHouseMenu_1 = __importDefault(__webpack_require__(/*! ./menu/PancakeHouseMenu */ "./10_Iterator/menu/PancakeHouseMenu.ts"));
var DinerMenu_1 = __importDefault(__webpack_require__(/*! ./menu/DinerMenu  */ "./10_Iterator/menu/DinerMenu .ts"));
var Waitress_1 = __importDefault(__webpack_require__(/*! ./Waitress */ "./10_Iterator/Waitress.ts"));
var pancakeHouseMenu = new PancakeHouseMenu_1.default(), dinerMenu = new DinerMenu_1.default(), waitress = new Waitress_1.default(pancakeHouseMenu, dinerMenu);
// Without iterators
//printMenu();
// With iterators
waitress.printMenu();
function printMenu() {
    var pancakeHouseMenu = new PancakeHouseMenu_1.default(), dinerMenu = new DinerMenu_1.default();
    var breakfastItems = pancakeHouseMenu.getMenuItems(), lunchItems = dinerMenu.getMenuItems();
    // Hiding implementation
    console.log("USING FOR EACH");
    breakfastItems.forEach(function (value, key) {
        console.log(value.getName());
        console.log("\t\t" + value.getPrice());
        console.log("\t" + value.getDescription());
    });
    lunchItems.forEach(function (value, key) {
        console.log(value.getName());
        console.log("\t\t" + value.getPrice());
        console.log("\t" + value.getDescription());
    });
    // for (MenuItem menuItem : lunchItems) {
    //     console.log(menuItem.getName());
    //     console.log("\t\t" + menuItem.getPrice());
    //     console.log("\t" + menuItem.getDescription());
    // }
    // Exposing implementation
    console.log("USING FOR LOOPS");
    for (var i = 0; i < breakfastItems.size; i++) {
        var menuItem = breakfastItems.get(i);
        console.log(menuItem.getName());
        console.log("\t\t" + menuItem.getPrice());
        console.log("\t" + menuItem.getDescription());
    }
    for (var i = 0; i < lunchItems.length; i++) {
        var menuItem = lunchItems[i];
        console.log(menuItem.getName());
        console.log("\t\t" + menuItem.getPrice());
        console.log("\t" + menuItem.getDescription());
    }
}


/***/ }),

/***/ "./10_Iterator/MenuItem .ts":
/*!**********************************!*\
  !*** ./10_Iterator/MenuItem .ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, description, vegetarian, price) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
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
    MenuItem.prototype.toString = function () {
        return this.name + "$" + this.price + "\n" + this.description;
    };
    return MenuItem;
}());
exports.default = MenuItem;


/***/ }),

/***/ "./10_Iterator/Waitress.ts":
/*!*********************************!*\
  !*** ./10_Iterator/Waitress.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Waitress = /** @class */ (function () {
    function Waitress(pancakeHouseMenu, dinerMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }
    Waitress.prototype.printMenu = function (iterator) {
        if (iterator) {
            while (iterator.hasNext()) {
                var menuItem = iterator.next();
                console.log(menuItem.getName() + ", ");
                console.log(menuItem.getPrice() + " -- " + menuItem.getDescription());
            }
        }
        else {
            var pancakeIterator = this.pancakeHouseMenu.createIterator(), dinerIterator = this.dinerMenu.createIterator();
            console.log("MENU\n----\nBREAKFAST");
            this.printMenu(pancakeIterator);
            console.log("\nLUNCH");
            this.printMenu(dinerIterator);
        }
    };
    Waitress.prototype.printVegetarianMenu = function (iterator) {
        if (iterator) {
            while (iterator.hasNext()) {
                var menuItem = iterator.next();
                if (menuItem.isVegetarian()) {
                    console.log(menuItem.getName());
                    console.log("\t\t" + menuItem.getPrice());
                    console.log("\t" + menuItem.getDescription());
                }
            }
        }
        else {
            this.printVegetarianMenu(this.pancakeHouseMenu.createIterator());
            this.printVegetarianMenu(this.dinerMenu.createIterator());
        }
    };
    Waitress.prototype.isItemVegetarian = function (name) {
        var breakfastIterator = this.pancakeHouseMenu.createIterator();
        if (this.isVegetarian(name, breakfastIterator)) {
            return true;
        }
        var dinnerIterator = this.dinerMenu.createIterator();
        if (this.isVegetarian(name, dinnerIterator)) {
            return true;
        }
        return false;
    };
    Waitress.prototype.isVegetarian = function (name, iterator) {
        while (iterator.hasNext()) {
            var menuItem = iterator.next();
            if (menuItem.getName().includes(name)) {
                if (menuItem.isVegetarian()) {
                    return true;
                }
            }
        }
        return false;
    };
    return Waitress;
}());
exports.default = Waitress;


/***/ }),

/***/ "./10_Iterator/iterator/DinerMenuIterator.ts":
/*!***************************************************!*\
  !*** ./10_Iterator/iterator/DinerMenuIterator.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DinerMenuIterator = /** @class */ (function () {
    function DinerMenuIterator(items) {
        this.position = 0;
        this.numberOfItems = 0;
        this.items = items;
    }
    DinerMenuIterator.prototype.next = function () {
        var menuItem = this.items[this.position];
        this.position = this.position + 1;
        return menuItem;
    };
    DinerMenuIterator.prototype.hasNext = function () {
        if (this.position >= this.items.length || this.items[this.position] == null) {
            return false;
        }
        else {
            return true;
        }
    };
    return DinerMenuIterator;
}());
exports.default = DinerMenuIterator;


/***/ }),

/***/ "./10_Iterator/iterator/PancakeHouseMenuIterator.ts":
/*!**********************************************************!*\
  !*** ./10_Iterator/iterator/PancakeHouseMenuIterator.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PancakeHouseMenuIterator = /** @class */ (function () {
    function PancakeHouseMenuIterator(items) {
        this.position = 0;
        this.items = items;
    }
    PancakeHouseMenuIterator.prototype.next = function () {
        var menuItem = this.items.get(this.position);
        this.position = this.position + 1;
        return menuItem;
    };
    PancakeHouseMenuIterator.prototype.hasNext = function () {
        if (this.position >= this.items.size || this.items.has(this.position) == false) {
            return false;
        }
        else {
            return true;
        }
    };
    return PancakeHouseMenuIterator;
}());
exports.default = PancakeHouseMenuIterator;


/***/ }),

/***/ "./10_Iterator/menu/DinerMenu .ts":
/*!****************************************!*\
  !*** ./10_Iterator/menu/DinerMenu .ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem_1 = __importDefault(__webpack_require__(/*! ../MenuItem  */ "./10_Iterator/MenuItem .ts"));
var DinerMenuIterator_1 = __importDefault(__webpack_require__(/*! ../iterator/DinerMenuIterator */ "./10_Iterator/iterator/DinerMenuIterator.ts"));
var DinerMenu = /** @class */ (function () {
    function DinerMenu() {
        this.numberOfItems = 0;
        this.menuItems = new Array(DinerMenu.MAX_ITEMS);
        this.addItem("Vegetarian BLT", "(Fakin') Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog", "A hot dog, with saurkraut, relish, onions, topped with cheese", false, 3.05);
        this.addItem("Steamed Veggies and Brown Rice", "Steamed vegetables over brown rice", true, 3.99);
        this.addItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89);
    }
    DinerMenu.prototype.addItem = function (name, description, vegetarian, price) {
        var menuItem = new MenuItem_1.default(name, description, vegetarian, price);
        if (this.numberOfItems >= DinerMenu.MAX_ITEMS) {
            console.log("Sorry, menu is full!  Can't add item to menu");
        }
        else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems++;
        }
    };
    DinerMenu.prototype.getMenuItems = function () {
        return this.menuItems;
    };
    DinerMenu.prototype.createIterator = function () {
        return new DinerMenuIterator_1.default(this.menuItems);
        // To test Alternating menu items, comment out above line,
        // and uncomment the line below.
        //return new AlternatingDinerMenuIterator(menuItems);
    };
    DinerMenu.MAX_ITEMS = 6;
    return DinerMenu;
}());
exports.default = DinerMenu;


/***/ }),

/***/ "./10_Iterator/menu/PancakeHouseMenu.ts":
/*!**********************************************!*\
  !*** ./10_Iterator/menu/PancakeHouseMenu.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem_1 = __importDefault(__webpack_require__(/*! ../MenuItem  */ "./10_Iterator/MenuItem .ts"));
var PancakeHouseMenuIterator_1 = __importDefault(__webpack_require__(/*! ../iterator/PancakeHouseMenuIterator */ "./10_Iterator/iterator/PancakeHouseMenuIterator.ts"));
var PancakeHouseMenu = /** @class */ (function () {
    function PancakeHouseMenu() {
        this.numberOfItems = 0;
        this.menuItems = new Map();
        this.addItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
        this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
        this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
        this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
    }
    PancakeHouseMenu.prototype.addItem = function (name, description, vegetarian, price) {
        var menuItem = new MenuItem_1.default(name, description, vegetarian, price);
        this.menuItems.set(this.numberOfItems, menuItem);
        this.numberOfItems++;
    };
    PancakeHouseMenu.prototype.getMenuItems = function () {
        return this.menuItems;
    };
    PancakeHouseMenu.prototype.createIterator = function () {
        return new PancakeHouseMenuIterator_1.default(this.menuItems);
    };
    PancakeHouseMenu.prototype.toString = function () {
        return "Objectville Pancake House Menu";
    };
    return PancakeHouseMenu;
}());
exports.default = PancakeHouseMenu;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMTBfSXRlcmF0b3IvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi8xMF9JdGVyYXRvci9NZW51SXRlbSAudHMiLCJ3ZWJwYWNrOi8vLy4vMTBfSXRlcmF0b3IvV2FpdHJlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vMTBfSXRlcmF0b3IvaXRlcmF0b3IvRGluZXJNZW51SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vMTBfSXRlcmF0b3IvaXRlcmF0b3IvUGFuY2FrZUhvdXNlTWVudUl0ZXJhdG9yLnRzIiwid2VicGFjazovLy8uLzEwX0l0ZXJhdG9yL21lbnUvRGluZXJNZW51IC50cyIsIndlYnBhY2s6Ly8vLi8xMF9JdGVyYXRvci9tZW51L1BhbmNha2VIb3VzZU1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLzEwX0l0ZXJhdG9yL01haW4udHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGFuY2FrZUhvdXNlTWVudV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21lbnUvUGFuY2FrZUhvdXNlTWVudVwiKSk7XHJcbnZhciBEaW5lck1lbnVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZW51L0RpbmVyTWVudSBcIikpO1xyXG52YXIgV2FpdHJlc3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9XYWl0cmVzc1wiKSk7XHJcbnZhciBwYW5jYWtlSG91c2VNZW51ID0gbmV3IFBhbmNha2VIb3VzZU1lbnVfMS5kZWZhdWx0KCksIGRpbmVyTWVudSA9IG5ldyBEaW5lck1lbnVfMS5kZWZhdWx0KCksIHdhaXRyZXNzID0gbmV3IFdhaXRyZXNzXzEuZGVmYXVsdChwYW5jYWtlSG91c2VNZW51LCBkaW5lck1lbnUpO1xyXG4vLyBXaXRob3V0IGl0ZXJhdG9yc1xyXG4vL3ByaW50TWVudSgpO1xyXG4vLyBXaXRoIGl0ZXJhdG9yc1xyXG53YWl0cmVzcy5wcmludE1lbnUoKTtcclxuZnVuY3Rpb24gcHJpbnRNZW51KCkge1xyXG4gICAgdmFyIHBhbmNha2VIb3VzZU1lbnUgPSBuZXcgUGFuY2FrZUhvdXNlTWVudV8xLmRlZmF1bHQoKSwgZGluZXJNZW51ID0gbmV3IERpbmVyTWVudV8xLmRlZmF1bHQoKTtcclxuICAgIHZhciBicmVha2Zhc3RJdGVtcyA9IHBhbmNha2VIb3VzZU1lbnUuZ2V0TWVudUl0ZW1zKCksIGx1bmNoSXRlbXMgPSBkaW5lck1lbnUuZ2V0TWVudUl0ZW1zKCk7XHJcbiAgICAvLyBIaWRpbmcgaW1wbGVtZW50YXRpb25cclxuICAgIGNvbnNvbGUubG9nKFwiVVNJTkcgRk9SIEVBQ0hcIik7XHJcbiAgICBicmVha2Zhc3RJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUuZ2V0TmFtZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdFxcdFwiICsgdmFsdWUuZ2V0UHJpY2UoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcXHRcIiArIHZhbHVlLmdldERlc2NyaXB0aW9uKCkpO1xyXG4gICAgfSk7XHJcbiAgICBsdW5jaEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5nZXROYW1lKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFx0XFx0XCIgKyB2YWx1ZS5nZXRQcmljZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdFwiICsgdmFsdWUuZ2V0RGVzY3JpcHRpb24oKSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGZvciAoTWVudUl0ZW0gbWVudUl0ZW0gOiBsdW5jaEl0ZW1zKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWVudUl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlxcdFxcdFwiICsgbWVudUl0ZW0uZ2V0UHJpY2UoKSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJcXHRcIiArIG1lbnVJdGVtLmdldERlc2NyaXB0aW9uKCkpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gRXhwb3NpbmcgaW1wbGVtZW50YXRpb25cclxuICAgIGNvbnNvbGUubG9nKFwiVVNJTkcgRk9SIExPT1BTXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicmVha2Zhc3RJdGVtcy5zaXplOyBpKyspIHtcclxuICAgICAgICB2YXIgbWVudUl0ZW0gPSBicmVha2Zhc3RJdGVtcy5nZXQoaSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWVudUl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdFxcdFwiICsgbWVudUl0ZW0uZ2V0UHJpY2UoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcXHRcIiArIG1lbnVJdGVtLmdldERlc2NyaXB0aW9uKCkpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsdW5jaEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbHVuY2hJdGVtc1tpXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51SXRlbS5nZXROYW1lKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFx0XFx0XCIgKyBtZW51SXRlbS5nZXRQcmljZSgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcdFwiICsgbWVudUl0ZW0uZ2V0RGVzY3JpcHRpb24oKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lbnVJdGVtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHZlZ2V0YXJpYW4sIHByaWNlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy52ZWdldGFyaWFuID0gdmVnZXRhcmlhbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICBNZW51SXRlbS5wcm90b3R5cGUuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XHJcbiAgICB9O1xyXG4gICAgTWVudUl0ZW0ucHJvdG90eXBlLmlzVmVnZXRhcmlhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZWdldGFyaWFuO1xyXG4gICAgfTtcclxuICAgIE1lbnVJdGVtLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCIkXCIgKyB0aGlzLnByaWNlICsgXCJcXG5cIiArIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1lbnVJdGVtO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNZW51SXRlbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFdhaXRyZXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2FpdHJlc3MocGFuY2FrZUhvdXNlTWVudSwgZGluZXJNZW51KSB7XHJcbiAgICAgICAgdGhpcy5wYW5jYWtlSG91c2VNZW51ID0gcGFuY2FrZUhvdXNlTWVudTtcclxuICAgICAgICB0aGlzLmRpbmVyTWVudSA9IGRpbmVyTWVudTtcclxuICAgIH1cclxuICAgIFdhaXRyZXNzLnByb3RvdHlwZS5wcmludE1lbnUgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAoaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZXJhdG9yLmhhc05leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gaXRlcmF0b3IubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVudUl0ZW0uZ2V0TmFtZSgpICsgXCIsIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtLmdldFByaWNlKCkgKyBcIiAtLSBcIiArIG1lbnVJdGVtLmdldERlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGFuY2FrZUl0ZXJhdG9yID0gdGhpcy5wYW5jYWtlSG91c2VNZW51LmNyZWF0ZUl0ZXJhdG9yKCksIGRpbmVySXRlcmF0b3IgPSB0aGlzLmRpbmVyTWVudS5jcmVhdGVJdGVyYXRvcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1FTlVcXG4tLS0tXFxuQlJFQUtGQVNUXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50TWVudShwYW5jYWtlSXRlcmF0b3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcbkxVTkNIXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50TWVudShkaW5lckl0ZXJhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgV2FpdHJlc3MucHJvdG90eXBlLnByaW50VmVnZXRhcmlhbk1lbnUgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAoaXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZXJhdG9yLmhhc05leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gaXRlcmF0b3IubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnVJdGVtLmlzVmVnZXRhcmlhbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVudUl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcdFxcdFwiICsgbWVudUl0ZW0uZ2V0UHJpY2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXHRcIiArIG1lbnVJdGVtLmdldERlc2NyaXB0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByaW50VmVnZXRhcmlhbk1lbnUodGhpcy5wYW5jYWtlSG91c2VNZW51LmNyZWF0ZUl0ZXJhdG9yKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50VmVnZXRhcmlhbk1lbnUodGhpcy5kaW5lck1lbnUuY3JlYXRlSXRlcmF0b3IoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdhaXRyZXNzLnByb3RvdHlwZS5pc0l0ZW1WZWdldGFyaWFuID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgYnJlYWtmYXN0SXRlcmF0b3IgPSB0aGlzLnBhbmNha2VIb3VzZU1lbnUuY3JlYXRlSXRlcmF0b3IoKTtcclxuICAgICAgICBpZiAodGhpcy5pc1ZlZ2V0YXJpYW4obmFtZSwgYnJlYWtmYXN0SXRlcmF0b3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGlubmVySXRlcmF0b3IgPSB0aGlzLmRpbmVyTWVudS5jcmVhdGVJdGVyYXRvcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmVnZXRhcmlhbihuYW1lLCBkaW5uZXJJdGVyYXRvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBXYWl0cmVzcy5wcm90b3R5cGUuaXNWZWdldGFyaWFuID0gZnVuY3Rpb24gKG5hbWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgd2hpbGUgKGl0ZXJhdG9yLmhhc05leHQoKSkge1xyXG4gICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChtZW51SXRlbS5nZXROYW1lKCkuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZW51SXRlbS5pc1ZlZ2V0YXJpYW4oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2FpdHJlc3M7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdhaXRyZXNzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRGluZXJNZW51SXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaW5lck1lbnVJdGVyYXRvcihpdGVtcykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgfVxyXG4gICAgRGluZXJNZW51SXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLnBvc2l0aW9uXTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiArIDE7XHJcbiAgICAgICAgcmV0dXJuIG1lbnVJdGVtO1xyXG4gICAgfTtcclxuICAgIERpbmVyTWVudUl0ZXJhdG9yLnByb3RvdHlwZS5oYXNOZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID49IHRoaXMuaXRlbXMubGVuZ3RoIHx8IHRoaXMuaXRlbXNbdGhpcy5wb3NpdGlvbl0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERpbmVyTWVudUl0ZXJhdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBEaW5lck1lbnVJdGVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBhbmNha2VIb3VzZU1lbnVJdGVyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBhbmNha2VIb3VzZU1lbnVJdGVyYXRvcihpdGVtcykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuICAgIFBhbmNha2VIb3VzZU1lbnVJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbWVudUl0ZW0gPSB0aGlzLml0ZW1zLmdldCh0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiArIDE7XHJcbiAgICAgICAgcmV0dXJuIG1lbnVJdGVtO1xyXG4gICAgfTtcclxuICAgIFBhbmNha2VIb3VzZU1lbnVJdGVyYXRvci5wcm90b3R5cGUuaGFzTmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA+PSB0aGlzLml0ZW1zLnNpemUgfHwgdGhpcy5pdGVtcy5oYXModGhpcy5wb3NpdGlvbikgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBQYW5jYWtlSG91c2VNZW51SXRlcmF0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBhbmNha2VIb3VzZU1lbnVJdGVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lbnVJdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01lbnVJdGVtIFwiKSk7XHJcbnZhciBEaW5lck1lbnVJdGVyYXRvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9pdGVyYXRvci9EaW5lck1lbnVJdGVyYXRvclwiKSk7XHJcbnZhciBEaW5lck1lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEaW5lck1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkl0ZW1zID0gMDtcclxuICAgICAgICB0aGlzLm1lbnVJdGVtcyA9IG5ldyBBcnJheShEaW5lck1lbnUuTUFYX0lURU1TKTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oXCJWZWdldGFyaWFuIEJMVFwiLCBcIihGYWtpbicpIEJhY29uIHdpdGggbGV0dHVjZSAmIHRvbWF0byBvbiB3aG9sZSB3aGVhdFwiLCB0cnVlLCAyLjk5KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oXCJCTFRcIiwgXCJCYWNvbiB3aXRoIGxldHR1Y2UgJiB0b21hdG8gb24gd2hvbGUgd2hlYXRcIiwgZmFsc2UsIDIuOTkpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShcIlNvdXAgb2YgdGhlIGRheVwiLCBcIlNvdXAgb2YgdGhlIGRheSwgd2l0aCBhIHNpZGUgb2YgcG90YXRvIHNhbGFkXCIsIGZhbHNlLCAzLjI5KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oXCJIb3Rkb2dcIiwgXCJBIGhvdCBkb2csIHdpdGggc2F1cmtyYXV0LCByZWxpc2gsIG9uaW9ucywgdG9wcGVkIHdpdGggY2hlZXNlXCIsIGZhbHNlLCAzLjA1KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oXCJTdGVhbWVkIFZlZ2dpZXMgYW5kIEJyb3duIFJpY2VcIiwgXCJTdGVhbWVkIHZlZ2V0YWJsZXMgb3ZlciBicm93biByaWNlXCIsIHRydWUsIDMuOTkpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShcIlBhc3RhXCIsIFwiU3BhZ2hldHRpIHdpdGggTWFyaW5hcmEgU2F1Y2UsIGFuZCBhIHNsaWNlIG9mIHNvdXJkb3VnaCBicmVhZFwiLCB0cnVlLCAzLjg5KTtcclxuICAgIH1cclxuICAgIERpbmVyTWVudS5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uIChuYW1lLCBkZXNjcmlwdGlvbiwgdmVnZXRhcmlhbiwgcHJpY2UpIHtcclxuICAgICAgICB2YXIgbWVudUl0ZW0gPSBuZXcgTWVudUl0ZW1fMS5kZWZhdWx0KG5hbWUsIGRlc2NyaXB0aW9uLCB2ZWdldGFyaWFuLCBwcmljZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZJdGVtcyA+PSBEaW5lck1lbnUuTUFYX0lURU1TKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ycnksIG1lbnUgaXMgZnVsbCEgIENhbid0IGFkZCBpdGVtIHRvIG1lbnVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVJdGVtc1t0aGlzLm51bWJlck9mSXRlbXNdID0gbWVudUl0ZW07XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcysrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEaW5lck1lbnUucHJvdG90eXBlLmdldE1lbnVJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW51SXRlbXM7XHJcbiAgICB9O1xyXG4gICAgRGluZXJNZW51LnByb3RvdHlwZS5jcmVhdGVJdGVyYXRvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERpbmVyTWVudUl0ZXJhdG9yXzEuZGVmYXVsdCh0aGlzLm1lbnVJdGVtcyk7XHJcbiAgICAgICAgLy8gVG8gdGVzdCBBbHRlcm5hdGluZyBtZW51IGl0ZW1zLCBjb21tZW50IG91dCBhYm92ZSBsaW5lLFxyXG4gICAgICAgIC8vIGFuZCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cuXHJcbiAgICAgICAgLy9yZXR1cm4gbmV3IEFsdGVybmF0aW5nRGluZXJNZW51SXRlcmF0b3IobWVudUl0ZW1zKTtcclxuICAgIH07XHJcbiAgICBEaW5lck1lbnUuTUFYX0lURU1TID0gNjtcclxuICAgIHJldHVybiBEaW5lck1lbnU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERpbmVyTWVudTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1lbnVJdGVtXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL01lbnVJdGVtIFwiKSk7XHJcbnZhciBQYW5jYWtlSG91c2VNZW51SXRlcmF0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaXRlcmF0b3IvUGFuY2FrZUhvdXNlTWVudUl0ZXJhdG9yXCIpKTtcclxudmFyIFBhbmNha2VIb3VzZU1lbnUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYW5jYWtlSG91c2VNZW51KCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZJdGVtcyA9IDA7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKFwiSyZCJ3MgUGFuY2FrZSBCcmVha2Zhc3RcIiwgXCJQYW5jYWtlcyB3aXRoIHNjcmFtYmxlZCBlZ2dzLCBhbmQgdG9hc3RcIiwgdHJ1ZSwgMi45OSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKFwiUmVndWxhciBQYW5jYWtlIEJyZWFrZmFzdFwiLCBcIlBhbmNha2VzIHdpdGggZnJpZWQgZWdncywgc2F1c2FnZVwiLCBmYWxzZSwgMi45OSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKFwiQmx1ZWJlcnJ5IFBhbmNha2VzXCIsIFwiUGFuY2FrZXMgbWFkZSB3aXRoIGZyZXNoIGJsdWViZXJyaWVzXCIsIHRydWUsIDMuNDkpO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbShcIldhZmZsZXNcIiwgXCJXYWZmbGVzLCB3aXRoIHlvdXIgY2hvaWNlIG9mIGJsdWViZXJyaWVzIG9yIHN0cmF3YmVycmllc1wiLCB0cnVlLCAzLjU5KTtcclxuICAgIH1cclxuICAgIFBhbmNha2VIb3VzZU1lbnUucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbiAobmFtZSwgZGVzY3JpcHRpb24sIHZlZ2V0YXJpYW4sIHByaWNlKSB7XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gbmV3IE1lbnVJdGVtXzEuZGVmYXVsdChuYW1lLCBkZXNjcmlwdGlvbiwgdmVnZXRhcmlhbiwgcHJpY2UpO1xyXG4gICAgICAgIHRoaXMubWVudUl0ZW1zLnNldCh0aGlzLm51bWJlck9mSXRlbXMsIG1lbnVJdGVtKTtcclxuICAgICAgICB0aGlzLm51bWJlck9mSXRlbXMrKztcclxuICAgIH07XHJcbiAgICBQYW5jYWtlSG91c2VNZW51LnByb3RvdHlwZS5nZXRNZW51SXRlbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVudUl0ZW1zO1xyXG4gICAgfTtcclxuICAgIFBhbmNha2VIb3VzZU1lbnUucHJvdG90eXBlLmNyZWF0ZUl0ZXJhdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGFuY2FrZUhvdXNlTWVudUl0ZXJhdG9yXzEuZGVmYXVsdCh0aGlzLm1lbnVJdGVtcyk7XHJcbiAgICB9O1xyXG4gICAgUGFuY2FrZUhvdXNlTWVudS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiT2JqZWN0dmlsbGUgUGFuY2FrZSBIb3VzZSBNZW51XCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBhbmNha2VIb3VzZU1lbnU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBhbmNha2VIb3VzZU1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=