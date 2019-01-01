webpackHotUpdate("static/development/pages/update.js",{

/***/ "./components/UserDetailsUpdate.js":
/*!*****************************************!*\
  !*** ./components/UserDetailsUpdate.js ***!
  \*****************************************/
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
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");

var _jsxFileName = "/Users/alistairmccormick/Documents/react/peve/sick-fits/frontend/components/UserDetailsUpdate.js";

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
  var data = _taggedTemplateLiteral(["\n  mutation updateUserInfo($name: String, $lastName: String, $email: String, $instagramHandle: String, $shop: String, $profileImage: String, $image: String, $price: Int, $bio: String, $userId: ID!) {\n    updateUserInfo(name: $name, lastName: $lastName, email: $email, instagramHandle: $instagramHandle, shop: $shop, profileImage: $profileImage, image: $image, price: $price, bio: $bio, userId: $userId) {\n      id\n      name\n      lastName\n      email\n      instagramHandle\n      shop\n      profileImage\n      image\n      price\n      bio\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }














var UPDATE_USER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

var UserDetailsUpdate =
/*#__PURE__*/
function (_Component) {
  _inherits(UserDetailsUpdate, _Component);

  function UserDetailsUpdate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserDetailsUpdate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserDetailsUpdate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUserChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) * 100 : value;

      _this.setState(_defineProperty({}, name, val));

      _this.setState({
        name: nameVal.value,
        lastName: lastName.value,
        email: email.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "divideByHundred", function (value) {
      var newVal = value / 100;
      return newVal;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateUserInfo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, updateUserInfoMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(_this.state);
                _context.next = 4;
                return updateUserInfoMutation({
                  variables: _objectSpread({}, _this.state)
                });

              case 4:
                res = _context.sent;
                console.log("updated");

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
                console.log('uploading file ..... ');
                files = e.target.files;
                data = new FormData();
                data.append('file', files[0]);
                data.append('upload_preset', 'sickfits');
                _context2.next = 7;
                return fetch('https://api.cloudinary.com/v1_1/a1995/image/upload', {
                  method: 'POST',
                  body: data
                });

              case 7:
                res = _context2.sent;
                _context2.next = 10;
                return res.json();

              case 10:
                file = _context2.sent;
                console.log(file);

                _this.setState({
                  profileImage: file.secure_url,
                  image: file.eager[0].secure_url
                });

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

  _createClass(UserDetailsUpdate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, function (_ref3) {
        var me = _ref3.data.me;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Account Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
          mutation: UPDATE_USER_MUTATION,
          variables: _objectSpread({}, _this2.state, {
            userId: _this2.props.id
          }),
          refetchQueries: [{
            query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
          }],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, function (updateUserInfo, _ref4) {
          var loading = _ref4.loading,
              error = _ref4.error;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onSubmit: function onSubmit(e) {
              _this2.updateUserInfo(e, updateUserInfo);

              next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
                pathname: '/me'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, "First Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "nameVal",
            name: "nameVal",
            placeholder: "name",
            required: true,
            defaultValue: me.name,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "lastName",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
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
              lineNumber: 115
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "email",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "email",
            name: "email",
            placeholder: "email",
            required: true,
            defaultValue: me.email,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, "Price for appointment", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "number",
            min: "0",
            step: "1",
            "data-number-to-fixed": "2",
            "data-number-stepfactor": "100",
            id: "price",
            name: "price",
            placeholder: "price",
            required: true,
            defaultValue: divideByHundred(me.price),
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "bio",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, "Bio", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
            id: "bio",
            name: "bio",
            placeholder: "Enter a bio",
            required: true,
            defaultValue: me.bio,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "instagramHandle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, "Instagram Handle", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "instagramHandle",
            name: "instagramHandle",
            placeholder: "Instagram Handle",
            required: true,
            defaultValue: me.instagramHandle,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "shop",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }, "Shop", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            id: "shop",
            name: "shop",
            placeholder: "Shop",
            required: true,
            defaultValue: me.shop,
            onChange: _this2.handleUserChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "profileImage",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, "Profile Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "file",
            id: "profileImage",
            name: "profileImage",
            placeholder: "Upload a Profile image",
            onChange: _this2.uploadFile,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: _this2.state.image,
            alt: "upload preview",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes"))));
        }), me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), !me && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "Sorry this is not your account please move along ")));
      }));
    }
  }]);

  return UserDetailsUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserDetailsUpdate);

/***/ })

})
//# sourceMappingURL=update.js.8072dfe2a968f0ba270c.hot-update.js.map