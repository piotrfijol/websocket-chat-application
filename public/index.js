/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("setTimeout(\r\n    typingAnimation,\r\n    500, \r\n    document.querySelector(\".description\"),\r\n    \"Dynamic chat rooms for your daily quick chat with friends\",\r\n    0\r\n    );\r\n\r\nfunction typingAnimation(field, text) {\r\n    let i = 0;\r\n    let interval;\r\n\r\n    function type() {\r\n        \r\n        if(field.textContent === text) {\r\n            clearInterval(interval);\r\n            return;\r\n        }\r\n\r\n        field.textContent += text[i++];\r\n    } \r\n    interval = setInterval(type, 70);\r\n\r\n\r\n}\n\n//# sourceURL=webpack://Client/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;