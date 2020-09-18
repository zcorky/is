import { expect } from 'chai';

import * as is from '../src';

describe('is', () => {
  describe('extends', () => {
    it('email', () => {
      expect(is.email('tobewhatwewant@gmail.com')).to.be.equal(true);
      expect(is.email('tobewhatwewantgmail.com')).to.be.not.equal(true);
    });

    it('idCard', () => {
      expect(is.idCard('110101200003079855')).to.be.equal(true);
      expect(is.idCard('11010120000307985')).to.be.not.equal(true);
    });

    it('phone', () => {
      expect(is.phone('15012341234')).to.be.equal(true);
      expect(is.phone('16012341234')).to.be.not.equal(true);
    });

    it('url', () => {
      expect(is.url('https://example.com')).to.be.equal(true);
      expect(is.url('https:/example.com')).to.be.not.equal(true);
    });
  });
});
