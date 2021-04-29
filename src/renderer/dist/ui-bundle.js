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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renderer/index.js":
/*!*******************************!*\
  !*** ./src/renderer/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Items, Alert } = __webpack_require__(/*! ./utils */ \"./src/renderer/utils.js\");\n\nItems.getItems().then((items) => Items.renderList(items));\n\nconst getFromTornado = document.getElementById(\"get\");\ngetFromTornado.addEventListener(\"click\", (e) => {\n    Items.getItems().then((items) => {\n        Items.renderList(items);\n        const alert = new Alert(\"Данные из items получены\", \"primary\");\n        alert.showAlert();\n    });\n});\n\nconst clearAll = document.getElementById(\"clear\");\nclearAll.addEventListener(\"click\", (e) => {\n    Items.deleteItem(0)\n        .then(Items.getItems)\n        .then((items) => {\n            Items.renderList(items);\n            const alert = new Alert(\"Все записи удалены\", \"danger\");\n            alert.showAlert();\n        });\n});\n\nconst postItem = document.getElementById(\"post\");\nconst form = document.getElementById(\"form\");\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    Items.getItems().then((data) => {\n        if (postItem.value.trim())\n            Items.setItem({\n                id: data.length + 1,\n                text: postItem.value.trim(),\n            })\n                .then(Items.getItems)\n                .then((items) => Items.renderList(items));\n        postItem.value = \"\";\n        postItem.focus();\n    });\n});\n\nconst getJsonDataFromFile = document.getElementById(\"json\");\ngetJsonDataFromFile.addEventListener(\"click\", (e) => {\n    Items.getJsonData().then((items) => {\n        Items.renderList(items, false);\n        const alert = new Alert(\n            \"Данные из JSON файла были получены\",\n            \"success\"\n        );\n        alert.showAlert();\n    });\n});\n\nconst dataList = document.getElementById(\"data\");\ndataList.addEventListener(\"click\", (e) => {\n    if (e.target.classList.contains(\"delete-item\")) {\n        Items.deleteItem(e.target.dataset.itemId)\n            .then(Items.getItems)\n            .then((items) => Items.renderList(items));\n    }\n});\n\n\n//# sourceURL=webpack:///./src/renderer/index.js?");

/***/ }),

/***/ "./src/renderer/utils.js":
/*!*******************************!*\
  !*** ./src/renderer/utils.js ***!
  \*******************************/
/*! exports provided: Items, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Items\", function() { return Items; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Alert\", function() { return Alert; });\nconst URL = \"http://localhost:3000/\";\r\nclass Items {\r\n    static deleteItem(num = 0) {\r\n        return fetch(URL + \"api/item/\" + num, {\r\n            method: \"DELETE\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        });\r\n    }\r\n\r\n    static getItems() {\r\n        return fetch(URL)\r\n            .catch(function (error) {\r\n                const alert = new Alert(\"Проблема соединения с сервером\");\r\n                alert.showAlert();\r\n            })\r\n            .then((response) => response.json())\r\n            .then(({ items }) => items);\r\n    }\r\n    static getJsonData() {\r\n        return fetch(URL + \"json/\", {\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n        })\r\n            .then((response) => response.json())\r\n            .then(({ items }) => {\r\n                return items;\r\n            });\r\n    }\r\n    static setItem(obj) {\r\n        return fetch(URL + \"api/item/\", {\r\n            method: \"POST\",\r\n            headers: {\r\n                \"Content-Type\": \"application/json\",\r\n            },\r\n            body: JSON.stringify(obj),\r\n        });\r\n    }\r\n\r\n    static renderList(items = {}, deleteI = true) {\r\n        console.log(items);\r\n        let html = \"\";\r\n        if (items.length !== 0) {\r\n            items.map((val, index) => {\r\n                html += `<div class=\"list\"><span>id: ${val.id}, text: ${val.text} </span>`;\r\n                if (deleteI)\r\n                    html += `<button  class=\"btn btn-outline-danger btn-sm delete-item\" data-item-id=\"${val.id}\">&#10006;</button>`;\r\n                html += `</div>`;\r\n            });\r\n        } else html = \"Данных нет\";\r\n        const dataList = document.getElementById(\"data\");\r\n        dataList.innerHTML = html;\r\n    }\r\n}\r\n\r\nclass Alert {\r\n    constructor(message, color = \"warning\") {\r\n        this.message = `\r\n        <div class=\"alert alert-${color} alert-dismissible fade show\" role=\"alert\">\r\n        ${message}\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n        `;\r\n    }\r\n\r\n    showAlert() {\r\n        const form = document.getElementById(\"form\");\r\n        const alert = document.createElement(\"div\");\r\n        alert.innerHTML = this.message;\r\n\r\n        const oldAlert = form.querySelector(\"div.alert\");\r\n        if (oldAlert) oldAlert.outerHTML = \"\";\r\n        form.prepend(alert);\r\n        alert.querySelector(\".close\").addEventListener(\"click\", (e) => {\r\n            e.target.closest(\"div.alert\").outerHTML = \"\";\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/renderer/utils.js?");

/***/ })

/******/ });