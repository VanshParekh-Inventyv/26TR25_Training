//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrixRows = matrix
      .split('\n')
      .map(r => r.split(' ').map(Number));
  }

  get rows() {
    return this.matrixRows;
  }

  get columns() {
    return this.matrixRows[0].map((_, i) =>
      this.matrixRows.map(row => row[i])
    );
  }
}
