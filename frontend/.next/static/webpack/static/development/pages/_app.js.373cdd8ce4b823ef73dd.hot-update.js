webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcTotalPrice; });
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.request) return tally;
    return tally + cartItem.quantity * cartItem.request.price + 250;
  }, 0);
}

/***/ })

})
//# sourceMappingURL=_app.js.373cdd8ce4b823ef73dd.hot-update.js.map