/**
 *  Question from Coder Pad
 * You’re working with an intern that keeps coming to you with JavaScript code that won’t run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
    Let’s say:
    ‘(‘, ‘{‘, ‘[‘ are called “openers.”
    ‘)’, ‘}’, ‘]’ are called “closers.”
    Write an efficient function that tells us whether or not an input string’s openers and closers are properly nested.

    Examples:

    “{ [] ( ) }” should return true
    “{ [(] ) }” should return false
    “{ [ }” should return false
 */

const openers = ["{", "[", "("];
const closers = ["}", "]", ")"];
const match = {
  "}": "{",
  "]": "[",
  ")": "(",
};
function validateBracket(arg) {
  var brackets = [];
  const code = arg.split("");

  // If the validation code have end tags without opener tag, we check with its length

  let checkedArg = code.length;

  code.forEach((element) => {
    if (openers.includes(element)) {
      brackets.push(element);
    }
    if (closers.includes(element)) {
      const last = brackets.pop();

      if (last !== match[element]) {
        return false;
      }
    }
    checkedArg--;
  });
  return brackets.length == 0 && checkedArg == 0;
}

// Test/Debug Checker
function test(actual, expected) {
  console.log("actual", actual, "expected", expected);
}

test(validateBracket(""), true);
test(validateBracket("{{{}}}"), true);
test(validateBracket("{{{}}}]"), false);
test(validateBracket("{"), false);
test(validateBracket("}"), false);
test(validateBracket("{ [ ] ( { [ ] } ) }"), true);
test(validateBracket("{ [ ] ( { [ ] } ( ) ) }"), true);
test(validateBracket("{ [ () ] ( ) }"), true);
test(validateBracket("{ [ ( ] ) ( ) }"), false);
test(validateBracket("{ [ ] ( ) }"), true);
test(validateBracket("{ [ ( ] ) }"), false);
test(validateBracket("{ [ }"), false);
