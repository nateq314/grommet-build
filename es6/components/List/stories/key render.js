import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, List, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { data } from './data';

var RenderedList = function RenderedList() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(List, {
    data: data.slice(0, 10),
    primaryKey: function primaryKey(item) {
      return /*#__PURE__*/React.createElement(Text, {
        size: "large",
        weight: "bold"
      }, item.entry);
    },
    secondaryKey: function secondaryKey(item) {
      return /*#__PURE__*/React.createElement(Text, {
        size: "small",
        color: "dark-4"
      }, item.location);
    }
  })));
};

storiesOf('List', module).add('key render', function () {
  return /*#__PURE__*/React.createElement(RenderedList, null);
});