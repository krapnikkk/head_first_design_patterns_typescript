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
/******/ 	return __webpack_require__(__webpack_require__.s = "./11_State/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./11_State/GumballMachine.ts":
/*!************************************!*\
  !*** ./11_State/GumballMachine.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoldOutState_1 = __importDefault(__webpack_require__(/*! ./state/SoldOutState */ "./11_State/state/SoldOutState.ts"));
var NoQuarterState_1 = __importDefault(__webpack_require__(/*! ./state/NoQuarterState */ "./11_State/state/NoQuarterState.ts"));
var HasQuarterState_1 = __importDefault(__webpack_require__(/*! ./state/HasQuarterState */ "./11_State/state/HasQuarterState.ts"));
var SoldState_1 = __importDefault(__webpack_require__(/*! ./state/SoldState */ "./11_State/state/SoldState.ts"));
var WinnerState_1 = __importDefault(__webpack_require__(/*! ./state/WinnerState */ "./11_State/state/WinnerState.ts"));
var GumballMachine = /** @class */ (function () {
    function GumballMachine(numberGumballs) {
        this.count = 0;
        this.soldOutState = new SoldOutState_1.default(this);
        this.noQuarterState = new NoQuarterState_1.default(this);
        this.hasQuarterState = new HasQuarterState_1.default(this);
        this.soldState = new SoldState_1.default(this);
        this.winnerState = new WinnerState_1.default(this);
        this.count = numberGumballs;
        if (numberGumballs > 0) {
            this.state = this.noQuarterState;
        }
        else {
            this.state = this.soldOutState;
        }
    }
    GumballMachine.prototype.insertQuarter = function () {
        this.state.insertQuarter();
    };
    GumballMachine.prototype.ejectQuarter = function () {
        this.state.ejectQuarter();
    };
    GumballMachine.prototype.turnCrank = function () {
        this.state.turnCrank();
        this.state.dispense();
    };
    GumballMachine.prototype.setState = function (state) {
        this.state = state;
    };
    GumballMachine.prototype.getState = function () {
        return this.state;
    };
    GumballMachine.prototype.releaseBall = function () {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count -= 1;
        }
    };
    GumballMachine.prototype.getCount = function () {
        return this.count;
    };
    GumballMachine.prototype.refill = function (count) {
        this.count += count;
        console.log("The gumball machine was just refilled; it's new count is: " + this.count);
        this.state.refill();
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.soldOutState;
    };
    GumballMachine.prototype.getNoQuarterState = function () {
        return this.noQuarterState;
    };
    GumballMachine.prototype.getHasQuarterState = function () {
        return this.hasQuarterState;
    };
    GumballMachine.prototype.getSoldState = function () {
        return this.soldState;
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.winnerState;
    };
    GumballMachine.prototype.toString = function () {
        return "Mighty Gumball, Inc.\n\n                TS-enabled Standing Gumball Model #2020\n\n                Inventory: " + this.count + " " + (this.count > 1 ? "gumballs" : "gumball") + "\n\n                Machine is " + this.state.toString();
    };
    return GumballMachine;
}());
exports.default = GumballMachine;


/***/ }),

/***/ "./11_State/Main.ts":
/*!**************************!*\
  !*** ./11_State/Main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GumballMachine_1 = __importDefault(__webpack_require__(/*! ./GumballMachine */ "./11_State/GumballMachine.ts"));
var gumballMachine = new GumballMachine_1.default(10);
console.log(gumballMachine.toString());
console.log("=====================");
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.toString());
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.toString());
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.toString());
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.toString());
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.toString());


/***/ }),

/***/ "./11_State/state/HasQuarterState.ts":
/*!*******************************************!*\
  !*** ./11_State/state/HasQuarterState.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HasQuarterState = /** @class */ (function () {
    function HasQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    HasQuarterState.prototype.insertQuarter = function () {
        console.log("You can't insert another quarter");
    };
    HasQuarterState.prototype.ejectQuarter = function () {
        console.log("Quarter returnde");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    };
    HasQuarterState.prototype.turnCrank = function () {
        console.log("you turned...");
        var winner = Math.round(Math.random() * 10);
        console.log("winner:" + winner);
        if ((winner == 0) && (this.gumballMachine.getCount() > 1)) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    };
    HasQuarterState.prototype.dispense = function () {
        console.log("no gumball dispensed");
    };
    HasQuarterState.prototype.refill = function () {
    };
    HasQuarterState.prototype.toString = function () {
        return "waiting for turn of crank";
    };
    return HasQuarterState;
}());
exports.default = HasQuarterState;


/***/ }),

/***/ "./11_State/state/NoQuarterState.ts":
/*!******************************************!*\
  !*** ./11_State/state/NoQuarterState.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoQuarterState = /** @class */ (function () {
    function NoQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    NoQuarterState.prototype.insertQuarter = function () {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    };
    NoQuarterState.prototype.ejectQuarter = function () {
        console.log("You haven't inserted a quarter");
    };
    NoQuarterState.prototype.turnCrank = function () {
        console.log("You turned, but there's no quarter");
    };
    NoQuarterState.prototype.dispense = function () {
        console.log("You need to pay first");
    };
    NoQuarterState.prototype.refill = function () {
    };
    NoQuarterState.prototype.toString = function () {
        return "waiting for quarter";
    };
    return NoQuarterState;
}());
exports.default = NoQuarterState;


/***/ }),

/***/ "./11_State/state/SoldOutState.ts":
/*!****************************************!*\
  !*** ./11_State/state/SoldOutState.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SoldOutState = /** @class */ (function () {
    function SoldOutState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldOutState.prototype.insertQuarter = function () {
        console.log("You can't insert a quarter, the machine is sold out");
    };
    SoldOutState.prototype.ejectQuarter = function () {
        console.log("You can't eject, you haven't inserted a quarter yet");
    };
    SoldOutState.prototype.turnCrank = function () {
        console.log("You turned, but there are no gumballs");
    };
    SoldOutState.prototype.dispense = function () {
        console.log("No gumball dispensed");
    };
    SoldOutState.prototype.refill = function () {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    };
    SoldOutState.prototype.toString = function () {
        return "sold out";
    };
    return SoldOutState;
}());
exports.default = SoldOutState;


/***/ }),

/***/ "./11_State/state/SoldState.ts":
/*!*************************************!*\
  !*** ./11_State/state/SoldState.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SoldState = /** @class */ (function () {
    function SoldState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldState.prototype.insertQuarter = function () {
        console.log("Please wait, we're already giving you a gumball");
    };
    SoldState.prototype.ejectQuarter = function () {
        console.log("Sorry, you already turned the crank");
    };
    SoldState.prototype.turnCrank = function () {
        console.log("Turning twice doesn't get you another gumball!");
    };
    SoldState.prototype.dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    };
    SoldState.prototype.refill = function () {
    };
    SoldState.prototype.toString = function () {
        return "dispensing a gumball";
    };
    return SoldState;
}());
exports.default = SoldState;


/***/ }),

/***/ "./11_State/state/WinnerState.ts":
/*!***************************************!*\
  !*** ./11_State/state/WinnerState.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WinnerState = /** @class */ (function () {
    function WinnerState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    WinnerState.prototype.insertQuarter = function () {
        console.log("Please wait, we're already giving you a Gumball");
    };
    WinnerState.prototype.ejectQuarter = function () {
        console.log("Please wait, we're already giving you a Gumball");
    };
    WinnerState.prototype.turnCrank = function () {
        console.log("Turning again doesn't get you another gumball!");
    };
    WinnerState.prototype.dispense = function () {
    };
    WinnerState.prototype.refill = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.releaseBall();
            console.log("YOU'RE A WINNER! You got two gumballs for your quarter");
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }
            else {
                console.log("Oops, out of gumballs!");
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    };
    WinnerState.prototype.toString = function () {
        return "despensing two gumballs for your quarter, because YOU'RE A WINNER!";
    };
    return WinnerState;
}());
exports.default = WinnerState;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMTFfU3RhdGUvR3VtYmFsbE1hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vMTFfU3RhdGUvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi8xMV9TdGF0ZS9zdGF0ZS9IYXNRdWFydGVyU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vMTFfU3RhdGUvc3RhdGUvTm9RdWFydGVyU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vMTFfU3RhdGUvc3RhdGUvU29sZE91dFN0YXRlLnRzIiwid2VicGFjazovLy8uLzExX1N0YXRlL3N0YXRlL1NvbGRTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi8xMV9TdGF0ZS9zdGF0ZS9XaW5uZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxxQ0FBcUMsbUJBQU8sQ0FBQyw4REFBc0I7QUFDbkUsdUNBQXVDLG1CQUFPLENBQUMsa0VBQXdCO0FBQ3ZFLHdDQUF3QyxtQkFBTyxDQUFDLG9FQUF5QjtBQUN6RSxrQ0FBa0MsbUJBQU8sQ0FBQyx3REFBbUI7QUFDN0Qsb0NBQW9DLG1CQUFPLENBQUMsNERBQXFCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzVFYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsdUNBQXVDLG1CQUFPLENBQUMsc0RBQWtCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMUJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDL0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vMTFfU3RhdGUvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTb2xkT3V0U3RhdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdGF0ZS9Tb2xkT3V0U3RhdGVcIikpO1xyXG52YXIgTm9RdWFydGVyU3RhdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdGF0ZS9Ob1F1YXJ0ZXJTdGF0ZVwiKSk7XHJcbnZhciBIYXNRdWFydGVyU3RhdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zdGF0ZS9IYXNRdWFydGVyU3RhdGVcIikpO1xyXG52YXIgU29sZFN0YXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3RhdGUvU29sZFN0YXRlXCIpKTtcclxudmFyIFdpbm5lclN0YXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc3RhdGUvV2lubmVyU3RhdGVcIikpO1xyXG52YXIgR3VtYmFsbE1hY2hpbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHdW1iYWxsTWFjaGluZShudW1iZXJHdW1iYWxscykge1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc29sZE91dFN0YXRlID0gbmV3IFNvbGRPdXRTdGF0ZV8xLmRlZmF1bHQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub1F1YXJ0ZXJTdGF0ZSA9IG5ldyBOb1F1YXJ0ZXJTdGF0ZV8xLmRlZmF1bHQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYXNRdWFydGVyU3RhdGUgPSBuZXcgSGFzUXVhcnRlclN0YXRlXzEuZGVmYXVsdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNvbGRTdGF0ZSA9IG5ldyBTb2xkU3RhdGVfMS5kZWZhdWx0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMud2lubmVyU3RhdGUgPSBuZXcgV2lubmVyU3RhdGVfMS5kZWZhdWx0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBudW1iZXJHdW1iYWxscztcclxuICAgICAgICBpZiAobnVtYmVyR3VtYmFsbHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLm5vUXVhcnRlclN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuc29sZE91dFN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEd1bWJhbGxNYWNoaW5lLnByb3RvdHlwZS5pbnNlcnRRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuaW5zZXJ0UXVhcnRlcigpO1xyXG4gICAgfTtcclxuICAgIEd1bWJhbGxNYWNoaW5lLnByb3RvdHlwZS5lamVjdFF1YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5lamVjdFF1YXJ0ZXIoKTtcclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUudHVybkNyYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUudHVybkNyYW5rKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXNwZW5zZSgpO1xyXG4gICAgfTtcclxuICAgIEd1bWJhbGxNYWNoaW5lLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICB9O1xyXG4gICAgR3VtYmFsbE1hY2hpbmUucHJvdG90eXBlLnJlbGVhc2VCYWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQSBndW1iYWxsIGNvbWVzIHJvbGxpbmcgb3V0IHRoZSBzbG90Li4uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUuZ2V0Q291bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnQ7XHJcbiAgICB9O1xyXG4gICAgR3VtYmFsbE1hY2hpbmUucHJvdG90eXBlLnJlZmlsbCA9IGZ1bmN0aW9uIChjb3VudCkge1xyXG4gICAgICAgIHRoaXMuY291bnQgKz0gY291bnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgZ3VtYmFsbCBtYWNoaW5lIHdhcyBqdXN0IHJlZmlsbGVkOyBpdCdzIG5ldyBjb3VudCBpczogXCIgKyB0aGlzLmNvdW50KTtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZmlsbCgpO1xyXG4gICAgfTtcclxuICAgIEd1bWJhbGxNYWNoaW5lLnByb3RvdHlwZS5nZXRTb2xkT3V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc29sZE91dFN0YXRlO1xyXG4gICAgfTtcclxuICAgIEd1bWJhbGxNYWNoaW5lLnByb3RvdHlwZS5nZXROb1F1YXJ0ZXJTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub1F1YXJ0ZXJTdGF0ZTtcclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUuZ2V0SGFzUXVhcnRlclN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhc1F1YXJ0ZXJTdGF0ZTtcclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUuZ2V0U29sZFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvbGRTdGF0ZTtcclxuICAgIH07XHJcbiAgICBHdW1iYWxsTWFjaGluZS5wcm90b3R5cGUuZ2V0V2lubmVyU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lubmVyU3RhdGU7XHJcbiAgICB9O1xyXG4gICAgR3VtYmFsbE1hY2hpbmUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIk1pZ2h0eSBHdW1iYWxsLCBJbmMuXFxuXFxuICAgICAgICAgICAgICAgIFRTLWVuYWJsZWQgU3RhbmRpbmcgR3VtYmFsbCBNb2RlbCAjMjAyMFxcblxcbiAgICAgICAgICAgICAgICBJbnZlbnRvcnk6IFwiICsgdGhpcy5jb3VudCArIFwiIFwiICsgKHRoaXMuY291bnQgPiAxID8gXCJndW1iYWxsc1wiIDogXCJndW1iYWxsXCIpICsgXCJcXG5cXG4gICAgICAgICAgICAgICAgTWFjaGluZSBpcyBcIiArIHRoaXMuc3RhdGUudG9TdHJpbmcoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR3VtYmFsbE1hY2hpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEd1bWJhbGxNYWNoaW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgR3VtYmFsbE1hY2hpbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HdW1iYWxsTWFjaGluZVwiKSk7XHJcbnZhciBndW1iYWxsTWFjaGluZSA9IG5ldyBHdW1iYWxsTWFjaGluZV8xLmRlZmF1bHQoMTApO1xyXG5jb25zb2xlLmxvZyhndW1iYWxsTWFjaGluZS50b1N0cmluZygpKTtcclxuY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT1cIik7XHJcbmd1bWJhbGxNYWNoaW5lLmluc2VydFF1YXJ0ZXIoKTtcclxuZ3VtYmFsbE1hY2hpbmUudHVybkNyYW5rKCk7XHJcbmd1bWJhbGxNYWNoaW5lLmluc2VydFF1YXJ0ZXIoKTtcclxuZ3VtYmFsbE1hY2hpbmUudHVybkNyYW5rKCk7XHJcbmNvbnNvbGUubG9nKGd1bWJhbGxNYWNoaW5lLnRvU3RyaW5nKCkpO1xyXG5ndW1iYWxsTWFjaGluZS5pbnNlcnRRdWFydGVyKCk7XHJcbmd1bWJhbGxNYWNoaW5lLnR1cm5DcmFuaygpO1xyXG5ndW1iYWxsTWFjaGluZS5pbnNlcnRRdWFydGVyKCk7XHJcbmd1bWJhbGxNYWNoaW5lLnR1cm5DcmFuaygpO1xyXG5jb25zb2xlLmxvZyhndW1iYWxsTWFjaGluZS50b1N0cmluZygpKTtcclxuZ3VtYmFsbE1hY2hpbmUuaW5zZXJ0UXVhcnRlcigpO1xyXG5ndW1iYWxsTWFjaGluZS50dXJuQ3JhbmsoKTtcclxuZ3VtYmFsbE1hY2hpbmUuaW5zZXJ0UXVhcnRlcigpO1xyXG5ndW1iYWxsTWFjaGluZS50dXJuQ3JhbmsoKTtcclxuY29uc29sZS5sb2coZ3VtYmFsbE1hY2hpbmUudG9TdHJpbmcoKSk7XHJcbmd1bWJhbGxNYWNoaW5lLmluc2VydFF1YXJ0ZXIoKTtcclxuZ3VtYmFsbE1hY2hpbmUudHVybkNyYW5rKCk7XHJcbmd1bWJhbGxNYWNoaW5lLmluc2VydFF1YXJ0ZXIoKTtcclxuZ3VtYmFsbE1hY2hpbmUudHVybkNyYW5rKCk7XHJcbmNvbnNvbGUubG9nKGd1bWJhbGxNYWNoaW5lLnRvU3RyaW5nKCkpO1xyXG5ndW1iYWxsTWFjaGluZS5pbnNlcnRRdWFydGVyKCk7XHJcbmd1bWJhbGxNYWNoaW5lLnR1cm5DcmFuaygpO1xyXG5ndW1iYWxsTWFjaGluZS5pbnNlcnRRdWFydGVyKCk7XHJcbmd1bWJhbGxNYWNoaW5lLnR1cm5DcmFuaygpO1xyXG5jb25zb2xlLmxvZyhndW1iYWxsTWFjaGluZS50b1N0cmluZygpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEhhc1F1YXJ0ZXJTdGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhhc1F1YXJ0ZXJTdGF0ZShndW1iYWxsTWFjaGluZSkge1xyXG4gICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUgPSBndW1iYWxsTWFjaGluZTtcclxuICAgIH1cclxuICAgIEhhc1F1YXJ0ZXJTdGF0ZS5wcm90b3R5cGUuaW5zZXJ0UXVhcnRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBjYW4ndCBpbnNlcnQgYW5vdGhlciBxdWFydGVyXCIpO1xyXG4gICAgfTtcclxuICAgIEhhc1F1YXJ0ZXJTdGF0ZS5wcm90b3R5cGUuZWplY3RRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUXVhcnRlciByZXR1cm5kZVwiKTtcclxuICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0Tm9RdWFydGVyU3RhdGUoKSk7XHJcbiAgICB9O1xyXG4gICAgSGFzUXVhcnRlclN0YXRlLnByb3RvdHlwZS50dXJuQ3JhbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgdHVybmVkLi4uXCIpO1xyXG4gICAgICAgIHZhciB3aW5uZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5uZXI6XCIgKyB3aW5uZXIpO1xyXG4gICAgICAgIGlmICgod2lubmVyID09IDApICYmICh0aGlzLmd1bWJhbGxNYWNoaW5lLmdldENvdW50KCkgPiAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0V2lubmVyU3RhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0U29sZFN0YXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBIYXNRdWFydGVyU3RhdGUucHJvdG90eXBlLmRpc3BlbnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gZ3VtYmFsbCBkaXNwZW5zZWRcIik7XHJcbiAgICB9O1xyXG4gICAgSGFzUXVhcnRlclN0YXRlLnByb3RvdHlwZS5yZWZpbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgSGFzUXVhcnRlclN0YXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ3YWl0aW5nIGZvciB0dXJuIG9mIGNyYW5rXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhhc1F1YXJ0ZXJTdGF0ZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSGFzUXVhcnRlclN0YXRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTm9RdWFydGVyU3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOb1F1YXJ0ZXJTdGF0ZShndW1iYWxsTWFjaGluZSkge1xyXG4gICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUgPSBndW1iYWxsTWFjaGluZTtcclxuICAgIH1cclxuICAgIE5vUXVhcnRlclN0YXRlLnByb3RvdHlwZS5pbnNlcnRRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGluc2VydGVkIGEgcXVhcnRlclwiKTtcclxuICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0SGFzUXVhcnRlclN0YXRlKCkpO1xyXG4gICAgfTtcclxuICAgIE5vUXVhcnRlclN0YXRlLnByb3RvdHlwZS5lamVjdFF1YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZW4ndCBpbnNlcnRlZCBhIHF1YXJ0ZXJcIik7XHJcbiAgICB9O1xyXG4gICAgTm9RdWFydGVyU3RhdGUucHJvdG90eXBlLnR1cm5DcmFuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllvdSB0dXJuZWQsIGJ1dCB0aGVyZSdzIG5vIHF1YXJ0ZXJcIik7XHJcbiAgICB9O1xyXG4gICAgTm9RdWFydGVyU3RhdGUucHJvdG90eXBlLmRpc3BlbnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IG5lZWQgdG8gcGF5IGZpcnN0XCIpO1xyXG4gICAgfTtcclxuICAgIE5vUXVhcnRlclN0YXRlLnByb3RvdHlwZS5yZWZpbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgTm9RdWFydGVyU3RhdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIndhaXRpbmcgZm9yIHF1YXJ0ZXJcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTm9RdWFydGVyU3RhdGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5vUXVhcnRlclN0YXRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU29sZE91dFN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU29sZE91dFN0YXRlKGd1bWJhbGxNYWNoaW5lKSB7XHJcbiAgICAgICAgdGhpcy5ndW1iYWxsTWFjaGluZSA9IGd1bWJhbGxNYWNoaW5lO1xyXG4gICAgfVxyXG4gICAgU29sZE91dFN0YXRlLnByb3RvdHlwZS5pbnNlcnRRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGNhbid0IGluc2VydCBhIHF1YXJ0ZXIsIHRoZSBtYWNoaW5lIGlzIHNvbGQgb3V0XCIpO1xyXG4gICAgfTtcclxuICAgIFNvbGRPdXRTdGF0ZS5wcm90b3R5cGUuZWplY3RRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGNhbid0IGVqZWN0LCB5b3UgaGF2ZW4ndCBpbnNlcnRlZCBhIHF1YXJ0ZXIgeWV0XCIpO1xyXG4gICAgfTtcclxuICAgIFNvbGRPdXRTdGF0ZS5wcm90b3R5cGUudHVybkNyYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWW91IHR1cm5lZCwgYnV0IHRoZXJlIGFyZSBubyBndW1iYWxsc1wiKTtcclxuICAgIH07XHJcbiAgICBTb2xkT3V0U3RhdGUucHJvdG90eXBlLmRpc3BlbnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZ3VtYmFsbCBkaXNwZW5zZWRcIik7XHJcbiAgICB9O1xyXG4gICAgU29sZE91dFN0YXRlLnByb3RvdHlwZS5yZWZpbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ndW1iYWxsTWFjaGluZS5zZXRTdGF0ZSh0aGlzLmd1bWJhbGxNYWNoaW5lLmdldE5vUXVhcnRlclN0YXRlKCkpO1xyXG4gICAgfTtcclxuICAgIFNvbGRPdXRTdGF0ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwic29sZCBvdXRcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU29sZE91dFN0YXRlO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBTb2xkT3V0U3RhdGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTb2xkU3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTb2xkU3RhdGUoZ3VtYmFsbE1hY2hpbmUpIHtcclxuICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lID0gZ3VtYmFsbE1hY2hpbmU7XHJcbiAgICB9XHJcbiAgICBTb2xkU3RhdGUucHJvdG90eXBlLmluc2VydFF1YXJ0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2Ugd2FpdCwgd2UncmUgYWxyZWFkeSBnaXZpbmcgeW91IGEgZ3VtYmFsbFwiKTtcclxuICAgIH07XHJcbiAgICBTb2xkU3RhdGUucHJvdG90eXBlLmVqZWN0UXVhcnRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvcnJ5LCB5b3UgYWxyZWFkeSB0dXJuZWQgdGhlIGNyYW5rXCIpO1xyXG4gICAgfTtcclxuICAgIFNvbGRTdGF0ZS5wcm90b3R5cGUudHVybkNyYW5rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHVybmluZyB0d2ljZSBkb2Vzbid0IGdldCB5b3UgYW5vdGhlciBndW1iYWxsIVwiKTtcclxuICAgIH07XHJcbiAgICBTb2xkU3RhdGUucHJvdG90eXBlLmRpc3BlbnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUucmVsZWFzZUJhbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5ndW1iYWxsTWFjaGluZS5nZXRDb3VudCgpID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0Tm9RdWFydGVyU3RhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0U29sZE91dFN0YXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTb2xkU3RhdGUucHJvdG90eXBlLnJlZmlsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBTb2xkU3RhdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImRpc3BlbnNpbmcgYSBndW1iYWxsXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNvbGRTdGF0ZTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU29sZFN0YXRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgV2lubmVyU3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBXaW5uZXJTdGF0ZShndW1iYWxsTWFjaGluZSkge1xyXG4gICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUgPSBndW1iYWxsTWFjaGluZTtcclxuICAgIH1cclxuICAgIFdpbm5lclN0YXRlLnByb3RvdHlwZS5pbnNlcnRRdWFydGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHdhaXQsIHdlJ3JlIGFscmVhZHkgZ2l2aW5nIHlvdSBhIEd1bWJhbGxcIik7XHJcbiAgICB9O1xyXG4gICAgV2lubmVyU3RhdGUucHJvdG90eXBlLmVqZWN0UXVhcnRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSB3YWl0LCB3ZSdyZSBhbHJlYWR5IGdpdmluZyB5b3UgYSBHdW1iYWxsXCIpO1xyXG4gICAgfTtcclxuICAgIFdpbm5lclN0YXRlLnByb3RvdHlwZS50dXJuQ3JhbmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUdXJuaW5nIGFnYWluIGRvZXNuJ3QgZ2V0IHlvdSBhbm90aGVyIGd1bWJhbGwhXCIpO1xyXG4gICAgfTtcclxuICAgIFdpbm5lclN0YXRlLnByb3RvdHlwZS5kaXNwZW5zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcbiAgICBXaW5uZXJTdGF0ZS5wcm90b3R5cGUucmVmaWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUucmVsZWFzZUJhbGwoKTtcclxuICAgICAgICBpZiAodGhpcy5ndW1iYWxsTWFjaGluZS5nZXRDb3VudCgpID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ndW1iYWxsTWFjaGluZS5zZXRTdGF0ZSh0aGlzLmd1bWJhbGxNYWNoaW5lLmdldFNvbGRPdXRTdGF0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VtYmFsbE1hY2hpbmUucmVsZWFzZUJhbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJZT1UnUkUgQSBXSU5ORVIhIFlvdSBnb3QgdHdvIGd1bWJhbGxzIGZvciB5b3VyIHF1YXJ0ZXJcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmd1bWJhbGxNYWNoaW5lLmdldENvdW50KCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0Tm9RdWFydGVyU3RhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vcHMsIG91dCBvZiBndW1iYWxscyFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1bWJhbGxNYWNoaW5lLnNldFN0YXRlKHRoaXMuZ3VtYmFsbE1hY2hpbmUuZ2V0U29sZE91dFN0YXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdpbm5lclN0YXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJkZXNwZW5zaW5nIHR3byBndW1iYWxscyBmb3IgeW91ciBxdWFydGVyLCBiZWNhdXNlIFlPVSdSRSBBIFdJTk5FUiFcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gV2lubmVyU3RhdGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdpbm5lclN0YXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9