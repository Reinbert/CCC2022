import { Pac } from './pac';

const INPUT = 'input/level{fileName}.in';
const OUTPUT = 'output/level{fileName}.out';

const level = '2_1';

const pac = new Pac(INPUT.replace('{fileName}', level));
pac.run();
