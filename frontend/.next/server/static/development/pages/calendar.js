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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CalendarComponent.js":
/*!*****************************************!*\
  !*** ./components/CalendarComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/CalendarComponent.js";

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
  var data = _taggedTemplateLiteral(["\n  query SINGLE_REQUESTS_CALENDAR_QUERY($id: ID!) {\n    request(id: $id) {\n      id\n      name\n      email\n      details\n      dateOne\n      timeOne\n      approved\n      user{\n        name\n        lastName\n        email\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SINGLE_REQUESTS_CALENDAR_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var CalendarComponentStyles = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "CalendarComponent__CalendarComponentStyles",
  componentId: "sc-13b5io5-0"
})(["height:20px;padding-left:5px;padding-right:5px;padding-top:2px;padding-bottom:2px;"]);
var CalendarStyled = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "CalendarComponent__CalendarStyled",
  componentId: "sc-13b5io5-1"
})(["a{font-size:10px;margin:0;color:white;vertical-align:top;}"]);

var CalendarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarComponent, _Component);

  function CalendarComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      view: "day",
      date: new Date(),
      width: 500,
      cal_events: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDate", function (date) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default.a.utc(date).toDate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertTime", function (time24) {
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

    return _this;
  }

  _createClass(CalendarComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarStyled, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
          query: SINGLE_REQUESTS_CALENDAR_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, " ... loading ");
          if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, " ERROR: ", error.message);
          var request = data.request;
          console.log(request);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, request.email === me.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: {
              pathname: '/request-item',
              query: {
                id: request.id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalendarComponentStyles, {
            style: {
              background: request.approved === "no" ? "red" : request.approved === "yes" ? "black" : "gold"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, _this2.convertTime(request.timeOne), " with ", request.name)))));
        })));
      });
    }
  }]);

  return CalendarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CalendarComponent);

/***/ }),

/***/ "./components/CalendarList.js":
/*!************************************!*\
  !*** ./components/CalendarList.js ***!
  \************************************/
/*! exports provided: default, ALL_REQUESTS_CALENDAR_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REQUESTS_CALENDAR_QUERY", function() { return ALL_REQUESTS_CALENDAR_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-big-calendar */ "react-big-calendar");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CalendarStyles */ "./components/styles/CalendarStyles.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CalendarComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CalendarComponent */ "./components/CalendarComponent.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/CalendarList.js";

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
  var data = _taggedTemplateLiteral(["\n  query ALL_REQUESTS_CALENDAR_QUERY {\n    requests(orderBy: createdAt_DESC) {\n      id\n      name\n      email\n      details\n      dateOne\n      timeOne\n      approved\n      user{\n        name\n        lastName\n        email\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














moment__WEBPACK_IMPORTED_MODULE_6___default.a.locale("en");
var localizer = react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a.momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_6___default.a);
var allViews = Object.keys(react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a.Views).map(function (k) {
  return react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a.Views[k];
});
var ALL_REQUESTS_CALENDAR_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var CalendarList =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarList, _Component);

  function CalendarList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalendarList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalendarList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "allViews", Object.keys(react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a.Views).map(function (k) {
      return react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a.Views[k];
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      view: "day",
      date: new Date(),
      width: 500,
      cal_events: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDate", function (date, time) {
      var newDate = new Date();
      var dateParts = date.split('-');
      var timeParts = time.split(':');
      var mydate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
      var newDate = moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(mydate).toDate();
      console.log(newDate);
      return newDate;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDatePlusOne", function (date, time) {
      var newDate = new Date();
      var newDatePlusOne = new Date();
      var dateParts = date.split('-');
      var timeParts = time.split(':');
      var mydate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
      var newDate = moment__WEBPACK_IMPORTED_MODULE_6___default.a.utc(mydate).toDate();
      var newDatePlusOne = moment__WEBPACK_IMPORTED_MODULE_6___default()(newDate).add(1, 'h').toDate();
      console.log(newDatePlusOne);
      return newDatePlusOne;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertName", function (name) {
      if (name === null) {
        return '';
      } else {
        return name;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertTime", function (time24) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "eventStyleGetter", function (event, approved, start, end, isSelected) {
      var backgroundColor = '#' + event.hexColor;

      if (event.approved === "no") {
        var style = {
          backgroundColor: 'red',
          borderRadius: '0px',
          opacity: 0.8,
          color: 'white',
          border: '0px',
          display: 'block'
        };
      } else if (event.approved == "yes") {
        var style = {
          backgroundColor: 'black',
          borderRadius: '0px',
          opacity: 0.8,
          color: 'white',
          border: '0px',
          display: 'block'
        };
      } else {
        var style = {
          backgroundColor: 'gold',
          borderRadius: '0px',
          opacity: 0.8,
          color: 'black',
          border: '0px',
          display: 'block'
        };
      }

      return {
        style: style
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectEvent", function (event) {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push({
        pathname: '/request-item',
        query: {
          id: event.id
        }
      });
    });

    return _this;
  }

  _createClass(CalendarList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, "Pending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "black",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, "Approved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "Confirmed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
          query: ALL_REQUESTS_CALENDAR_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              loading = _ref2.loading,
              error = _ref2.error;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              height: 500
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a, {
            events: data.requests.filter(function (request) {
              return request.email === me.email && request.user !== null;
            }).map(function (request, index) {
              return {
                title: _this2.convertTime(request.timeOne) + ' ' + _this2.convertName(request.user.name) + ' ' + _this2.convertName(request.user.email),
                start: _this2.convertDate(request.dateOne, request.timeOne),
                end: _this2.convertDatePlusOne(request.dateOne, request.timeOne),
                approved: request.approved,
                id: request.id
              };
            }),
            max: _lib_dates__WEBPACK_IMPORTED_MODULE_3__["default"].add(_lib_dates__WEBPACK_IMPORTED_MODULE_3__["default"].endOf(new Date(), 'day'), -1, 'hours'),
            defaultDate: new Date(),
            step: 60,
            showMultiDayTimes: true,
            views: ['month', 'week', 'day', 'agenda'],
            onSelectEvent: function onSelectEvent(event) {
              return _this2.handleSelectEvent(event);
            },
            eventPropGetter: _this2.eventStyleGetter,
            localizer: localizer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }));
        }));
      });
    }
  }]);

  return CalendarList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CalendarList);


/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/PleaseSignIn.js":
/*!************************************!*\
  !*** ./components/PleaseSignIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Signin */ "./components/Signin.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/PleaseSignIn.js";





var PleaseSignIn = function PleaseSignIn(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _User__WEBPACK_IMPORTED_MODULE_2__["CURRENT_USER_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Loading...");

    if (!data.me) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    }

    return props.children;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);

/***/ }),

/***/ "./components/Signin.js":
/*!******************************!*\
  !*** ./components/Signin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/Signin.js";

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
          query: _User__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, function (signin, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Sign into your account"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          value: _this2.state.email,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: _this2.state.password,
          onChange: _this2.saveToState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/signup",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "headerLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/resetform",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "headerLink",
          style: {
            float: "right"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Reset Password")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, "Sign In!")));
      });
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/User.js";


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
    query: CURRENT_USER_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), function (payload) {
    return props.children(payload);
  });
};

User.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./components/styles/CalendarStyles.js":
/*!*********************************************!*\
  !*** ./components/styles/CalendarStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* FONT IMPORTS */

var CalendarStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CalendarStyles",
  componentId: "sc-1q2npwv-0"
})(["font-family:'Slabo 27px',serif;.key{display:inline-block;}.key span{display:inline-block;margin-right:10px;}.red{display:inline;padding:0px 8px;background-color:red;margin-right:5px;}.black{display:inline;padding:0px 8px;background-color:black;margin-right:5px;}.gold{display:inline;padding:0px 8px;background-color:gold;margin-right:5px;}.rbc-btn{color:inherit;font:inherit;margin:0;}button.rbc-btn{overflow:visible;text-transform:none;-webkit-appearance:button;cursor:pointer;}button[disabled].rbc-btn{cursor:not-allowed;}button.rbc-input::-moz-focus-inner{border:0;padding:0;}.rbc-calendar{box-sizing:border-box;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;}.rbc-calendar *,.rbc-calendar *:before,.rbc-calendar *:after{box-sizing:inherit;}.rbc-abs-full,.rbc-row-bg{overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;}.rbc-ellipsis,.rbc-event-label,.rbc-row-segment .rbc-event-content,.rbc-show-more{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.rbc-rtl{direction:rtl;}.rbc-off-range{color:#999999;}.rbc-off-range-bg{background:#e5e5e5;}.rbc-header{overflow:hidden;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;text-overflow:ellipsis;white-space:nowrap;padding:0 3px;text-align:center;vertical-align:middle;font-weight:bold;font-size:90%;min-height:0;border-bottom:1px solid #DDD;}.rbc-header + .rbc-header{border-left:1px solid #DDD;}.rbc-rtl .rbc-header + .rbc-header{border-left-width:0;border-right:1px solid #DDD;}.rbc-header > a,.rbc-header > a:active,.rbc-header > a:visited{color:inherit;text-decoration:none;}.rbc-row-content{position:relative;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:4;}.rbc-today{background-color:#eaf6ff;}.rbc-toolbar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:10px;font-size:16px;}.rbc-toolbar .rbc-toolbar-label{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 10px;text-align:center;}.rbc-toolbar button{color:#373a3c;display:inline-block;margin:0;text-align:center;vertical-align:middle;background:none;background-image:none;border:1px solid #ccc;padding:.375rem 1rem;border-radius:4px;line-height:normal;white-space:nowrap;}.rbc-toolbar button:active,.rbc-toolbar button.rbc-active{background-image:none;box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);background-color:#e6e6e6;border-color:#adadad;}.rbc-toolbar button:active:hover,.rbc-toolbar button.rbc-active:hover,.rbc-toolbar button:active:focus,.rbc-toolbar button.rbc-active:focus{color:#373a3c;background-color:#d4d4d4;border-color:#8c8c8c;}.rbc-toolbar button:focus{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;}.rbc-toolbar button:hover{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;}.rbc-btn-group{display:inline-block;white-space:nowrap;}.rbc-btn-group > button:first-child:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:last-child:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child){border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child){border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:not(:first-child):not(:last-child){border-radius:0;}.rbc-btn-group button + button{margin-left:-1px;}.rbc-rtl .rbc-btn-group button + button{margin-left:0;margin-right:-1px;}.rbc-btn-group + .rbc-btn-group,.rbc-btn-group + button{margin-left:10px;}.rbc-event{border:none;box-shadow:none;margin:0;padding:2px 5px;background-color:transparent;border-radius:5px;color:#fff;cursor:pointer;width:100%;text-align:left;}.rbc-slot-selecting .rbc-event{cursor:inherit;pointer-events:none;}.rbc-event.rbc-selected{background-color:#265985;}.rbc-event:focus{outline:5px auto #3b99fc;}.rbc-event-label{font-size:80%;}.rbc-event-overlaps{box-shadow:-1px 1px 5px 0px rgba(51,51,51,0.5);}.rbc-event-continues-prior{border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-event-continues-after{border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-event-continues-earlier{border-top-left-radius:0;border-top-right-radius:0;}.rbc-event-continues-later{border-bottom-left-radius:0;border-bottom-right-radius:0;}.rbc-row{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:20px;}.rbc-row-segment{padding:0 1px 1px 1px;}.rbc-selected-cell{background-color:rgba(0,0,0,0.1);}.rbc-show-more{background-color:rgba(255,255,255,0.3);z-index:4;font-weight:bold;font-size:85%;height:auto;line-height:normal;white-space:nowrap;}.rbc-month-view{position:relative;border:1px solid #DDD;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;height:100%;}.rbc-month-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-month-row{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;overflow:hidden;height:100%;}.rbc-month-row + .rbc-month-row{border-top:1px solid #DDD;}.rbc-date-cell{-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;min-width:0;padding-right:5px;text-align:right;}.rbc-date-cell.rbc-now{font-weight:bold;}.rbc-date-cell > a,.rbc-date-cell > a:active,.rbc-date-cell > a:visited{color:inherit;text-decoration:none;}.rbc-row-bg{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:hidden;}.rbc-day-bg{-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;}.rbc-day-bg + .rbc-day-bg{border-left:1px solid #DDD;}.rbc-rtl .rbc-day-bg + .rbc-day-bg{border-left-width:0;border-right:1px solid #DDD;}.rbc-overlay{position:absolute;z-index:5;border:1px solid #e5e5e5;background-color:#fff;box-shadow:0 5px 15px rgba(0,0,0,0.25);padding:10px;}.rbc-overlay > * + *{margin-top:1px;}.rbc-overlay-header{border-bottom:1px solid #e5e5e5;margin:-10px -10px 5px -10px;padding:2px 10px;}.rbc-agenda-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:auto;}.rbc-agenda-view table.rbc-agenda-table{width:100%;border:1px solid #DDD;border-spacing:0;border-collapse:collapse;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td{padding:5px 10px;vertical-align:top;}.rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell{padding-left:15px;padding-right:15px;text-transform:lowercase;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left:1px solid #DDD;}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left-width:0;border-right:1px solid #DDD;}.rbc-agenda-view table.rbc-agenda-table tbody > tr + tr{border-top:1px solid #DDD;}.rbc-agenda-view table.rbc-agenda-table thead > tr > th{padding:3px 5px;text-align:left;border-bottom:1px solid #DDD;}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th{text-align:right;}.rbc-agenda-time-cell{text-transform:lowercase;}.rbc-agenda-time-cell .rbc-continues-after:after{content:' \xBB';}.rbc-agenda-time-cell .rbc-continues-prior:before{content:'\xAB ';}.rbc-agenda-date-cell,.rbc-agenda-time-cell{white-space:nowrap;}.rbc-agenda-event-cell{width:100%;}.rbc-time-column{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100%;}.rbc-time-column .rbc-timeslot-group{-webkit-flex:1;-ms-flex:1;flex:1;}.rbc-timeslot-group{border-bottom:1px solid #DDD;min-height:40px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.rbc-time-gutter,.rbc-header-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-label{padding:0 5px;}.rbc-day-slot{position:relative;}.rbc-day-slot .rbc-events-container{bottom:0;left:0;position:absolute;right:0;margin-right:10px;top:0;}.rbc-day-slot .rbc-events-container.rbc-is-rtl{left:10px;right:0;}.rbc-day-slot .rbc-event{border:1px solid #265985;display:-webkit-flex;display:-ms-flexbox;display:flex;max-height:100%;min-height:20px;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;overflow:hidden;position:absolute;}.rbc-day-slot .rbc-event-label{-webkit-flex:none;-ms-flex:none;flex:none;padding-right:5px;width:auto;}.rbc-day-slot .rbc-event-content{width:100%;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;word-wrap:break-word;line-height:1;height:100%;min-height:1em;}.rbc-day-slot .rbc-time-slot{border-top:1px solid #f7f7f7;}.rbc-time-view-resources .rbc-time-gutter,.rbc-time-view-resources .rbc-time-header-gutter{position:-webkit-sticky;position:sticky;left:0;background-color:white;border-right:1px solid #DDD;z-index:10;margin-right:-1px;}.rbc-time-view-resources .rbc-time-header{overflow:hidden;}.rbc-time-view-resources .rbc-time-header-content{min-width:auto;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;}.rbc-time-view-resources .rbc-time-header-cell-single-day{display:none;}.rbc-time-view-resources .rbc-day-slot{min-width:140px;}.rbc-time-view-resources .rbc-header,.rbc-time-view-resources .rbc-day-bg{width:140px;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;-webkit-flex-basis:0 px;-ms-flex-preferred-size:0 px;flex-basis:0 px;}.rbc-time-header-content + .rbc-time-header-content{margin-left:-1px;}.rbc-time-slot{-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;}.rbc-time-slot.rbc-now{font-weight:bold;}.rbc-day-header{text-align:center;}.rbc-slot-selection{z-index:10;position:absolute;background-color:rgba(0,0,0,0.5);color:white;font-size:75%;width:100%;padding:3px;}.rbc-slot-selecting{cursor:move;}.rbc-time-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;border:1px solid #DDD;min-height:0;}.rbc-time-view .rbc-time-gutter{white-space:nowrap;}.rbc-time-view .rbc-allday-cell{box-sizing:content-box;width:100%;height:100%;position:relative;}.rbc-time-view .rbc-allday-cell + .rbc-allday-cell{border-left:1px solid #DDD;}.rbc-time-view .rbc-allday-events{position:relative;z-index:4;}.rbc-time-view .rbc-row{box-sizing:border-box;min-height:20px;}.rbc-time-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-time-header.rbc-overflowing{border-right:1px solid #DDD;}.rbc-rtl .rbc-time-header.rbc-overflowing{border-right-width:0;border-left:1px solid #DDD;}.rbc-time-header > .rbc-row:first-child{border-bottom:1px solid #DDD;}.rbc-time-header > .rbc-row.rbc-row-resource{border-bottom:1px solid #DDD;}.rbc-time-header-cell-single-day{display:none;}.rbc-time-header-content{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-left:1px solid #DDD;}.rbc-rtl .rbc-time-header-content{border-left-width:0;border-right:1px solid #DDD;}.rbc-time-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:100%;border-top:2px solid #DDD;overflow-y:auto;position:relative;}.rbc-time-content > .rbc-time-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-time-content > * + * > *{border-left:1px solid #DDD;}.rbc-rtl .rbc-time-content > * + * > *{border-left-width:0;border-right:1px solid #DDD;}.rbc-time-content > .rbc-day-slot{width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.rbc-current-time-indicator{position:absolute;z-index:3;left:0;right:0;height:1px;background-color:#74ad31;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CalendarStyles);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["font-family:'Slabo 27px',serif;padding:20px;font-size:15px;line-height:1.5;font-weight:600;h2{margin:0;}label{display:block;margin-bottom:1rem;padding-bottom:5px;}input,textarea,select{width:100%;padding:1.5rem;font-size:12px;border:1px solid black;border-radius:25px;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:", ";color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;margin-top:15px;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}[type=\"date\"]{background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat;padding-right:0px;}[type=\"date\"]::-webkit-inner-spin-button{display:none;}[type=\"date\"]::-webkit-calendar-picker-indicator{opacity:0;}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, perPage, prodStripe, devStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodStripe", function() { return prodStripe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devStripe", function() { return devStripe; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://palazar-yoga-prod.herokuapp.com/";
var perPage = 10;
var prodStripe = "pk_live_rEOt0HJLqQuzVcdyuJ8AppBZ";
var devStripe = "pk_test_K3j8JU1o7WrtlpA5zY8bavrR";

/***/ }),

/***/ "./lib/dates.js":
/*!**********************!*\
  !*** ./lib/dates.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_arithmetic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-arithmetic */ "date-arithmetic");
/* harmony import */ var date_arithmetic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_arithmetic__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-fallthrough: off */

var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
var MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var dates = _objectSpread({}, date_arithmetic__WEBPACK_IMPORTED_MODULE_0___default.a, {
  monthsInYear: function monthsInYear(year) {
    var date = new Date(year, 0, 1);
    return MONTHS.map(function (i) {
      return dates.month(date, i);
    });
  },
  firstVisibleDay: function firstVisibleDay(date, localizer) {
    var firstOfMonth = dates.startOf(date, 'month');
    return dates.startOf(firstOfMonth, 'week', localizer.startOfWeek());
  },
  lastVisibleDay: function lastVisibleDay(date, localizer) {
    var endOfMonth = dates.endOf(date, 'month');
    return dates.endOf(endOfMonth, 'week', localizer.startOfWeek());
  },
  visibleDays: function visibleDays(date, localizer) {
    var current = dates.firstVisibleDay(date, localizer),
        last = dates.lastVisibleDay(date, localizer),
        days = [];

    while (dates.lte(current, last, 'day')) {
      days.push(current);
      current = dates.add(current, 1, 'day');
    }

    return days;
  },
  ceil: function ceil(date, unit) {
    var floor = dates.startOf(date, unit);
    return dates.eq(floor, date) ? floor : dates.add(floor, 1, unit);
  },
  range: function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var current = start,
        days = [];

    while (dates.lte(current, end, unit)) {
      days.push(current);
      current = dates.add(current, 1, unit);
    }

    return days;
  },
  merge: function merge(date, time) {
    if (time == null && date == null) return null;
    if (time == null) time = new Date();
    if (date == null) date = new Date();
    date = dates.startOf(date, 'day');
    date = dates.hours(date, dates.hours(time));
    date = dates.minutes(date, dates.minutes(time));
    date = dates.seconds(date, dates.seconds(time));
    return dates.milliseconds(date, dates.milliseconds(time));
  },
  eqTime: function eqTime(dateA, dateB) {
    return dates.hours(dateA) === dates.hours(dateB) && dates.minutes(dateA) === dates.minutes(dateB) && dates.seconds(dateA) === dates.seconds(dateB);
  },
  isJustDate: function isJustDate(date) {
    return dates.hours(date) === 0 && dates.minutes(date) === 0 && dates.seconds(date) === 0 && dates.milliseconds(date) === 0;
  },
  duration: function duration(start, end, unit, firstOfWeek) {
    if (unit === 'day') unit = 'date';
    return Math.abs(dates[unit](start, undefined, firstOfWeek) - dates[unit](end, undefined, firstOfWeek));
  },
  diff: function diff(dateA, dateB, unit) {
    if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB); // the .round() handles an edge case
    // with DST where the total won't be exact
    // since one day in the range may be shorter/longer by an hour

    return Math.round(Math.abs(+dates.startOf(dateA, unit) / MILLI[unit] - +dates.startOf(dateB, unit) / MILLI[unit]));
  },
  total: function total(date, unit) {
    var ms = date.getTime(),
        div = 1;

    switch (unit) {
      case 'week':
        div *= 7;

      case 'day':
        div *= 24;

      case 'hours':
        div *= 60;

      case 'minutes':
        div *= 60;

      case 'seconds':
        div *= 1000;
    }

    return ms / div;
  },
  week: function week(date) {
    var d = new Date(date);
    d.setHours(0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    return Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
  },
  today: function today() {
    return dates.startOf(new Date(), 'day');
  },
  yesterday: function yesterday() {
    return dates.add(dates.startOf(new Date(), 'day'), -1, 'day');
  },
  tomorrow: function tomorrow() {
    return dates.add(dates.startOf(new Date(), 'day'), 1, 'day');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (dates);

/***/ }),

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CalendarList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CalendarList */ "./components/CalendarList.js");
/* harmony import */ var _components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PleaseSignIn */ "./components/PleaseSignIn.js");
var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/pages/calendar.js";





var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PleaseSignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CalendarList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/calendar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/calendar.js */"./pages/calendar.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "date-arithmetic":
/*!**********************************!*\
  !*** external "date-arithmetic" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-arithmetic");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-big-calendar":
/*!*************************************!*\
  !*** external "react-big-calendar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=calendar.js.map