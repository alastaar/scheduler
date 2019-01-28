module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(4);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/styles/Table.js
var Table = __webpack_require__(23);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(35);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(12);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(9);

// CONCATENATED MODULE: ./components/DeleteBlackoutRanges.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var data = _taggedTemplateLiteral(["\n  mutation deleteBlackOutRanges($id: ID!){\n    deleteBlackOutRanges(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var DELETE_BLACK_OUT_MUTATION = external_graphql_tag_default()(_templateObject());
var BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "DeleteBlackoutRanges__BigButton",
  componentId: "sc-1rl0l6d-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var DeleteBlackoutRanges_DeleteBlackoutRanges =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteBlackoutRanges, _React$Component);

  function DeleteBlackoutRanges() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteBlackoutRanges);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteBlackoutRanges)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      var data = cache.readQuery({
        query: User["a" /* CURRENT_USER_QUERY */]
      });
      var blackOutId = payload.data.deleteBlackOutRanges.id;
      data.me.blackOutRanges = data.me.blackOutRanges.filter(function (blackOut) {
        return blackOut.id !== blackOutId;
      });
      cache.writeQuery({
        query: User["a" /* CURRENT_USER_QUERY */],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteBlackoutRanges, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: DELETE_BLACK_OUT_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        optimisticResponse: {
          __typename: 'Mutation',
          deleteBlackOutRanges: {
            __typename: 'BlackOutDates',
            id: this.props.id
          }
        },
        refetchQueries: [{
          query: User["a" /* CURRENT_USER_QUERY */]
        }]
      }, function (deleteBlackOutRanges, _ref) {
        var loading = _ref.loading,
            error = _ref.error;
        return external_react_default.a.createElement(BigButton, {
          disabled: loading,
          onClick: function onClick() {
            deleteBlackOutRanges().catch(function (err) {
              return alert(err.message);
            });
          },
          title: "Delete Item"
        }, "\xD7");
      });
    }
  }]);

  return DeleteBlackoutRanges;
}(external_react_default.a.Component);

/* harmony default export */ var components_DeleteBlackoutRanges = (DeleteBlackoutRanges_DeleteBlackoutRanges);
// CONCATENATED MODULE: ./components/BlackOutRangeItem.js






var CartItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "BlackOutRangeItem__CartItemStyles",
  componentId: "nvkqv1-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var BlackOutRangeItem_BlackOutRangeItem = function BlackOutRangeItem(_ref) {
  var blackOutItem = _ref.blackOutItem;
  if (!blackOutItem) external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement("p", null, "This black out has been cancelled"), external_react_default.a.createElement(components_DeleteBlackoutRanges, {
    id: blackOutItem.id
  }));
  return external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement("div", {
    className: "cart-item-details"
  }, external_react_default.a.createElement("h3", null, blackOutItem.weekday), external_react_default.a.createElement("h3", null, blackOutItem.begin), external_react_default.a.createElement("h3", null, blackOutItem.end)), external_react_default.a.createElement(components_DeleteBlackoutRanges, {
    id: blackOutItem.id
  }));
};

/* harmony default export */ var components_BlackOutRangeItem = (BlackOutRangeItem_BlackOutRangeItem);
// CONCATENATED MODULE: ./components/BlackOutDates.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { BlackOutDates_defineProperty(target, key, source[key]); }); } return target; }

function BlackOutDates_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BlackOutDates_typeof = function _typeof(obj) { return typeof obj; }; } else { BlackOutDates_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BlackOutDates_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function BlackOutDates_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BlackOutDates_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BlackOutDates_createClass(Constructor, protoProps, staticProps) { if (protoProps) BlackOutDates_defineProperties(Constructor.prototype, protoProps); if (staticProps) BlackOutDates_defineProperties(Constructor, staticProps); return Constructor; }

function BlackOutDates_possibleConstructorReturn(self, call) { if (call && (BlackOutDates_typeof(call) === "object" || typeof call === "function")) { return call; } return BlackOutDates_assertThisInitialized(self); }

function BlackOutDates_getPrototypeOf(o) { BlackOutDates_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BlackOutDates_getPrototypeOf(o); }

function BlackOutDates_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BlackOutDates_setPrototypeOf(subClass, superClass); }

function BlackOutDates_setPrototypeOf(o, p) { BlackOutDates_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BlackOutDates_setPrototypeOf(o, p); }

function BlackOutDates_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BlackOutDates_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = BlackOutDates_taggedTemplateLiteral(["\n  mutation addBlackoutRanges($weekday: String, $begin: String, $end: String) {\n    addBlackoutRanges(weekday: $weekday, begin: $begin, end: $end) {\n      id\n      begin\n      end\n      weekday\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function BlackOutDates_templateObject() {
  var data = BlackOutDates_taggedTemplateLiteral(["\n  mutation updateBlackoutDates($blackOut: [String], $userId: ID!) {\n    updateBlackoutDates(blackOut: $blackOut, userId: $userId) {\n      id\n      blackOut\n      name\n      lastName\n      email\n    }\n  }\n"]);

  BlackOutDates_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function BlackOutDates_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var UPDATE_BLACKOUT_MUTATION = external_graphql_tag_default()(BlackOutDates_templateObject());
var ADD_TO_BLACKOUTS_MUTATION = external_graphql_tag_default()(_templateObject2());
var SickNastyButton = external_styled_components_default.a.button.withConfig({
  displayName: "BlackOutDates__SickNastyButton",
  componentId: "sc-1izy0x2-0"
})(["display:block;width:50%;margin:0 auto;background:", ";color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);transition:all 0.5s;&[disabled]{opacity:0.5;}"], function (props) {
  return props.theme.red;
});
var NastyButton = external_styled_components_default.a.button.withConfig({
  displayName: "BlackOutDates__NastyButton",
  componentId: "sc-1izy0x2-1"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});
var TimeDate = external_styled_components_default.a.div.withConfig({
  displayName: "BlackOutDates__TimeDate",
  componentId: "sc-1izy0x2-2"
})(["display:inline-block;border-bottom:1px solid grey;margin-bottom:25px;width:100%;input{display:inline-block;}label{display:inherit;width:300px;margin-bottom:25px;}"]);

var BlackOutDates_BlackOutDates = function BlackOutDates(props) {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var me = _ref.data.me;
    return external_react_default.a.createElement(external_react_apollo_["Query"], {
      query: User["a" /* CURRENT_USER_QUERY */]
    }, function (_ref2) {
      var data = _ref2.data,
          loading = _ref2.loading,
          error = _ref2.error;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(ErrorMessage["a" /* default */], {
        error: error
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Add Dates that you will not be booking appointsments"), external_react_default.a.createElement(BlackOutDates_UserBlackOutDates, {
        user: me,
        key: me.id
      }), external_react_default.a.createElement(BlackOutDates_UserBlackOutRepeatingDates, {
        user: me,
        key: me.blackOutRanges
      })));
    });
  });
};

var BlackOutDates_UserBlackOutDates =
/*#__PURE__*/
function (_React$Component) {
  BlackOutDates_inherits(UserBlackOutDates, _React$Component);

  function UserBlackOutDates() {
    var _getPrototypeOf2;

    var _this;

    BlackOutDates_classCallCheck(this, UserBlackOutDates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BlackOutDates_possibleConstructorReturn(this, (_getPrototypeOf2 = BlackOutDates_getPrototypeOf(UserBlackOutDates)).call.apply(_getPrototypeOf2, [this].concat(args)));

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "state", {
      blackOutDates: _this.props.user.blackOut,
      currentDate: new Date()
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "convertDate", function (date) {
      if (date == "") {
        return "";
      }

      var complex = external_moment_default.a.utc(date).toDate();
      var almostDate = external_moment_default()(complex).add(1, 'd').toDate();
      var newDate = new Date(almostDate),
          month = ("0" + (newDate.getMonth() + 1)).slice(-2),
          day = ("0" + newDate.getDate()).slice(-2);
      return [newDate.getFullYear(), month, day].join("-");
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "convertTime", function (time24) {
      var tmpArr = time24.split(':'),
          time12;

      if (+tmpArr[0] == 12) {
        time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
      } else {
        if (+tmpArr[0] == 0) {
          time12 = '12:' + tmpArr[1] + ' am';
        } else {
          if (+tmpArr[0] > 12) {
            time12 = +tmpArr[0] - 12 + ':' + tmpArr[1] + ' pm';
          } else {
            time12 = +tmpArr[0] + ':' + tmpArr[1] + ' am';
          }
        }
      }

      return time12;
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "addBlackOutDate", function (e) {
      _this.setState(function (prevState) {
        return {
          blackOutDates: _toConsumableArray(prevState.blackOutDates).concat([""])
        };
      });
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "removeBlackOutDate", function (e) {
      var remove = e.target;
      var index = e.target.id;
      var arrayTemp = _this.state.blackOutDates;
      arrayTemp.splice(index, 1);

      for (var i = 0; i < arrayTemp.length; i++) {
        arrayTemp[i] = _this.convertDate(arrayTemp[i]);
      }

      _this.setState({
        blackOutDates: _toConsumableArray(arrayTemp)
      });
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this)), "handleBlackOutChange", function (e) {
      var addDate = e.target;
      var index = addDate.id;

      var date = _this.convertDate(addDate.value); // take a copy of the current permissions


      var updatedDates = _toConsumableArray(_this.state.blackOutDates); // figure out if we need to remove or add this permission
      // add it in!


      if (updatedDates.length >= index) {
        updatedDates[index] = date;
      } else {
        updatedDates.push(date);
      }

      _this.setState({
        blackOutDates: updatedDates
      });
    });

    return _this;
  }

  BlackOutDates_createClass(UserBlackOutDates, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.user.blackOut.length == 0) {
        this.setState({
          blackOutDates: [""]
        });
      } else {
        this.setState({
          blackOutDates: this.props.user.blackOut
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: UPDATE_BLACKOUT_MUTATION,
        variables: {
          blackOut: this.state.blackOutDates,
          userId: this.props.user.id
        }
      }, function (updateBlackoutDates, _ref3) {
        var loading = _ref3.loading,
            error = _ref3.error;
        return external_react_default.a.createElement(Form["a" /* default */], null, error && external_react_default.a.createElement(ErrorMessage["a" /* default */], {
          error: error
        }), _this2.state.blackOutDates.map(function (blackOut, index) {
          return external_react_default.a.createElement(TimeDate, {
            key: index
          }, external_react_default.a.createElement("label", {
            htmlFor: "".concat(blackOut, "-").concat(index)
          }, "Date: \xA0", external_react_default.a.createElement("input", {
            type: "date",
            id: "".concat(index),
            name: "".concat(blackOut, "-").concat(index),
            style: {
              width: 200
            },
            value: "".concat(blackOut),
            onChange: _this2.handleBlackOutChange,
            min: _this2.convertDate(_this2.state.currentDate)
          })), external_react_default.a.createElement(NastyButton, {
            key: index,
            id: "".concat(index),
            type: "button",
            onClick: _this2.removeBlackOutDate
          }, "\xD7"));
        }), external_react_default.a.createElement(SickNastyButton, {
          type: "button",
          onClick: _this2.addBlackOutDate
        }, "Add new Blackout Date"), external_react_default.a.createElement("br", null), external_react_default.a.createElement(SickNastyButton, {
          type: "button",
          disabled: loading,
          onClick: updateBlackoutDates
        }, "Updat", loading ? 'ing' : 'e'));
      });
    }
  }]);

  return UserBlackOutDates;
}(external_react_default.a.Component);

var BlackOutDates_UserBlackOutRepeatingDates =
/*#__PURE__*/
function (_React$Component2) {
  BlackOutDates_inherits(UserBlackOutRepeatingDates, _React$Component2);

  function UserBlackOutRepeatingDates() {
    var _getPrototypeOf3;

    var _this3;

    BlackOutDates_classCallCheck(this, UserBlackOutRepeatingDates);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = BlackOutDates_possibleConstructorReturn(this, (_getPrototypeOf3 = BlackOutDates_getPrototypeOf(UserBlackOutRepeatingDates)).call.apply(_getPrototypeOf3, [this].concat(args)));

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this3)), "state", {
      weekday: '',
      end: '',
      begin: '',
      currentDate: new Date()
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this3)), "convertDate", function (almostDate) {
      var newDate = new Date(almostDate),
          month = ("0" + (newDate.getMonth() + 1)).slice(-2),
          day = ("0" + newDate.getDate()).slice(-2);
      return [newDate.getFullYear(), month, day].join("-");
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this3)), "convertTime", function (time24) {
      var tmpArr = time24.split(':'),
          time12;

      if (+tmpArr[0] == 12) {
        time12 = tmpArr[0] + ':' + tmpArr[1] + ' pm';
      } else {
        if (+tmpArr[0] == 0) {
          time12 = '12:' + tmpArr[1] + ' am';
        } else {
          if (+tmpArr[0] > 12) {
            time12 = +tmpArr[0] - 12 + ':' + tmpArr[1] + ' pm';
          } else {
            time12 = +tmpArr[0] + ':' + tmpArr[1] + ' am';
          }
        }
      }

      return time12;
    });

    BlackOutDates_defineProperty(BlackOutDates_assertThisInitialized(BlackOutDates_assertThisInitialized(_this3)), "handleBlackOutRepeat", function (e) {
      var addDate = e.target;
      var date = new Date();
      var dayofweek = '';
      var addDateRepeating = addDate.name.split("-");

      if (addDateRepeating[0] == "weekday") {
        _this3.setState({
          weekday: addDate.value,
          end: '',
          begin: ''
        });
      } else if (addDateRepeating[0] == "begin") {
        var date = _this3.convertDate(addDate.value);

        _this3.setState({
          begin: date
        });
      } else {
        var date = _this3.convertDate(addDate.value);

        _this3.setState({
          end: date
        });
      }
    });

    return _this3;
  }

  BlackOutDates_createClass(UserBlackOutRepeatingDates, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: ADD_TO_BLACKOUTS_MUTATION,
        variables: _objectSpread({}, this.state),
        refetchQueries: [{
          query: User["a" /* CURRENT_USER_QUERY */]
        }]
      }, function (addBlackoutRanges, _ref4) {
        var loading = _ref4.loading,
            error = _ref4.error;
        return external_react_default.a.createElement(User["b" /* default */], null, function (_ref5) {
          var me = _ref5.data.me;
          return external_react_default.a.createElement(external_react_default.a.Fragment, null, me.blackOutRanges.map(function (blackOutItem) {
            return external_react_default.a.createElement(components_BlackOutRangeItem, {
              key: blackOutItem.id,
              blackOutItem: blackOutItem
            });
          }), external_react_default.a.createElement(Form["a" /* default */], null, error && external_react_default.a.createElement(ErrorMessage["a" /* default */], {
            error: error
          }), external_react_default.a.createElement(TimeDate, null, external_react_default.a.createElement("label", {
            htmlFor: "weekday"
          }, "Day of the week that should be repeatedly closed", external_react_default.a.createElement("select", {
            id: "weekday",
            name: "weekday",
            onChange: _this4.handleBlackOutRepeat
          }, external_react_default.a.createElement("option", {
            value: "Monday"
          }, "Monday"), external_react_default.a.createElement("option", {
            value: "Tuesday"
          }, "Tuesday"), external_react_default.a.createElement("option", {
            value: "Wednesday"
          }, "Wednesday"), external_react_default.a.createElement("option", {
            value: "Thursday"
          }, "Thursday"), external_react_default.a.createElement("option", {
            value: "Friday"
          }, "Friday"), external_react_default.a.createElement("option", {
            value: "Saturday"
          }, "Saturday"), external_react_default.a.createElement("option", {
            value: "Sunday"
          }, "Sunday"))), external_react_default.a.createElement("br", null), "OR set up a range of dates", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("label", {
            htmlFor: "begin"
          }, "Begin Date: \xA0", external_react_default.a.createElement("input", {
            type: "date",
            id: "begin",
            name: "begin",
            style: {
              width: 200
            },
            onChange: _this4.handleBlackOutRepeat,
            min: _this4.convertDate(_this4.state.currentDate)
          })), external_react_default.a.createElement("label", {
            htmlFor: "end"
          }, "End Date: \xA0", external_react_default.a.createElement("input", {
            type: "date",
            id: "end",
            name: "end}",
            style: {
              width: 200
            },
            onChange: _this4.handleBlackOutRepeat,
            min: _this4.convertDate(_this4.state.currentDate)
          }))), external_react_default.a.createElement("br", null), external_react_default.a.createElement(SickNastyButton, {
            type: "button",
            disabled: loading,
            onClick: addBlackoutRanges
          }, "Add", loading ? 'ing' : '')));
        });
      });
    }
  }]);

  return UserBlackOutRepeatingDates;
}(external_react_default.a.Component);


/* harmony default export */ var components_BlackOutDates = (BlackOutDates_BlackOutDates);
// EXTERNAL MODULE: ./components/PleaseSignIn.js
var PleaseSignIn = __webpack_require__(22);

// CONCATENATED MODULE: ./pages/blackout.js




var blackout_PermissionsPage = function PermissionsPage(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(PleaseSignIn["a" /* default */], null, external_react_default.a.createElement(components_BlackOutDates, null)));
};

/* harmony default export */ var blackout = __webpack_exports__["default"] = (blackout_PermissionsPage);

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-18co9lb-0"
})(["font-family:'Slabo 27px',serif;padding:20px;font-size:15px;line-height:1.5;font-weight:600;h2{margin:0;}label{display:block;margin-bottom:1rem;padding-bottom:5px;}input,textarea,select{width:100%;padding:1.5rem;font-size:12px;border:1px solid lightgrey;border-radius:25px;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:1.5rem 2.2rem;margin-top:15px;border-radius:25px;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}[type=\"date\"]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat;padding-right:0px;}[type=\"date\"]::-webkit-inner-spin-button{display:none;}[type=\"date\"]::-webkit-calendar-picker-indicator{opacity:0;}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.black;
}, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);


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
  var data = _taggedTemplateLiteral(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    signin(email: $email, password: $password) {\n      id\n      email\n      name\n      lastName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: '',
      lastName: '',
      password: '',
      email: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNIN_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_7__[/* CURRENT_USER_QUERY */ "a"]
        }]
      }, function (signin, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          method: "post",
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return signin();

                    case 3:
                      _this2.setState({
                        name: '',
                        lastName: '',
                        email: '',
                        password: ''
                      });

                      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
                        pathname: '/items'
                      });

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
          }()
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Sign into your account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
          error: error
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email"
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password"
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/signup"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "headerLink"
        }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/resetform"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "headerLink",
          style: {
            float: "right"
          }
        }, "Reset Password")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit"
        }, "Sign In!")));
      });
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Signin);

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);





var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__[/* CURRENT_USER_QUERY */ "a"]
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "error ", error.message, "...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PleaseSignIn);

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table.withConfig({
  displayName: "Table",
  componentId: "sc-1n4xej7-0"
})(["font-family:'Slabo 27px',serif;border-spacing:0;width:auto;display:inline-block;vertical-align:top;margin-left:10%;thead{font-size:10px;}td,th{border-bottom:1px solid ", ";border-right:1px solid ", ";position:relative;padding:3px;&:last-child{border-right:none;width:150px;button{width:100%;}}label{display:block;padding:10px 5px;}}tr{&:hover{background:", ";}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.offWhite;
});
/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-1nkhcfh-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    me {\n      id\n      email\n      name\n      lastName\n      instagramHandle\n      shop\n      price\n      profileImage\n      bio\n      image\n      artist\n      permissions\n      blackOut\n      blackOutRanges{\n        id\n        begin\n        end\n        weekday\n      }\n      emailPreference\n      stripeToken\n      bankToken\n      cart{\n        id\n        quantity\n        request {\n          id\n          name\n          lastName\n          price\n          referenceImage\n          details\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ })

/******/ });