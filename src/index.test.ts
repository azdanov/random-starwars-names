import * as starWars from './index';

describe('starwars-names', () => {
  describe('all', () => {
    it('should exist', () => {
      expect(typeof starWars.all).toBe('function');
    });

    it('should contain `Luke Skywalker`', () => {
      expect(starWars.all()).toContain('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should exist', () => {
      expect(typeof starWars.random).toBe('function');
    });

    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random();
      expect(starWars.all()).toContain(randomItem);
    });
  });
});
