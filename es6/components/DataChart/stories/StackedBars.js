import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, DataChart, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';
var data = [];

for (var i = 0; i < 7; i += 1) {
  data.push({
    date: "2020-07-" + (i % 31 + 1).toString().padStart(2, 0),
    usage: Math.floor(Math.abs(Math.sin(i / 2.0) * 100)),
    bonus: Math.floor(Math.abs(Math.cos(i / 2.0) * 100))
  });
}

var Example = function Example() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "start",
    pad: "large"
  }, /*#__PURE__*/React.createElement(DataChart, {
    data: data,
    chart: [{
      keys: [{
        key: 'usage',
        color: 'graph-1'
      }, {
        key: 'bonus',
        color: 'graph-2'
      }],
      type: 'bar'
    }],
    xAxis: {
      key: 'date',
      render: function render(date) {
        return /*#__PURE__*/React.createElement(Text, {
          margin: {
            horizontal: 'xsmall'
          }
        }, new Date(date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric'
        }));
      }
    },
    yAxis: {
      guide: true
    },
    gap: "medium"
  })));
};

storiesOf('DataChart', module).add('Stacked bars', function () {
  return /*#__PURE__*/React.createElement(Example, null);
});