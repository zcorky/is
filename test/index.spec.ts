import { expect } from 'chai';

import * as is from '../src';

describe('is', () => {
  describe('Primitive', () => {
    it('undefined', () => {
      expect(is.undefined(undefined)).to.be.equal(true);
    });

    // test string
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

    it('function', () => {
      const fn = () => null;
      expect(is.func([])).to.be.equal(false);
      expect(is.func(null)).to.be.equal(false);
      expect(is.func(undefined)).to.be.equal(false);
      expect(is.func('')).to.be.equal(false);
      expect(is.func(1)).to.be.equal(false);
      expect(is.func(true)).to.be.equal(false);
      expect(is.func(Symbol())).to.be.equal(false);
      expect(is.func(fn)).to.be.equal(true);
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

  describe('Date', () => {
    it('date should be date', () => {
      expect(is.date(new Date())).to.be.equal(true);
      expect(is.date(new Date())).to.be.equal(true);
      expect(is.date(new Date())).to.be.equal(true);
      expect(is.date(new Date())).to.be.equal(true);
      expect(is.date(new Date())).to.be.equal(true);
    });

    it('date string should be date', () => {
      expect(is.date(new Date().toString())).to.be.equal(true);
      expect(is.date(new Date().toLocaleDateString())).to.be.equal(true);
      expect(is.date(new Date().toISOString())).to.be.equal(true);
      expect(is.date(new Date().toUTCString())).to.be.equal(true);
      expect(is.date(new Date().toISOString())).to.be.equal(true);
    });

    it('timestamps should be date', () => {
      expect(is.date(8)).to.be.equal(true);
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

    it('int (alias of integer)', () => {
      expect(is.int(10)).to.be.equal(true);
      expect(is.int(-10)).to.be.equal(true);
      expect(is.int(0)).to.be.equal(true);
      expect(is.int(10.1)).to.be.equal(false);
    });

    it('safeInt (alias of safeInteger)', () => {
      expect(is.safeInt(Math.pow(2, 53))).to.be.equal(false);
      expect(is.safeInt(-Math.pow(2, 53))).to.be.equal(false);
      expect(is.safeInt(Math.pow(2, 53) - 1)).to.be.equal(true);
      expect(is.safeInt(-Math.pow(2, 53) + 1)).to.be.equal(true);
    });
  });

  describe('float', () => {
    it('right', () => {
      const n = 1.2;
      const m = 1;

      expect(is.number(n)).to.be.equal(true);
      expect(is.number(m)).to.be.equal(true);
      expect(is.integer(n)).to.be.equal(false);
      expect(is.integer(m)).to.be.equal(true);
      expect(is.float(n)).to.be.equal(true);
      expect(is.float(m)).to.be.equal(false);
    });
  });

  describe('RegExp', () => {
    it('right', () => {
      const n = /^a$/i;
      const m = new RegExp('^a$', 'i');
      const l = 1;

      expect(is.number(l)).to.be.equal(true);
      expect(is.regExp(l)).to.be.equal(false);
      expect(is.number(n)).to.be.equal(false);
      expect(is.regExp(n)).to.be.equal(true);
      expect(is.number(m)).to.be.equal(false);
      expect(is.regExp(m)).to.be.equal(true);
    });
  });
});
