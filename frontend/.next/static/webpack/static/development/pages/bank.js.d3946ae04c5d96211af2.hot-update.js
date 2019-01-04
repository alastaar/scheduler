webpackHotUpdate("static/development/pages/bank.js",{

/***/ "./components/CreateBankInfo.js":
/*!**************************************!*\
  !*** ./components/CreateBankInfo.js ***!
  \**************************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/CreateBankInfo.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation createBankInfo($bankToken: String!) {\n    createBankInfo(bankToken: $bankToken) {\n      id\n      accId\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var BANK_CREATE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var StripedElement = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "CreateBankInfo__StripedElement",
  componentId: "uyl3m5-0"
})([".StripeElement{background-color:white;height:40px;padding:10px 12px;border-radius:4px;border:1px solid transparent;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;}.StripeElement--focus{box-shadow:0 1px 3px 0 #cfd7df;}.StripeElement--invalid{border-color:#fa755a;}.StripeElement--webkit-autofill{background-color:#fefde5 !important;}"]);

var CreateBankInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateBankInfo, _Component);

  function CreateBankInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateBankInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateBankInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currency: 'usd',
      token: '',
      addressLineOne: '',
      addressLineTwo: '',
      addressCity: '',
      addressState: '',
      addressCountry: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUserChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createBankInfo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, createStripeAccountMutation) {
        var _ref2, token, error, errorElement, res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.stripe.createToken(_this.card, {
                  address_line1: _this.state.addressLineOne,
                  address_line2: _this.state.addressLineTwo,
                  address_city: _this.state.addressCity,
                  address_state: _this.state.addressState,
                  address_country: _this.state.addressCountry,
                  currency: 'usd'
                });

              case 3:
                _ref2 = _context.sent;
                token = _ref2.token;
                error = _ref2.error;
                console.log(token);

                if (error) {
                  // Inform the customer that there was an error.
                  errorElement = document.getElementById('card-errors');
                  errorElement.textContent = error.message;
                }

                _this.state.token = token.id;
                _context.next = 11;
                return createStripeAccountMutation({
                  variables: {
                    bankToken: token.id
                  }
                });

              case 11:
                res = _context.sent;
                console.log("going to the backend");

              case 13:
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

    return _this;
  }

  _createClass(CreateBankInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.stripe = Stripe('pk_test_K3j8JU1o7WrtlpA5zY8bavrR'); // Create an instance of Elements.

      this.elements = this.stripe.elements(); // Custom styling can be passed to options when creating an Element.
      // (Note that this demo uses a wider set of styles than the guide below.)

      this.style = {
        base: {
          color: '#32325d',
          lineHeight: '18px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }; // Create an instance of the card Element.

      this.card = this.elements.create('card', {
        style: this.style
      }); // Add an instance of the card Element into the `card-element` <div>.
      // Custom styling can be passed to options when creating an Element.

      this.card.mount('#card-element');
    } // Create a Stripe client

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, function (_ref3) {
        var me = _ref3.data.me;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: BANK_CREATE_MUTATION,
          variables: {
            bankToken: _this2.state.token
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, function (createBankInfo, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "accountCreate",
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref5 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log(_this2.state);
                        _context2.next = 3;
                        return _this2.createBankInfo(e, createBankInfo);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x3) {
                return _ref5.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StripedElement, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "form-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "card-element",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, "Billing Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
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
              lineNumber: 162
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, "Street Address Line 2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressLineTwo",
            name: "addressLineTwo",
            placeholder: "addressLineTwo",
            defaultValue: me.addressLineTwo,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
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
              lineNumber: 186
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
          }, "Country"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "addressCountry",
            name: "addressCountry",
            placeholder: "addressCountry",
            required: true,
            defaultValue: me.addressCountry,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 220
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "card-element",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 221
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "card-errors",
            role: "alert",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes")));
        }), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), !me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Sorry this is not your account please move along ")));
      }));
    }
  }]);

  return CreateBankInfo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateBankInfo);

/***/ })

})
//# sourceMappingURL=bank.js.d3946ae04c5d96211af2.hot-update.js.map