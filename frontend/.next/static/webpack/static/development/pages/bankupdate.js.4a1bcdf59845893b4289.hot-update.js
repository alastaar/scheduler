webpackHotUpdate("static/development/pages/bankupdate.js",{

/***/ "./components/UpdateBankInfo.js":
/*!**************************************!*\
  !*** ./components/UpdateBankInfo.js ***!
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
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-stripe-elements */ "./node_modules/react-stripe-elements/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/UpdateBankInfo.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation updateBankInfo($bankToken: String!) {\n    updateBankInfo(bankToken: $bankToken) {\n      id\n      accId\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















var BANK_UPDATE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());
var StripedElement = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "UpdateBankInfo__StripedElement",
  componentId: "tk77iv-0"
})([".StripeElement{background-color:white;height:40px;padding:10px 12px;border-radius:4px;border:1px solid transparent;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease;}.StripeElement--focus{box-shadow:0 1px 3px 0 #cfd7df;}.StripeElement--invalid{border-color:#fa755a;}.StripeElement--webkit-autofill{background-color:#fefde5 !important;}"]);
var stripe = Stripe('pk_test_K3j8JU1o7WrtlpA5zY8bavrR');

var UpdateBankInfo =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateBankInfo, _Component);

  function UpdateBankInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateBankInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateBankInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stripe", Stripe('pk_test_K3j8JU1o7WrtlpA5zY8bavrR'));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "elements", stripe.elements());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "style", {
      base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        color: "#32325d"
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "card", elements.create('card', {
      style: style
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currency: 'usd'
    });

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateBankInfo",
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
                console.log(_this.state);
                _context.next = 4;
                return updateStripeAccountMutation({
                  variables: _objectSpread({}, _this.state)
                });

              case 4:
                res = _context.sent;
                console.log("going to the backend");

              case 6:
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

  _createClass(UpdateBankInfo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.card.mount('#card-element');
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, function (_ref2) {
        var me = _ref2.data.me;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Card Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: BANK_UPDATE_MUTATION,
          variables: _objectSpread({}, _this2.state, {
            userId: _this2.props.id
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, function (updateBankInfo, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "accountUpdate",
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log(_this2.state);
                        _context2.next = 3;
                        return _this2.updateBankInfo(e, updateBankInfo);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StripedElement, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "form-row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "card-element",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117
            },
            __self: this
          }, "Debit card"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "card-element",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            id: "card-errors",
            role: "alert",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes")));
        }), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), !me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, "Sorry this is not your account please move along ")));
      }));
    }
  }]);

  return UpdateBankInfo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateBankInfo);

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/components/Element.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/components/Element.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-stripe-elements/es/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(/*! ./Elements */ "./node_modules/react-stripe-elements/es/components/Elements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var _extractOptions = function _extractOptions(props) {
  var id = props.id,
      className = props.className,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onReady = props.onReady,
      options = _objectWithoutProperties(props, ['id', 'className', 'onChange', 'onFocus', 'onBlur', 'onReady']);

  return options;
};

var capitalized = function capitalized(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var Element = function Element(type) {
  var _class, _temp;

  var hocOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props, context) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.handleRef = function (ref) {
        _this._ref = ref;
      };

      _this._element = null;

      var options = _extractOptions(_this.props);
      // We keep track of the extracted options on this._options to avoid re-rendering.
      // (We would unnecessarily re-render if we were tracking them with state.)
      _this._options = options;
      return _this;
    }

    _class.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.context.addElementsLoadListener(function (elements) {
        var element = elements.create(type, _this2._options);
        _this2._element = element;

        _this2._setupEventListeners(element);

        element.mount(_this2._ref);

        // Register Element for automatic token / source creation
        if (hocOptions.impliedTokenType || hocOptions.impliedSourceType) {
          _this2.context.registerElement(element, hocOptions.impliedTokenType, hocOptions.impliedSourceType);
        }
      });
    };

    _class.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var options = _extractOptions(nextProps);
      if (Object.keys(options).length !== 0 && !(0, _shallowEqual2.default)(options, this._options)) {
        this._options = options;
        if (this._element) {
          this._element.update(options);
        }
      }
    };

    _class.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this._element) {
        var element = this._element;
        element.destroy();
        this.context.unregisterElement(element);
      }
    };

    _class.prototype._setupEventListeners = function _setupEventListeners(element) {
      var _this3 = this;

      element.on('ready', function () {
        _this3.props.onReady(_this3._element);
      });

      element.on('change', function (change) {
        _this3.props.onChange(change);
      });

      element.on('blur', function () {
        var _props;

        return (_props = _this3.props).onBlur.apply(_props, arguments);
      });
      element.on('focus', function () {
        var _props2;

        return (_props2 = _this3.props).onFocus.apply(_props2, arguments);
      });
    };

    _class.prototype.render = function render() {
      return _react2.default.createElement('div', {
        id: this.props.id,
        className: this.props.className,
        ref: this.handleRef
      });
    };

    return _class;
  }(_react2.default.Component), _class.propTypes = {
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onReady: _propTypes2.default.func
  }, _class.defaultProps = {
    id: undefined,
    className: undefined,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onReady: noop
  }, _class.contextTypes = _Elements.elementContextTypes, _class.displayName = capitalized(type) + 'Element', _temp;
};

exports.default = Element;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/components/Elements.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/components/Elements.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementContextTypes = exports.injectContextTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Provider = __webpack_require__(/*! ./Provider */ "./node_modules/react-stripe-elements/es/components/Provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var injectContextTypes = exports.injectContextTypes = {
  getRegisteredElements: _propTypes2.default.func.isRequired
};

var elementContextTypes = exports.elementContextTypes = {
  addElementsLoadListener: _propTypes2.default.func.isRequired,
  registerElement: _propTypes2.default.func.isRequired,
  unregisterElement: _propTypes2.default.func.isRequired
};

var Elements = function (_React$Component) {
  _inherits(Elements, _React$Component);

  function Elements(props, context) {
    _classCallCheck(this, Elements);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleRegisterElement = function (element, impliedTokenType, impliedSourceType) {
      _this.setState(function (prevState) {
        return {
          registeredElements: [].concat(_toConsumableArray(prevState.registeredElements), [_extends({
            element: element
          }, impliedTokenType ? { impliedTokenType: impliedTokenType } : {}, impliedSourceType ? { impliedSourceType: impliedSourceType } : {})])
        };
      });
    };

    _this.handleUnregisterElement = function (el) {
      _this.setState(function (prevState) {
        return {
          registeredElements: prevState.registeredElements.filter(function (_ref) {
            var element = _ref.element;
            return element !== el;
          })
        };
      });
    };

    _this.state = {
      registeredElements: []
    };
    return _this;
  }

  Elements.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    return {
      addElementsLoadListener: function addElementsLoadListener(fn) {
        // Return the existing elements instance if we already have one.
        if (_this2._elements) {
          fn(_this2._elements);
          return;
        }

        var _props = _this2.props,
            children = _props.children,
            options = _objectWithoutProperties(_props, ['children']);

        if (_this2.context.tag === 'sync') {
          _this2._elements = _this2.context.stripe.elements(options);
          fn(_this2._elements);
        } else {
          _this2.context.addStripeLoadListener(function (stripe) {
            if (_this2._elements) {
              fn(_this2._elements);
            } else {
              _this2._elements = stripe.elements(options);
              fn(_this2._elements);
            }
          });
        }
      },
      registerElement: this.handleRegisterElement,
      unregisterElement: this.handleUnregisterElement,
      getRegisteredElements: function getRegisteredElements() {
        return _this2.state.registeredElements;
      }
    };
  };

  Elements.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return Elements;
}(_react2.default.Component);

Elements.childContextTypes = _extends({}, injectContextTypes, elementContextTypes);
Elements.contextTypes = _Provider.providerContextTypes;
Elements.defaultProps = {
  children: null
};
exports.default = Elements;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-stripe-elements/es/utils/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Elements = __webpack_require__(/*! ./Elements */ "./node_modules/react-stripe-elements/es/components/Elements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

var _extractOptions = function _extractOptions(props) {
  var id = props.id,
      className = props.className,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onReady = props.onReady,
      paymentRequest = props.paymentRequest,
      options = _objectWithoutProperties(props, ['id', 'className', 'onBlur', 'onClick', 'onFocus', 'onReady', 'paymentRequest']);

  return options;
};

var PaymentRequestButtonElement = function (_React$Component) {
  _inherits(PaymentRequestButtonElement, _React$Component);

  function PaymentRequestButtonElement(props, context) {
    _classCallCheck(this, PaymentRequestButtonElement);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleRef = function (ref) {
      _this._ref = ref;
    };

    var options = _extractOptions(props);
    // We keep track of the extracted options on this._options to avoid re-rendering.
    // (We would unnecessarily re-render if we were tracking them with state.)
    _this._options = options;
    return _this;
  }

  PaymentRequestButtonElement.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.context.addElementsLoadListener(function (elements) {
      _this2._element = elements.create('paymentRequestButton', _extends({
        paymentRequest: _this2.props.paymentRequest
      }, _this2._options));
      _this2._element.on('ready', function () {
        _this2.props.onReady(_this2._element);
      });
      _this2._element.on('focus', function () {
        var _props;

        return (_props = _this2.props).onFocus.apply(_props, arguments);
      });
      _this2._element.on('click', function () {
        var _props2;

        return (_props2 = _this2.props).onClick.apply(_props2, arguments);
      });
      _this2._element.on('blur', function () {
        var _props3;

        return (_props3 = _this2.props).onBlur.apply(_props3, arguments);
      });
      _this2._element.mount(_this2._ref);
    });
  };

  PaymentRequestButtonElement.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.paymentRequest !== nextProps.paymentRequest) {
      console.warn('Unsupported prop change: paymentRequest is not a customizable property.');
    }
    var options = _extractOptions(nextProps);
    if (Object.keys(options).length !== 0 && !(0, _shallowEqual2.default)(options, this._options)) {
      this._options = options;
      this._element.update(options);
    }
  };

  PaymentRequestButtonElement.prototype.componentWillUnmount = function componentWillUnmount() {
    this._element.destroy();
  };

  PaymentRequestButtonElement.prototype.render = function render() {
    return _react2.default.createElement('div', {
      id: this.props.id,
      className: this.props.className,
      ref: this.handleRef
    });
  };

  return PaymentRequestButtonElement;
}(_react2.default.Component);

PaymentRequestButtonElement.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  paymentRequest: _propTypes2.default.shape({
    canMakePayment: _propTypes2.default.func.isRequired,
    on: _propTypes2.default.func.isRequired,
    show: _propTypes2.default.func.isRequired
  }).isRequired
};
PaymentRequestButtonElement.defaultProps = {
  id: undefined,
  className: undefined,
  onBlur: noop,
  onClick: noop,
  onFocus: noop,
  onReady: noop
};
PaymentRequestButtonElement.contextTypes = _Elements.elementContextTypes;
exports.default = PaymentRequestButtonElement;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/components/Provider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/components/Provider.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providerContextTypes = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO(jez) 'sync' and 'async' are bad tag names.
// TODO(jez) What if redux also uses this.context.tag?
var providerContextTypes = exports.providerContextTypes = {
  tag: _propTypes2.default.string.isRequired,
  stripe: _propTypes2.default.object,
  addStripeLoadListener: _propTypes2.default.func
};

var getOrCreateStripe = function getOrCreateStripe(apiKey, options) {
  /**
   * Note that this is not meant to be a generic memoization solution.
   * This is specifically a solution for `StripeProvider`s being initialized
   * and destroyed regularly (with the same set of props) when users only
   * use `StripeProvider` for the subtree that contains their checkout form.
   */
  window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
  var cacheKey = 'key=' + apiKey + ' options=' + JSON.stringify(options);

  var stripe = window.Stripe.__cachedInstances[cacheKey] || window.Stripe(apiKey, options);
  window.Stripe.__cachedInstances[cacheKey] = stripe;

  return stripe;
};

var ensureStripeShape = function ensureStripeShape(stripe) {
  if (stripe && stripe.elements && stripe.createSource && stripe.createToken) {
    return stripe;
  } else {
    throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.");
  }
};

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  // on the other hand: childContextTypes is *required* to use context.
  function Provider(props) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    if (_this.props.apiKey && _this.props.stripe) {
      throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");
    } else if (_this.props.apiKey) {
      if (!window.Stripe) {
        throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");
      } else {
        var _this$props = _this.props,
            _apiKey = _this$props.apiKey,
            _children = _this$props.children,
            _stripe = _this$props.stripe,
            options = _objectWithoutProperties(_this$props, ['apiKey', 'children', 'stripe']);

        _this._meta = {
          tag: 'sync',
          stripe: getOrCreateStripe(_apiKey, options)
        };
      }
    } else if (_this.props.stripe) {
      // If we already have a stripe instance (in the constructor), we can behave synchronously.
      _this._meta = {
        tag: 'sync',
        stripe: ensureStripeShape(_this.props.stripe)
      };
    } else if (_this.props.stripe === null) {
      _this._meta = {
        tag: 'async',
        stripe: null
      };
    } else {
      throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");
    }

    _this._didWarn = false;
    _this._didWakeUpListeners = false;
    _this._listeners = [];
    return _this;
  }
  // Even though we're using flow, also use PropTypes so we can take advantage of developer warnings.


  Provider.prototype.getChildContext = function getChildContext() {
    var _this2 = this;

    // getChildContext is run after the constructor, so we WILL have access to
    // the initial state.
    //
    // However, context doesn't update in respnse to state changes like you
    // might expect: context is pulled by the child, not pushed by the parent.
    if (this._meta.tag === 'sync') {
      return {
        tag: 'sync',
        stripe: this._meta.stripe
      };
    } else {
      return {
        tag: 'async',
        addStripeLoadListener: function addStripeLoadListener(fn) {
          if (_this2._meta.stripe) {
            fn(_this2._meta.stripe);
          } else {
            _this2._listeners.push(fn);
          }
        }
      };
    }
  };

  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var apiKeyChanged = this.props.apiKey && nextProps.apiKey && this.props.apiKey !== nextProps.apiKey;

    var stripeInstanceChanged = this.props.stripe && nextProps.stripe && this.props.stripe !== nextProps.stripe;
    if (!this._didWarn && (apiKeyChanged || stripeInstanceChanged) && window.console && window.console.error) {
      this._didWarn = true;
      // eslint-disable-next-line no-console
      console.error('StripeProvider does not support changing the apiKey parameter.');
      return;
    }

    if (!this._didWakeUpListeners && nextProps.stripe) {
      // Wake up the listeners if we've finally been given a StripeShape
      this._didWakeUpListeners = true;
      var _stripe2 = ensureStripeShape(nextProps.stripe);
      this._meta.stripe = _stripe2;
      this._listeners.forEach(function (fn) {
        fn(_stripe2);
      });
    }
  };

  Provider.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return Provider;
}(_react2.default.Component);

Provider.propTypes = {
  apiKey: _propTypes2.default.string,
  // PropTypes.object is the only way we can accept a Stripe instance
  // eslint-disable-next-line react/forbid-prop-types
  stripe: _propTypes2.default.object,
  children: _propTypes2.default.node
};
Provider.childContextTypes = providerContextTypes;
Provider.defaultProps = {
  apiKey: undefined,
  stripe: undefined,
  children: null
};
exports.default = Provider;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/components/inject.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/components/inject.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Elements = __webpack_require__(/*! ./Elements */ "./node_modules/react-stripe-elements/es/components/Elements.js");

var _Provider = __webpack_require__(/*! ./Provider */ "./node_modules/react-stripe-elements/es/components/Provider.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// react-redux does a bunch of stuff with pure components / checking if it needs to re-render.
// not sure if we need to do the same.
var inject = function inject(WrappedComponent) {
  var _class, _temp;

  var componentOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _componentOptions$wit = componentOptions.withRef,
      withRef = _componentOptions$wit === undefined ? false : _componentOptions$wit;


  return _temp = _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props, context) {
      _classCallCheck(this, _class);

      if (!context || !context.getRegisteredElements) {
        throw new Error('It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.');
      }

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.findElement = function (filterBy, specifiedType) {
        var allElements = _this.context.getRegisteredElements();
        var filteredElements = allElements.filter(function (e) {
          return e[filterBy];
        });
        var matchingElements = specifiedType === 'auto' ? filteredElements : filteredElements.filter(function (e) {
          return e[filterBy] === specifiedType;
        });

        if (matchingElements.length === 1) {
          return matchingElements[0].element;
        } else if (matchingElements.length > 1) {
          throw new Error('You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.');
        } else {
          return null;
        }
      };

      _this.requireElement = function (filterBy, specifiedType) {
        var element = _this.findElement(filterBy, specifiedType);
        if (element) {
          return element;
        } else {
          throw new Error('You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.');
        }
      };

      _this.wrappedCreateToken = function (stripe) {
        return function () {
          var tokenTypeOrOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (tokenTypeOrOptions && (typeof tokenTypeOrOptions === 'undefined' ? 'undefined' : _typeof(tokenTypeOrOptions)) === 'object') {
            // First argument is options; infer the Element and tokenize
            var opts = tokenTypeOrOptions;

            var tokenType = opts.type,
                rest = _objectWithoutProperties(opts, ['type']);

            var specifiedType = typeof tokenType === 'string' ? tokenType : 'auto';
            // Since only options were passed in, a corresponding Element must exist
            // for the tokenization to succeed -- thus we call requireElement.
            var element = _this.requireElement('impliedTokenType', specifiedType);
            return stripe.createToken(element, rest);
          } else if (typeof tokenTypeOrOptions === 'string') {
            // First argument is token type; tokenize with token type and options
            var _tokenType = tokenTypeOrOptions;
            return stripe.createToken(_tokenType, options);
          } else {
            // If a bad value was passed in for options, throw an error.
            throw new Error('Invalid options passed to createToken. Expected an object, got ' + (typeof tokenTypeOrOptions === 'undefined' ? 'undefined' : _typeof(tokenTypeOrOptions)) + '.');
          }
        };
      };

      _this.wrappedCreateSource = function (stripe) {
        return function () {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            if (typeof options.type !== 'string') {
              throw new Error('Invalid Source type passed to createSource. Expected string, got ' + _typeof(options.type) + '.');
            }

            var element = _this.findElement('impliedSourceType', options.type);
            if (element) {
              // If an Element exists for the source type, use that to create the
              // corresponding source.
              //
              // NOTE: this prevents users from independently creating sources of
              // type `foo` if an Element that can create `foo` sources exists in
              // the current <Elements /> context.
              return stripe.createSource(element, options);
            } else {
              // If no Element exists for the source type, directly create a source.
              return stripe.createSource(options);
            }
          } else {
            // If a bad value was passed in for options, throw an error.
            throw new Error('Invalid options passed to createSource. Expected an object, got ' + (typeof options === 'undefined' ? 'undefined' : _typeof(options)) + '.');
          }
        };
      };

      if (_this.context.tag === 'sync') {
        _this.state = {
          stripe: _this.stripeProps(_this.context.stripe)
        };
      } else {
        _this.state = {
          stripe: null
        };
      }
      return _this;
    }

    _class.prototype.componentDidMount = function componentDidMount() {
      var _this2 = this;

      if (this.context.tag === 'async') {
        this.context.addStripeLoadListener(function (stripe) {
          _this2.setState({
            stripe: _this2.stripeProps(stripe)
          });
        });
      } else {
        // when 'sync', it's already set in the constructor.
      }
    };

    _class.prototype.getWrappedInstance = function getWrappedInstance() {
      if (!withRef) {
        throw new Error('To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`');
      }
      return this.wrappedInstance;
    };

    _class.prototype.stripeProps = function stripeProps(stripe) {
      return _extends({}, stripe, {
        // These are the only functions that take elements.
        createToken: this.wrappedCreateToken(stripe),
        createSource: this.wrappedCreateSource(stripe)
      });
    };

    // Finds an Element by the specified type, if one exists.
    // Throws if multiple Elements match.


    // Require that exactly one Element is found for the specified type.
    // Throws if no Element is found.


    // Wraps createToken in order to infer the Element that is being tokenized.


    // Wraps createSource in order to infer the Element that is being used for
    // source creation.


    _class.prototype.render = function render() {
      var _this3 = this;

      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
        stripe: this.state.stripe,
        ref: withRef ? function (c) {
          _this3.wrappedInstance = c;
        } : null
      }));
    };

    return _class;
  }(_react2.default.Component), _class.contextTypes = _extends({}, _Provider.providerContextTypes, _Elements.injectContextTypes), _class.displayName = 'InjectStripe(' + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ')', _temp;
};

exports.default = inject;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdealBankElement = exports.IbanElement = exports.PaymentRequestButtonElement = exports.PostalCodeElement = exports.CardCVCElement = exports.CardExpiryElement = exports.CardNumberElement = exports.CardElement = exports.Elements = exports.injectStripe = exports.StripeProvider = undefined;

var _Provider = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-stripe-elements/es/components/Provider.js");

var _Provider2 = _interopRequireDefault(_Provider);

var _inject = __webpack_require__(/*! ./components/inject */ "./node_modules/react-stripe-elements/es/components/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _Elements = __webpack_require__(/*! ./components/Elements */ "./node_modules/react-stripe-elements/es/components/Elements.js");

var _Elements2 = _interopRequireDefault(_Elements);

var _Element = __webpack_require__(/*! ./components/Element */ "./node_modules/react-stripe-elements/es/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _PaymentRequestButtonElement = __webpack_require__(/*! ./components/PaymentRequestButtonElement */ "./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js");

var _PaymentRequestButtonElement2 = _interopRequireDefault(_PaymentRequestButtonElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define Elements, and register their implied token / source types for
// automatic token / source creation.

// Card
var CardElement = (0, _Element2.default)('card', {
  impliedTokenType: 'card',
  impliedSourceType: 'card'
});

// Split Fields
// Note: we only register the CardNumberElement for split fields so that we have
// a unique Element to infer when calling `wrappedCreateToken` or `wrappedCreateSource`.

var CardNumberElement = (0, _Element2.default)('cardNumber', {
  impliedTokenType: 'card',
  impliedSourceType: 'card'
});
var CardExpiryElement = (0, _Element2.default)('cardExpiry');
var CardCVCElement = (0, _Element2.default)('cardCvc');
var PostalCodeElement = (0, _Element2.default)('postalCode');

// IBAN
var IbanElement = (0, _Element2.default)('iban', {
  impliedTokenType: 'bank_account',
  impliedSourceType: 'sepa_debit'
});

// iDEAL Bank
var IdealBankElement = (0, _Element2.default)('idealBank', { impliedSourceType: 'ideal' });

exports.StripeProvider = _Provider2.default;
exports.injectStripe = _inject2.default;
exports.Elements = _Elements2.default;
exports.CardElement = CardElement;
exports.CardNumberElement = CardNumberElement;
exports.CardExpiryElement = CardExpiryElement;
exports.CardCVCElement = CardCVCElement;
exports.PostalCodeElement = PostalCodeElement;
exports.PaymentRequestButtonElement = _PaymentRequestButtonElement2.default;
exports.IbanElement = IbanElement;
exports.IdealBankElement = IdealBankElement;

/***/ }),

/***/ "./node_modules/react-stripe-elements/es/utils/shallowEqual.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-stripe-elements/es/utils/shallowEqual.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shallowEqual = function shallowEqual(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  return keysA.length === keysB.length && keysA.every(function (key) {
    return b.hasOwnProperty(key) && b[key] === a[key];
  });
};

exports.default = shallowEqual;

/***/ })

})
//# sourceMappingURL=bankupdate.js.4a1bcdf59845893b4289.hot-update.js.map