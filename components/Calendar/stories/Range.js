"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RangeCalendar = function RangeCalendar() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Calendar, {
    dates: [['2020-04-03', '2020-04-08']],
    range: true
  })));
};

(0, _react2.storiesOf)('Calendar', module).add('Range', function () {
  return /*#__PURE__*/_react["default"].createElement(RangeCalendar, null);
});