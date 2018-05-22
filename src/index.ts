import { sample } from 'lodash';
import names from './names';

export const all = () => {
  return names;
};

export const random = () => {
  return sample(names);
};

export default { all, random };
