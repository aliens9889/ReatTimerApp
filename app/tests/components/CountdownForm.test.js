'use strict';

var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtil = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', function () {
   it('should exist', function () {
      expect(CountdownForm).toExist();
   });

   it('should call onSetCountdown if valid seconds entered', function () {
      var spy = expect.createSpy();
      var countdownForm = TestUtil.renderIntoDocument();
   });
});

//# sourceMappingURL=CountdownForm.test.js.map