import * as fs from 'fs';

const INPUT = 'input/level{fileName}.in';
const OUTPUT = 'output/level{fileName}.out';

const MOVES = {
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
  D: { x: 0, y: 1 },
  U: { x: 0, y: -1 }
};

export class Pac {

  board: string[];
  pacX: number;
  pacY: number;
  coinCount: number = 0;
  sequence: string;

  constructor(protected fileName: string) {
  }

  run() {
    this.loadFile(this.fileName);
  }


  loadFile(fileName: string, encoding: BufferEncoding = 'utf-8'): void {

    fs.readFile(fileName, { encoding }, (error: any, data: string) => {
        if (error) {
          console.error(error);
          return;
        }

        this.onFileRead(data.replace(/\r\n/g, '\n'));
      }
    );
  }


  onFileRead(data: string): void {

    const arr = data.split('\n');
    let i = 0;
    console.log(arr);

    const length = +arr[i];
    const board = arr.slice(i, i += length);

    board.map(line => {
      const a = [];

      for (let f = 0; f < length) {

      }
      line.
    })
    this.board
    console.log(length, this.board);
    i++;

    const pacLocation = arr[i++].split(' ');
    this.pacX = +pacLocation[0] - 1;
    this.pacY = +pacLocation[1] - 1;
    console.log(this.pacX, this.pacY);

    const sequenceLength = +arr[i++];
    this.sequence = arr[i++];
    console.log(sequenceLength, this.sequence);

    this.coinCount = 0;
    for (let s = 0; s < sequenceLength; s++) {

      const moveChar = this.sequence[s];
      console.log(moveChar, MOVES);
      const move = MOVES[moveChar];

      this.movePac(move.x, move.y);
      this.count();
      console.log(this.coinCount);
    }
  }

  movePac(x: number, y: number): void {
    this.pacX += x;
    this.pacY += y;

    const line = this.board[this.pacY];
    line.ch
  }

  count(): void {
    const line = this.board[this.pacY];
    const char = line.charAt(this.pacX);

    if (char == 'C') {
      this.coinCount++;
    }
  }
}