webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Signout */ "./components/Signout.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/Header.js";











next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeComplete = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.onRouteChangeError = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
};

var Person = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Header__Person",
  componentId: "sc-2cpreo-0"
})(["display:inline-block;font-size:15px;margin-left:15px;margin-right:15px;position:relative;z-index:2;margin-top:0;margin-bottom:0;font-weight:900;text-transform:uppercase;text-decoration:none;color:white;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-1"
})(["font-size:4rem;background:", ";margin-left:2rem;position:relative;z-index:2;display:inline-flex;a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media ( max-width:2500px){margin:0;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
var LogoSec = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__LogoSec",
  componentId: "sc-2cpreo-2"
})(["display:inline-block;margin-left:auto;a{font-size:15px;padding:1rem 1rem;margin-left:15px;margin-right:15px;background:transparent;color:white;font-weight:900;}button{padding:0.5rem 1rem;font-weight:900;font-size:15px;line-height:2;border:none;background:transparent;color:white;text-transform:uppercase;text-decoration:none;margin-left:15px;margin-right:15px;}button:hover{text-decoration:underline;text-decoration-color:", ";}"], function (props) {
  return props.theme.red;
});
var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-3"
})([".bar{border-bottom:2px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:2500px){grid-template-columns:1fr;justify-content:center;}}"], function (props) {
  return props.theme.black;
});

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Palazar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LogoSec, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, me && me.artist == 'yes' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Person, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " Hello, ", me.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/me",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    })), me && me.artist == 'no' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/me",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "headerLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })), !me && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "headerLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "SignIn")), "`"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.c734e2dde95ff7418eea.hot-update.js.map