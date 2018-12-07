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
    if (!cartRequest.request) return tally;
    return tally + cartRequest.quantity * cartItem.item.price;
  }, 0);
}

/***/ })

})
//# sourceMappingURL=_app.js.323731cc6e1d3f4c9d93.hot-update.js.map