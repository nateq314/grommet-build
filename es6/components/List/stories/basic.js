import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, List } from 'grommet';
import { grommet } from 'grommet/themes';
import { locations } from './data';

var BasicList = function BasicList() {
  return /*#__PURE__*/React.createElement(Grommet, {
    theme: grommet
  }, /*#__PURE__*/React.createElement(Box, {
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(List, {
    data: locations
  })));
};

storiesOf('List', module).add('basic', function () {
  return /*#__PURE__*/React.createElement(BasicList, null);
});