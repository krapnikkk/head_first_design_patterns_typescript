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
/******/ 	return __webpack_require__(__webpack_require__.s = "./02_weatherStation/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./02_weatherStation/CurrentConditionsDisplay.ts":
/*!*******************************************************!*\
  !*** ./02_weatherStation/CurrentConditionsDisplay.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(wd) {
        this.tempemrature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.name = "CurrentConditionsDisplay";
        this.weatherData = wd;
        this.weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.tempemrature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log('Here is ' + this.name);
        console.log(this.tempemrature, this.humidity, this.pressure);
    };
    return CurrentConditionsDisplay;
}());
exports.default = CurrentConditionsDisplay;


/***/ }),

/***/ "./02_weatherStation/Main.ts":
/*!***********************************!*\
  !*** ./02_weatherStation/Main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData_1 = __importDefault(__webpack_require__(/*! ./WeatherData */ "./02_weatherStation/WeatherData.ts"));
var CurrentConditionsDisplay_1 = __importDefault(__webpack_require__(/*! ./CurrentConditionsDisplay */ "./02_weatherStation/CurrentConditionsDisplay.ts"));
var StatisticsDisplay_1 = __importDefault(__webpack_require__(/*! ./StatisticsDisplay */ "./02_weatherStation/StatisticsDisplay.ts"));
var weatherData = new WeatherData_1.default(), currentConditionsDisplay = new CurrentConditionsDisplay_1.default(weatherData), statisticsDisplay = new StatisticsDisplay_1.default(weatherData);
weatherData.getMeasurements();
statisticsDisplay.removenotification();
weatherData.getMeasurements();


/***/ }),

/***/ "./02_weatherStation/StatisticsDisplay.ts":
/*!************************************************!*\
  !*** ./02_weatherStation/StatisticsDisplay.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StatisticsDisplay = /** @class */ (function () {
    function StatisticsDisplay(wb) {
        this.numReadings = 0;
        this.maxTemp = 0.0;
        this.minTemp = 200;
        this.tempSum = 0.0;
        this.name = "StatisticsDisplay";
        this.weatherData = wb;
        this.weatherData.registerObserver(this);
    }
    StatisticsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.tempSum += temp;
        this.numReadings++;
        if (temp > this.maxTemp) {
            this.maxTemp = temp;
        }
        if (temp < this.minTemp) {
            this.minTemp = temp;
        }
        this.display();
    };
    StatisticsDisplay.prototype.display = function () {
        console.log("Here is " + this.name);
        console.log("Avg/Max/Min temperature = " + (this.tempSum / this.numReadings)
            + "/" + this.maxTemp + "/" + this.minTemp);
    };
    StatisticsDisplay.prototype.removenotification = function () {
        this.weatherData.removeObserver(this);
        console.log("bye bye!");
    };
    return StatisticsDisplay;
}());
exports.default = StatisticsDisplay;


/***/ }),

/***/ "./02_weatherStation/WeatherData.ts":
/*!******************************************!*\
  !*** ./02_weatherStation/WeatherData.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
        this.observers = [];
    }
    WeatherData.prototype.notifyObserver = function () {
        for (var i = 0; i < this.observers.length; i++) {
            var observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, airpressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = airpressure;
        this.notifyObserver();
    };
    WeatherData.prototype.getMeasurements = function () {
        var _this = this;
        fetch('https://bird.ioliu.cn/v2?url=http://www.nmc.cn/f/rest/real/59493&[Access-Control-Allow-Origin:*]')
            .then(function (res) {
            return res.json();
        }).then(function (value) {
            var weather = value['weather'], temperature = +weather['temperature'], humidity = +weather['humidity'], airpressure = +weather['airpressure'];
            _this.setMeasurements(temperature, humidity, airpressure);
        });
    };
    return WeatherData;
}());
exports.default = WeatherData;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDJfd2VhdGhlclN0YXRpb24vQ3VycmVudENvbmRpdGlvbnNEaXNwbGF5LnRzIiwid2VicGFjazovLy8uLzAyX3dlYXRoZXJTdGF0aW9uL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vMDJfd2VhdGhlclN0YXRpb24vU3RhdGlzdGljc0Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vMDJfd2VhdGhlclN0YXRpb24vV2VhdGhlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG9DQUFvQyxtQkFBTyxDQUFDLHlEQUFlO0FBQzNELGlEQUFpRCxtQkFBTyxDQUFDLG1GQUE0QjtBQUNyRiwwQ0FBMEMsbUJBQU8sQ0FBQyxxRUFBcUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vMDJfd2VhdGhlclN0YXRpb24vTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDdXJyZW50Q29uZGl0aW9uc0Rpc3BsYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDdXJyZW50Q29uZGl0aW9uc0Rpc3BsYXkod2QpIHtcclxuICAgICAgICB0aGlzLnRlbXBlbXJhdHVyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDdXJyZW50Q29uZGl0aW9uc0Rpc3BsYXlcIjtcclxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhID0gd2Q7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YS5yZWdpc3Rlck9ic2VydmVyKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgQ3VycmVudENvbmRpdGlvbnNEaXNwbGF5LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodGVtcCwgaHVtaWRpdHksIHByZXNzdXJlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wZW1yYXR1cmUgPSB0ZW1wO1xyXG4gICAgICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcclxuICAgICAgICB0aGlzLnByZXNzdXJlID0gcHJlc3N1cmU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XHJcbiAgICB9O1xyXG4gICAgQ3VycmVudENvbmRpdGlvbnNEaXNwbGF5LnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIZXJlIGlzICcgKyB0aGlzLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVtcGVtcmF0dXJlLCB0aGlzLmh1bWlkaXR5LCB0aGlzLnByZXNzdXJlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ3VycmVudENvbmRpdGlvbnNEaXNwbGF5O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDdXJyZW50Q29uZGl0aW9uc0Rpc3BsYXk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXZWF0aGVyRGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1dlYXRoZXJEYXRhXCIpKTtcclxudmFyIEN1cnJlbnRDb25kaXRpb25zRGlzcGxheV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0N1cnJlbnRDb25kaXRpb25zRGlzcGxheVwiKSk7XHJcbnZhciBTdGF0aXN0aWNzRGlzcGxheV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1N0YXRpc3RpY3NEaXNwbGF5XCIpKTtcclxudmFyIHdlYXRoZXJEYXRhID0gbmV3IFdlYXRoZXJEYXRhXzEuZGVmYXVsdCgpLCBjdXJyZW50Q29uZGl0aW9uc0Rpc3BsYXkgPSBuZXcgQ3VycmVudENvbmRpdGlvbnNEaXNwbGF5XzEuZGVmYXVsdCh3ZWF0aGVyRGF0YSksIHN0YXRpc3RpY3NEaXNwbGF5ID0gbmV3IFN0YXRpc3RpY3NEaXNwbGF5XzEuZGVmYXVsdCh3ZWF0aGVyRGF0YSk7XHJcbndlYXRoZXJEYXRhLmdldE1lYXN1cmVtZW50cygpO1xyXG5zdGF0aXN0aWNzRGlzcGxheS5yZW1vdmVub3RpZmljYXRpb24oKTtcclxud2VhdGhlckRhdGEuZ2V0TWVhc3VyZW1lbnRzKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTdGF0aXN0aWNzRGlzcGxheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0YXRpc3RpY3NEaXNwbGF5KHdiKSB7XHJcbiAgICAgICAgdGhpcy5udW1SZWFkaW5ncyA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhUZW1wID0gMC4wO1xyXG4gICAgICAgIHRoaXMubWluVGVtcCA9IDIwMDtcclxuICAgICAgICB0aGlzLnRlbXBTdW0gPSAwLjA7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTdGF0aXN0aWNzRGlzcGxheVwiO1xyXG4gICAgICAgIHRoaXMud2VhdGhlckRhdGEgPSB3YjtcclxuICAgICAgICB0aGlzLndlYXRoZXJEYXRhLnJlZ2lzdGVyT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB9XHJcbiAgICBTdGF0aXN0aWNzRGlzcGxheS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHRlbXAsIGh1bWlkaXR5LCBwcmVzc3VyZSkge1xyXG4gICAgICAgIHRoaXMudGVtcFN1bSArPSB0ZW1wO1xyXG4gICAgICAgIHRoaXMubnVtUmVhZGluZ3MrKztcclxuICAgICAgICBpZiAodGVtcCA+IHRoaXMubWF4VGVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heFRlbXAgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGVtcCA8IHRoaXMubWluVGVtcCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pblRlbXAgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcclxuICAgIH07XHJcbiAgICBTdGF0aXN0aWNzRGlzcGxheS5wcm90b3R5cGUuZGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhlcmUgaXMgXCIgKyB0aGlzLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXZnL01heC9NaW4gdGVtcGVyYXR1cmUgPSBcIiArICh0aGlzLnRlbXBTdW0gLyB0aGlzLm51bVJlYWRpbmdzKVxyXG4gICAgICAgICAgICArIFwiL1wiICsgdGhpcy5tYXhUZW1wICsgXCIvXCIgKyB0aGlzLm1pblRlbXApO1xyXG4gICAgfTtcclxuICAgIFN0YXRpc3RpY3NEaXNwbGF5LnByb3RvdHlwZS5yZW1vdmVub3RpZmljYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyRGF0YS5yZW1vdmVPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJ5ZSBieWUhXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdGF0aXN0aWNzRGlzcGxheTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhdGlzdGljc0Rpc3BsYXk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBXZWF0aGVyRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdlYXRoZXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy50ZW1wZXJhdHVyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVzc3VyZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIFdlYXRoZXJEYXRhLnByb3RvdHlwZS5ub3RpZnlPYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgICAgICBvYnNlcnZlci51cGRhdGUodGhpcy50ZW1wZXJhdHVyZSwgdGhpcy5odW1pZGl0eSwgdGhpcy5wcmVzc3VyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFdlYXRoZXJEYXRhLnByb3RvdHlwZS5yZWdpc3Rlck9ic2VydmVyID0gZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG8pO1xyXG4gICAgfTtcclxuICAgIFdlYXRoZXJEYXRhLnByb3RvdHlwZS5yZW1vdmVPYnNlcnZlciA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5vYnNlcnZlcnMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBXZWF0aGVyRGF0YS5wcm90b3R5cGUuc2V0TWVhc3VyZW1lbnRzID0gZnVuY3Rpb24gKHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgYWlycHJlc3N1cmUpIHtcclxuICAgICAgICB0aGlzLnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmU7XHJcbiAgICAgICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xyXG4gICAgICAgIHRoaXMucHJlc3N1cmUgPSBhaXJwcmVzc3VyZTtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVyKCk7XHJcbiAgICB9O1xyXG4gICAgV2VhdGhlckRhdGEucHJvdG90eXBlLmdldE1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2JpcmQuaW9saXUuY24vdjI/dXJsPWh0dHA6Ly93d3cubm1jLmNuL2YvcmVzdC9yZWFsLzU5NDkzJltBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW46Kl0nKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB3ZWF0aGVyID0gdmFsdWVbJ3dlYXRoZXInXSwgdGVtcGVyYXR1cmUgPSArd2VhdGhlclsndGVtcGVyYXR1cmUnXSwgaHVtaWRpdHkgPSArd2VhdGhlclsnaHVtaWRpdHknXSwgYWlycHJlc3N1cmUgPSArd2VhdGhlclsnYWlycHJlc3N1cmUnXTtcclxuICAgICAgICAgICAgX3RoaXMuc2V0TWVhc3VyZW1lbnRzKHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgYWlycHJlc3N1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBXZWF0aGVyRGF0YTtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gV2VhdGhlckRhdGE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=