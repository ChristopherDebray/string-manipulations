# @christopher_debray/string-manipulations

`@christopher_debray/string-manipulations` is a lightweight JavaScript library that provides a collection of functions for manipulating strings.

## Installation

You can install the `@christopher_debray/string-manipulations` module using NPM:

## Usage

To use the `@christopher_debray/string-manipulations` module in your JavaScript project, simply import the module and call the desired functions:

```javascript
const stringUtils = require('@christopher_debray/string-manipulations');

const string = 'hello world';

stringUtils.capitalizeFirstLetter(string); // "Hello world"
stringUtils.reverseString(string); // "dlrow olleh"
stringUtils.countWords(string); // 2
stringUtils.trimString(string); // "hello world"
stringUtils.toTitleCase(string); // "Hello World"
stringUtils.truncateString(string, 5); // "hello..."
stringUtils.containsString(string, 'world'); // true
stringUtils.replaceAll(string, 'l', 'L'); // "heLLo worLd"
```

## Methods

- ***capitalizeFirstLetter(string)***<br />
Capitalizes the first letter of a string.


- ***reverseString(string)***<br />
Reverses the order of characters in a string.

- ***countWords(string)***<br />
Counts the number of words in a string.

- ***trimString(string)***<br />
Removes whitespace from the beginning and end of a string.

- ***toTitleCase(string)***<br />
Converts a string to title case (capitalizes the first letter of each word).

- ***truncateString(string, maxLength)***<br />
Truncates a string to a specified length and adds "..." at the end if the string is longer than the specified length.

- ***containsString(string, searchValue)***<br />
Checks if a string contains another string.

- ***replaceAll(string, searchValue, replaceValue)***<br />
Replaces all occurrences of a substring with another string.

## License
@christopher_debray/string-manipulations is licensed under the ISC License. See the LICENSE file for details.