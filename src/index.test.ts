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

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3);
      expect(randomItems).toHaveLength(3);

      if (typeof randomItems === 'string') {
        throw new Error();
      }

      randomItems.forEach(item => {
        expect(starWars.all()).toContain(item);
      });
    });
  });
});
