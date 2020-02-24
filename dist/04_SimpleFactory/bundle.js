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
/******/ 	return __webpack_require__(__webpack_require__.s = "./04_SimpleFactory/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./04_SimpleFactory/Main.ts":
/*!**********************************!*\
  !*** ./04_SimpleFactory/Main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimplePizzaFactory_1 = __importDefault(__webpack_require__(/*! ./SimplePizzaFactory */ "./04_SimpleFactory/SimplePizzaFactory.ts"));
var PizzaStore_1 = __importDefault(__webpack_require__(/*! ./PizzaStore */ "./04_SimpleFactory/PizzaStore.ts"));
var factory = new SimplePizzaFactory_1.default(), store = new PizzaStore_1.default(factory), pizza = store.orderPizza("cheese");
console.log("we order a " + pizza.getName());
pizza.toString();
pizza = store.orderPizza("veggie");
console.log("we order a " + pizza.getName());
pizza.toString();


/***/ }),

/***/ "./04_SimpleFactory/PizzaStore.ts":
/*!****************************************!*\
  !*** ./04_SimpleFactory/PizzaStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PizzaStore = /** @class */ (function () {
    function PizzaStore(factory) {
        this.factory = factory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    };
    return PizzaStore;
}());
exports.default = PizzaStore;


/***/ }),

/***/ "./04_SimpleFactory/SimplePizzaFactory.ts":
/*!************************************************!*\
  !*** ./04_SimpleFactory/SimplePizzaFactory.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheesePizza_1 = __importDefault(__webpack_require__(/*! ./pizza/CheesePizza */ "./04_SimpleFactory/pizza/CheesePizza.ts"));
var PepperoniPizza_1 = __importDefault(__webpack_require__(/*! ./pizza/PepperoniPizza */ "./04_SimpleFactory/pizza/PepperoniPizza.ts"));
var ClamPizza_1 = __importDefault(__webpack_require__(/*! ./pizza/ClamPizza */ "./04_SimpleFactory/pizza/ClamPizza.ts"));
var VeggiePizza_1 = __importDefault(__webpack_require__(/*! ./pizza/VeggiePizza */ "./04_SimpleFactory/pizza/VeggiePizza.ts"));
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.createPizza = function (type) {
        var pizza;
        if (type === "cheese") {
            pizza = new CheesePizza_1.default();
        }
        else if (type === "veggie") {
            pizza = new PepperoniPizza_1.default();
        }
        else if (type === "clam") {
            pizza = new ClamPizza_1.default();
        }
        else if (type === "veggie") {
            pizza = new VeggiePizza_1.default();
        }
        return pizza;
    };
    return SimplePizzaFactory;
}());
exports.default = SimplePizzaFactory;


/***/ }),

/***/ "./04_SimpleFactory/pizza/CheesePizza.ts":
/*!***********************************************!*\
  !*** ./04_SimpleFactory/pizza/CheesePizza.ts ***!
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
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_SimpleFactory/pizza/Pizza.ts"));
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        var _this = _super.call(this) || this;
        _this.name = "Cheese Pizza";
        _this.sauce = "Marinara Pizza Sauce";
        _this.toppings.push("Fresh Mozzarella");
        _this.toppings.push("Parmesan");
        return _this;
    }
    return CheesePizza;
}(Pizza_1.default));
exports.default = CheesePizza;


/***/ }),

/***/ "./04_SimpleFactory/pizza/ClamPizza.ts":
/*!*********************************************!*\
  !*** ./04_SimpleFactory/pizza/ClamPizza.ts ***!
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
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_SimpleFactory/pizza/Pizza.ts"));
var ClamPizza = /** @class */ (function (_super) {
    __extends(ClamPizza, _super);
    function ClamPizza() {
        var _this = _super.call(this) || this;
        _this.name = "Clam Pizza";
        _this.sauce = "White garlic sauce";
        _this.toppings.push("Clams");
        _this.toppings.push("Grated parmesan cheese");
        return _this;
    }
    return ClamPizza;
}(Pizza_1.default));
exports.default = ClamPizza;


/***/ }),

/***/ "./04_SimpleFactory/pizza/PepperoniPizza.ts":
/*!**************************************************!*\
  !*** ./04_SimpleFactory/pizza/PepperoniPizza.ts ***!
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
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_SimpleFactory/pizza/Pizza.ts"));
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza() {
        var _this = _super.call(this) || this;
        _this.name = "Pepperoni Pizza";
        _this.sauce = "Marinara sauce";
        _this.toppings.push("Sliced Pepperoni");
        _this.toppings.push("Sliced Onion");
        _this.toppings.push("Grated parmesan cheese");
        return _this;
    }
    return PepperoniPizza;
}(Pizza_1.default));
exports.default = PepperoniPizza;


/***/ }),

/***/ "./04_SimpleFactory/pizza/Pizza.ts":
/*!*****************************************!*\
  !*** ./04_SimpleFactory/pizza/Pizza.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.name = "";
        this.sauce = "";
        this.toppings = [];
    }
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
    Pizza.prototype.prepare = function () {
        console.log('Prepare => Adding toppings');
        for (var i = 0; i < this.toppings.length; i++) {
            var item = this.toppings[i];
            console.log(item + "\n");
        }
    };
    Pizza.prototype.toString = function () {
        console.log("----" + this.name + "----");
        console.log("----" + this.sauce + "----");
        this.toppings.forEach(function (item) {
            console.log("----" + item + "----");
        });
    };
    return Pizza;
}());
exports.default = Pizza;


/***/ }),

/***/ "./04_SimpleFactory/pizza/VeggiePizza.ts":
/*!***********************************************!*\
  !*** ./04_SimpleFactory/pizza/VeggiePizza.ts ***!
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
var Pizza_1 = __importDefault(__webpack_require__(/*! ./Pizza */ "./04_SimpleFactory/pizza/Pizza.ts"));
var VeggiePizza = /** @class */ (function (_super) {
    __extends(VeggiePizza, _super);
    function VeggiePizza() {
        var _this = _super.call(this) || this;
        _this.name = "Veggie Pizza";
        _this.sauce = "Marinara sauce";
        _this.toppings.push("Shredded mozzarella");
        _this.toppings.push("Grated parmesan");
        _this.toppings.push("Diced onion");
        _this.toppings.push("Sliced mushrooms");
        _this.toppings.push("Sliced red pepper");
        _this.toppings.push("Sliced black olives");
        return _this;
    }
    return VeggiePizza;
}(Pizza_1.default));
exports.default = VeggiePizza;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDRfU2ltcGxlRmFjdG9yeS9NYWluLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvUGl6emFTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L1NpbXBsZVBpenphRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L3BpenphL0NoZWVzZVBpenphLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvcGl6emEvQ2xhbVBpenphLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvcGl6emEvUGVwcGVyb25pUGl6emEudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfU2ltcGxlRmFjdG9yeS9waXp6YS9QaXp6YS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L3BpenphL1ZlZ2dpZVBpenphLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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QUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGtEQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLzA0X1NpbXBsZUZhY3RvcnkvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTaW1wbGVQaXp6YUZhY3RvcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TaW1wbGVQaXp6YUZhY3RvcnlcIikpO1xyXG52YXIgUGl6emFTdG9yZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BpenphU3RvcmVcIikpO1xyXG52YXIgZmFjdG9yeSA9IG5ldyBTaW1wbGVQaXp6YUZhY3RvcnlfMS5kZWZhdWx0KCksIHN0b3JlID0gbmV3IFBpenphU3RvcmVfMS5kZWZhdWx0KGZhY3RvcnkpLCBwaXp6YSA9IHN0b3JlLm9yZGVyUGl6emEoXCJjaGVlc2VcIik7XHJcbmNvbnNvbGUubG9nKFwid2Ugb3JkZXIgYSBcIiArIHBpenphLmdldE5hbWUoKSk7XHJcbnBpenphLnRvU3RyaW5nKCk7XHJcbnBpenphID0gc3RvcmUub3JkZXJQaXp6YShcInZlZ2dpZVwiKTtcclxuY29uc29sZS5sb2coXCJ3ZSBvcmRlciBhIFwiICsgcGl6emEuZ2V0TmFtZSgpKTtcclxucGl6emEudG9TdHJpbmcoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaXp6YVN0b3JlKGZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG4gICAgUGl6emFTdG9yZS5wcm90b3R5cGUub3JkZXJQaXp6YSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHBpenphID0gdGhpcy5mYWN0b3J5LmNyZWF0ZVBpenphKHR5cGUpO1xyXG4gICAgICAgIHBpenphLnByZXBhcmUoKTtcclxuICAgICAgICBwaXp6YS5iYWtlKCk7XHJcbiAgICAgICAgcGl6emEuY3V0KCk7XHJcbiAgICAgICAgcGl6emEuYm94KCk7XHJcbiAgICAgICAgcmV0dXJuIHBpenphO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaXp6YVN0b3JlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQaXp6YVN0b3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2hlZXNlUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9waXp6YS9DaGVlc2VQaXp6YVwiKSk7XHJcbnZhciBQZXBwZXJvbmlQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL1BlcHBlcm9uaVBpenphXCIpKTtcclxudmFyIENsYW1QaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL0NsYW1QaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL1ZlZ2dpZVBpenphXCIpKTtcclxudmFyIFNpbXBsZVBpenphRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpbXBsZVBpenphRmFjdG9yeSgpIHtcclxuICAgIH1cclxuICAgIFNpbXBsZVBpenphRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlUGl6emEgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciBwaXp6YTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjaGVlc2VcIikge1xyXG4gICAgICAgICAgICBwaXp6YSA9IG5ldyBDaGVlc2VQaXp6YV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ2ZWdnaWVcIikge1xyXG4gICAgICAgICAgICBwaXp6YSA9IG5ldyBQZXBwZXJvbmlQaXp6YV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJjbGFtXCIpIHtcclxuICAgICAgICAgICAgcGl6emEgPSBuZXcgQ2xhbVBpenphXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInZlZ2dpZVwiKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IFZlZ2dpZVBpenphXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl6emE7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNpbXBsZVBpenphRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2ltcGxlUGl6emFGYWN0b3J5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFcIikpO1xyXG52YXIgQ2hlZXNlUGl6emEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2hlZXNlUGl6emEsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaGVlc2VQaXp6YSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBcIkNoZWVzZSBQaXp6YVwiO1xyXG4gICAgICAgIF90aGlzLnNhdWNlID0gXCJNYXJpbmFyYSBQaXp6YSBTYXVjZVwiO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJGcmVzaCBNb3p6YXJlbGxhXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJQYXJtZXNhblwiKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2hlZXNlUGl6emE7XHJcbn0oUGl6emFfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWVzZVBpenphO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFcIikpO1xyXG52YXIgQ2xhbVBpenphID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENsYW1QaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENsYW1QaXp6YSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBcIkNsYW0gUGl6emFcIjtcclxuICAgICAgICBfdGhpcy5zYXVjZSA9IFwiV2hpdGUgZ2FybGljIHNhdWNlXCI7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIkNsYW1zXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJHcmF0ZWQgcGFybWVzYW4gY2hlZXNlXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDbGFtUGl6emE7XHJcbn0oUGl6emFfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENsYW1QaXp6YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BpenphXCIpKTtcclxudmFyIFBlcHBlcm9uaVBpenphID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBlcHBlcm9uaVBpenphLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGVwcGVyb25pUGl6emEoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5uYW1lID0gXCJQZXBwZXJvbmkgUGl6emFcIjtcclxuICAgICAgICBfdGhpcy5zYXVjZSA9IFwiTWFyaW5hcmEgc2F1Y2VcIjtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiU2xpY2VkIFBlcHBlcm9uaVwiKTtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiU2xpY2VkIE9uaW9uXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJHcmF0ZWQgcGFybWVzYW4gY2hlZXNlXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQZXBwZXJvbmlQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGVwcGVyb25pUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBpenphKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zYXVjZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50b3BwaW5ncyA9IFtdO1xyXG4gICAgfVxyXG4gICAgUGl6emEucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICBQaXp6YS5wcm90b3R5cGUuYmFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmFraW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS5jdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1dHRpbmchJyk7XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLmJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYm94aW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQcmVwYXJlID0+IEFkZGluZyB0b3BwaW5ncycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b3BwaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudG9wcGluZ3NbaV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gKyBcIlxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLVwiICsgdGhpcy5uYW1lICsgXCItLS0tXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLVwiICsgdGhpcy5zYXVjZSArIFwiLS0tLVwiKTtcclxuICAgICAgICB0aGlzLnRvcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tXCIgKyBpdGVtICsgXCItLS0tXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaXp6YTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWZWdnaWVQaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZlZ2dpZVBpenphKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiVmVnZ2llIFBpenphXCI7XHJcbiAgICAgICAgX3RoaXMuc2F1Y2UgPSBcIk1hcmluYXJhIHNhdWNlXCI7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNocmVkZGVkIG1venphcmVsbGFcIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIkdyYXRlZCBwYXJtZXNhblwiKTtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiRGljZWQgb25pb25cIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNsaWNlZCBtdXNocm9vbXNcIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNsaWNlZCByZWQgcGVwcGVyXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJTbGljZWQgYmxhY2sgb2xpdmVzXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBWZWdnaWVQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVnZ2llUGl6emE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=