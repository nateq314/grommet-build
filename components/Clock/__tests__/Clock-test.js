"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DURATION = 'PT18H23M34S';
var TIME = 'T18:23:34';
var TIME2 = 'T18:23';
var DATE = '2018-02-22T18:23:34-10:00';
describe('Clock', function () {
  afterEach(_react2.cleanup);
  test('time', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: DURATION
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: TIME
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: TIME2
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: DATE
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('hourLimit', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: DURATION,
      hourLimit: 12
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      run: false,
      type: "digital",
      time: DURATION,
      hourLimit: 24
    })));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('run', function (done) {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Clock, {
      type: "analog",
      run: "forward",
      time: DURATION
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      type: "analog",
      run: "backward",
      time: DURATION
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      type: "digital",
      run: "forward",
      time: DURATION
    }), /*#__PURE__*/_react["default"].createElement(_.Clock, {
      type: "digital",
      run: "backward",
      time: DURATION
    }))),
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot(); // give some time for the clock to move and use the callback

    setTimeout(function () {
      expect(container.firstChild).toMatchSnapshot();
      done();
    }, 1300);
  });
  ['analog', 'digital'].forEach(function (type) {
    return ['hours', 'minutes', 'seconds'].forEach(function (precision) {
      return ['xsmall', 'small', 'medium', 'large', 'xlarge'].forEach(function (size) {
        return test("type " + type + " precision " + precision + " size " + size, function () {
          var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Clock, {
            run: false,
            type: type,
            precision: precision,
            size: size,
            time: DURATION
          })));

          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});