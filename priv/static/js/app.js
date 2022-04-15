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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@babel/preset-react' imported from /Users/olgashiryaeva/repos/flying_penguin/assets/babel-virtual-resolve-base.js\\n    at new NodeError (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:2552:5)\\n    at packageResolve (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3208:9)\\n    at moduleResolve (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3242:18)\\n    at defaultResolve (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3281:13)\\n    at /Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3304:14\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:63:103)\\n    at _next (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:194)\\n    at /Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:364\\n    at new Promise (<anonymous>)\\n    at /Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:65:97\\n    at resolve (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/vendor/import-meta-resolve.js:3294:19)\\n    at /Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:38:38\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:20:103)\\n    at _next (/Users/olgashiryaeva/repos/flying_penguin/assets/node_modules/@babel/core/lib/config/files/import-meta-resolve.js:22:194)\");\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js?");

/***/ })

/******/ });