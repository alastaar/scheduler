webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./components/CalendarList.js":
/*!************************************!*\
  !*** ./components/CalendarList.js ***!
  \************************************/
/*! exports provided: default, ALL_REQUESTS_CALENDAR_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_REQUESTS_CALENDAR_QUERY", function() { return ALL_REQUESTS_CALENDAR_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dates */ "./lib/dates.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/lib/index.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CalendarStyles */ "./components/styles/CalendarStyles.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _CalendarComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CalendarComponent */ "./components/CalendarComponent.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDate", function (date) {
      return moment__WEBPACK_IMPORTED_MODULE_6___default()(date);
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

      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, function (_ref) {
        var me = _ref.data.me;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CalendarStyles__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "key",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, "Pending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "black",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, "Approved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "gold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Confirmed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
          query: ALL_REQUESTS_CALENDAR_QUERY,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
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
              lineNumber: 132
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_5___default.a, {
            events: data.requests.filter(function (request) {
              return request.email === me.email;
            }).map(function (request, index) {
              return {
                title: _this2.convertTime(request.timeOne) + ' ' + request.user.name + ' ' + request.user.email,
                start: _this2.convertDate(request.dateOne),
                end: _this2.convertDate(request.dateOne),
                approved: request.approved,
                id: request.id
              };
            }),
            max: _lib_dates__WEBPACK_IMPORTED_MODULE_3__["default"].add(_lib_dates__WEBPACK_IMPORTED_MODULE_3__["default"].endOf(new Date(), 'day'), -1, 'hours'),
            defaultDate: new Date(),
            step: 60,
            showMultiDayTimes: true,
            views: ['month', 'day', 'agenda'],
            onSelectEvent: function onSelectEvent(event) {
              return _this2.handleSelectEvent(event);
            },
            eventPropGetter: _this2.eventStyleGetter,
            localizer: localizer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
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


/***/ })

})
//# sourceMappingURL=calendar.js.1304c3094d3e1f0f0a07.hot-update.js.map