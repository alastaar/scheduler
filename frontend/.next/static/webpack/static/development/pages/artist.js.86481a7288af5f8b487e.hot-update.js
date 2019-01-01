webpackHotUpdate("static/development/pages/artist.js",{

/***/ "./components/SingleUserBlock.js":
/*!***************************************!*\
  !*** ./components/SingleUserBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/SingleUserBlock.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_USER_QUERY($id: ID!){\n    user(where: { id: $id }) {\n      id\n      name\n      lastName\n      email\n      price\n      image\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SingleUserBlock__SingleItemStyles",
  componentId: "sc-1rg48nm-0"
})(["max-width:1200px;margin:2rem auto;display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:400px;img{width:300px;height:300px;background-size:cover;display:block;border-radius:150px;-webkit-border-radius:100px;-moz-border-radius:100px;}.details{margin:3rem;font-size:2rem;}"]);
var Something = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SingleUserBlock__Something",
  componentId: "sc-1rg48nm-1"
})(["a{background-color:", ";padding:10px 15px;color:white;font-size:15px;font-weight:800;}"], function (props) {
  return props.theme.black;
});
var SINGLE_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var SingleUserBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(SingleUserBlock, _Component);

  function SingleUserBlock() {
    _classCallCheck(this, SingleUserBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(SingleUserBlock).apply(this, arguments));
  }

  _createClass(SingleUserBlock, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: SINGLE_USER_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, function (_ref) {
        var error = _ref.error,
            loading = _ref.loading,
            data = _ref.data;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          errror: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, "loading..");
        if (!data.user) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "No User found ");
        var user = data.user;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleItemStyles, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, " Palazar | ", user.name, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: user.image,
          alt: user.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Viewing ", user.name, " ", user.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, user.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__["default"])(user.price), " per request"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Something, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: {
            pathname: '/request',
            query: {
              id: user.id,
              name: user.name,
              lastName: user.lastName,
              email: user.email,
              price: user.price
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "Request Artist"))));
      });
    }
  }]);

  return SingleUserBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleUserBlock);

/***/ })

})
//# sourceMappingURL=artist.js.86481a7288af5f8b487e.hot-update.js.map