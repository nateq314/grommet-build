"use strict";

exports.__esModule = true;
exports.Tabs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _StyledTabs = require("./StyledTabs");

var _this = void 0;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      flex = _ref.flex,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      _ref$messages = _ref.messages,
      messages = _ref$messages === void 0 ? {
    tabContents: 'Tab Contents'
  } : _ref$messages,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "flex", "justify", "messages", "responsive"]);

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var propsActiveIndex = rest.activeIndex,
      onActive = rest.onActive;

  var _useState = (0, _react.useState)(rest.activeIndex || 0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  if (activeIndex !== propsActiveIndex && propsActiveIndex !== undefined) {
    setActiveIndex(propsActiveIndex);
  }

  var activateTab = function activateTab(index) {
    if (propsActiveIndex === undefined) {
      setActiveIndex(index);
    }

    if (onActive) {
      onActive(index);
    }
  };
  /* eslint-disable no-param-reassign */


  delete rest.activeIndex;
  delete rest.onActive;
  /* eslint-enable no-param-reassign */

  var activeContent;
  var activeTitle;

  var tabs = _react.Children.map(children, function (tab, index) {
    if (!tab) return undefined;
    var tabProps = tab.props || {};
    var isTabActive = index === activeIndex;

    if (isTabActive) {
      activeContent = tabProps.children;

      if (typeof tabProps.title === 'string') {
        activeTitle = tabProps.title;
      } else {
        activeTitle = index + 1;
      }
    }

    return /*#__PURE__*/(0, _react.cloneElement)(tab, {
      active: isTabActive,
      onActivate: function onActivate() {
        return activateTab(index);
      }
    });
  }, _this);

  var tabContentTitle = (activeTitle || '') + " " + messages.tabContents;
  return /*#__PURE__*/_react["default"].createElement(_StyledTabs.StyledTabs, _extends({
    ref: ref,
    as: _Box.Box,
    role: "tablist",
    flex: flex,
    responsive: responsive
  }, rest, {
    background: theme.tabs.background
  }), /*#__PURE__*/_react["default"].createElement(_StyledTabs.StyledTabsHeader, {
    as: _Box.Box,
    direction: "row",
    justify: justify,
    flex: false,
    wrap: true,
    background: theme.tabs.header.background,
    gap: theme.tabs.gap
  }, tabs), /*#__PURE__*/_react["default"].createElement(_StyledTabs.StyledTabPanel, {
    flex: flex,
    "aria-label": tabContentTitle,
    role: "tabpanel"
  }, activeContent));
});
Tabs.displayName = 'Tabs';
var TabsDoc;

if (process.env.NODE_ENV !== 'production') {
  TabsDoc = require('./doc').doc(Tabs); // eslint-disable-line global-require
}

var TabsWrapper = TabsDoc || Tabs;
exports.Tabs = TabsWrapper;