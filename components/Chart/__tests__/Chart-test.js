"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _Grommet = require("../../Grommet");

var _Box = require("../../Box");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VALUES = [{
  value: [1, 60],
  label: 'sixty'
}, {
  value: [0, 0],
  label: 'zero'
}];
var UNDEFINED_VALUES = [{
  value: [2, 60],
  label: 'sixty'
}, {
  value: [1, undefined]
}, {
  value: [0, 0],
  label: 'zero'
}];
describe('Chart', function () {
  test('default', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('type', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      width: "large"
    }, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'full'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'fill'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      values: VALUES
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('thickness', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      thickness: "xlarge",
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('cap', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      round: true,
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      round: true,
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('gap', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      width: "large"
    }, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "small",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "medium",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      size: {
        width: 'auto'
      },
      gap: "large",
      values: VALUES
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dash', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      dash: true,
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: "brand",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: {
        color: 'brand',
        opacity: 'strong'
      },
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      color: [{
        value: 0,
        color: 'brand'
      }, {
        value: 60,
        color: 'border'
      }],
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('pad', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      pad: "xsmall",
      values: VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      pad: {
        horizontal: 'medium',
        vertical: 'small'
      },
      values: VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('undefined values', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_Grommet.Grommet, null, /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "bar",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "line",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "area",
      values: UNDEFINED_VALUES
    }), /*#__PURE__*/_react["default"].createElement(_.Chart, {
      type: "point",
      values: UNDEFINED_VALUES
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('calcs', function () {
    var result = (0, _.calcs)([1, 2, 3]);
    expect(result).toMatchSnapshot();
  });
});