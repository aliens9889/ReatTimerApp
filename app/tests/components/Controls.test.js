'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', function () {
   it('should exist', function () {
      expect(Controls).toExist();
   });

   describe('render', function () {
      it('should render pause when started', function () {
         var controls = TestUtils.renderIntoDocument();
      });
   });
});

//# sourceMappingURL=Controls.test.js.map