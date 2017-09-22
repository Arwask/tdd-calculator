'use strict';

const { assert } = require('chai');
const { addNumbers } = require('../js/add.js');

describe('addNumbers', () => {
  it('should be a function', () => {
    assert.isFunction(addNumbers);
  });

  it('should return nothing without any arguments', () => {
    assert.isNaN(addNumbers());
  });

  it('should take two numbers as argument and return addition of it', () => {
    assert.isNumber(addNumbers(2,3));
  })

  it('should return string if passed two strings', () => {
    assert.isString(addNumbers('a', 3));
    assert.isString(addNumbers('a', 'b'));
  })

  it('should return a number if passed null values', () => {
    assert.isNumber(addNumbers(null,3));
    assert.isNumber(addNumbers(null, null));
  })
})

