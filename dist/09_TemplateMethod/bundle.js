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
/******/ 	return __webpack_require__(__webpack_require__.s = "./09_TemplateMethod/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./09_TemplateMethod/CaffeineBeverage.ts":
/*!***********************************************!*\
  !*** ./09_TemplateMethod/CaffeineBeverage.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.prepareRecipe = function () {
        this.boilWater();
        this.brew();
    };
    CaffeineBeverage.prototype.boilWater = function () {
        console.log("Boiling water");
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log("Pouring into cup");
    };
    return CaffeineBeverage;
}());
exports.default = CaffeineBeverage;


/***/ }),

/***/ "./09_TemplateMethod/CaffeineBeverageWithHook.ts":
/*!*******************************************************!*\
  !*** ./09_TemplateMethod/CaffeineBeverageWithHook.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CaffeineBeverageWithHook = /** @class */ (function () {
    function CaffeineBeverageWithHook() {
    }
    CaffeineBeverageWithHook.prototype.prepareRecipe = function () {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.custonmerWantsCondiments()) {
            this.addCondiments();
        }
    };
    CaffeineBeverageWithHook.prototype.boilWater = function () {
        console.log("Boiling water");
    };
    CaffeineBeverageWithHook.prototype.pourInCup = function () {
        console.log("Pouring into cup");
    };
    CaffeineBeverageWithHook.prototype.custonmerWantsCondiments = function () {
        return true;
    };
    return CaffeineBeverageWithHook;
}());
exports.default = CaffeineBeverageWithHook;


/***/ }),

/***/ "./09_TemplateMethod/Coffee.ts":
/*!*************************************!*\
  !*** ./09_TemplateMethod/Coffee.ts ***!
  \*************************************/
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
var CaffeineBeverage_1 = __importDefault(__webpack_require__(/*! ./CaffeineBeverage */ "./09_TemplateMethod/CaffeineBeverage.ts"));
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coffee.prototype.brew = function () {
        console.log("Dripping Coffee through filter");
    };
    Coffee.prototype.addCondiments = function () {
        console.log("Adding Sugar and Milk");
    };
    return Coffee;
}(CaffeineBeverage_1.default));
exports.default = Coffee;


/***/ }),

/***/ "./09_TemplateMethod/CoffeeWithHook.ts":
/*!*********************************************!*\
  !*** ./09_TemplateMethod/CoffeeWithHook.ts ***!
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
var CaffeineBeverageWithHook_1 = __importDefault(__webpack_require__(/*! ./CaffeineBeverageWithHook */ "./09_TemplateMethod/CaffeineBeverageWithHook.ts"));
var CoffeeWithHook = /** @class */ (function (_super) {
    __extends(CoffeeWithHook, _super);
    function CoffeeWithHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoffeeWithHook.prototype.brew = function () {
        console.log("Dripping Coffee through filter");
    };
    CoffeeWithHook.prototype.addCondiments = function () {
        console.log("Adding Sugar and Milk");
    };
    CoffeeWithHook.prototype.custonmerWantsCondiments = function () {
        var answer = this.getUserInput();
        if (answer.toLocaleLowerCase().startsWith("y")) {
            return true;
        }
        else {
            return false;
        }
    };
    CoffeeWithHook.prototype.getUserInput = function () {
        var answer = prompt("Would you like milk and sugar with your coffee (y/n)?", "yes") || "no";
        return answer;
    };
    return CoffeeWithHook;
}(CaffeineBeverageWithHook_1.default));
exports.default = CoffeeWithHook;


/***/ }),

/***/ "./09_TemplateMethod/Main.ts":
/*!***********************************!*\
  !*** ./09_TemplateMethod/Main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tea_1 = __importDefault(__webpack_require__(/*! ./Tea */ "./09_TemplateMethod/Tea.ts"));
var Coffee_1 = __importDefault(__webpack_require__(/*! ./Coffee */ "./09_TemplateMethod/Coffee.ts"));
var TeaWithHook_1 = __importDefault(__webpack_require__(/*! ./TeaWithHook */ "./09_TemplateMethod/TeaWithHook.ts"));
var CoffeeWithHook_1 = __importDefault(__webpack_require__(/*! ./CoffeeWithHook */ "./09_TemplateMethod/CoffeeWithHook.ts"));
var tea = new Tea_1.default(), coffee = new Coffee_1.default();
console.log("making tea...");
tea.prepareRecipe();
console.log("making coffee...");
coffee.prepareRecipe();
var teaHook = new TeaWithHook_1.default(), coffeeHook = new CoffeeWithHook_1.default();
console.log("making tea...");
teaHook.prepareRecipe();
console.log("making coffee...");
coffeeHook.prepareRecipe();


/***/ }),

/***/ "./09_TemplateMethod/Tea.ts":
/*!**********************************!*\
  !*** ./09_TemplateMethod/Tea.ts ***!
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
var CaffeineBeverage_1 = __importDefault(__webpack_require__(/*! ./CaffeineBeverage */ "./09_TemplateMethod/CaffeineBeverage.ts"));
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.brew = function () {
        console.log("Steeping the tea");
    };
    Tea.prototype.addCondiments = function () {
        console.log("Adding lemon");
    };
    return Tea;
}(CaffeineBeverage_1.default));
exports.default = Tea;


/***/ }),

/***/ "./09_TemplateMethod/TeaWithHook.ts":
/*!******************************************!*\
  !*** ./09_TemplateMethod/TeaWithHook.ts ***!
  \******************************************/
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
var CaffeineBeverageWithHook_1 = __importDefault(__webpack_require__(/*! ./CaffeineBeverageWithHook */ "./09_TemplateMethod/CaffeineBeverageWithHook.ts"));
var TeaWithHook = /** @class */ (function (_super) {
    __extends(TeaWithHook, _super);
    function TeaWithHook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeaWithHook.prototype.brew = function () {
        console.log("Steeping the tea");
    };
    TeaWithHook.prototype.addCondiments = function () {
        console.log("Adding Lemon");
    };
    TeaWithHook.prototype.custonmerWantsCondiments = function () {
        var answer = this.getUserInput();
        if (answer.toLocaleLowerCase().startsWith("y")) {
            return true;
        }
        else {
            return false;
        }
    };
    TeaWithHook.prototype.getUserInput = function () {
        var answer = prompt("Would you like lemon with your tea (y/n)?", "yes") || "no";
        return answer;
    };
    return TeaWithHook;
}(CaffeineBeverageWithHook_1.default));
exports.default = TeaWithHook;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDlfVGVtcGxhdGVNZXRob2QvQ2FmZmVpbmVCZXZlcmFnZS50cyIsIndlYnBhY2s6Ly8vLi8wOV9UZW1wbGF0ZU1ldGhvZC9DYWZmZWluZUJldmVyYWdlV2l0aEhvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vMDlfVGVtcGxhdGVNZXRob2QvQ29mZmVlLnRzIiwid2VicGFjazovLy8uLzA5X1RlbXBsYXRlTWV0aG9kL0NvZmZlZVdpdGhIb29rLnRzIiwid2VicGFjazovLy8uLzA5X1RlbXBsYXRlTWV0aG9kL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vMDlfVGVtcGxhdGVNZXRob2QvVGVhLnRzIiwid2VicGFjazovLy8uLzA5X1RlbXBsYXRlTWV0aG9kL1RlYVdpdGhIb29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7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QUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vMDlfVGVtcGxhdGVNZXRob2QvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYWZmZWluZUJldmVyYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FmZmVpbmVCZXZlcmFnZSgpIHtcclxuICAgIH1cclxuICAgIENhZmZlaW5lQmV2ZXJhZ2UucHJvdG90eXBlLnByZXBhcmVSZWNpcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2lsV2F0ZXIoKTtcclxuICAgICAgICB0aGlzLmJyZXcoKTtcclxuICAgIH07XHJcbiAgICBDYWZmZWluZUJldmVyYWdlLnByb3RvdHlwZS5ib2lsV2F0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCb2lsaW5nIHdhdGVyXCIpO1xyXG4gICAgfTtcclxuICAgIENhZmZlaW5lQmV2ZXJhZ2UucHJvdG90eXBlLnBvdXJJbkN1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBvdXJpbmcgaW50byBjdXBcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhZmZlaW5lQmV2ZXJhZ2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhZmZlaW5lQmV2ZXJhZ2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYWZmZWluZUJldmVyYWdlV2l0aEhvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYWZmZWluZUJldmVyYWdlV2l0aEhvb2soKSB7XHJcbiAgICB9XHJcbiAgICBDYWZmZWluZUJldmVyYWdlV2l0aEhvb2sucHJvdG90eXBlLnByZXBhcmVSZWNpcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ib2lsV2F0ZXIoKTtcclxuICAgICAgICB0aGlzLmJyZXcoKTtcclxuICAgICAgICB0aGlzLnBvdXJJbkN1cCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3Rvbm1lcldhbnRzQ29uZGltZW50cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29uZGltZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDYWZmZWluZUJldmVyYWdlV2l0aEhvb2sucHJvdG90eXBlLmJvaWxXYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvaWxpbmcgd2F0ZXJcIik7XHJcbiAgICB9O1xyXG4gICAgQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rLnByb3RvdHlwZS5wb3VySW5DdXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQb3VyaW5nIGludG8gY3VwXCIpO1xyXG4gICAgfTtcclxuICAgIENhZmZlaW5lQmV2ZXJhZ2VXaXRoSG9vay5wcm90b3R5cGUuY3VzdG9ubWVyV2FudHNDb25kaW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYWZmZWluZUJldmVyYWdlV2l0aEhvb2s7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhZmZlaW5lQmV2ZXJhZ2VXaXRoSG9vaztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYWZmZWluZUJldmVyYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FmZmVpbmVCZXZlcmFnZVwiKSk7XHJcbnZhciBDb2ZmZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ29mZmVlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29mZmVlKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIENvZmZlZS5wcm90b3R5cGUuYnJldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyaXBwaW5nIENvZmZlZSB0aHJvdWdoIGZpbHRlclwiKTtcclxuICAgIH07XHJcbiAgICBDb2ZmZWUucHJvdG90eXBlLmFkZENvbmRpbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgU3VnYXIgYW5kIE1pbGtcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvZmZlZTtcclxufShDYWZmZWluZUJldmVyYWdlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDb2ZmZWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rXCIpKTtcclxudmFyIENvZmZlZVdpdGhIb29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENvZmZlZVdpdGhIb29rLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ29mZmVlV2l0aEhvb2soKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgQ29mZmVlV2l0aEhvb2sucHJvdG90eXBlLmJyZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmlwcGluZyBDb2ZmZWUgdGhyb3VnaCBmaWx0ZXJcIik7XHJcbiAgICB9O1xyXG4gICAgQ29mZmVlV2l0aEhvb2sucHJvdG90eXBlLmFkZENvbmRpbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgU3VnYXIgYW5kIE1pbGtcIik7XHJcbiAgICB9O1xyXG4gICAgQ29mZmVlV2l0aEhvb2sucHJvdG90eXBlLmN1c3Rvbm1lcldhbnRzQ29uZGltZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYW5zd2VyID0gdGhpcy5nZXRVc2VySW5wdXQoKTtcclxuICAgICAgICBpZiAoYW5zd2VyLnRvTG9jYWxlTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcInlcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvZmZlZVdpdGhIb29rLnByb3RvdHlwZS5nZXRVc2VySW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHByb21wdChcIldvdWxkIHlvdSBsaWtlIG1pbGsgYW5kIHN1Z2FyIHdpdGggeW91ciBjb2ZmZWUgKHkvbik/XCIsIFwieWVzXCIpIHx8IFwibm9cIjtcclxuICAgICAgICByZXR1cm4gYW5zd2VyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2ZmZWVXaXRoSG9vaztcclxufShDYWZmZWluZUJldmVyYWdlV2l0aEhvb2tfMS5kZWZhdWx0KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvZmZlZVdpdGhIb29rO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVGVhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVGVhXCIpKTtcclxudmFyIENvZmZlZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvZmZlZVwiKSk7XHJcbnZhciBUZWFXaXRoSG9va18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RlYVdpdGhIb29rXCIpKTtcclxudmFyIENvZmZlZVdpdGhIb29rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29mZmVlV2l0aEhvb2tcIikpO1xyXG52YXIgdGVhID0gbmV3IFRlYV8xLmRlZmF1bHQoKSwgY29mZmVlID0gbmV3IENvZmZlZV8xLmRlZmF1bHQoKTtcclxuY29uc29sZS5sb2coXCJtYWtpbmcgdGVhLi4uXCIpO1xyXG50ZWEucHJlcGFyZVJlY2lwZSgpO1xyXG5jb25zb2xlLmxvZyhcIm1ha2luZyBjb2ZmZWUuLi5cIik7XHJcbmNvZmZlZS5wcmVwYXJlUmVjaXBlKCk7XHJcbnZhciB0ZWFIb29rID0gbmV3IFRlYVdpdGhIb29rXzEuZGVmYXVsdCgpLCBjb2ZmZWVIb29rID0gbmV3IENvZmZlZVdpdGhIb29rXzEuZGVmYXVsdCgpO1xyXG5jb25zb2xlLmxvZyhcIm1ha2luZyB0ZWEuLi5cIik7XHJcbnRlYUhvb2sucHJlcGFyZVJlY2lwZSgpO1xyXG5jb25zb2xlLmxvZyhcIm1ha2luZyBjb2ZmZWUuLi5cIik7XHJcbmNvZmZlZUhvb2sucHJlcGFyZVJlY2lwZSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENhZmZlaW5lQmV2ZXJhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DYWZmZWluZUJldmVyYWdlXCIpKTtcclxudmFyIFRlYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUZWEsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBUZWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGVhLnByb3RvdHlwZS5icmV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RlZXBpbmcgdGhlIHRlYVwiKTtcclxuICAgIH07XHJcbiAgICBUZWEucHJvdG90eXBlLmFkZENvbmRpbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgbGVtb25cIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRlYTtcclxufShDYWZmZWluZUJldmVyYWdlXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUZWE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rXCIpKTtcclxudmFyIFRlYVdpdGhIb29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRlYVdpdGhIb29rLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGVhV2l0aEhvb2soKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVGVhV2l0aEhvb2sucHJvdG90eXBlLmJyZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGVlcGluZyB0aGUgdGVhXCIpO1xyXG4gICAgfTtcclxuICAgIFRlYVdpdGhIb29rLnByb3RvdHlwZS5hZGRDb25kaW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIExlbW9uXCIpO1xyXG4gICAgfTtcclxuICAgIFRlYVdpdGhIb29rLnByb3RvdHlwZS5jdXN0b25tZXJXYW50c0NvbmRpbWVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFuc3dlciA9IHRoaXMuZ2V0VXNlcklucHV0KCk7XHJcbiAgICAgICAgaWYgKGFuc3dlci50b0xvY2FsZUxvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoXCJ5XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUZWFXaXRoSG9vay5wcm90b3R5cGUuZ2V0VXNlcklucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhbnN3ZXIgPSBwcm9tcHQoXCJXb3VsZCB5b3UgbGlrZSBsZW1vbiB3aXRoIHlvdXIgdGVhICh5L24pP1wiLCBcInllc1wiKSB8fCBcIm5vXCI7XHJcbiAgICAgICAgcmV0dXJuIGFuc3dlcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGVhV2l0aEhvb2s7XHJcbn0oQ2FmZmVpbmVCZXZlcmFnZVdpdGhIb29rXzEuZGVmYXVsdCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUZWFXaXRoSG9vaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==