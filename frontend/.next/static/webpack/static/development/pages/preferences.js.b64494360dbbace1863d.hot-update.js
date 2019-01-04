webpackHotUpdate("static/development/pages/preferences.js",{

/***/ "./components/EmailPreferences.js":
/*!****************************************!*\
  !*** ./components/EmailPreferences.js ***!
  \****************************************/
/*! exports provided: ALL_USERS_QUERY, UPDATE_PREFERENCES_MUTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_USERS_QUERY", function() { return ALL_USERS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PREFERENCES_MUTATION", function() { return UPDATE_PREFERENCES_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/EmailPreferences.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  var data = _taggedTemplateLiteral(["\n  mutation updatePreferences($emailPreference: [EmailPreference], $userId: ID!) {\n    updatePreferences(emailPreference: $emailPreference, userId: $userId) {\n      id\n      emailPreference\n      name\n      lastName\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var possiblePreferences = ['REQUESTCREATED', 'REQUESTAPPROVED', 'REQUESTCONFIRMED', 'REQUESTREJECTED', 'REQUESTDELETED', 'APPOINTMENTTOMORROW', 'UPDATEDSTRIPEACCOUNT', 'UPDATEDCARD'];
var UPDATE_PREFERENCES_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var EmailPreferences = function EmailPreferences(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: ALL_USERS_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Manage Email Preferences"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Email"), possiblePreferences.map(function (preference) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: preference,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, preference);
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\uD83D\uDC47\uD83C\uDFFB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, data.users.map(function (user) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserPreferences, {
        user: user,
        key: user.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      });
    })))));
  });
};

var UserPreferences =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UserPreferences, _React$Component);

  function UserPreferences() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserPreferences);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserPreferences)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      preferences: _this.props.user.emailPreference
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePreferenceChange", function (e) {
      var checkbox = e.target; // take a copy of the current permissions

      var updatedPreferences = _toConsumableArray(_this.state.preferences); // figure out if we need to remove or add this permission


      if (checkbox.checked) {
        // add it in!
        updatedPreferences.push(checkbox.value);
      } else {
        updatedPreferences = updatedPreferences.filter(function (preference) {
          return preference !== checkbox.value;
        });
      }

      _this.setState({
        preferences: updatedPreferences
      });
    });

    return _this;
  }

  _createClass(UserPreferences, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: UPDATE_PREFERENCES_MUTATION,
        variables: {
          preferences: this.state.preferences,
          userId: this.props.user.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, function (updatePreferences, _ref2) {
        var loading = _ref2.loading,
            error = _ref2.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          colspan: "8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, user.name, " ", user.lastName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, user.email), possiblePreferences.map(function (preference) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
            key: preference,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "".concat(user.id, "-preference-").concat(preference),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            id: "".concat(user.id, "-preference-").concat(preference),
            type: "checkbox",
            checked: _this2.state.preferences.includes(preference),
            value: preference,
            onChange: _this2.handlePreferenceChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          })));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          type: "button",
          disabled: loading,
          onClick: updatePreferences,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Updat", loading ? 'ing' : 'e'))));
      });
    }
  }]);

  return UserPreferences;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(UserPreferences, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    emailPreference: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
  }).isRequired
});



/* harmony default export */ __webpack_exports__["default"] = (EmailPreferences);

/***/ })

})
//# sourceMappingURL=preferences.js.b64494360dbbace1863d.hot-update.js.map