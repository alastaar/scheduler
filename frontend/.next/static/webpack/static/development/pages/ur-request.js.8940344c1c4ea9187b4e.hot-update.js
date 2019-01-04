webpackHotUpdate("static/development/pages/ur-request.js",{

/***/ "./components/RequesterList.js":
/*!*************************************!*\
  !*** ./components/RequesterList.js ***!
  \*************************************/
/*! exports provided: default, ALL_REQUESTS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REQUESTS_QUERY", function() { return ALL_REQUESTS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _RequestPending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestPending */ "./components/RequestPending.js");
/* harmony import */ var _RequestNeedApproved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestNeedApproved */ "./components/RequestNeedApproved.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _OrderListUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OrderListUser */ "./components/OrderListUser.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/RequesterList.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_REQUESTS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    requests(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      name\n      lastName\n      price\n      email\n      details\n      dateOne\n      timeOne\n      dateTwo\n      timeTwo\n      dateThree\n      timeThree\n      referenceImage\n      approved\n      user{\n        name\n        lastName\n        email\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var ALL_REQUESTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]);
var RequestsList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "RequesterList__RequestsList",
  componentId: "c50muz-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width = ", " margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "RequesterList__Center",
  componentId: "c50muz-1"
})(["text-align:center;"]);

var RequestList =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestList, _Component);

  function RequestList() {
    _classCallCheck(this, RequestList);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequestList).apply(this, arguments));
  }

  _createClass(RequestList, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Pending Requests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: ALL_REQUESTS_QUERY,
          variables: {
            skip: _this.props.page * _config__WEBPACK_IMPORTED_MODULE_7__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, " ... loading ");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, " ERROR: ", error.message);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequestsList, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, data.requests.filter(function (request) {
            return request.user.email === me.email && request.approved == 'no';
          }).map(function (request) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequesterPending, {
              request: request,
              key: request.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            });
          }));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, "Approved Requests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
          query: ALL_REQUESTS_QUERY,
          variables: {
            skip: _this.props.page * _config__WEBPACK_IMPORTED_MODULE_7__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, function (_ref3) {
          var data = _ref3.data,
              error = _ref3.error,
              loading = _ref3.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }, " ... loading ");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, " ERROR: ", error.message);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequestsList, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, data.requests.filter(function (request) {
            return request.user.email === me.email && request.approved == 'yes';
          }).map(function (request) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RequestNeedApproved__WEBPACK_IMPORTED_MODULE_5__["default"], {
              request: request,
              key: request.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            });
          }));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Confirmed Requests"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OrderListUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        })));
      });
    }
  }]);

  return RequestList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestList);


/***/ })

})
//# sourceMappingURL=ur-request.js.8940344c1c4ea9187b4e.hot-update.js.map