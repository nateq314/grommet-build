"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = [];

for (var i = 0; i < 7; i += 1) {
  var v = Math.sin(i / 2.0);
  var digits = (i % 12 + 1).toString().padStart(2, 0);
  data.push({
    // explore variations in date format by changing the xAxis key to
    // the timer period you are interested in
    second: "2020-05-15T08:04:" + digits,
    minute: "2020-05-15T08:" + digits + ":00",
    hour: "2020-05-15T" + digits + ":00:00",
    day: "2020-05-" + digits,
    month: "2020-" + digits + "-15",
    year: "20" + digits + "-01-15",
    // explore variations in yAxis value handling by changing the chart key
    // to one of these
    percent: Math.abs(v * 100),
    // make yAxis suffix '%'
    amount: i * 111111 // make yAxis prefix '$'

  });
}

var AxesDataChart = function AxesDataChart() {
  return /*#__PURE__*/_react["default"].createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, /*#__PURE__*/_react["default"].createElement(_grommet.Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/_react["default"].createElement(_grommet.DataChart, {
    data: data,
    chart: {
      key: 'percent',
      type: 'bar'
    },
    xAxis: {
      key: 'day',
      guide: true
    },
    yAxis: {
      guide: true,
      labels: 3,
      suffix: '%'
    }
  })));
};

(0, _react2.storiesOf)('DataChart', module).add('Axes', function () {
  return /*#__PURE__*/_react["default"].createElement(AxesDataChart, null);
});