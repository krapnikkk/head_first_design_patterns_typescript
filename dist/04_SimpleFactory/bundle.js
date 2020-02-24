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
var factory = new SimplePizzaFactory_1.default(), store = new PizzaStore_1.default(factory), cheesePizza = store.orderPizza("cheese"), veggiePizza = store.orderPizza("veggie");
console.log("we order a " + cheesePizza.getName);
cheesePizza.toString();
console.log("we order a " + veggiePizza.getName);
veggiePizza.toString();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDRfU2ltcGxlRmFjdG9yeS9NYWluLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvUGl6emFTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L1NpbXBsZVBpenphRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L3BpenphL0NoZWVzZVBpenphLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvcGl6emEvQ2xhbVBpenphLnRzIiwid2VicGFjazovLy8uLzA0X1NpbXBsZUZhY3RvcnkvcGl6emEvUGVwcGVyb25pUGl6emEudHMiLCJ3ZWJwYWNrOi8vLy4vMDRfU2ltcGxlRmFjdG9yeS9waXp6YS9QaXp6YS50cyIsIndlYnBhY2s6Ly8vLi8wNF9TaW1wbGVGYWN0b3J5L3BpenphL1ZlZ2dpZVBpenphLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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Q3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxrREFBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi8wNF9TaW1wbGVGYWN0b3J5L01haW4udHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU2ltcGxlUGl6emFGYWN0b3J5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU2ltcGxlUGl6emFGYWN0b3J5XCIpKTtcclxudmFyIFBpenphU3RvcmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVN0b3JlXCIpKTtcclxudmFyIGZhY3RvcnkgPSBuZXcgU2ltcGxlUGl6emFGYWN0b3J5XzEuZGVmYXVsdCgpLCBzdG9yZSA9IG5ldyBQaXp6YVN0b3JlXzEuZGVmYXVsdChmYWN0b3J5KSwgY2hlZXNlUGl6emEgPSBzdG9yZS5vcmRlclBpenphKFwiY2hlZXNlXCIpLCB2ZWdnaWVQaXp6YSA9IHN0b3JlLm9yZGVyUGl6emEoXCJ2ZWdnaWVcIik7XHJcbmNvbnNvbGUubG9nKFwid2Ugb3JkZXIgYSBcIiArIGNoZWVzZVBpenphLmdldE5hbWUpO1xyXG5jaGVlc2VQaXp6YS50b1N0cmluZygpO1xyXG5jb25zb2xlLmxvZyhcIndlIG9yZGVyIGEgXCIgKyB2ZWdnaWVQaXp6YS5nZXROYW1lKTtcclxudmVnZ2llUGl6emEudG9TdHJpbmcoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQaXp6YVN0b3JlKGZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG4gICAgUGl6emFTdG9yZS5wcm90b3R5cGUub3JkZXJQaXp6YSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHBpenphID0gdGhpcy5mYWN0b3J5LmNyZWF0ZVBpenphKHR5cGUpO1xyXG4gICAgICAgIHBpenphLnByZXBhcmUoKTtcclxuICAgICAgICBwaXp6YS5iYWtlKCk7XHJcbiAgICAgICAgcGl6emEuY3V0KCk7XHJcbiAgICAgICAgcGl6emEuYm94KCk7XHJcbiAgICAgICAgcmV0dXJuIHBpenphO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaXp6YVN0b3JlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQaXp6YVN0b3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2hlZXNlUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9waXp6YS9DaGVlc2VQaXp6YVwiKSk7XHJcbnZhciBQZXBwZXJvbmlQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL1BlcHBlcm9uaVBpenphXCIpKTtcclxudmFyIENsYW1QaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL0NsYW1QaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BpenphL1ZlZ2dpZVBpenphXCIpKTtcclxudmFyIFNpbXBsZVBpenphRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNpbXBsZVBpenphRmFjdG9yeSgpIHtcclxuICAgIH1cclxuICAgIFNpbXBsZVBpenphRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlUGl6emEgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIHZhciBwaXp6YTtcclxuICAgICAgICBpZiAodHlwZSA9PT0gXCJjaGVlc2VcIikge1xyXG4gICAgICAgICAgICBwaXp6YSA9IG5ldyBDaGVlc2VQaXp6YV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJ2ZWdnaWVcIikge1xyXG4gICAgICAgICAgICBwaXp6YSA9IG5ldyBQZXBwZXJvbmlQaXp6YV8xLmRlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJjbGFtXCIpIHtcclxuICAgICAgICAgICAgcGl6emEgPSBuZXcgQ2xhbVBpenphXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcInZlZ2dpZVwiKSB7XHJcbiAgICAgICAgICAgIHBpenphID0gbmV3IFZlZ2dpZVBpenphXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGl6emE7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNpbXBsZVBpenphRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU2ltcGxlUGl6emFGYWN0b3J5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFcIikpO1xyXG52YXIgQ2hlZXNlUGl6emEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2hlZXNlUGl6emEsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDaGVlc2VQaXp6YSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBcIkNoZWVzZSBQaXp6YVwiO1xyXG4gICAgICAgIF90aGlzLnNhdWNlID0gXCJNYXJpbmFyYSBQaXp6YSBTYXVjZVwiO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJGcmVzaCBNb3p6YXJlbGxhXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJQYXJtZXNhblwiKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2hlZXNlUGl6emE7XHJcbn0oUGl6emFfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENoZWVzZVBpenphO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBpenphXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGl6emFcIikpO1xyXG52YXIgQ2xhbVBpenphID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENsYW1QaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENsYW1QaXp6YSgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBcIkNsYW0gUGl6emFcIjtcclxuICAgICAgICBfdGhpcy5zYXVjZSA9IFwiV2hpdGUgZ2FybGljIHNhdWNlXCI7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIkNsYW1zXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJHcmF0ZWQgcGFybWVzYW4gY2hlZXNlXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDbGFtUGl6emE7XHJcbn0oUGl6emFfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENsYW1QaXp6YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BpenphXCIpKTtcclxudmFyIFBlcHBlcm9uaVBpenphID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFBlcHBlcm9uaVBpenphLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUGVwcGVyb25pUGl6emEoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5uYW1lID0gXCJQZXBwZXJvbmkgUGl6emFcIjtcclxuICAgICAgICBfdGhpcy5zYXVjZSA9IFwiTWFyaW5hcmEgc2F1Y2VcIjtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiU2xpY2VkIFBlcHBlcm9uaVwiKTtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiU2xpY2VkIE9uaW9uXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJHcmF0ZWQgcGFybWVzYW4gY2hlZXNlXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBQZXBwZXJvbmlQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGVwcGVyb25pUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBpenphKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zYXVjZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50b3BwaW5ncyA9IFtdO1xyXG4gICAgfVxyXG4gICAgUGl6emEucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICBQaXp6YS5wcm90b3R5cGUuYmFrZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmFraW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS5jdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1dHRpbmchJyk7XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLmJveCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYm94aW5nIScpO1xyXG4gICAgfTtcclxuICAgIFBpenphLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQcmVwYXJlID0+IEFkZGluZyB0b3BwaW5ncycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50b3BwaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMudG9wcGluZ3NbaV07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gKyBcIlxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGl6emEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLVwiICsgdGhpcy5uYW1lICsgXCItLS0tXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLVwiICsgdGhpcy5zYXVjZSArIFwiLS0tLVwiKTtcclxuICAgICAgICB0aGlzLnRvcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tXCIgKyBpdGVtICsgXCItLS0tXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQaXp6YTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUGl6emE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUGl6emFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QaXp6YVwiKSk7XHJcbnZhciBWZWdnaWVQaXp6YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhWZWdnaWVQaXp6YSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFZlZ2dpZVBpenphKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IFwiVmVnZ2llIFBpenphXCI7XHJcbiAgICAgICAgX3RoaXMuc2F1Y2UgPSBcIk1hcmluYXJhIHNhdWNlXCI7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNocmVkZGVkIG1venphcmVsbGFcIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIkdyYXRlZCBwYXJtZXNhblwiKTtcclxuICAgICAgICBfdGhpcy50b3BwaW5ncy5wdXNoKFwiRGljZWQgb25pb25cIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNsaWNlZCBtdXNocm9vbXNcIik7XHJcbiAgICAgICAgX3RoaXMudG9wcGluZ3MucHVzaChcIlNsaWNlZCByZWQgcGVwcGVyXCIpO1xyXG4gICAgICAgIF90aGlzLnRvcHBpbmdzLnB1c2goXCJTbGljZWQgYmxhY2sgb2xpdmVzXCIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBWZWdnaWVQaXp6YTtcclxufShQaXp6YV8xLmRlZmF1bHQpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVnZ2llUGl6emE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=