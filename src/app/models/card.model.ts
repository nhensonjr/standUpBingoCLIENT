import { Space } from './space.model';

export class Card {
  rows: Space[][];

  constructor(rows: Space[][]) {
    this.rows = rows;
  }
}
