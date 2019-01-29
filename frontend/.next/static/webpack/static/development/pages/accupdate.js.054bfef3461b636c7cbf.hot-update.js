webpackHotUpdate("static/development/pages/accupdate.js",{

/***/ "./components/StripeAccountUpdate.js":
/*!*******************************************!*\
  !*** ./components/StripeAccountUpdate.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/StripeAccountUpdate.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  var data = _taggedTemplateLiteral(["\n  mutation updateStripeAccount($name: String, $lastName: String, $country: String, $type: String, $addressCity: String, $addressLineOne: String, $addressPostalCode: String, $addressState: String, $dobDay: String, $dobMonth: String, $dobYear: String, $ssnLastFour: String, $userId: ID!, $stripeToken: String!) {\n    updateStripeAccount(name: $name, lastName: $lastName, country : $country, type : $type, addressCity : $addressCity,  addressLineOne : $addressLineOne, addressPostalCode : $addressPostalCode, addressState : $addressState, dobDay : $dobDay, dobMonth : $dobMonth, dobYear : $dobYear, ssnLastFour : $ssnLastFour, userId : $userId, stripeToken: $stripeToken) {\n      id\n      name\n      lastName\n      country\n      type\n      addressCity\n      addressLineOne\n      addressPostalCode\n      addressState\n      dobDay\n      dobMonth\n      dobYear\n      accId\n      ssnLastFour\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var ACCOUNT_UPDATE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

var StripeAccountUpdate =
/*#__PURE__*/
function (_Component) {
  _inherits(StripeAccountUpdate, _Component);

  function StripeAccountUpdate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StripeAccountUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StripeAccountUpdate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUserChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));

      _this.setState({
        name: nameVal.value,
        lastName: lastName.value,
        type: 'individual'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStripeAccount",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateStripeAccountMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateStripeAccountMutation({
                  variables: _objectSpread({}, _this.state)
                });

              case 3:
                res = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleForm",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var token, stripe, myForm, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                token =  true ? _config__WEBPACK_IMPORTED_MODULE_12__["devStripe"] : undefined;
                stripe = Stripe(token);
                myForm = document.querySelector('.my-form');
                _context2.next = 6;
                return stripe.createToken('account', {
                  legal_entity: {
                    first_name: document.querySelector('#nameVal').value,
                    last_name: document.querySelector('#lastName').value,
                    ssn_last_4: document.querySelector('#ssnLastFour').value,
                    type: 'individual',
                    dob: {
                      day: document.querySelector('#dobDay').value,
                      month: document.querySelector('#dobMonth').value,
                      year: document.querySelector('#dobYear').value
                    },
                    address: {
                      line1: document.querySelector('#addressLineOne').value,
                      city: document.querySelector('#addressCity').value,
                      state: document.querySelector('#addressState').value,
                      postal_code: document.querySelector('#addressPostalCode').value
                    }
                  },
                  tos_shown_and_accepted: true
                }).catch(function (err) {
                  alert(err.message);
                });

              case 6:
                res = _context2.sent;

                if (res.token) {
                  _this.setState({
                    stripeToken: res.token.id
                  });
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(StripeAccountUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, function (_ref3) {
        var me = _ref3.data.me;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Account Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: ACCOUNT_UPDATE_MUTATION,
          variables: _objectSpread({}, _this2.state, {
            userId: _this2.props.id
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, function (updateStripeAccount, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "accountUpdate",
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this2.handleForm(e);

                      case 2:
                        _context3.next = 4;
                        return _this2.updateStripeAccount(e, updateStripeAccount);

                      case 4:
                        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
                          pathname: '/me'
                        });

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));

              return function (_x4) {
                return _ref5.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "hidden",
            name: "token",
            id: "token",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "nameVal",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "nameVal",
            name: "nameVal",
            placeholder: "nameVal",
            required: true,
            defaultValue: me.name,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "lastName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, "Last Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "lastName",
            name: "lastName",
            placeholder: "lastName",
            required: true,
            defaultValue: me.lastName,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, "Date of Birth Day \xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "dobDay",
            name: "dobDay",
            placeholder: "",
            required: true,
            defaultValue: me.dobDay,
            onChange: _this2.handleUserChange,
            style: {
              width: "80px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, "Date of Birth Month \xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "dobMonth",
            name: "dobMonth",
            placeholder: "",
            required: true,
            defaultValue: me.dobMonth,
            onChange: _this2.handleUserChange,
            style: {
              width: "80px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "Date of Birth Year \xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "dobYear",
            name: "dobYear",
            placeholder: "",
            required: true,
            defaultValue: me.dobYear,
            onChange: _this2.handleUserChange,
            style: {
              width: "160px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, "Social Security (last 4 digits)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "ssnLastFour",
            name: "ssnLastFour",
            placeholder: "ssnLastFour",
            required: true,
            defaultValue: me.ssnLastFour,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, "Street Address Line 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressLineOne",
            name: "addressLineOne",
            placeholder: "addressLineOne",
            required: true,
            defaultValue: me.addressLineOne,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressCity",
            name: "addressCity",
            placeholder: "addressCity",
            required: true,
            defaultValue: me.addressCity,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }, "State"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressState",
            name: "addressState",
            placeholder: "addressState",
            required: true,
            defaultValue: me.addressState,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 222
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 232
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, "Postal Code (Zip)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressPostalCode",
            name: "addressPostalCode",
            placeholder: "addressPostalCode",
            required: true,
            defaultValue: me.addressPostalCode,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }, "By clicking Save, you agree to ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: "our-terms",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }, "our terms"), " and the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: "https://stripe.com/us/connect-account/legal",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 244
            },
            __self: this
          }, "Stripe Connected Account Agreement"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes")));
        }), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), !me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          },
          __self: this
        }, "Sorry this is not your account please move along ")));
      }));
    }
  }]);

  return StripeAccountUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StripeAccountUpdate);

/***/ })

})
//# sourceMappingURL=accupdate.js.054bfef3461b636c7cbf.hot-update.js.map