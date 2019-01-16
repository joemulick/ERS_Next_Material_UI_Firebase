module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/DefaultLayout.js":
/*!**********************************!*\
  !*** ./layouts/DefaultLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Footer Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Footer About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./layouts/main.js":
/*!*************************!*\
  !*** ./layouts/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultLayout */ "./layouts/DefaultLayout.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2452986209"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2452986209"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-2452986209"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    className: "jsx-2452986209"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    className: "jsx-2452986209"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2452986209",
    css: "{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcRVJTX05leHRfTWF0ZXJpYWxVSV9GaXJlYmFzZVxcTWFzdGVyX1JlcG9cXEVSU19OZXh0X01hdGVyaWFsX1VJX0ZpcmViYXNlXFxsYXlvdXRzXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN1QixBQWEwQixBQVlSLEFBUUssQUFTQSxBQWFTLEFBV1UsQUFZSixBQVNWLEFBV0EsQUFXYyxBQVNuQixBQVVBLEFBT0MsQUFJSixBQVdPLEFBZ0JFLEFBYUgsQUFVRyxBQVdNLEFBV1IsQUFZWSxBQVFBLEFBV1IsQUFhRSxBQVFWLEFBVVEsQUFVVixBQVNpQixBQVNMLEFBU0UsQUFZWixBQVFJLEFBV0wsQUFRQSxTQW5VZixFQWtIQSxDQWdKQSxDQTBEQSxBQVFBLENBNVRBLEFBU2tCLEFBNEVsQixBQVVnQixBQXVJaEIsQUEyREEsQ0EzTEEsRUExSGdDLEFBc0toQyxDQTdCQSxBQTZEWSxBQXVIWixDQW5QNEIsQUFXNUIsQ0FvRWlCLEFBdUJqQixFQXFEZ0IsQUErQkosQ0ExTkQsQ0F3TVgsQUE4Q0EsRUFyR0EsQUE4R2UsRUFyTEssQUFtRnBCLENBdElBLEFBc05zQixDQXpQdEIsQUFvTEEsQUFRQSxFQS9LbUIsQUFVSCxBQTJDQSxBQXFLaEIsR0EzR21CLENBNEVILEdBb0VoQixPQXBQQSxBQTJDQSxBQW9CMEIsQ0FwSDFCLEVBMkNBLEFBNE9BLENBakRpQixFQTVFTixTQUNYLElBNEVZLEtBbEhaLEtBbUhxQixDQXdHdkIsR0F0UXFDLGVBK0puQywyREE5SkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxqb2VtdVxcRGVza3RvcFxcQ29kaW5nXFxFUlNfTmV4dF9NYXRlcmlhbFVJX0ZpcmViYXNlXFxNYXN0ZXJfUmVwb1xcRVJTX05leHRfTWF0ZXJpYWxfVUlfRmlyZWJhc2VcXGxheW91dHNcXG1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4vRGVmYXVsdExheW91dCdcblxuZXhwb3J0IGRlZmF1bHQgKHtjaGlsZHJlbn0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4gICAgICAvKiBEb2N1bWVudFxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gICAgICAgKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBodG1sIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIFNlY3Rpb25zXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBtYWluIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gaDEgZWxlbWVudHMgd2l0aGluIHNlY3Rpb24gYW5kXG4gICAgICAgKiBhcnRpY2xlIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW46IDAuNjdlbSAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBHcm91cGluZyBjb250ZW50XG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gICAgICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBociB7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gICAgICAgIGhlaWdodDogMDsgLyogMSAqL1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIHByZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICAgICAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgYSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gICAgICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGFiYnJbdGl0bGVdIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGIsXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGNvZGUsXG4gICAgICBrYmQsXG4gICAgICBzYW1wIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDgwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICAgICAgICogYWxsIGJyb3dzZXJzLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIHN1YixcbiAgICAgIHN1cCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHN1YiB7XG4gICAgICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3VwIHtcbiAgICAgICAgdG9wOiAtMC41ZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBpbWcge1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qIEZvcm1zXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICAgICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGJ1dHRvbixcbiAgICAgIGlucHV0LFxuICAgICAgb3B0Z3JvdXAsXG4gICAgICBzZWxlY3QsXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAgICAgICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAgICAgICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgYnV0dG9uLFxuICAgICAgaW5wdXQgeyAvKiAxICovXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICAgICAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGJ1dHRvbixcbiAgICAgIHNlbGVjdCB7IC8qIDEgKi9cbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBidXR0b24sXG4gICAgICBbdHlwZT1cImJ1dHRvblwiXSxcbiAgICAgIFt0eXBlPVwicmVzZXRcIl0sXG4gICAgICBbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuICAgICAgW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG4gICAgICBbdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuICAgICAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcbiAgICAgIFt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuICAgICAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcbiAgICAgIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgICAgICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBmaWVsZHNldCB7XG4gICAgICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBmaWVsZHNldCBlbGVtZW50cyBpbiBJRS5cbiAgICAgICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAgICAgICAqICAgIGZpZWxkc2V0IGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBsZWdlbmQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gICAgICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gICAgICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICAgICAgICBwYWRkaW5nOiAwOyAvKiAzICovXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIHByb2dyZXNzIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gICAgICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgW3R5cGU9XCJjaGVja2JveFwiXSxcbiAgICAgIFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gICAgICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICAgICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAgICAgICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICAgICAgICovXG4gICAgICBcbiAgICAgIFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICAgICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogSW50ZXJhY3RpdmVcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgICBcbiAgICAgIC8qXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICAgICAgICovXG4gICAgICBcbiAgICAgIGRldGFpbHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLypcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICBzdW1tYXJ5IHtcbiAgICAgICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBNaXNjXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICAgXG4gICAgICAvKipcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAgICAgICAqL1xuICAgICAgXG4gICAgICB0ZW1wbGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8qKlxuICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gICAgICAgKi9cbiAgICAgIFxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=C:\\Users\\joemu\\Desktop\\Coding\\ERS_Next_MaterialUI_Firebase\\Master_Repo\\ERS_Next_Material_UI_Firebase\\layouts\\main.js */"
  }), children);
});

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "About page with global sytle!"));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map