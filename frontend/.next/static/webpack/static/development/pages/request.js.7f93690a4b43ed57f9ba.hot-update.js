webpackHotUpdate("static/development/pages/request.js",{

/***/ "./components/RequestArtist.js":
/*!*************************************!*\
  !*** ./components/RequestArtist.js ***!
  \*************************************/
/*! exports provided: default, CREATE_REQUEST_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_REQUEST_MUTATION", function() { return CREATE_REQUEST_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_DateStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/DateStyles */ "./components/styles/DateStyles.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _UpdateItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./UpdateItem */ "./components/UpdateItem.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/RequestArtist.js";

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query {\n    gettingRequested {\n      id\n      email\n      name\n      lastName\n      instagramHandle\n      shop\n      price\n      profileImage\n      blackOut\n      blackOutRanges {\n        id\n        weekday\n        begin\n        end\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_REQUEST_MUTATION(\n    $requestedId: String\n    $dateOne: String!\n    $timeOne: String!\n    $dateTwo: String\n    $timeTwo: String\n    $dateThree: String\n    $timeThree: String\n    $details: String\n    $referenceImage: String\n    $approved: String\n  ) {\n    createRequest(\n      requestedId: $requestedId,\n      dateOne: $dateOne\n      timeOne: $timeOne\n      dateTwo: $dateTwo\n      timeTwo: $timeTwo\n      dateThree: $dateThree\n      timeThree: $timeThree\n      details: $details\n      referenceImage: $referenceImage\n      approved: $approved\n    ){\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var CREATE_REQUEST_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var REQUESTING_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
var TimeDate = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "RequestArtist__TimeDate",
  componentId: "otcge5-0"
})(["display:inline-block;border-bottom:1px solid grey;margin-bottom:25px;width:100%;input{display:inline-block;}label{display:inherit;width:300px;margin-bottom:25px;}"]);

var RequestArtist =
/*#__PURE__*/
function (_Component) {
  _inherits(RequestArtist, _Component);

  function RequestArtist() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RequestArtist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RequestArtist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      requestedId: _this.props.id,
      referenceImage: '',
      approved: 'no',
      imageDone: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentDate", new Date());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "gatherDates", function (singleDays, extendedDays) {
      var blockDays = singleDays;
      var tempArray = new Array();
      var finalArray = new Array();
      var twoYears = new Date();
      var closestDay = new Date();
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var index = 0;

      for (var i = 0; i < extendedDays.length; i++) {
        if (extendedDays[i].weekday != "") {
          var dayofweek = extendedDays[i].weekday;

          for (var j = 0; j < days.length; j++) {
            if (days[j] == dayofweek) {
              index = j;
            }
          }

          closestDay.setDate(closestDay.getDate() + (index + 7 - closestDay.getDay()) % 7);
          twoYears = moment__WEBPACK_IMPORTED_MODULE_8___default()(closestDay).add(365, 'days');

          while (closestDay <= twoYears) {
            tempArray.push(moment__WEBPACK_IMPORTED_MODULE_8___default()(closestDay).format('YYYY-MM-DD'));
            closestDay = moment__WEBPACK_IMPORTED_MODULE_8___default()(closestDay).add(7, 'days');
          }
        } else if (extendedDays[i].begin != "" && extendedDays[i].end != "") {
          var beginDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(extendedDays[i].begin);
          var endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(extendedDays[i].end);

          while (beginDate <= endDate) {
            tempArray.push(moment__WEBPACK_IMPORTED_MODULE_8___default()(beginDate).format('YYYY-MM-DD'));
            beginDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(beginDate).add(1, 'days');
          }
        } else {}
      }

      finalArray = blockDays.concat(tempArray);
      return finalArray;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDate", function (date) {
      var complex = moment__WEBPACK_IMPORTED_MODULE_8___default.a.utc(date).toDate();
      var almostDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(complex).add(1, 'd').toDate();
      var newDate = new Date(almostDate),
          month = ("0" + (newDate.getMonth() + 1)).slice(-2),
          day = ("0" + newDate.getDate()).slice(-2);
      return [newDate.getFullYear(), month, day].join("-");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertDateSubmit", function (date) {
      var complex = moment__WEBPACK_IMPORTED_MODULE_8___default.a.utc(date).toDate();
      var newDate = new Date(complex),
          month = ("0" + (newDate.getMonth() + 1)).slice(-2),
          day = ("0" + newDate.getDate()).slice(-2);
      return [newDate.getFullYear(), month, day].join("-");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertTimeSubmit", function (date) {
      var complex = date.toTimeString().split(' ')[0];
      return complex;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInfoChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) * 100 : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeDateOne", function (e) {
      // var complex = this.convertDateSubmit(e);
      _this.setState({
        dateOne: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeTimeOne", function (e) {
      // var complex = e.toTimeString().split(' ')[0];
      _this.setState({
        timeOne: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeDateTwo", function (e) {
      // var complex = this.convertDateSubmit(e);
      _this.setState({
        dateTwo: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeTimeTwo", function (e) {
      // var complex = e.toTimeString().split(' ')[0];
      _this.setState({
        timeTwo: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeDateThree", function (e) {
      // var complex = this.convertDateSubmit(e);
      _this.setState({
        dateThree: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeTimeThree", function (e) {
      // var complex = e.toTimeString().split(' ')[0];
      _this.setState({
        timeThree: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createRequest",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, createRequestMutation) {
        var complexOne, complexTwo, complexThree, complexFour, complexFive, complexSix, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return _this.convertDateSubmit(_this.state.dateOne);

              case 3:
                complexOne = _context.sent;
                _context.next = 6;
                return _this.convertDateSubmit(_this.state.dateTwo);

              case 6:
                complexTwo = _context.sent;
                _context.next = 9;
                return _this.convertDateSubmit(_this.state.dateThree);

              case 9:
                complexThree = _context.sent;
                _context.next = 12;
                return _this.convertTimeSubmit(_this.state.timeOne);

              case 12:
                complexFour = _context.sent;
                _context.next = 15;
                return _this.convertTimeSubmit(_this.state.timeTwo);

              case 15:
                complexFive = _context.sent;
                _context.next = 18;
                return _this.convertTimeSubmit(_this.state.timeThree);

              case 18:
                complexSix = _context.sent;

                if (!(_this.state.imageDone == true)) {
                  _context.next = 25;
                  break;
                }

                _context.next = 22;
                return createRequestMutation({
                  variables: _objectSpread({}, _this.state, {
                    dateOne: complexOne,
                    dateTwo: complexTwo,
                    dateThree: complexThree,
                    timeOne: complexFour,
                    timeTwo: complexFive,
                    timeThree: complexSix
                  })
                });

              case 22:
                res = _context.sent;
                _context.next = 27;
                break;

              case 25:
                alert("Image has not uploaded yet. Please try resubmitting.");

                _this.setState({
                  imageDone: false
                });

              case 27:
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  imageDone: false
                });

                console.log('uploading file ..... ');
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);
                data.append('upload_preset', 'sickfits');
                _context2.next = 8;
                return fetch('https://api.cloudinary.com/v1_1/a1995/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 8:
                res = _context2.sent;
                _context2.next = 11;
                return res.json();

              case 11:
                file = _context2.sent;

                if (file) {
                  _this.setState({
                    referenceImage: file.secure_url,
                    imageDone: true
                  });
                }

              case 13:
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

  _createClass(RequestArtist, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: REQUESTING_USER_QUERY,
        variables: {
          id: this.props.id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, function (_ref3) {
        var data = _ref3.data,
            error = _ref3.error,
            loading = _ref3.loading;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, " ... loading ");
        if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        });
        var user = data.gettingRequested;
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: CREATE_REQUEST_MUTATION,
          variables: _this2.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }, function (createRequest, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
                        e.preventDefault;
                        _context3.next = 3;
                        return _this2.createRequest(e, createRequest);

                      case 3:
                        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push({
                          pathname: '/ur-request'
                        });

                      case 4:
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
              lineNumber: 259
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 267
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_DateStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 268
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          }, "Requesting ", user.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            },
            __self: this
          }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(user.price), " to book"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            },
            __self: this
          }, "First Available"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeDate, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "dateOne",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          }, "Date: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "date",
            id: "dateOne",
            name: "dateOne",
            placeholder: "dateOne",
            onChange: _this2.handleChangeDateOne,
            minDate: _this2.currentDate,
            excludeDates: _this2.gatherDates(user.blackOut, user.blackOutRanges.map(function (blackOutItem) {
              return blackOutItem;
            })),
            selected: _this2.state.dateOne,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 276
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "timeOne",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 287
            },
            __self: this
          }, "Time: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "time",
            id: "timeOne",
            name: "timeOne",
            showTimeSelect: true,
            showTimeSelectOnly: true,
            timeIntervals: 15,
            dateFormat: "h:mm aa",
            timeCaption: "Time",
            onChange: _this2.handleChangeTimeOne,
            selected: _this2.state.timeOne,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 289
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            },
            __self: this
          }, "Second Available"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeDate, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "dateTwo",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            },
            __self: this
          }, "Date: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "date",
            id: "dateTwo",
            name: "dateTwo",
            placeholder: "dateTwo",
            onChange: _this2.handleChangeDateTwo,
            minDate: _this2.currentDate,
            excludeDates: _this2.gatherDates(user.blackOut, user.blackOutRanges.map(function (blackOutItem) {
              return blackOutItem;
            })),
            selected: _this2.state.dateTwo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "timeTwo",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            },
            __self: this
          }, "Time: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "time",
            id: "timeTwo",
            name: "timeTwo",
            placeholder: "timeTwo",
            showTimeSelect: true,
            showTimeSelectOnly: true,
            timeIntervals: 15,
            dateFormat: "h:mm aa",
            timeCaption: "Time",
            onChange: _this2.handleChangeTimeTwo,
            selected: _this2.state.timeTwo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 336
            },
            __self: this
          }, "Third Available"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeDate, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 337
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "dateThree",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }, "Date: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "date",
            id: "dateThree",
            name: "dateThree",
            style: {
              width: 200
            },
            placeholder: "dateThree",
            onChange: _this2.handleChangeDateThree,
            minDate: _this2.currentDate,
            excludeDates: _this2.gatherDates(user.blackOut, user.blackOutRanges.map(function (blackOutItem) {
              return blackOutItem;
            })),
            selected: _this2.state.dateThree,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 340
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "timeThree",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 352
            },
            __self: this
          }, "Time: \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            type: "time",
            id: "timeThree",
            name: "timeThree",
            style: {
              width: 200
            },
            showTimeSelect: true,
            showTimeSelectOnly: true,
            timeIntervals: 15,
            dateFormat: "h:mm aa",
            timeCaption: "Time",
            onChange: _this2.handleChangeTimeThree,
            selected: _this2.state.timeThree,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 354
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 370
            },
            __self: this
          }, "Details", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
            type: "text",
            id: "details",
            name: "details",
            placeholder: "Details, be specific!",
            required: true,
            defaultValue: _this2.state.details,
            onChange: _this2.handleInfoChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "referenceImage",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 383
            },
            __self: this
          }, "Reference Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            id: "referenceImage",
            name: "referenceImage",
            placeholder: "Upload an image",
            onChange: _this2.uploadFile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385
            },
            __self: this
          }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: _this2.state.image,
            alt: "upload preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 386
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 389
            },
            __self: this
          }, "Submi", loading ? 'ing' : 't', " Appointment Request"))));
        });
      });
    }
  }]);

  return RequestArtist;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestArtist);


/***/ })

})
//# sourceMappingURL=request.js.7f93690a4b43ed57f9ba.hot-update.js.map