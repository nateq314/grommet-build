"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RenderedList = function RenderedList() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.List, {
    data: _data.data.slice(0, 10),
    primaryKey: function primaryKey(item) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
        size: "large",
        weight: "bold"
      }, item.entry);
    },
    secondaryKey: function secondaryKey(item) {
      return /*#__PURE__*/_react["default"].createElement(_grommet.Text, {
        size: "small",
        color: "dark-4"
      }, item.location);
    }
  })));
};

(0, _react2.storiesOf)('List', module).add('key render', function () {
  return /*#__PURE__*/_react["default"].createElement(RenderedList, null);
});