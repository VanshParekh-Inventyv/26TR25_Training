// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow{
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    let width = Math.max(1, newSize.width);
    let height = Math.max(1, newSize.height);

    const maxWidth = this.screenSize.width  - this.position.x;
    const maxHeight = this.screenSize.height  - this.position.y;

    width = Math.min(width, maxWidth);
    height = Math.min(height, maxHeight);

    this.size.resize(width, height);
  }

  move(newPosition) {
    let x = Math.max(0, newPosition.x);
    let y = Math.max(0, newPosition.y);

    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    x = Math.min(x, maxX);
    y = Math.min(y, maxY);

    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));

  return programWindow;
}

