import { sample } from 'lodash';
import names from './names';

export const all = () => {
  return names;
};

export const random = (number?: number) => {
  if (number) {
    const choices = [];
    for (let i = 0; i < number; i += 1) {
      choices.push(sample(names));
    }
    return choices;
  }

  const choice = sample(names);
  return choice;
};

export default { all, random };
