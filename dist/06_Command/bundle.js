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
/******/ 	return __webpack_require__(__webpack_require__.s = "./06_Command/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./06_Command/Commands/CeilingFanHighCommand.ts":
/*!******************************************************!*\
  !*** ./06_Command/Commands/CeilingFanHighCommand.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CeilingFan_1 = __importDefault(__webpack_require__(/*! ../Devices/CeilingFan */ "./06_Command/Devices/CeilingFan.ts"));
var CeilingFanHighCommand = /** @class */ (function () {
    function CeilingFanHighCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanHighCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        console.log("prevSpeed:" + this.prevSpeed);
        this.ceilingFan.high();
        console.log("nowSpeed:" + this.ceilingFan.getSpeed());
    };
    CeilingFanHighCommand.prototype.undo = function () {
        console.log("====undo====");
        switch (this.prevSpeed) {
            case CeilingFan_1.default.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan_1.default.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan_1.default.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    };
    return CeilingFanHighCommand;
}());
exports.default = CeilingFanHighCommand;


/***/ }),

/***/ "./06_Command/Commands/CeilingFanLowCommand.ts":
/*!*****************************************************!*\
  !*** ./06_Command/Commands/CeilingFanLowCommand.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CeilingFan_1 = __importDefault(__webpack_require__(/*! ../Devices/CeilingFan */ "./06_Command/Devices/CeilingFan.ts"));
var CeilingFanLowCommand = /** @class */ (function () {
    function CeilingFanLowCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanLowCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        console.log("prevSpeed:" + this.prevSpeed);
        this.ceilingFan.low();
        console.log("nowSpeed:" + this.ceilingFan.getSpeed());
    };
    CeilingFanLowCommand.prototype.undo = function () {
        console.log("====undo====");
        switch (this.prevSpeed) {
            case CeilingFan_1.default.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan_1.default.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan_1.default.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    };
    return CeilingFanLowCommand;
}());
exports.default = CeilingFanLowCommand;


/***/ }),

/***/ "./06_Command/Commands/CeilingFanMediumCommand.ts":
/*!********************************************************!*\
  !*** ./06_Command/Commands/CeilingFanMediumCommand.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CeilingFan_1 = __importDefault(__webpack_require__(/*! ../Devices/CeilingFan */ "./06_Command/Devices/CeilingFan.ts"));
var CeilingFanMediumCommand = /** @class */ (function () {
    function CeilingFanMediumCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanMediumCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        console.log("prevSpeed:" + this.prevSpeed);
        this.ceilingFan.medium();
        console.log("nowSpeed:" + this.ceilingFan.getSpeed());
    };
    CeilingFanMediumCommand.prototype.undo = function () {
        console.log("====undo====");
        switch (this.prevSpeed) {
            case CeilingFan_1.default.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan_1.default.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan_1.default.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    };
    return CeilingFanMediumCommand;
}());
exports.default = CeilingFanMediumCommand;


/***/ }),

/***/ "./06_Command/Commands/CeilingFanOffCommand.ts":
/*!*****************************************************!*\
  !*** ./06_Command/Commands/CeilingFanOffCommand.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CeilingFan_1 = __importDefault(__webpack_require__(/*! ../Devices/CeilingFan */ "./06_Command/Devices/CeilingFan.ts"));
var CeilingFanOffCommand = /** @class */ (function () {
    function CeilingFanOffCommand(ceilingFan) {
        this.ceilingFan = ceilingFan;
    }
    CeilingFanOffCommand.prototype.execute = function () {
        this.prevSpeed = this.ceilingFan.getSpeed();
        console.log("prevSpeed:" + this.prevSpeed);
        this.ceilingFan.off();
        console.log("nowSpeed:" + this.ceilingFan.getSpeed());
    };
    CeilingFanOffCommand.prototype.undo = function () {
        console.log("====undo====");
        switch (this.prevSpeed) {
            case CeilingFan_1.default.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan_1.default.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan_1.default.LOW:
                this.ceilingFan.low();
                break;
            default:
                this.ceilingFan.off();
                break;
        }
    };
    return CeilingFanOffCommand;
}());
exports.default = CeilingFanOffCommand;


/***/ }),

/***/ "./06_Command/Commands/LightOnCommand.ts":
/*!***********************************************!*\
  !*** ./06_Command/Commands/LightOnCommand.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        console.log("====undo====");
        this.light.off();
    };
    return LightOnCommand;
}());
exports.default = LightOnCommand;


/***/ }),

/***/ "./06_Command/Commands/MacroCommand.ts":
/*!*********************************************!*\
  !*** ./06_Command/Commands/MacroCommand.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MacroCommand = /** @class */ (function () {
    function MacroCommand(commands) {
        this.commands = commands;
    }
    MacroCommand.prototype.execute = function () {
        for (var index = 0; index < this.commands.length; index++) {
            this.commands[index].execute();
        }
    };
    MacroCommand.prototype.undo = function () {
        for (var i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    };
    return MacroCommand;
}());
exports.default = MacroCommand;


/***/ }),

/***/ "./06_Command/Commands/NoCommand.ts":
/*!******************************************!*\
  !*** ./06_Command/Commands/NoCommand.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoCommand = /** @class */ (function () {
    function NoCommand() {
    }
    NoCommand.prototype.execute = function () { };
    NoCommand.prototype.undo = function () { };
    return NoCommand;
}());
exports.default = NoCommand;


/***/ }),

/***/ "./06_Command/Commands/StereoOffCommand.ts":
/*!*************************************************!*\
  !*** ./06_Command/Commands/StereoOffCommand.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StereoOffCommand = /** @class */ (function () {
    function StereoOffCommand(stereo) {
        this.stereo = stereo;
    }
    StereoOffCommand.prototype.execute = function () {
        this.stereo.off();
    };
    StereoOffCommand.prototype.undo = function () {
        console.log("====undo====");
        this.stereo.on();
    };
    return StereoOffCommand;
}());
exports.default = StereoOffCommand;


/***/ }),

/***/ "./06_Command/Commands/StereoOnWithCDCommand .ts":
/*!*******************************************************!*\
  !*** ./06_Command/Commands/StereoOnWithCDCommand .ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StereoOnWithCDCommand = /** @class */ (function () {
    function StereoOnWithCDCommand(stereo) {
        this.stereo = stereo;
    }
    StereoOnWithCDCommand.prototype.execute = function () {
        this.stereo.setCD();
        this.stereo.setVolume(11);
        this.stereo.on();
    };
    StereoOnWithCDCommand.prototype.undo = function () {
        console.log("====undo====");
        this.stereo.off();
    };
    return StereoOnWithCDCommand;
}());
exports.default = StereoOnWithCDCommand;


/***/ }),

/***/ "./06_Command/Commands/lightOffCommand.ts":
/*!************************************************!*\
  !*** ./06_Command/Commands/lightOffCommand.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    LightOffCommand.prototype.undo = function () {
        console.log("====undo====");
        this.light.on();
    };
    return LightOffCommand;
}());
exports.default = LightOffCommand;


/***/ }),

/***/ "./06_Command/Devices/CeilingFan.ts":
/*!******************************************!*\
  !*** ./06_Command/Devices/CeilingFan.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CeilingFan = /** @class */ (function () {
    function CeilingFan(location) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }
    CeilingFan.prototype.high = function () {
        // turns the ceiling fan on to high
        this.speed = CeilingFan.HIGH;
        console.log(this.location + " ceiling fan is on high");
    };
    CeilingFan.prototype.medium = function () {
        // turns the ceiling fan on to medium
        this.speed = CeilingFan.MEDIUM;
        console.log(this.location + " ceiling fan is on medium");
    };
    CeilingFan.prototype.low = function () {
        // turns the ceiling fan on to low
        this.speed = CeilingFan.LOW;
        console.log(this.location + " ceiling fan is on low");
    };
    CeilingFan.prototype.off = function () {
        // turns the ceiling fan off
        this.speed = CeilingFan.OFF;
        console.log(this.location + " ceiling fan is off");
    };
    CeilingFan.prototype.getSpeed = function () {
        return this.speed;
    };
    CeilingFan.HIGH = 3;
    CeilingFan.MEDIUM = 2;
    CeilingFan.LOW = 1;
    CeilingFan.OFF = 0;
    return CeilingFan;
}());
exports.default = CeilingFan;


/***/ }),

/***/ "./06_Command/Devices/Light.ts":
/*!*************************************!*\
  !*** ./06_Command/Devices/Light.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Light = /** @class */ (function () {
    function Light(light) {
        this.light = "";
        this.light = light;
    }
    Light.prototype.on = function () {
        console.log('light is on');
    };
    Light.prototype.off = function () {
        console.log("light is off");
    };
    return Light;
}());
exports.default = Light;


/***/ }),

/***/ "./06_Command/Devices/Stereo.ts":
/*!**************************************!*\
  !*** ./06_Command/Devices/Stereo.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stereo = /** @class */ (function () {
    function Stereo(location) {
        this.location = location;
    }
    Stereo.prototype.on = function () {
    };
    Stereo.prototype.off = function () {
    };
    Stereo.prototype.setCD = function () {
        console.log(this.location + " stereo is set for CD input");
    };
    Stereo.prototype.setDVD = function () {
        console.log(this.location + " stereo is set for DVD input");
    };
    Stereo.prototype.setRadio = function () {
        console.log(this.location + " stereo is set for Radio");
    };
    Stereo.prototype.setVolume = function (volume) {
        console.log(this.location + " Stereo volume set to " + volume);
    };
    return Stereo;
}());
exports.default = Stereo;


/***/ }),

/***/ "./06_Command/Main.ts":
/*!****************************!*\
  !*** ./06_Command/Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RemoteControl_1 = __importDefault(__webpack_require__(/*! ./RemoteControl */ "./06_Command/RemoteControl.ts"));
var Light_1 = __importDefault(__webpack_require__(/*! ./Devices/Light */ "./06_Command/Devices/Light.ts"));
var Stereo_1 = __importDefault(__webpack_require__(/*! ./Devices/Stereo */ "./06_Command/Devices/Stereo.ts"));
var LightOnCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/LightOnCommand */ "./06_Command/Commands/LightOnCommand.ts"));
var lightOffCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/lightOffCommand */ "./06_Command/Commands/lightOffCommand.ts"));
var StereoOnWithCDCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/StereoOnWithCDCommand  */ "./06_Command/Commands/StereoOnWithCDCommand .ts"));
var StereoOffCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/StereoOffCommand */ "./06_Command/Commands/StereoOffCommand.ts"));
var CeilingFan_1 = __importDefault(__webpack_require__(/*! ./Devices/CeilingFan */ "./06_Command/Devices/CeilingFan.ts"));
var CeilingFanHighCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/CeilingFanHighCommand */ "./06_Command/Commands/CeilingFanHighCommand.ts"));
var CeilingFanMediumCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/CeilingFanMediumCommand */ "./06_Command/Commands/CeilingFanMediumCommand.ts"));
var CeilingFanLowCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/CeilingFanLowCommand */ "./06_Command/Commands/CeilingFanLowCommand.ts"));
var CeilingFanOffCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/CeilingFanOffCommand */ "./06_Command/Commands/CeilingFanOffCommand.ts"));
var MacroCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/MacroCommand */ "./06_Command/Commands/MacroCommand.ts"));
var remoteControl = new RemoteControl_1.default(), light = new Light_1.default("dining room"), stereo = new Stereo_1.default("living room");
var lightOn = new LightOnCommand_1.default(light), lightOff = new lightOffCommand_1.default(light), stereoOn = new StereoOnWithCDCommand_1.default(stereo), stereoOff = new StereoOffCommand_1.default(stereo);
remoteControl.setCommand(1, lightOn, lightOff);
remoteControl.setCommand(4, stereoOn, stereoOff);
remoteControl.onButtonWasPushed(4);
remoteControl.offButtonWasPushed(1);
remoteControl.undoButtonWasPushed();
remoteControl.description();
console.log("====多状态Command演示====");
//多状态Command演示
var ceilingFan = new CeilingFan_1.default("bedroom"), ceilingFanHigh = new CeilingFanHighCommand_1.default(ceilingFan), ceilingFanMedium = new CeilingFanMediumCommand_1.default(ceilingFan), ceilingFanLow = new CeilingFanLowCommand_1.default(ceilingFan), ceilingFanOff = new CeilingFanOffCommand_1.default(ceilingFan);
remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff);
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff);
remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.description();
remoteControl.undoButtonWasPushed();
remoteControl.onButtonWasPushed(1);
remoteControl.description();
remoteControl.undoButtonWasPushed();
console.log("====party模式====");
var partyOn = [lightOn, stereoOn, ceilingFanHigh], partyOff = [lightOff, stereoOff, ceilingFanOff], partyOnMacro = new MacroCommand_1.default(partyOn), partyOffMacro = new MacroCommand_1.default(partyOff);
remoteControl.setCommand(5, partyOnMacro, partyOffMacro);
remoteControl.description();
console.log("--- Pushing Macro On---");
remoteControl.onButtonWasPushed(5);
console.log("--- Pushing Macro Off---");
remoteControl.offButtonWasPushed(5);


/***/ }),

/***/ "./06_Command/RemoteControl.ts":
/*!*************************************!*\
  !*** ./06_Command/RemoteControl.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NoCommand_1 = __importDefault(__webpack_require__(/*! ./Commands/NoCommand */ "./06_Command/Commands/NoCommand.ts"));
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.onCommands = [];
        this.offCommands = [];
        var noCommand = new NoCommand_1.default();
        for (var index = 0; index < 7; index++) {
            this.onCommands[index] = noCommand;
            this.offCommands[index] = noCommand;
        }
        this.undoComand = noCommand;
    }
    RemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    };
    RemoteControl.prototype.onButtonWasPushed = function (slot) {
        this.onCommands[slot].execute();
        this.undoComand = this.onCommands[slot];
    };
    RemoteControl.prototype.offButtonWasPushed = function (slot) {
        this.offCommands[slot].execute();
        this.undoComand = this.offCommands[slot];
    };
    RemoteControl.prototype.undoButtonWasPushed = function () {
        this.undoComand.undo();
    };
    RemoteControl.prototype.description = function () {
        for (var index = 0; index < 7; index++) {
            var onCommandName = this.onCommands[index].__proto__.constructor.name, offCommandName = this.offCommands[index].__proto__.constructor.name;
            console.log("[slot " + index + "]" + onCommandName + " " + offCommandName);
        }
        console.log("undo:" + this.undoComand.__proto__.constructor.name);
    };
    return RemoteControl;
}());
exports.default = RemoteControl;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vMDZfQ29tbWFuZC9Db21tYW5kcy9DZWlsaW5nRmFuSGlnaENvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vMDZfQ29tbWFuZC9Db21tYW5kcy9DZWlsaW5nRmFuTG93Q29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL0NvbW1hbmRzL0NlaWxpbmdGYW5NZWRpdW1Db21tYW5kLnRzIiwid2VicGFjazovLy8uLzA2X0NvbW1hbmQvQ29tbWFuZHMvQ2VpbGluZ0Zhbk9mZkNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vMDZfQ29tbWFuZC9Db21tYW5kcy9MaWdodE9uQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL0NvbW1hbmRzL01hY3JvQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL0NvbW1hbmRzL05vQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL0NvbW1hbmRzL1N0ZXJlb09mZkNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vMDZfQ29tbWFuZC9Db21tYW5kcy9TdGVyZW9PbldpdGhDRENvbW1hbmQgLnRzIiwid2VicGFjazovLy8uLzA2X0NvbW1hbmQvQ29tbWFuZHMvbGlnaHRPZmZDb21tYW5kLnRzIiwid2VicGFjazovLy8uLzA2X0NvbW1hbmQvRGV2aWNlcy9DZWlsaW5nRmFuLnRzIiwid2VicGFjazovLy8uLzA2X0NvbW1hbmQvRGV2aWNlcy9MaWdodC50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL0RldmljZXMvU3RlcmVvLnRzIiwid2VicGFjazovLy8uLzA2X0NvbW1hbmQvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi8wNl9Db21tYW5kL1JlbW90ZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TyxDQUFDLHNEQUFpQjtBQUN2RCwrQkFBK0IsbUJBQU8sQ0FBQyx3REFBa0I7QUFDekQsdUNBQXVDLG1CQUFPLENBQUMsMEVBQTJCO0FBQzFFLHdDQUF3QyxtQkFBTyxDQUFDLDRFQUE0QjtBQUM1RSw4Q0FBOEMsbUJBQU8sQ0FBQywwRkFBbUM7QUFDekYseUNBQXlDLG1CQUFPLENBQUMsOEVBQTZCO0FBQzlFLG1DQUFtQyxtQkFBTyxDQUFDLGdFQUFzQjtBQUNqRSw4Q0FBOEMsbUJBQU8sQ0FBQyx3RkFBa0M7QUFDeEYsZ0RBQWdELG1CQUFPLENBQUMsNEZBQW9DO0FBQzVGLDZDQUE2QyxtQkFBTyxDQUFDLHNGQUFpQztBQUN0Riw2Q0FBNkMsbUJBQU8sQ0FBQyxzRkFBaUM7QUFDdEYscUNBQXFDLG1CQUFPLENBQUMsc0VBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBc0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuLzA2X0NvbW1hbmQvTWFpbi50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDZWlsaW5nRmFuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0RldmljZXMvQ2VpbGluZ0ZhblwiKSk7XHJcbnZhciBDZWlsaW5nRmFuSGlnaENvbW1hbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDZWlsaW5nRmFuSGlnaENvbW1hbmQoY2VpbGluZ0Zhbikge1xyXG4gICAgICAgIHRoaXMuY2VpbGluZ0ZhbiA9IGNlaWxpbmdGYW47XHJcbiAgICB9XHJcbiAgICBDZWlsaW5nRmFuSGlnaENvbW1hbmQucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2U3BlZWQgPSB0aGlzLmNlaWxpbmdGYW4uZ2V0U3BlZWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByZXZTcGVlZDpcIiArIHRoaXMucHJldlNwZWVkKTtcclxuICAgICAgICB0aGlzLmNlaWxpbmdGYW4uaGlnaCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm93U3BlZWQ6XCIgKyB0aGlzLmNlaWxpbmdGYW4uZ2V0U3BlZWQoKSk7XHJcbiAgICB9O1xyXG4gICAgQ2VpbGluZ0ZhbkhpZ2hDb21tYW5kLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PXVuZG89PT09XCIpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcmV2U3BlZWQpIHtcclxuICAgICAgICAgICAgY2FzZSBDZWlsaW5nRmFuXzEuZGVmYXVsdC5ISUdIOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLmhpZ2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENlaWxpbmdGYW5fMS5kZWZhdWx0Lk1FRElVTTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5tZWRpdW0oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENlaWxpbmdGYW5fMS5kZWZhdWx0LkxPVzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5sb3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLm9mZigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDZWlsaW5nRmFuSGlnaENvbW1hbmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENlaWxpbmdGYW5IaWdoQ29tbWFuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENlaWxpbmdGYW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vRGV2aWNlcy9DZWlsaW5nRmFuXCIpKTtcclxudmFyIENlaWxpbmdGYW5Mb3dDb21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VpbGluZ0Zhbkxvd0NvbW1hbmQoY2VpbGluZ0Zhbikge1xyXG4gICAgICAgIHRoaXMuY2VpbGluZ0ZhbiA9IGNlaWxpbmdGYW47XHJcbiAgICB9XHJcbiAgICBDZWlsaW5nRmFuTG93Q29tbWFuZC5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnByZXZTcGVlZCA9IHRoaXMuY2VpbGluZ0Zhbi5nZXRTcGVlZCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJldlNwZWVkOlwiICsgdGhpcy5wcmV2U3BlZWQpO1xyXG4gICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5sb3coKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vd1NwZWVkOlwiICsgdGhpcy5jZWlsaW5nRmFuLmdldFNwZWVkKCkpO1xyXG4gICAgfTtcclxuICAgIENlaWxpbmdGYW5Mb3dDb21tYW5kLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PXVuZG89PT09XCIpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcmV2U3BlZWQpIHtcclxuICAgICAgICAgICAgY2FzZSBDZWlsaW5nRmFuXzEuZGVmYXVsdC5ISUdIOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLmhpZ2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENlaWxpbmdGYW5fMS5kZWZhdWx0Lk1FRElVTTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5tZWRpdW0oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENlaWxpbmdGYW5fMS5kZWZhdWx0LkxPVzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5sb3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLm9mZigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDZWlsaW5nRmFuTG93Q29tbWFuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2VpbGluZ0Zhbkxvd0NvbW1hbmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDZWlsaW5nRmFuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0RldmljZXMvQ2VpbGluZ0ZhblwiKSk7XHJcbnZhciBDZWlsaW5nRmFuTWVkaXVtQ29tbWFuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENlaWxpbmdGYW5NZWRpdW1Db21tYW5kKGNlaWxpbmdGYW4pIHtcclxuICAgICAgICB0aGlzLmNlaWxpbmdGYW4gPSBjZWlsaW5nRmFuO1xyXG4gICAgfVxyXG4gICAgQ2VpbGluZ0Zhbk1lZGl1bUNvbW1hbmQucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2U3BlZWQgPSB0aGlzLmNlaWxpbmdGYW4uZ2V0U3BlZWQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByZXZTcGVlZDpcIiArIHRoaXMucHJldlNwZWVkKTtcclxuICAgICAgICB0aGlzLmNlaWxpbmdGYW4ubWVkaXVtKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3dTcGVlZDpcIiArIHRoaXMuY2VpbGluZ0Zhbi5nZXRTcGVlZCgpKTtcclxuICAgIH07XHJcbiAgICBDZWlsaW5nRmFuTWVkaXVtQ29tbWFuZC5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT11bmRvPT09PVwiKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJldlNwZWVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2VpbGluZ0Zhbl8xLmRlZmF1bHQuSElHSDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5oaWdoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDZWlsaW5nRmFuXzEuZGVmYXVsdC5NRURJVU06XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlaWxpbmdGYW4ubWVkaXVtKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDZWlsaW5nRmFuXzEuZGVmYXVsdC5MT1c6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlaWxpbmdGYW4ubG93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VpbGluZ0Zhbi5vZmYoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2VpbGluZ0Zhbk1lZGl1bUNvbW1hbmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENlaWxpbmdGYW5NZWRpdW1Db21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2VpbGluZ0Zhbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9EZXZpY2VzL0NlaWxpbmdGYW5cIikpO1xyXG52YXIgQ2VpbGluZ0Zhbk9mZkNvbW1hbmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDZWlsaW5nRmFuT2ZmQ29tbWFuZChjZWlsaW5nRmFuKSB7XHJcbiAgICAgICAgdGhpcy5jZWlsaW5nRmFuID0gY2VpbGluZ0ZhbjtcclxuICAgIH1cclxuICAgIENlaWxpbmdGYW5PZmZDb21tYW5kLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucHJldlNwZWVkID0gdGhpcy5jZWlsaW5nRmFuLmdldFNwZWVkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2U3BlZWQ6XCIgKyB0aGlzLnByZXZTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5jZWlsaW5nRmFuLm9mZigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm93U3BlZWQ6XCIgKyB0aGlzLmNlaWxpbmdGYW4uZ2V0U3BlZWQoKSk7XHJcbiAgICB9O1xyXG4gICAgQ2VpbGluZ0Zhbk9mZkNvbW1hbmQucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09dW5kbz09PT1cIik7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByZXZTcGVlZCkge1xyXG4gICAgICAgICAgICBjYXNlIENlaWxpbmdGYW5fMS5kZWZhdWx0LkhJR0g6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlaWxpbmdGYW4uaGlnaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2VpbGluZ0Zhbl8xLmRlZmF1bHQuTUVESVVNOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLm1lZGl1bSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2VpbGluZ0Zhbl8xLmRlZmF1bHQuTE9XOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWlsaW5nRmFuLmxvdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlaWxpbmdGYW4ub2ZmKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENlaWxpbmdGYW5PZmZDb21tYW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDZWlsaW5nRmFuT2ZmQ29tbWFuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIExpZ2h0T25Db21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGlnaHRPbkNvbW1hbmQobGlnaHQpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0ID0gbGlnaHQ7XHJcbiAgICB9XHJcbiAgICBMaWdodE9uQ29tbWFuZC5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0Lm9uKCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRPbkNvbW1hbmQucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09dW5kbz09PT1cIik7XHJcbiAgICAgICAgdGhpcy5saWdodC5vZmYoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGlnaHRPbkNvbW1hbmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IExpZ2h0T25Db21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWFjcm9Db21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWFjcm9Db21tYW5kKGNvbW1hbmRzKSB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kcyA9IGNvbW1hbmRzO1xyXG4gICAgfVxyXG4gICAgTWFjcm9Db21tYW5kLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbW1hbmRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzW2luZGV4XS5leGVjdXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE1hY3JvQ29tbWFuZC5wcm90b3R5cGUudW5kbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jb21tYW5kcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzW2ldLnVuZG8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hY3JvQ29tbWFuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWFjcm9Db21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTm9Db21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTm9Db21tYW5kKCkge1xyXG4gICAgfVxyXG4gICAgTm9Db21tYW5kLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgTm9Db21tYW5kLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gICAgcmV0dXJuIE5vQ29tbWFuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTm9Db21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU3RlcmVvT2ZmQ29tbWFuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0ZXJlb09mZkNvbW1hbmQoc3RlcmVvKSB7XHJcbiAgICAgICAgdGhpcy5zdGVyZW8gPSBzdGVyZW87XHJcbiAgICB9XHJcbiAgICBTdGVyZW9PZmZDb21tYW5kLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcmVvLm9mZigpO1xyXG4gICAgfTtcclxuICAgIFN0ZXJlb09mZkNvbW1hbmQucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09dW5kbz09PT1cIik7XHJcbiAgICAgICAgdGhpcy5zdGVyZW8ub24oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU3RlcmVvT2ZmQ29tbWFuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RlcmVvT2ZmQ29tbWFuZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFN0ZXJlb09uV2l0aENEQ29tbWFuZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0ZXJlb09uV2l0aENEQ29tbWFuZChzdGVyZW8pIHtcclxuICAgICAgICB0aGlzLnN0ZXJlbyA9IHN0ZXJlbztcclxuICAgIH1cclxuICAgIFN0ZXJlb09uV2l0aENEQ29tbWFuZC5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0ZXJlby5zZXRDRCgpO1xyXG4gICAgICAgIHRoaXMuc3RlcmVvLnNldFZvbHVtZSgxMSk7XHJcbiAgICAgICAgdGhpcy5zdGVyZW8ub24oKTtcclxuICAgIH07XHJcbiAgICBTdGVyZW9PbldpdGhDRENvbW1hbmQucHJvdG90eXBlLnVuZG8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09dW5kbz09PT1cIik7XHJcbiAgICAgICAgdGhpcy5zdGVyZW8ub2ZmKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFN0ZXJlb09uV2l0aENEQ29tbWFuZDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RlcmVvT25XaXRoQ0RDb21tYW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTGlnaHRPZmZDb21tYW5kID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGlnaHRPZmZDb21tYW5kKGxpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5saWdodCA9IGxpZ2h0O1xyXG4gICAgfVxyXG4gICAgTGlnaHRPZmZDb21tYW5kLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGlnaHQub2ZmKCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRPZmZDb21tYW5kLnByb3RvdHlwZS51bmRvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PXVuZG89PT09XCIpO1xyXG4gICAgICAgIHRoaXMubGlnaHQub24oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGlnaHRPZmZDb21tYW5kO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaWdodE9mZkNvbW1hbmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDZWlsaW5nRmFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VpbGluZ0Zhbihsb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ2VpbGluZ0Zhbi5PRkY7XHJcbiAgICB9XHJcbiAgICBDZWlsaW5nRmFuLnByb3RvdHlwZS5oaWdoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHR1cm5zIHRoZSBjZWlsaW5nIGZhbiBvbiB0byBoaWdoXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENlaWxpbmdGYW4uSElHSDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uICsgXCIgY2VpbGluZyBmYW4gaXMgb24gaGlnaFwiKTtcclxuICAgIH07XHJcbiAgICBDZWlsaW5nRmFuLnByb3RvdHlwZS5tZWRpdW0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdHVybnMgdGhlIGNlaWxpbmcgZmFuIG9uIHRvIG1lZGl1bVxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBDZWlsaW5nRmFuLk1FRElVTTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uICsgXCIgY2VpbGluZyBmYW4gaXMgb24gbWVkaXVtXCIpO1xyXG4gICAgfTtcclxuICAgIENlaWxpbmdGYW4ucHJvdG90eXBlLmxvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyB0dXJucyB0aGUgY2VpbGluZyBmYW4gb24gdG8gbG93XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENlaWxpbmdGYW4uTE9XO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb24gKyBcIiBjZWlsaW5nIGZhbiBpcyBvbiBsb3dcIik7XHJcbiAgICB9O1xyXG4gICAgQ2VpbGluZ0Zhbi5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHR1cm5zIHRoZSBjZWlsaW5nIGZhbiBvZmZcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ2VpbGluZ0Zhbi5PRkY7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbiArIFwiIGNlaWxpbmcgZmFuIGlzIG9mZlwiKTtcclxuICAgIH07XHJcbiAgICBDZWlsaW5nRmFuLnByb3RvdHlwZS5nZXRTcGVlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBDZWlsaW5nRmFuLkhJR0ggPSAzO1xyXG4gICAgQ2VpbGluZ0Zhbi5NRURJVU0gPSAyO1xyXG4gICAgQ2VpbGluZ0Zhbi5MT1cgPSAxO1xyXG4gICAgQ2VpbGluZ0Zhbi5PRkYgPSAwO1xyXG4gICAgcmV0dXJuIENlaWxpbmdGYW47XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENlaWxpbmdGYW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBMaWdodCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpZ2h0KGxpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5saWdodCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5saWdodCA9IGxpZ2h0O1xyXG4gICAgfVxyXG4gICAgTGlnaHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsaWdodCBpcyBvbicpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0LnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaWdodCBpcyBvZmZcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpZ2h0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaWdodDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFN0ZXJlbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFN0ZXJlbyhsb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFN0ZXJlby5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU3RlcmVvLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB9O1xyXG4gICAgU3RlcmVvLnByb3RvdHlwZS5zZXRDRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uICsgXCIgc3RlcmVvIGlzIHNldCBmb3IgQ0QgaW5wdXRcIik7XHJcbiAgICB9O1xyXG4gICAgU3RlcmVvLnByb3RvdHlwZS5zZXREVkQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbiArIFwiIHN0ZXJlbyBpcyBzZXQgZm9yIERWRCBpbnB1dFwiKTtcclxuICAgIH07XHJcbiAgICBTdGVyZW8ucHJvdG90eXBlLnNldFJhZGlvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb24gKyBcIiBzdGVyZW8gaXMgc2V0IGZvciBSYWRpb1wiKTtcclxuICAgIH07XHJcbiAgICBTdGVyZW8ucHJvdG90eXBlLnNldFZvbHVtZSA9IGZ1bmN0aW9uICh2b2x1bWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvY2F0aW9uICsgXCIgU3RlcmVvIHZvbHVtZSBzZXQgdG8gXCIgKyB2b2x1bWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTdGVyZW87XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN0ZXJlbztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFJlbW90ZUNvbnRyb2xfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9SZW1vdGVDb250cm9sXCIpKTtcclxudmFyIExpZ2h0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGV2aWNlcy9MaWdodFwiKSk7XHJcbnZhciBTdGVyZW9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VzL1N0ZXJlb1wiKSk7XHJcbnZhciBMaWdodE9uQ29tbWFuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbW1hbmRzL0xpZ2h0T25Db21tYW5kXCIpKTtcclxudmFyIGxpZ2h0T2ZmQ29tbWFuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbW1hbmRzL2xpZ2h0T2ZmQ29tbWFuZFwiKSk7XHJcbnZhciBTdGVyZW9PbldpdGhDRENvbW1hbmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21tYW5kcy9TdGVyZW9PbldpdGhDRENvbW1hbmQgXCIpKTtcclxudmFyIFN0ZXJlb09mZkNvbW1hbmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21tYW5kcy9TdGVyZW9PZmZDb21tYW5kXCIpKTtcclxudmFyIENlaWxpbmdGYW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VzL0NlaWxpbmdGYW5cIikpO1xyXG52YXIgQ2VpbGluZ0ZhbkhpZ2hDb21tYW5kXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tbWFuZHMvQ2VpbGluZ0ZhbkhpZ2hDb21tYW5kXCIpKTtcclxudmFyIENlaWxpbmdGYW5NZWRpdW1Db21tYW5kXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ29tbWFuZHMvQ2VpbGluZ0Zhbk1lZGl1bUNvbW1hbmRcIikpO1xyXG52YXIgQ2VpbGluZ0Zhbkxvd0NvbW1hbmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21tYW5kcy9DZWlsaW5nRmFuTG93Q29tbWFuZFwiKSk7XHJcbnZhciBDZWlsaW5nRmFuT2ZmQ29tbWFuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbW1hbmRzL0NlaWxpbmdGYW5PZmZDb21tYW5kXCIpKTtcclxudmFyIE1hY3JvQ29tbWFuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NvbW1hbmRzL01hY3JvQ29tbWFuZFwiKSk7XHJcbnZhciByZW1vdGVDb250cm9sID0gbmV3IFJlbW90ZUNvbnRyb2xfMS5kZWZhdWx0KCksIGxpZ2h0ID0gbmV3IExpZ2h0XzEuZGVmYXVsdChcImRpbmluZyByb29tXCIpLCBzdGVyZW8gPSBuZXcgU3RlcmVvXzEuZGVmYXVsdChcImxpdmluZyByb29tXCIpO1xyXG52YXIgbGlnaHRPbiA9IG5ldyBMaWdodE9uQ29tbWFuZF8xLmRlZmF1bHQobGlnaHQpLCBsaWdodE9mZiA9IG5ldyBsaWdodE9mZkNvbW1hbmRfMS5kZWZhdWx0KGxpZ2h0KSwgc3RlcmVvT24gPSBuZXcgU3RlcmVvT25XaXRoQ0RDb21tYW5kXzEuZGVmYXVsdChzdGVyZW8pLCBzdGVyZW9PZmYgPSBuZXcgU3RlcmVvT2ZmQ29tbWFuZF8xLmRlZmF1bHQoc3RlcmVvKTtcclxucmVtb3RlQ29udHJvbC5zZXRDb21tYW5kKDEsIGxpZ2h0T24sIGxpZ2h0T2ZmKTtcclxucmVtb3RlQ29udHJvbC5zZXRDb21tYW5kKDQsIHN0ZXJlb09uLCBzdGVyZW9PZmYpO1xyXG5yZW1vdGVDb250cm9sLm9uQnV0dG9uV2FzUHVzaGVkKDQpO1xyXG5yZW1vdGVDb250cm9sLm9mZkJ1dHRvbldhc1B1c2hlZCgxKTtcclxucmVtb3RlQ29udHJvbC51bmRvQnV0dG9uV2FzUHVzaGVkKCk7XHJcbnJlbW90ZUNvbnRyb2wuZGVzY3JpcHRpb24oKTtcclxuY29uc29sZS5sb2coXCI9PT095aSa54q25oCBQ29tbWFuZOa8lOekuj09PT1cIik7XHJcbi8v5aSa54q25oCBQ29tbWFuZOa8lOekulxyXG52YXIgY2VpbGluZ0ZhbiA9IG5ldyBDZWlsaW5nRmFuXzEuZGVmYXVsdChcImJlZHJvb21cIiksIGNlaWxpbmdGYW5IaWdoID0gbmV3IENlaWxpbmdGYW5IaWdoQ29tbWFuZF8xLmRlZmF1bHQoY2VpbGluZ0ZhbiksIGNlaWxpbmdGYW5NZWRpdW0gPSBuZXcgQ2VpbGluZ0Zhbk1lZGl1bUNvbW1hbmRfMS5kZWZhdWx0KGNlaWxpbmdGYW4pLCBjZWlsaW5nRmFuTG93ID0gbmV3IENlaWxpbmdGYW5Mb3dDb21tYW5kXzEuZGVmYXVsdChjZWlsaW5nRmFuKSwgY2VpbGluZ0Zhbk9mZiA9IG5ldyBDZWlsaW5nRmFuT2ZmQ29tbWFuZF8xLmRlZmF1bHQoY2VpbGluZ0Zhbik7XHJcbnJlbW90ZUNvbnRyb2wuc2V0Q29tbWFuZCgwLCBjZWlsaW5nRmFuTWVkaXVtLCBjZWlsaW5nRmFuT2ZmKTtcclxucmVtb3RlQ29udHJvbC5zZXRDb21tYW5kKDEsIGNlaWxpbmdGYW5IaWdoLCBjZWlsaW5nRmFuT2ZmKTtcclxucmVtb3RlQ29udHJvbC5vbkJ1dHRvbldhc1B1c2hlZCgwKTtcclxucmVtb3RlQ29udHJvbC5vZmZCdXR0b25XYXNQdXNoZWQoMCk7XHJcbnJlbW90ZUNvbnRyb2wuZGVzY3JpcHRpb24oKTtcclxucmVtb3RlQ29udHJvbC51bmRvQnV0dG9uV2FzUHVzaGVkKCk7XHJcbnJlbW90ZUNvbnRyb2wub25CdXR0b25XYXNQdXNoZWQoMSk7XHJcbnJlbW90ZUNvbnRyb2wuZGVzY3JpcHRpb24oKTtcclxucmVtb3RlQ29udHJvbC51bmRvQnV0dG9uV2FzUHVzaGVkKCk7XHJcbmNvbnNvbGUubG9nKFwiPT09PXBhcnR55qih5byPPT09PVwiKTtcclxudmFyIHBhcnR5T24gPSBbbGlnaHRPbiwgc3RlcmVvT24sIGNlaWxpbmdGYW5IaWdoXSwgcGFydHlPZmYgPSBbbGlnaHRPZmYsIHN0ZXJlb09mZiwgY2VpbGluZ0Zhbk9mZl0sIHBhcnR5T25NYWNybyA9IG5ldyBNYWNyb0NvbW1hbmRfMS5kZWZhdWx0KHBhcnR5T24pLCBwYXJ0eU9mZk1hY3JvID0gbmV3IE1hY3JvQ29tbWFuZF8xLmRlZmF1bHQocGFydHlPZmYpO1xyXG5yZW1vdGVDb250cm9sLnNldENvbW1hbmQoNSwgcGFydHlPbk1hY3JvLCBwYXJ0eU9mZk1hY3JvKTtcclxucmVtb3RlQ29udHJvbC5kZXNjcmlwdGlvbigpO1xyXG5jb25zb2xlLmxvZyhcIi0tLSBQdXNoaW5nIE1hY3JvIE9uLS0tXCIpO1xyXG5yZW1vdGVDb250cm9sLm9uQnV0dG9uV2FzUHVzaGVkKDUpO1xyXG5jb25zb2xlLmxvZyhcIi0tLSBQdXNoaW5nIE1hY3JvIE9mZi0tLVwiKTtcclxucmVtb3RlQ29udHJvbC5vZmZCdXR0b25XYXNQdXNoZWQoNSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBOb0NvbW1hbmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db21tYW5kcy9Ob0NvbW1hbmRcIikpO1xyXG52YXIgUmVtb3RlQ29udHJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbW90ZUNvbnRyb2woKSB7XHJcbiAgICAgICAgdGhpcy5vbkNvbW1hbmRzID0gW107XHJcbiAgICAgICAgdGhpcy5vZmZDb21tYW5kcyA9IFtdO1xyXG4gICAgICAgIHZhciBub0NvbW1hbmQgPSBuZXcgTm9Db21tYW5kXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCA3OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21tYW5kc1tpbmRleF0gPSBub0NvbW1hbmQ7XHJcbiAgICAgICAgICAgIHRoaXMub2ZmQ29tbWFuZHNbaW5kZXhdID0gbm9Db21tYW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuZG9Db21hbmQgPSBub0NvbW1hbmQ7XHJcbiAgICB9XHJcbiAgICBSZW1vdGVDb250cm9sLnByb3RvdHlwZS5zZXRDb21tYW5kID0gZnVuY3Rpb24gKHNsb3QsIG9uQ29tbWFuZCwgb2ZmQ29tbWFuZCkge1xyXG4gICAgICAgIHRoaXMub25Db21tYW5kc1tzbG90XSA9IG9uQ29tbWFuZDtcclxuICAgICAgICB0aGlzLm9mZkNvbW1hbmRzW3Nsb3RdID0gb2ZmQ29tbWFuZDtcclxuICAgIH07XHJcbiAgICBSZW1vdGVDb250cm9sLnByb3RvdHlwZS5vbkJ1dHRvbldhc1B1c2hlZCA9IGZ1bmN0aW9uIChzbG90KSB7XHJcbiAgICAgICAgdGhpcy5vbkNvbW1hbmRzW3Nsb3RdLmV4ZWN1dGUoKTtcclxuICAgICAgICB0aGlzLnVuZG9Db21hbmQgPSB0aGlzLm9uQ29tbWFuZHNbc2xvdF07XHJcbiAgICB9O1xyXG4gICAgUmVtb3RlQ29udHJvbC5wcm90b3R5cGUub2ZmQnV0dG9uV2FzUHVzaGVkID0gZnVuY3Rpb24gKHNsb3QpIHtcclxuICAgICAgICB0aGlzLm9mZkNvbW1hbmRzW3Nsb3RdLmV4ZWN1dGUoKTtcclxuICAgICAgICB0aGlzLnVuZG9Db21hbmQgPSB0aGlzLm9mZkNvbW1hbmRzW3Nsb3RdO1xyXG4gICAgfTtcclxuICAgIFJlbW90ZUNvbnRyb2wucHJvdG90eXBlLnVuZG9CdXR0b25XYXNQdXNoZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51bmRvQ29tYW5kLnVuZG8oKTtcclxuICAgIH07XHJcbiAgICBSZW1vdGVDb250cm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgNzsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YXIgb25Db21tYW5kTmFtZSA9IHRoaXMub25Db21tYW5kc1tpbmRleF0uX19wcm90b19fLmNvbnN0cnVjdG9yLm5hbWUsIG9mZkNvbW1hbmROYW1lID0gdGhpcy5vZmZDb21tYW5kc1tpbmRleF0uX19wcm90b19fLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3Nsb3QgXCIgKyBpbmRleCArIFwiXVwiICsgb25Db21tYW5kTmFtZSArIFwiIFwiICsgb2ZmQ29tbWFuZE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInVuZG86XCIgKyB0aGlzLnVuZG9Db21hbmQuX19wcm90b19fLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW1vdGVDb250cm9sO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZW1vdGVDb250cm9sO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9