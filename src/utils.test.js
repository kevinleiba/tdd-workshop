import { toMaj, addExclamation } from "./utils";

test("regular sentence is uppercased", () => {
  const sentence = "my lowercase sentence";
  const newSentence = toMaj(sentence);

  function isLowerCase(charCode) {
    // @see -> man ascii
    return charCode < 97 || charCode > 122;
  }

  Array.from(new Array(newSentence.length)).forEach((_, i) => {
    expect(isLowerCase(newSentence.charCodeAt(i))).toBe(true);
  });
});

test("sentence with special characters is uppercased", () => {
  const sentence =
    "*()#)@(%*+#%[[]}]{}[“‘“‘@my lowercase sentence)$O#_!!@_)+!$~~~~~";
  const newSentence = toMaj(sentence);

  function isLowerCase(charCode) {
    // @see -> man ascii
    return charCode < 97 || charCode > 122;
  }

  Array.from(new Array(newSentence.length)).forEach((_, i) => {
    expect(isLowerCase(newSentence.charCodeAt(i))).toBe(true);
  });
});

test("sentence ends with a dot", () => {
  const sentence = "there is no exclamation mark";

  const newSentence = addExclamation(sentence);
  expect(newSentence.charAt(newSentence.length - 1)).toBe("!");
});
