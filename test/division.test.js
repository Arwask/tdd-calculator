'use strict';

const { assert } = require('chai');
const { divideNumbers } = require('../js/division.js');

describe('divideNumbers function', () => {

  it('should exist', () => {
    assert.isFunction(divideNumbers);
  });

  it('should return nothing without any arguments', () => {
    assert.isNaN(divideNumbers());
  });

  it('should take two numbers as arguments and return division', () => {
    assert.isNumber(divideNumbers(2,3));
    assert.isNumber(divideNumbers(-2,3));
    assert.isNumber(divideNumbers(-2.23,0.343));
  });

  it('should return NaN if given null or non-numbers as arguments', () => {
    assert.isNaN(divideNumbers(null, null));
    assert.isNaN(divideNumbers('a', 'b'));
    assert.isNaN(divideNumbers('#', '$'));
  });

  it('should return the Infinity if given null or 0 as second argument', () => {
    let expected = Infinity;
    assert.equal(divideNumbers(4, null),expected );
    assert.equal(divideNumbers(4, 0),expected );
  });

});