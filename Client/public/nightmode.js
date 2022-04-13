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

/***/ "./nightmode.js":
/*!**********************!*\
  !*** ./nightmode.js ***!
  \**********************/
/***/ (() => {

eval("const themeToggle = document.getElementById(\"nightmode-toggle\");\r\n\r\nif(!localStorage.getItem('nightmode')) {\r\n    localStorage.setItem('nightmode', 'false');\r\n} else {\r\n    if(localStorage.getItem(\"nightmode\") === \"true\") {\r\n        themeToggle.checked = true;\r\n        document.body.classList.toggle('nightmode');\r\n    } else {\r\n        document.body.classList.remove('nightmode');\r\n    }\r\n}\r\n\r\n\r\nthemeToggle.addEventListener('click', () => {\r\n    document.body.classList.toggle('nightmode');\r\n    localStorage.setItem('nightmode', localStorage.getItem(\"nightmode\") === \"true\" ? \"false\" : \"true\");\r\n});\r\n\r\n\n\n//# sourceURL=webpack://Client/./nightmode.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./nightmode.js"]();
/******/ 	
/******/ })()
;