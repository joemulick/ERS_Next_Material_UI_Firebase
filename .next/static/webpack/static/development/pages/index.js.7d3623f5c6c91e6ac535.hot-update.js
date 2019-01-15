webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-921402404" + " " + "centered"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-921402404" + " " + "indexLoginContainer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-921402404"
  }, "Home page with global styles!"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "921402404",
    css: ".buttonFrame.jsx-921402404{width:200px;}.centered.jsx-921402404{position:fixed;top:30%;left:50%;-webkit-transform:translate(-50%,-30%);-ms-transform:translate(-50%,-30%);transform:translate(-50%,-30%);}.indexLoginContainer.jsx-921402404{height:60vh;width:400px;background-color:#eee;margin:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcRVJTX05leHRfTWF0ZXJpYWxVSV9GaXJlYmFzZVxcTWFzdGVyX1JlcG9cXEVSU19OZXh0X01hdGVyaWFsX1VJX0ZpcmViYXNlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2dCLEFBSW1CLEFBSUcsQUFRSCxZQVhkLEFBWWMsR0FSSixRQUNDLENBUVksUUFOVyxjQU9wQixZQUNkLCtFQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcam9lbXVcXERlc2t0b3BcXENvZGluZ1xcRVJTX05leHRfTWF0ZXJpYWxVSV9GaXJlYmFzZVxcTWFzdGVyX1JlcG9cXEVSU19OZXh0X01hdGVyaWFsX1VJX0ZpcmViYXNlXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tICcuLi9sYXlvdXRzL21haW4nXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPFBhZ2U+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleExvZ2luQ29udGFpbmVyXCI+XG4gICAgICAgIDxwPkhvbWUgcGFnZSB3aXRoIGdsb2JhbCBzdHlsZXMhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLmJ1dHRvbkZyYW1le1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cblxuICAgIC5jZW50ZXJlZCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDMwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcbiAgICB9XG5cbiAgICAuaW5kZXhMb2dpbkNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICA8L1BhZ2U+XG4pIl19 */\n/*@ sourceURL=C:\\Users\\joemu\\Desktop\\Coding\\ERS_Next_MaterialUI_Firebase\\Master_Repo\\ERS_Next_Material_UI_Firebase\\pages\\index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7d3623f5c6c91e6ac535.hot-update.js.map