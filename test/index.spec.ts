import { expect } from 'chai';

import * as is from '../src';

describe('is', () => {
  describe('Primitive', () => {
    it('undefined', () => {
      expect(is.undefined(undefined)).to.be.equal(true);
    });

    it('string', () => {
      expect(is.string('string')).to.be.equal(true);
    });

    it('number', () => {
      expect(is.number(10)).to.be.equal(true);
    });

    it('boolean', () => {
      expect(is.boolean(true)).to.be.equal(true);
      expect(is.boolean(false)).to.be.equal(true);
    });

    it('symbol', () => {
      expect(is.symbol(Symbol())).to.be.equal(true);
    });
  });

  describe('Functional', () => {
    it('object', () => {
      expect(is.object({})).to.be.equal(true);
      expect(is.object(null)).to.be.equal(false);
      expect(is.object(undefined)).to.be.equal(false);
      expect(is.object('')).to.be.equal(false);
      expect(is.object(1)).to.be.equal(false);
      expect(is.object(true)).to.be.equal(false);
      expect(is.object(Symbol())).to.be.equal(false);
    });

    it('array', () => {
      expect(is.array([])).to.be.equal(true);
      expect(is.array(null)).to.be.equal(false);
      expect(is.array(undefined)).to.be.equal(false);
      expect(is.array('')).to.be.equal(false);
      expect(is.array(1)).to.be.equal(false);
      expect(is.array(true)).to.be.equal(false);
      expect(is.array(Symbol())).to.be.equal(false);
    });

    it('primitive', () => {
      expect(is.primitive(null)).to.be.equal(true);
      expect(is.primitive(undefined)).to.be.equal(true);
      expect(is.primitive('')).to.be.equal(true);
      expect(is.primitive(1)).to.be.equal(true);
      expect(is.primitive(true)).to.be.equal(true);
      expect(is.primitive(Symbol())).to.be.equal(true);
      expect(is.primitive({})).to.be.equal(false);
      expect(is.primitive([])).to.be.equal(false);
    });

    it('promise', () => {
      expect(is.promise(undefined)).to.be.equal(false);
      expect(is.promise('')).to.be.equal(false);
      expect(is.promise(1)).to.be.equal(false);
      expect(is.promise(true)).to.be.equal(false);
      expect(is.promise(Symbol())).to.be.equal(false);
      expect(is.promise({})).to.be.equal(false);
      expect(is.promise([])).to.be.equal(false);

      const p = new Promise(resolve => resolve());
      expect(is.promise(p)).to.be.equal(true);

      function promiseLike() {
        //
      }
      (promiseLike as any).then = () => {
        //
      };
      expect(is.promise(promiseLike)).to.be.equal(true);
    });
  });

  describe('Integer', () => {
    it('integer', () => {
      expect(is.integer(10)).to.be.equal(true);
      expect(is.integer(-10)).to.be.equal(true);
      expect(is.integer(0)).to.be.equal(true);
      expect(is.integer(10.1)).to.be.equal(false);
    });

    it('safeInteger', () => {
      expect(is.safeInteger(Math.pow(2, 53))).to.be.equal(false);
      expect(is.safeInteger(-Math.pow(2, 53))).to.be.equal(false);
      expect(is.safeInteger(Math.pow(2, 53) - 1)).to.be.equal(true);
      expect(is.safeInteger(-Math.pow(2, 53) + 1)).to.be.equal(true);
    });
  });
});
