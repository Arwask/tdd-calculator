'use strict';

const { assert } = require('chai');
const { multiplyNumbers } = require('../js/multiply.js');

describe('multiplyNumbers function', () => {

  it('should exist', () => {
    assert.isFunction(multiplyNumbers);
  });

  it('should return nothing without any arguments', () => {
    assert.isNaN(multiplyNumbers());
  });

  it('should take two numbers as arguments and return multiplication', () => {
    assert.isNumber(multiplyNumbers(2,3));
    assert.isNumber(multiplyNumbers(-2,3));
    assert.isNumber(multiplyNumbers(-2.23,0.343));
  });

  it('should return 0 if given null as arguments', () => {
    let expected = 0;
    assert.equal(multiplyNumbers(null, null),expected )
  });

  it('should return the 0 if given null as one of the arguments', () => {
    let expected = 0;
    assert.equal(multiplyNumbers(4, null),expected )
  });
});