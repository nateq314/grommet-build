import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Grommet } from '../../Grommet';
import { Meter } from '..';
var VALUES = [{
  value: 20,
  label: 'twenty',
  onHover: function onHover() {}
}];
describe('Meter', function () {
  test('default', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, null)));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('basic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('many values', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      values: [{
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }, {
        value: 5
      }]
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('type', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      type: "bar",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('size', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      size: "small",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      size: "large",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      size: "24px",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "xsmall",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "small",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "medium",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "large",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "xlarge",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      size: "55px",
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('thickness', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      thickness: "xlarge",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      thickness: "55px",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "xsmall",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "small",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "medium",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "large",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "xlarge",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      thickness: "55px",
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('round', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      round: true,
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      round: true,
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('background', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(Grommet, null, /*#__PURE__*/React.createElement(Meter, {
      background: "light-3",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      background: {
        color: 'light-3',
        opacity: 'medium'
      },
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      background: "light-3",
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      type: "circle",
      background: {
        color: 'light-3',
        opacity: 'medium'
      },
      values: VALUES
    }), /*#__PURE__*/React.createElement(Meter, {
      background: {
        color: 'light-3',
        opacity: 0.2
      },
      values: VALUES
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});