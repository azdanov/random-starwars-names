import * as starWars from './index';

describe('starwars-names', () => {
  describe('all', () => {
    it('should exist', () => {
      expect(typeof starWars.all).toBe('function');
    });
  });

  describe('random', () => {
    it('should exist', () => {
      expect(typeof starWars.random).toBe('function');
    });
  });
});
