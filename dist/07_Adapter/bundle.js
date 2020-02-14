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
/******/ 	return __webpack_require__(__webpack_require__.s = "./07_Adapter/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./07_Adapter/Main.ts":
/*!****************************!*\
  !*** ./07_Adapter/Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck_1 = __importDefault(__webpack_require__(/*! ./MallardDuck */ "./07_Adapter/MallardDuck.ts"));
var WildTurkey_1 = __importDefault(__webpack_require__(/*! ./WildTurkey */ "./07_Adapter/WildTurkey.ts"));
var DuckAdapter_1 = __importDefault(__webpack_require__(/*! ./adapter/DuckAdapter */ "./07_Adapter/adapter/DuckAdapter.ts"));
var TurkeyAdapter_1 = __importDefault(__webpack_require__(/*! ./adapter/TurkeyAdapter */ "./07_Adapter/adapter/TurkeyAdapter.ts"));
var mallardDuck = new MallardDuck_1.default(), wildTurkey = new WildTurkey_1.default();
var duckAdapter = new DuckAdapter_1.default(mallardDuck);
testTurkey(duckAdapter);
var turkeyAdapter = new TurkeyAdapter_1.default(wildTurkey);
testDuck(turkeyAdapter);
function testDuck(duck) {
    duck.quack();
    duck.fly();
}
function testTurkey(turkey) {
    turkey.gobble();
    turkey.fly();
}


/***/ }),

/***/ "./07_Adapter/MallardDuck.ts":
/*!***********************************!*\
  !*** ./07_Adapter/MallardDuck.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log("quack");
    };
    MallardDuck.prototype.fly = function () {
        console.log("I'm flying");
    };
    return MallardDuck;
}());
exports.default = MallardDuck;


/***/ }),

/***/ "./07_Adapter/WildTurkey.ts":
/*!**********************************!*\
  !*** ./07_Adapter/WildTurkey.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WildTurkey = /** @class */ (function () {
    function WildTurkey() {
    }
    WildTurkey.prototype.gobble = function () {
        console.log("goobble");
    };
    WildTurkey.prototype.fly = function () {
        console.log("I'm flying a short distance");
    };
    return WildTurkey;
}());
exports.default = WildTurkey;


/***/ }),

/***/ "./07_Adapter/adapter/DuckAdapter.ts":
/*!*******************************************!*\
  !*** ./07_Adapter/adapter/DuckAdapter.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DuckAdapter = /** @class */ (function () {
    function DuckAdapter(duck) {
        this.duck = duck;
        this._random = Math.random() * 10;
    }
    DuckAdapter.prototype.gobble = function () {
        this.duck.quack();
    };
    DuckAdapter.prototype.fly = function () {
        if (this._random > 5) {
            this.duck.fly();
        }
    };
    return DuckAdapter;
}());
exports.default = DuckAdapter;


/***/ }),

/***/ "./07_Adapter/adapter/TurkeyAdapter.ts":
/*!*********************************************!*\
  !*** ./07_Adapter/adapter/TurkeyAdapter.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(turkey) {
        this.turkey = turkey;
    }
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
    };
    TurkeyAdapter.prototype.fly = function () {
        for (var i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    };
    return TurkeyAdapter;
}());
exports.default = TurkeyAdapter;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDdfQWRhcHRlci9NYWluLnRzIiwid2VicGFjazovLy8uLzA3X0FkYXB0ZXIvTWFsbGFyZER1Y2sudHMiLCJ3ZWJwYWNrOi8vLy4vMDdfQWRhcHRlci9XaWxkVHVya2V5LnRzIiwid2VicGFjazovLy8uLzA3X0FkYXB0ZXIvYWRhcHRlci9EdWNrQWRhcHRlci50cyIsIndlYnBhY2s6Ly8vLi8wN19BZGFwdGVyL2FkYXB0ZXIvVHVya2V5QWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxvQ0FBb0MsbUJBQU8sQ0FBQyxrREFBZTtBQUMzRCxtQ0FBbUMsbUJBQU8sQ0FBQyxnREFBYztBQUN6RCxvQ0FBb0MsbUJBQU8sQ0FBQyxrRUFBdUI7QUFDbkUsc0NBQXNDLG1CQUFPLENBQUMsc0VBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNiYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vMDdfQWRhcHRlci9NYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hbGxhcmREdWNrXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFsbGFyZER1Y2tcIikpO1xyXG52YXIgV2lsZFR1cmtleV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1dpbGRUdXJrZXlcIikpO1xyXG52YXIgRHVja0FkYXB0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hZGFwdGVyL0R1Y2tBZGFwdGVyXCIpKTtcclxudmFyIFR1cmtleUFkYXB0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hZGFwdGVyL1R1cmtleUFkYXB0ZXJcIikpO1xyXG52YXIgbWFsbGFyZER1Y2sgPSBuZXcgTWFsbGFyZER1Y2tfMS5kZWZhdWx0KCksIHdpbGRUdXJrZXkgPSBuZXcgV2lsZFR1cmtleV8xLmRlZmF1bHQoKTtcclxudmFyIGR1Y2tBZGFwdGVyID0gbmV3IER1Y2tBZGFwdGVyXzEuZGVmYXVsdChtYWxsYXJkRHVjayk7XHJcbnRlc3RUdXJrZXkoZHVja0FkYXB0ZXIpO1xyXG52YXIgdHVya2V5QWRhcHRlciA9IG5ldyBUdXJrZXlBZGFwdGVyXzEuZGVmYXVsdCh3aWxkVHVya2V5KTtcclxudGVzdER1Y2sodHVya2V5QWRhcHRlcik7XHJcbmZ1bmN0aW9uIHRlc3REdWNrKGR1Y2spIHtcclxuICAgIGR1Y2sucXVhY2soKTtcclxuICAgIGR1Y2suZmx5KCk7XHJcbn1cclxuZnVuY3Rpb24gdGVzdFR1cmtleSh0dXJrZXkpIHtcclxuICAgIHR1cmtleS5nb2JibGUoKTtcclxuICAgIHR1cmtleS5mbHkoKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWFsbGFyZER1Y2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYWxsYXJkRHVjaygpIHtcclxuICAgIH1cclxuICAgIE1hbGxhcmREdWNrLnByb3RvdHlwZS5xdWFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInF1YWNrXCIpO1xyXG4gICAgfTtcclxuICAgIE1hbGxhcmREdWNrLnByb3RvdHlwZS5mbHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJJ20gZmx5aW5nXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYWxsYXJkRHVjaztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWFsbGFyZER1Y2s7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXaWxkVHVya2V5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2lsZFR1cmtleSgpIHtcclxuICAgIH1cclxuICAgIFdpbGRUdXJrZXkucHJvdG90eXBlLmdvYmJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdvb2JibGVcIik7XHJcbiAgICB9O1xyXG4gICAgV2lsZFR1cmtleS5wcm90b3R5cGUuZmx5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIGZseWluZyBhIHNob3J0IGRpc3RhbmNlXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXaWxkVHVya2V5O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBXaWxkVHVya2V5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRHVja0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEdWNrQWRhcHRlcihkdWNrKSB7XHJcbiAgICAgICAgdGhpcy5kdWNrID0gZHVjaztcclxuICAgICAgICB0aGlzLl9yYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTA7XHJcbiAgICB9XHJcbiAgICBEdWNrQWRhcHRlci5wcm90b3R5cGUuZ29iYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZHVjay5xdWFjaygpO1xyXG4gICAgfTtcclxuICAgIER1Y2tBZGFwdGVyLnByb3RvdHlwZS5mbHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JhbmRvbSA+IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5kdWNrLmZseSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRHVja0FkYXB0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IER1Y2tBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVHVya2V5QWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR1cmtleUFkYXB0ZXIodHVya2V5KSB7XHJcbiAgICAgICAgdGhpcy50dXJrZXkgPSB0dXJrZXk7XHJcbiAgICB9XHJcbiAgICBUdXJrZXlBZGFwdGVyLnByb3RvdHlwZS5xdWFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnR1cmtleS5nb2JibGUoKTtcclxuICAgIH07XHJcbiAgICBUdXJrZXlBZGFwdGVyLnByb3RvdHlwZS5mbHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50dXJrZXkuZmx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBUdXJrZXlBZGFwdGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUdXJrZXlBZGFwdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9