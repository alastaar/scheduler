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
    return tally + cartItem.quantity * cartItem.request.price + 5;
  }, 0);
}

/***/ })

})
//# sourceMappingURL=_app.js.dd01bcbf0f48b3ff201d.hot-update.js.map