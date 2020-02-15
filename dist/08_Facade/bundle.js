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
/******/ 	return __webpack_require__(__webpack_require__.s = "./08_Facade/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./08_Facade/Amplifier.ts":
/*!********************************!*\
  !*** ./08_Facade/Amplifier.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Amplifier = /** @class */ (function () {
    function Amplifier(description) {
        this.description = description;
    }
    Amplifier.prototype.on = function () {
        console.log(this.description + " on");
    };
    Amplifier.prototype.off = function () {
        console.log(this.description + " off");
    };
    Amplifier.prototype.setStereoSound = function () {
        console.log(this.description + " stereo mode on");
    };
    Amplifier.prototype.setSurroundSound = function () {
        console.log(this.description + " surround sound on (5 speakers, 1 subwoofer)");
    };
    Amplifier.prototype.setVolume = function (level) {
        console.log(this.description + " setting volume to " + level);
    };
    Amplifier.prototype.setTuner = function (tuner) {
        this.tuner = tuner;
    };
    Amplifier.prototype.setDvd = function (dvd) {
        this.dvd = dvd;
    };
    Amplifier.prototype.setCd = function (cd) {
        this.cd = cd;
    };
    Amplifier.prototype.toString = function () {
        return this.description;
    };
    return Amplifier;
}());
exports.default = Amplifier;


/***/ }),

/***/ "./08_Facade/CDPlayer.ts":
/*!*******************************!*\
  !*** ./08_Facade/CDPlayer.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CDPlayer = /** @class */ (function () {
    function CDPlayer(description, amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }
    CDPlayer.prototype.on = function () {
        console.log(this.description + " on");
    };
    CDPlayer.prototype.off = function () {
        console.log(this.description + " off");
    };
    CDPlayer.prototype.eject = function () {
        this.title = "";
        console.log(this.description + " eject");
    };
    CDPlayer.prototype.play = function (title) {
        this.title = title;
        this.currentTrack = 0;
        console.log(this.description + " playing \"" + title + "\"");
    };
    CDPlayer.prototype.stop = function () {
        this.currentTrack = 0;
        console.log(this.description + " stopped");
    };
    CDPlayer.prototype.pause = function () {
        console.log(this.description + " paused \"" + this.title + "\"");
    };
    CDPlayer.prototype.toString = function () {
        return this.description;
    };
    return CDPlayer;
}());
exports.default = CDPlayer;


/***/ }),

/***/ "./08_Facade/DVDPlayer.ts":
/*!********************************!*\
  !*** ./08_Facade/DVDPlayer.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DVDPlayer = /** @class */ (function () {
    function DVDPlayer(description, amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }
    DVDPlayer.prototype.on = function () {
        console.log(this.description + " on");
    };
    DVDPlayer.prototype.off = function () {
        console.log(this.description + " off");
    };
    DVDPlayer.prototype.eject = function () {
        this.movie = "";
        console.log(this.description + " eject");
    };
    // play(track: number) {
    //     if (this.movie == null) {
    //         console.log(this.description + " can't play track " + track + " no dvd inserted");
    //     } else {
    //         this.currentTrack = track;
    //         console.log(this.description + " playing track " + this.currentTrack + " of \"" + this.movie + "\"");
    //     }
    // }
    DVDPlayer.prototype.play = function (movie) {
        this.movie = movie;
        this.currentTrack = 0;
        console.log(this.description + " playing \"" + movie + "\"");
    };
    DVDPlayer.prototype.stop = function () {
        this.currentTrack = 0;
        console.log(this.description + " stopped \"" + this.movie + "\"");
    };
    DVDPlayer.prototype.pause = function () {
        console.log(this.description + " paused \"" + this.movie + "\"");
    };
    DVDPlayer.prototype.setTwoChannelAudio = function () {
        console.log(this.description + " set two channel audio");
    };
    DVDPlayer.prototype.setSurroundAudio = function () {
        console.log(this.description + " set surround audio");
    };
    DVDPlayer.prototype.toString = function () {
        return this.description;
    };
    return DVDPlayer;
}());
exports.default = DVDPlayer;


/***/ }),

/***/ "./08_Facade/HomeTheaterFacade.ts":
/*!****************************************!*\
  !*** ./08_Facade/HomeTheaterFacade.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amp, tuner, dvd, cd, projector, screen, lights, popper) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }
    HomeTheaterFacade.prototype.watchMovie = function (movie) {
        console.log("Get ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    };
    HomeTheaterFacade.prototype.listenToCd = function (cdTitle) {
        console.log("Get ready for an audiopile experence...");
        this.lights.on();
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setCd(this.cd);
        this.amp.setStereoSound();
        this.cd.on();
        this.cd.play(cdTitle);
    };
    HomeTheaterFacade.prototype.endCd = function () {
        console.log("Shutting down CD...");
        this.amp.off();
        this.amp.setCd(this.cd);
        this.cd.eject();
        this.cd.off();
    };
    HomeTheaterFacade.prototype.listenToRadio = function (frequency) {
        console.log("Tuning in the airwaves...");
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    };
    HomeTheaterFacade.prototype.endRadio = function () {
        console.log("Shutting down the tuner...");
        this.tuner.off();
        this.amp.off();
    };
    return HomeTheaterFacade;
}());
exports.default = HomeTheaterFacade;


/***/ }),

/***/ "./08_Facade/Main.ts":
/*!***************************!*\
  !*** ./08_Facade/Main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Amplifier_1 = __importDefault(__webpack_require__(/*! ./Amplifier */ "./08_Facade/Amplifier.ts"));
var Tuner_1 = __importDefault(__webpack_require__(/*! ./Tuner */ "./08_Facade/Tuner.ts"));
var DVDPlayer_1 = __importDefault(__webpack_require__(/*! ./DVDPlayer */ "./08_Facade/DVDPlayer.ts"));
var CDPlayer_1 = __importDefault(__webpack_require__(/*! ./CDPlayer */ "./08_Facade/CDPlayer.ts"));
var Projector_1 = __importDefault(__webpack_require__(/*! ./Projector */ "./08_Facade/Projector.ts"));
var TheaterLights_1 = __importDefault(__webpack_require__(/*! ./TheaterLights */ "./08_Facade/TheaterLights.ts"));
var PopcornPopper_1 = __importDefault(__webpack_require__(/*! ./PopcornPopper */ "./08_Facade/PopcornPopper.ts"));
var Screen_1 = __importDefault(__webpack_require__(/*! ./Screen */ "./08_Facade/Screen.ts"));
var HomeTheaterFacade_1 = __importDefault(__webpack_require__(/*! ./HomeTheaterFacade */ "./08_Facade/HomeTheaterFacade.ts"));
var amp = new Amplifier_1.default("Top-O-Line Amplifier"), tuner = new Tuner_1.default("Top-O-Line AM/FM Tuner"), dvd = new DVDPlayer_1.default("Top-O-Line DVD Player", amp), cd = new CDPlayer_1.default("Top-O-Line CD Player", amp), projector = new Projector_1.default("Top-O-Line Projector", dvd), lights = new TheaterLights_1.default("Theater Ceiling Lights"), screen = new Screen_1.default("Theater Screen"), popper = new PopcornPopper_1.default("Popcorn Popper");
var homeTheater = new HomeTheaterFacade_1.default(amp, tuner, dvd, cd, projector, screen, lights, popper);
homeTheater.watchMovie("Raiders of the Lost Ark");
homeTheater.endMovie();


/***/ }),

/***/ "./08_Facade/PopcornPopper.ts":
/*!************************************!*\
  !*** ./08_Facade/PopcornPopper.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopcornPopper = /** @class */ (function () {
    function PopcornPopper(description) {
        this.description = description;
    }
    PopcornPopper.prototype.on = function () {
        console.log(this.description + " on");
    };
    PopcornPopper.prototype.off = function () {
        console.log(this.description + " off");
    };
    PopcornPopper.prototype.pop = function () {
        console.log(this.description + " popping popcorn!");
    };
    PopcornPopper.prototype.toString = function () {
        return this.description;
    };
    return PopcornPopper;
}());
exports.default = PopcornPopper;


/***/ }),

/***/ "./08_Facade/Projector.ts":
/*!********************************!*\
  !*** ./08_Facade/Projector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Projector = /** @class */ (function () {
    function Projector(description, dvdPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }
    Projector.prototype.on = function () {
        console.log(this.description + " on");
    };
    Projector.prototype.off = function () {
        console.log(this.description + " off");
    };
    Projector.prototype.wideScreenMode = function () {
        console.log(this.description + " in widescreen mode (16x9 aspect ratio)");
    };
    Projector.prototype.tvMode = function () {
        console.log(this.description + " in tv mode (4x3 aspect ratio)");
    };
    Projector.prototype.toString = function () {
        return this.description;
    };
    return Projector;
}());
exports.default = Projector;


/***/ }),

/***/ "./08_Facade/Screen.ts":
/*!*****************************!*\
  !*** ./08_Facade/Screen.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Screen = /** @class */ (function () {
    function Screen(description) {
        this.description = description;
    }
    Screen.prototype.up = function () {
        console.log(this.description + " going up");
    };
    Screen.prototype.down = function () {
        console.log(this.description + " going down");
    };
    Screen.prototype.toString = function () {
        return this.description;
    };
    return Screen;
}());
exports.default = Screen;


/***/ }),

/***/ "./08_Facade/TheaterLights.ts":
/*!************************************!*\
  !*** ./08_Facade/TheaterLights.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TheaterLights = /** @class */ (function () {
    function TheaterLights(description) {
        this.description = description;
    }
    TheaterLights.prototype.on = function () {
        console.log(this.description + " on");
    };
    TheaterLights.prototype.off = function () {
        console.log(this.description + " off");
    };
    TheaterLights.prototype.dim = function (level) {
        console.log(this.description + " dimming to " + level + "%");
    };
    TheaterLights.prototype.toString = function () {
        return this.description;
    };
    return TheaterLights;
}());
exports.default = TheaterLights;


/***/ }),

/***/ "./08_Facade/Tuner.ts":
/*!****************************!*\
  !*** ./08_Facade/Tuner.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tuner = /** @class */ (function () {
    function Tuner(description) {
        this.description = description;
    }
    Tuner.prototype.on = function () {
        console.log(this.description + " on");
    };
    Tuner.prototype.off = function () {
        console.log(this.description + " off");
    };
    Tuner.prototype.setFrequency = function (frequency) {
        console.log(this.description + " setting frequency to " + frequency);
        this.frequency = frequency;
    };
    Tuner.prototype.setAm = function () {
        console.log(this.description + " setting AM mode");
    };
    Tuner.prototype.setFm = function () {
        console.log(this.description + " setting FM mode");
    };
    Tuner.prototype.toString = function () {
        return this.description;
    };
    return Tuner;
}());
exports.default = Tuner;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDhfRmFjYWRlL0FtcGxpZmllci50cyIsIndlYnBhY2s6Ly8vLi8wOF9GYWNhZGUvQ0RQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vMDhfRmFjYWRlL0RWRFBsYXllci50cyIsIndlYnBhY2s6Ly8vLi8wOF9GYWNhZGUvSG9tZVRoZWF0ZXJGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vLy4vMDhfRmFjYWRlL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vMDhfRmFjYWRlL1BvcGNvcm5Qb3BwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vMDhfRmFjYWRlL1Byb2plY3Rvci50cyIsIndlYnBhY2s6Ly8vLi8wOF9GYWNhZGUvU2NyZWVuLnRzIiwid2VicGFjazovLy8uLzA4X0ZhY2FkZS9UaGVhdGVyTGlnaHRzLnRzIiwid2VicGFjazovLy8uLzA4X0ZhY2FkZS9UdW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFD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OEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLzA4X0ZhY2FkZS9NYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEFtcGxpZmllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFtcGxpZmllcihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIEFtcGxpZmllci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIG9uXCIpO1xyXG4gICAgfTtcclxuICAgIEFtcGxpZmllci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvZmZcIik7XHJcbiAgICB9O1xyXG4gICAgQW1wbGlmaWVyLnByb3RvdHlwZS5zZXRTdGVyZW9Tb3VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc3RlcmVvIG1vZGUgb25cIik7XHJcbiAgICB9O1xyXG4gICAgQW1wbGlmaWVyLnByb3RvdHlwZS5zZXRTdXJyb3VuZFNvdW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBzdXJyb3VuZCBzb3VuZCBvbiAoNSBzcGVha2VycywgMSBzdWJ3b29mZXIpXCIpO1xyXG4gICAgfTtcclxuICAgIEFtcGxpZmllci5wcm90b3R5cGUuc2V0Vm9sdW1lID0gZnVuY3Rpb24gKGxldmVsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIHNldHRpbmcgdm9sdW1lIHRvIFwiICsgbGV2ZWwpO1xyXG4gICAgfTtcclxuICAgIEFtcGxpZmllci5wcm90b3R5cGUuc2V0VHVuZXIgPSBmdW5jdGlvbiAodHVuZXIpIHtcclxuICAgICAgICB0aGlzLnR1bmVyID0gdHVuZXI7XHJcbiAgICB9O1xyXG4gICAgQW1wbGlmaWVyLnByb3RvdHlwZS5zZXREdmQgPSBmdW5jdGlvbiAoZHZkKSB7XHJcbiAgICAgICAgdGhpcy5kdmQgPSBkdmQ7XHJcbiAgICB9O1xyXG4gICAgQW1wbGlmaWVyLnByb3RvdHlwZS5zZXRDZCA9IGZ1bmN0aW9uIChjZCkge1xyXG4gICAgICAgIHRoaXMuY2QgPSBjZDtcclxuICAgIH07XHJcbiAgICBBbXBsaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBbXBsaWZpZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEFtcGxpZmllcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENEUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ0RQbGF5ZXIoZGVzY3JpcHRpb24sIGFtcGxpZmllcikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmFtcGxpZmllciA9IGFtcGxpZmllcjtcclxuICAgIH1cclxuICAgIENEUGxheWVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb25cIik7XHJcbiAgICB9O1xyXG4gICAgQ0RQbGF5ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb2ZmXCIpO1xyXG4gICAgfTtcclxuICAgIENEUGxheWVyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgZWplY3RcIik7XHJcbiAgICB9O1xyXG4gICAgQ0RQbGF5ZXIucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHJhY2sgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBwbGF5aW5nIFxcXCJcIiArIHRpdGxlICsgXCJcXFwiXCIpO1xyXG4gICAgfTtcclxuICAgIENEUGxheWVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRyYWNrID0gMDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc3RvcHBlZFwiKTtcclxuICAgIH07XHJcbiAgICBDRFBsYXllci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIHBhdXNlZCBcXFwiXCIgKyB0aGlzLnRpdGxlICsgXCJcXFwiXCIpO1xyXG4gICAgfTtcclxuICAgIENEUGxheWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ0RQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENEUGxheWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRFZEUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRFZEUGxheWVyKGRlc2NyaXB0aW9uLCBhbXBsaWZpZXIpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5hbXBsaWZpZXIgPSBhbXBsaWZpZXI7XHJcbiAgICB9XHJcbiAgICBEVkRQbGF5ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvblwiKTtcclxuICAgIH07XHJcbiAgICBEVkRQbGF5ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb2ZmXCIpO1xyXG4gICAgfTtcclxuICAgIERWRFBsYXllci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZpZSA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIGVqZWN0XCIpO1xyXG4gICAgfTtcclxuICAgIC8vIHBsYXkodHJhY2s6IG51bWJlcikge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm1vdmllID09IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIGNhbid0IHBsYXkgdHJhY2sgXCIgKyB0cmFjayArIFwiIG5vIGR2ZCBpbnNlcnRlZFwiKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRUcmFjayA9IHRyYWNrO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgcGxheWluZyB0cmFjayBcIiArIHRoaXMuY3VycmVudFRyYWNrICsgXCIgb2YgXFxcIlwiICsgdGhpcy5tb3ZpZSArIFwiXFxcIlwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBEVkRQbGF5ZXIucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICB0aGlzLm1vdmllID0gbW92aWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHJhY2sgPSAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBwbGF5aW5nIFxcXCJcIiArIG1vdmllICsgXCJcXFwiXCIpO1xyXG4gICAgfTtcclxuICAgIERWRFBsYXllci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUcmFjayA9IDA7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIHN0b3BwZWQgXFxcIlwiICsgdGhpcy5tb3ZpZSArIFwiXFxcIlwiKTtcclxuICAgIH07XHJcbiAgICBEVkRQbGF5ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBwYXVzZWQgXFxcIlwiICsgdGhpcy5tb3ZpZSArIFwiXFxcIlwiKTtcclxuICAgIH07XHJcbiAgICBEVkRQbGF5ZXIucHJvdG90eXBlLnNldFR3b0NoYW5uZWxBdWRpbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc2V0IHR3byBjaGFubmVsIGF1ZGlvXCIpO1xyXG4gICAgfTtcclxuICAgIERWRFBsYXllci5wcm90b3R5cGUuc2V0U3Vycm91bmRBdWRpbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc2V0IHN1cnJvdW5kIGF1ZGlvXCIpO1xyXG4gICAgfTtcclxuICAgIERWRFBsYXllci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERWRFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gRFZEUGxheWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgSG9tZVRoZWF0ZXJGYWNhZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIb21lVGhlYXRlckZhY2FkZShhbXAsIHR1bmVyLCBkdmQsIGNkLCBwcm9qZWN0b3IsIHNjcmVlbiwgbGlnaHRzLCBwb3BwZXIpIHtcclxuICAgICAgICB0aGlzLmFtcCA9IGFtcDtcclxuICAgICAgICB0aGlzLnR1bmVyID0gdHVuZXI7XHJcbiAgICAgICAgdGhpcy5kdmQgPSBkdmQ7XHJcbiAgICAgICAgdGhpcy5jZCA9IGNkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdG9yID0gcHJvamVjdG9yO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMubGlnaHRzID0gbGlnaHRzO1xyXG4gICAgICAgIHRoaXMucG9wcGVyID0gcG9wcGVyO1xyXG4gICAgfVxyXG4gICAgSG9tZVRoZWF0ZXJGYWNhZGUucHJvdG90eXBlLndhdGNoTW92aWUgPSBmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdldCByZWFkeSB0byB3YXRjaCBhIG1vdmllLi4uXCIpO1xyXG4gICAgICAgIHRoaXMucG9wcGVyLm9uKCk7XHJcbiAgICAgICAgdGhpcy5wb3BwZXIucG9wKCk7XHJcbiAgICAgICAgdGhpcy5saWdodHMuZGltKDEwKTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5kb3duKCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0b3Iub24oKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rvci53aWRlU2NyZWVuTW9kZSgpO1xyXG4gICAgICAgIHRoaXMuYW1wLm9uKCk7XHJcbiAgICAgICAgdGhpcy5hbXAuc2V0RHZkKHRoaXMuZHZkKTtcclxuICAgICAgICB0aGlzLmFtcC5zZXRTdXJyb3VuZFNvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5hbXAuc2V0Vm9sdW1lKDUpO1xyXG4gICAgICAgIHRoaXMuZHZkLm9uKCk7XHJcbiAgICAgICAgdGhpcy5kdmQucGxheShtb3ZpZSk7XHJcbiAgICB9O1xyXG4gICAgSG9tZVRoZWF0ZXJGYWNhZGUucHJvdG90eXBlLmVuZE1vdmllID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2h1dHRpbmcgbW92aWUgdGhlYXRlciBkb3duLi4uXCIpO1xyXG4gICAgICAgIHRoaXMucG9wcGVyLm9mZigpO1xyXG4gICAgICAgIHRoaXMubGlnaHRzLm9uKCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4udXAoKTtcclxuICAgICAgICB0aGlzLnByb2plY3Rvci5vZmYoKTtcclxuICAgICAgICB0aGlzLmFtcC5vZmYoKTtcclxuICAgICAgICB0aGlzLmR2ZC5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5kdmQuZWplY3QoKTtcclxuICAgICAgICB0aGlzLmR2ZC5vZmYoKTtcclxuICAgIH07XHJcbiAgICBIb21lVGhlYXRlckZhY2FkZS5wcm90b3R5cGUubGlzdGVuVG9DZCA9IGZ1bmN0aW9uIChjZFRpdGxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXQgcmVhZHkgZm9yIGFuIGF1ZGlvcGlsZSBleHBlcmVuY2UuLi5cIik7XHJcbiAgICAgICAgdGhpcy5saWdodHMub24oKTtcclxuICAgICAgICB0aGlzLmFtcC5vbigpO1xyXG4gICAgICAgIHRoaXMuYW1wLnNldFZvbHVtZSg1KTtcclxuICAgICAgICB0aGlzLmFtcC5zZXRDZCh0aGlzLmNkKTtcclxuICAgICAgICB0aGlzLmFtcC5zZXRTdGVyZW9Tb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY2Qub24oKTtcclxuICAgICAgICB0aGlzLmNkLnBsYXkoY2RUaXRsZSk7XHJcbiAgICB9O1xyXG4gICAgSG9tZVRoZWF0ZXJGYWNhZGUucHJvdG90eXBlLmVuZENkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2h1dHRpbmcgZG93biBDRC4uLlwiKTtcclxuICAgICAgICB0aGlzLmFtcC5vZmYoKTtcclxuICAgICAgICB0aGlzLmFtcC5zZXRDZCh0aGlzLmNkKTtcclxuICAgICAgICB0aGlzLmNkLmVqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jZC5vZmYoKTtcclxuICAgIH07XHJcbiAgICBIb21lVGhlYXRlckZhY2FkZS5wcm90b3R5cGUubGlzdGVuVG9SYWRpbyA9IGZ1bmN0aW9uIChmcmVxdWVuY3kpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlR1bmluZyBpbiB0aGUgYWlyd2F2ZXMuLi5cIik7XHJcbiAgICAgICAgdGhpcy50dW5lci5vbigpO1xyXG4gICAgICAgIHRoaXMudHVuZXIuc2V0RnJlcXVlbmN5KGZyZXF1ZW5jeSk7XHJcbiAgICAgICAgdGhpcy5hbXAub24oKTtcclxuICAgICAgICB0aGlzLmFtcC5zZXRWb2x1bWUoNSk7XHJcbiAgICAgICAgdGhpcy5hbXAuc2V0VHVuZXIodGhpcy50dW5lcik7XHJcbiAgICB9O1xyXG4gICAgSG9tZVRoZWF0ZXJGYWNhZGUucHJvdG90eXBlLmVuZFJhZGlvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2h1dHRpbmcgZG93biB0aGUgdHVuZXIuLi5cIik7XHJcbiAgICAgICAgdGhpcy50dW5lci5vZmYoKTtcclxuICAgICAgICB0aGlzLmFtcC5vZmYoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSG9tZVRoZWF0ZXJGYWNhZGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhvbWVUaGVhdGVyRmFjYWRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQW1wbGlmaWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQW1wbGlmaWVyXCIpKTtcclxudmFyIFR1bmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHVuZXJcIikpO1xyXG52YXIgRFZEUGxheWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRFZEUGxheWVyXCIpKTtcclxudmFyIENEUGxheWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ0RQbGF5ZXJcIikpO1xyXG52YXIgUHJvamVjdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUHJvamVjdG9yXCIpKTtcclxudmFyIFRoZWF0ZXJMaWdodHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UaGVhdGVyTGlnaHRzXCIpKTtcclxudmFyIFBvcGNvcm5Qb3BwZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Qb3Bjb3JuUG9wcGVyXCIpKTtcclxudmFyIFNjcmVlbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NjcmVlblwiKSk7XHJcbnZhciBIb21lVGhlYXRlckZhY2FkZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hvbWVUaGVhdGVyRmFjYWRlXCIpKTtcclxudmFyIGFtcCA9IG5ldyBBbXBsaWZpZXJfMS5kZWZhdWx0KFwiVG9wLU8tTGluZSBBbXBsaWZpZXJcIiksIHR1bmVyID0gbmV3IFR1bmVyXzEuZGVmYXVsdChcIlRvcC1PLUxpbmUgQU0vRk0gVHVuZXJcIiksIGR2ZCA9IG5ldyBEVkRQbGF5ZXJfMS5kZWZhdWx0KFwiVG9wLU8tTGluZSBEVkQgUGxheWVyXCIsIGFtcCksIGNkID0gbmV3IENEUGxheWVyXzEuZGVmYXVsdChcIlRvcC1PLUxpbmUgQ0QgUGxheWVyXCIsIGFtcCksIHByb2plY3RvciA9IG5ldyBQcm9qZWN0b3JfMS5kZWZhdWx0KFwiVG9wLU8tTGluZSBQcm9qZWN0b3JcIiwgZHZkKSwgbGlnaHRzID0gbmV3IFRoZWF0ZXJMaWdodHNfMS5kZWZhdWx0KFwiVGhlYXRlciBDZWlsaW5nIExpZ2h0c1wiKSwgc2NyZWVuID0gbmV3IFNjcmVlbl8xLmRlZmF1bHQoXCJUaGVhdGVyIFNjcmVlblwiKSwgcG9wcGVyID0gbmV3IFBvcGNvcm5Qb3BwZXJfMS5kZWZhdWx0KFwiUG9wY29ybiBQb3BwZXJcIik7XHJcbnZhciBob21lVGhlYXRlciA9IG5ldyBIb21lVGhlYXRlckZhY2FkZV8xLmRlZmF1bHQoYW1wLCB0dW5lciwgZHZkLCBjZCwgcHJvamVjdG9yLCBzY3JlZW4sIGxpZ2h0cywgcG9wcGVyKTtcclxuaG9tZVRoZWF0ZXIud2F0Y2hNb3ZpZShcIlJhaWRlcnMgb2YgdGhlIExvc3QgQXJrXCIpO1xyXG5ob21lVGhlYXRlci5lbmRNb3ZpZSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUG9wY29yblBvcHBlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvcGNvcm5Qb3BwZXIoZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBQb3Bjb3JuUG9wcGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb25cIik7XHJcbiAgICB9O1xyXG4gICAgUG9wY29yblBvcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvZmZcIik7XHJcbiAgICB9O1xyXG4gICAgUG9wY29yblBvcHBlci5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBwb3BwaW5nIHBvcGNvcm4hXCIpO1xyXG4gICAgfTtcclxuICAgIFBvcGNvcm5Qb3BwZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQb3Bjb3JuUG9wcGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBQb3Bjb3JuUG9wcGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUHJvamVjdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHJvamVjdG9yKGRlc2NyaXB0aW9uLCBkdmRQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdmRQbGF5ZXIgPSBkdmRQbGF5ZXI7XHJcbiAgICB9XHJcbiAgICBQcm9qZWN0b3IucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvblwiKTtcclxuICAgIH07XHJcbiAgICBQcm9qZWN0b3IucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb2ZmXCIpO1xyXG4gICAgfTtcclxuICAgIFByb2plY3Rvci5wcm90b3R5cGUud2lkZVNjcmVlbk1vZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIGluIHdpZGVzY3JlZW4gbW9kZSAoMTZ4OSBhc3BlY3QgcmF0aW8pXCIpO1xyXG4gICAgfTtcclxuICAgIFByb2plY3Rvci5wcm90b3R5cGUudHZNb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBpbiB0diBtb2RlICg0eDMgYXNwZWN0IHJhdGlvKVwiKTtcclxuICAgIH07XHJcbiAgICBQcm9qZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm9qZWN0b3I7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFByb2plY3RvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNjcmVlbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjcmVlbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIFNjcmVlbi5wcm90b3R5cGUudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIGdvaW5nIHVwXCIpO1xyXG4gICAgfTtcclxuICAgIFNjcmVlbi5wcm90b3R5cGUuZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgZ29pbmcgZG93blwiKTtcclxuICAgIH07XHJcbiAgICBTY3JlZW4ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY3JlZW47XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNjcmVlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFRoZWF0ZXJMaWdodHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaGVhdGVyTGlnaHRzKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgVGhlYXRlckxpZ2h0cy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXNjcmlwdGlvbiArIFwiIG9uXCIpO1xyXG4gICAgfTtcclxuICAgIFRoZWF0ZXJMaWdodHMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgb2ZmXCIpO1xyXG4gICAgfTtcclxuICAgIFRoZWF0ZXJMaWdodHMucHJvdG90eXBlLmRpbSA9IGZ1bmN0aW9uIChsZXZlbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBkaW1taW5nIHRvIFwiICsgbGV2ZWwgKyBcIiVcIik7XHJcbiAgICB9O1xyXG4gICAgVGhlYXRlckxpZ2h0cy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRoZWF0ZXJMaWdodHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRoZWF0ZXJMaWdodHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBUdW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFR1bmVyKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgVHVuZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvblwiKTtcclxuICAgIH07XHJcbiAgICBUdW5lci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzY3JpcHRpb24gKyBcIiBvZmZcIik7XHJcbiAgICB9O1xyXG4gICAgVHVuZXIucHJvdG90eXBlLnNldEZyZXF1ZW5jeSA9IGZ1bmN0aW9uIChmcmVxdWVuY3kpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc2V0dGluZyBmcmVxdWVuY3kgdG8gXCIgKyBmcmVxdWVuY3kpO1xyXG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgfTtcclxuICAgIFR1bmVyLnByb3RvdHlwZS5zZXRBbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc2V0dGluZyBBTSBtb2RlXCIpO1xyXG4gICAgfTtcclxuICAgIFR1bmVyLnByb3RvdHlwZS5zZXRGbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlc2NyaXB0aW9uICsgXCIgc2V0dGluZyBGTSBtb2RlXCIpO1xyXG4gICAgfTtcclxuICAgIFR1bmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHVuZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFR1bmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9