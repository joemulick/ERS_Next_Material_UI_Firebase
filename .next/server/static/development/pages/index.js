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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./layouts/ButtonAppBar.js":
/*!*********************************!*\
  !*** ./layouts/ButtonAppBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);










var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.grow
  }, "News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "inherit"
  }, "Login"))));
}

ButtonAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(ButtonAppBar));

/***/ }),

/***/ "./layouts/Footer.js":
/*!***************************!*\
  !*** ./layouts/Footer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Footer Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
/* harmony import */ var _ButtonAppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonAppBar */ "./layouts/ButtonAppBar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./layouts/Footer.js");





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
    css: "{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */}html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcQXN0cm9sb2d5X1dlYnNpdGVcXFZlcnNpb25fMV9OZXh0SlNcXEFzdHJvbG9neV9NYWluXFxhc3Ryb192MVxcbGF5b3V0c1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFhMEIsQUFZUixBQVFLLEFBU0EsQUFhUyxBQVdVLEFBWUosQUFTVixBQVdBLEFBV2MsQUFTbkIsQUFVQSxBQU9DLEFBSUosQUFXTyxBQWdCRSxBQWFILEFBVUcsQUFXTSxBQVdSLEFBWVksQUFRQSxBQVdSLEFBYUUsQUFRVixBQVVRLEFBVVYsQUFTaUIsQUFTTCxBQVNFLEFBWVosQUFRSSxBQVdMLEFBUUEsU0FuVWYsRUFrSEEsQ0FnSkEsQ0EwREEsQUFRQSxDQTVUQSxBQVNrQixBQTRFbEIsQUFVZ0IsQUF1SWhCLEFBMkRBLENBM0xBLEVBMUhnQyxBQXNLaEMsQ0E3QkEsQUE2RFksQUF1SFosQ0FuUDRCLEFBVzVCLENBb0VpQixBQXVCakIsRUFxRGdCLEFBK0JKLENBMU5ELENBd01YLEFBOENBLEVBckdBLEFBOEdlLEVBckxLLEFBbUZwQixDQXRJQSxBQXNOc0IsQ0F6UHRCLEFBb0xBLEFBUUEsRUEvS21CLEFBVUgsQUEyQ0EsQUFxS2hCLEdBM0dtQixDQTRFSCxHQW9FaEIsT0FwUEEsQUEyQ0EsQUFvQjBCLENBcEgxQixFQTJDQSxBQTRPQSxDQWpEaUIsRUE1RU4sU0FDWCxJQTRFWSxLQWxIWixLQW1IcUIsQ0F3R3ZCLEdBdFFxQyxlQStKbkMsMkRBOUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcQXN0cm9sb2d5X1dlYnNpdGVcXFZlcnNpb25fMV9OZXh0SlNcXEFzdHJvbG9neV9NYWluXFxhc3Ryb192MVxcbGF5b3V0c1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBCdXR0b25BcHBCYXIgZnJvbSAnLi9CdXR0b25BcHBCYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe2NoaWxkcmVufSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuICAgICAgLyogRG9jdW1lbnRcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGh0bWwge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIFNlY3Rpb25zXHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBtYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGgxIGVsZW1lbnRzIHdpdGhpbiBzZWN0aW9uIGFuZFxyXG4gICAgICAgKiBhcnRpY2xlIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwLjY3ZW0gMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXHJcbiAgICAgICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgICAgIGhlaWdodDogMDsgLyogMSAqL1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIHByZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gICAgICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGFiYnJbdGl0bGVdIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYixcclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGVtIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBjb2RlLFxyXG4gICAgICBrYmQsXHJcbiAgICAgIHNhbXAge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gICAgICAgKiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgc3ViLFxyXG4gICAgICBzdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHN1YiB7XHJcbiAgICAgICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBzdXAge1xyXG4gICAgICAgIHRvcDogLTAuNWVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogRm9ybXNcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIGJ1dHRvbixcclxuICAgICAgaW5wdXQsXHJcbiAgICAgIG9wdGdyb3VwLFxyXG4gICAgICBzZWxlY3QsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cclxuICAgICAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBidXR0b24sXHJcbiAgICAgIGlucHV0IHsgLyogMSAqL1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXHJcbiAgICAgICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBidXR0b24sXHJcbiAgICAgIHNlbGVjdCB7IC8qIDEgKi9cclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uLFxyXG4gICAgICBbdHlwZT1cImJ1dHRvblwiXSxcclxuICAgICAgW3R5cGU9XCJyZXNldFwiXSxcclxuICAgICAgW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgICAgIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gICAgICBbdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gICAgICBbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxyXG4gICAgICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcclxuICAgICAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcclxuICAgICAgW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xyXG4gICAgICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cclxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBmaWVsZHNldCBlbGVtZW50cyBpbiBJRS5cclxuICAgICAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxyXG4gICAgICAgKiAgICBmaWVsZHNldCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgbGVnZW5kIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIHByb2dyZXNzIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cclxuICAgICAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxyXG4gICAgICAgKi9cclxuICAgICAgXHJcbiAgICAgIFt0eXBlPVwiY2hlY2tib3hcIl0sXHJcbiAgICAgIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgICAgICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgICAgIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICAgICAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgW3R5cGU9XCJzZWFyY2hcIl0ge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXHJcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuICAgICAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBpbmhlcml0IGluIFNhZmFyaS5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyogSW50ZXJhY3RpdmVcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qXHJcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qXHJcbiAgICAgICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBzdW1tYXJ5IHtcclxuICAgICAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qIE1pc2NcclxuICAgICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXHJcbiAgICAgICAqL1xyXG4gICAgICBcclxuICAgICAgdGVtcGxhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICAgICAgICovXHJcbiAgICAgIFxyXG4gICAgICBbaGlkZGVuXSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgIDxCdXR0b25BcHBCYXIgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Rm9vdGVyIC8+ICAgXHJcbiAgICBcclxuICA8L2Rpdj5cclxuKSJdfQ== */\n/*@ sourceURL=C:\\Users\\joemu\\Desktop\\Coding\\Astrology_Website\\Version_1_NextJS\\Astrology_Main\\astro_v1\\layouts\\main.js */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonAppBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Home page with global styles!"));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=index.js.map