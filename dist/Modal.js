"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Modal = function Modal(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close-button",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("p", null, message)));
};
var _default = exports["default"] = Modal;