"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopRight = exports.TopBox = exports.BoxLeft = void 0;
var _react = _interopRequireDefault(require("react"));
require("./module2.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CSS 파일 참조

var BoxLeft = exports.BoxLeft = function BoxLeft(_ref) {
  var leftBoxes = _ref.leftBoxes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "box_left"
  }, leftBoxes.map(function (box, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "box",
      key: index
    }, /*#__PURE__*/_react["default"].createElement("br", null), box.title && /*#__PURE__*/_react["default"].createElement("a", {
      href: "#"
    }, box.title), /*#__PURE__*/_react["default"].createElement("h1", null, box.content ? box.content.split("\n").map(function (line, i) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: i
      }, line, /*#__PURE__*/_react["default"].createElement("br", null));
    }) : box.title));
  }));
};
var TopBox = exports.TopBox = function TopBox(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "top_box"
  }, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("a", null, data.category1), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("a", null, data.category2), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h1", null, data.content.split("\n").map(function (line, i) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: i
    }, line, /*#__PURE__*/_react["default"].createElement("br", null));
  })));
};
var TopRight = exports.TopRight = function TopRight(_ref3) {
  var images = _ref3.images;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "top_right"
  }, images.map(function (src, index) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      key: index,
      src: process.env.PUBLIC_URL + src,
      alt: "right".concat(index + 1)
    });
  }));
};