import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { createPortal, expectPortal } from '../../../utils/portal';
import { DropButton } from '..';
describe('DropButton', function () {
  beforeEach(createPortal);
  afterEach(cleanup);
  test('closed', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(DropButton, {
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "drop contents")
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('opened', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(DropButton, {
      label: "Dropper",
      open: true,
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "drop contents")
    }));
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('open and close', function () {
    window.scrollTo = jest.fn();

    var _render = render( /*#__PURE__*/React.createElement(DropButton, {
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render.getByText,
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();
    fireEvent.click(getByText('Dropper'));
    expectPortal('drop-contents').toMatchSnapshot();
    fireEvent.click(getByText('Dropper'));
    expect(document.getElementById('drop-contents')).toBeNull();
    expect(window.scrollTo).toBeCalled();
  });
  test('close by clicking outside', function (done) {
    var _render2 = render( /*#__PURE__*/React.createElement(DropButton, {
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render2.getByText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();
    fireEvent.click(getByText('Dropper'));
    expectPortal('drop-contents').toMatchSnapshot();
    fireEvent(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    setTimeout(function () {
      expect(document.getElementById('drop-contents')).toBeNull();
      done();
    }, 50);
  });
  test('disabled', function () {
    var _render3 = render( /*#__PURE__*/React.createElement(DropButton, {
      disabled: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        getByText = _render3.getByText,
        container = _render3.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(document.getElementById('drop-contents')).toBeNull();
    fireEvent.click(getByText('Dropper'));
    expect(document.getElementById('drop-contents')).toBeNull();
  });
  test('opened ref', function () {
    var ref = /*#__PURE__*/React.createRef();

    var _render4 = render( /*#__PURE__*/React.createElement(DropButton, {
      ref: ref,
      open: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        container = _render4.container;

    expect(container.firstChild).toMatchSnapshot();
    expectPortal('drop-contents').toMatchSnapshot();
  });
  test('ref function', function () {
    var ref = jest.fn();

    var _render5 = render( /*#__PURE__*/React.createElement(DropButton, {
      ref: ref,
      open: true,
      label: "Dropper",
      dropContent: /*#__PURE__*/React.createElement("div", {
        id: "drop-contents"
      }, "Drop Contents")
    })),
        container = _render5.container;

    expect(container.firstChild).toMatchSnapshot();
    expect(ref).toBeCalled();
    expectPortal('drop-contents').toMatchSnapshot();
  });
});