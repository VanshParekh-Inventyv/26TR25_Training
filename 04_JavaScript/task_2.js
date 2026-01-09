"use strict";

// -------------------------------------
// n will be taken from the user input
// -------------------------------------

let n = 30;
let index = 1;
let innerIndex;

for (index; index <= n; index += 1) {
  for (innerIndex = 1; innerIndex <= n; innerIndex += 1) {
    process.stdout.write(
      `${
        ((index < innerIndex ? index : innerIndex) <
        (
          -~(n - index) < -~(n - innerIndex)
          ?
            -~(n - index)
          :
            -~(n - innerIndex))
          ?
            index < innerIndex
            ?
              index
            :
              innerIndex
          :
            -~(n - index) < -~(n - innerIndex)
            ?
              -~(n - index)
            :
              -~(n - innerIndex)) % 10
      }` + " "
    );
  }
  console.log();
}
