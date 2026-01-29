//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._rows = matrix
      .split('\n')
      .map(r => r.split(' ').map(Number));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._rows[0].map((_, i) =>
      this._rows.map(row => row[i])
    );
  }
}
