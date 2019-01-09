webpackHotUpdate("static/development/pages/request-item.js",{

/***/ "./components/ApproveRequest.js":
/*!**************************************!*\
  !*** ./components/ApproveRequest.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _RequestList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestList */ "./components/RequestList.js");

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/ApproveRequest.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation APPROVE_REQUEST_MUTATION(\n    $id: ID!\n    $dateOne: String!\n    $timeOne: String!\n    $approved: String\n  ) {\n    approveRequests(\n      id: $id\n      dateOne: $dateOne\n      timeOne: $timeOne\n      approved: $approved\n    ) {\n      id\n      approved\n      dateOne\n      timeOne\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var APPROVE_REQUEST_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var StayInline = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ApproveRequest__StayInline",
  componentId: "txg0mg-0"
})(["button{display:block;margin:0 auto;border:1px solid black;font-weight:900;}"]);

var ApproveRequest =
/*#__PURE__*/
function (_Component) {
  _inherits(ApproveRequest, _Component);

  function ApproveRequest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ApproveRequest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApproveRequest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      approved: 'yes'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (e) {
      _this.setState({
        approved: 'yes'
      });

      console.log(_this.props);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value,
          id = _e$target.id;

      if (id == 'one') {
        _this.setState({
          dateOne: _this.props.dateOne,
          timeOne: _this.props.timeOne
        });
      } else if (id === 'two') {
        _this.setState({
          dateOne: _this.props.dateTwo,
          timeOne: _this.props.timeTwo
        });
      } else {
        _this.setState({
          dateOne: _this.props.dateThree,
          timeOne: _this.props.timeThree
        });
      }

      console.log(_this.state);
    });

    return _this;
  }

  _createClass(ApproveRequest, [{
    key: "render",
    // convertTime = (time24) => {
    //   var tmpArr = time24.split(':'), time12;
    //   if(+tmpArr[0] == 12) {
    //     time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
    //   }
    //   else {
    //     if(+tmpArr[0] == 0) {
    //       time12 = '12:' + tmpArr[1] + ' am';
    //     }
    //     else {
    //       if(+tmpArr[0] > 12) {
    //         time12 = (+tmpArr[0]-12) + ':' + tmpArr[1] + ' pm';
    //       }
    //       else {
    //         time12 = (+tmpArr[0]) + ':' + tmpArr[1] + ' am';
    //       }
    //     }
    //   }
    //   return time12;
    // }
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: APPROVE_REQUEST_MUTATION,
        variables: {
          id: this.props.id,
          dateOne: this.state.dateOne,
          timeOne: this.state.timeOne,
          approved: this.state.approved
        },
        update: this.update,
        refetchQueries: [{
          query: _RequestList__WEBPACK_IMPORTED_MODULE_5__["ALL_REQUESTS_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, function (approveRequest, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StayInline, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "buttonOne",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "datetime",
          value: "dateOne",
          id: "one",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), _this2.props.dateOne, " ", _this2.props.timeOne), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "datetime",
          value: "dateTwo",
          id: "two",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), " ", _this2.props.dateTwo, " ", _this2.props.timeTwo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "radio",
          name: "datetime",
          value: "dateThree",
          id: "three",
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }), " ", _this2.props.dateThree, " ", _this2.props.timeThree)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault;
                      _context.next = 3;
                      return approveRequest();

                    case 3:
                      res = _context.sent;
                      console.log(res);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, _this2.props.children));
      });
    }
  }]);

  return ApproveRequest;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ApproveRequest);

/***/ })

})
//# sourceMappingURL=request-item.js.a0a4b7dd02d934d5853d.hot-update.js.map