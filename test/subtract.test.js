'use strict';

const { assert } = require('chai');
const { subNumbers } = require('../js/subtract.js');

describe('subNumbers', () => {
  it('should be a function', () => {
    assert.isFunction(subNumbers);
  });

  it('should return nothing without any arguments', () => {
    assert.isNaN(subNumbers());
  });

  it('should take two numbers as argument and return substraction of it', () => {
    assert.isNumber(subNumbers(2,3));
  });

  it('should take two non numbers as argument and return NaN', () => {
    assert.isNaN(subNumbers('a','b'));
    assert.isNaN(subNumbers('+','*'))

  });

  it('should take null as argument and return 0', () => {
    let expected = 0;
    assert.equal(subNumbers(null,null), expected);
  })

});