/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/website.js */ \"./src/modules/website.js\");\n\n\n(0,_modules_website_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeComponent = () => {\n  const homeContainer = document.createElement('div');\n  homeContainer.id = 'home-container';\n\n  const welcomeMsg = document.createElement('h2');\n  welcomeMsg.textContent = 'Welcome to the Resto';\n\n  const paragraph = document.createElement('p');\n  paragraph.textContent = 'This is the best restaurant in the world!';\n\n  homeContainer.append(welcomeMsg, paragraph);\n  return homeContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenuItem = (itemName) => {\n  const menuItemDiv = document.createElement('div');\n  const name = document.createElement('h3');\n  name.textContent = itemName;\n\n  const description = document.createElement('p');\n  description.textContent =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';\n  const price = document.createElement('p');\n  price.textContent = '$5.00';\n  const image = document.createElement('div');\n  image.style.height = '180px';\n  image.style.width = '180px';\n  image.style.backgroundColor = 'gray';\n  image.classList.add('mock-image');\n\n  menuItemDiv.append(name, price, image, description);\n  return menuItemDiv;\n};\n\nconst menuComponent = () => {\n  const menuContainer = document.createElement('div');\n  const menuItems = [1, 2, 3, 4, 5, 6, 7, 8];\n\n  menuItems.forEach((item) => {\n    menuContainer.appendChild(createMenuItem(`Menu Item ${item}`));\n  });\n  return menuContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/modules/menu.js\");\n\n\n\nconst headerComponent = () => {\n  const header = document.createElement('header');\n  const restaurantName = document.createElement('h1');\n  restaurantName.textContent = 'Resto';\n\n  header.appendChild(restaurantName);\n  header.appendChild(navbarComponent());\n\n  return header;\n};\n\nconst navbarComponent = () => {\n  const navBar = document.createElement('nav');\n\n  const homeButton = document.createElement('button');\n  homeButton.textContent = 'Home';\n  homeButton.addEventListener('click', () => {\n    mainComponent((0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  });\n\n  const menuButton = document.createElement('button');\n  menuButton.textContent = 'Menu';\n  menuButton.addEventListener('click', () => {\n    mainComponent((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  });\n\n  const contactButton = document.createElement('button');\n  contactButton.textContent = 'Contact Us';\n\n  navBar.append(homeButton, menuButton, contactButton);\n\n  return navBar;\n};\n\nconst mainComponent = (component) => {\n  const main = document.querySelector('main');\n  main.innerHTML = '';\n  main.appendChild(component);\n};\n\nconst footerComponent = () => {};\n\nconst init = () => {\n  const content = document.querySelector('#content');\n  const main = document.createElement('main');\n  const footer = document.createElement('footer');\n\n  content.append(headerComponent(), main, footer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;