//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const isSilent = /^\s*$/.test(message);
  const isQuestion = /\?\s*$/.test(message);
  const isYelling =
    /[A-Z]/.test(message) && !/[a-z]/.test(message);

  switch (true) {
    case isSilent:
      return "Fine. Be that way!";
    case isYelling && isQuestion:
      return "Calm down, I know what I'm doing!";
    case isYelling:
      return "Whoa, chill out!";
    case isQuestion:
      return "Sure.";
    default:
      return "Whatever.";
  }
}
