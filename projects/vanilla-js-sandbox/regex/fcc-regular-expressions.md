# Regular Expressions

Regular expressions (RegExp or regex) match strings with patterns you write. There are different methods to help you take action once you've found the strings or substrings you're looking for.

Valid regex example
```javascript
const myRegExp = /waddup/;
```
- no quotes needed
- expression lives between two forward slashes

## Using the test method

One of the ways to use regexes in JavaScript is the `.test()` method which returns a boolean based on whether it found your string or not.

```javascript
const testStr = 'No diggity, no doubt.';
const testRegex = /diggity/;

testRegex.test(testStr); // Expects: true
```
- the test method is on the regex object
- the method takes the string you're testing as an argument

## Match literal strings

What we did in the last section is **literal matching** -- where we're looking for the exact string in our regex (same casing, spacing, and everything).

So if we were looking for the string 'thunderbolts and lightning' in a string containing lyrics, we wouldn't match: 

- 'Thunderbolts And Lightning'
- 't h u n d e r b o l t s and lightNING'
- ...or any other permutation of different casing and spacing.

We'll only match exactly -- or literally -- what we've defined in our regex.

```javascript
const bohemianStr = `I see a little silhouetto of a man,
Scaramouch, Scaramouch, will you do the Fandango!
Thunderbolts and lightning, very, very frightening me
Galileo, Galileo
Galileo, Galileo
Galileo, Figaro - magnificoo`

const thunderousRegEx = /thunderbolts and lightning/;

thunderousRegEx.test(bohemianStr); // Expects: false, since 'Thunderbolts' is capitalized
```

## Match a literal string with different possibilities

Search for multiple patterns with the **alternation** or **OR** operator: `|`

Example of alternation
```javascript
const choiceIsYours = 'You can get with this, or you can get with that';
const blackSheepRegEx = /you can get with this|you can get with that/;

blackSheepRegEx.test(choiceIsYours); // Expects: true
```

## Ignore case while matching

To ignore case you can use the ignore case `/my regex/i` **flag**.

```javascript
const stateYourCase = 'Explain things the way you see them.';
const caseInsRe = /explain/i;

caseInsRe.match(stateYourCase); // Expects: true
```

## Extract matches

Return an array of matching strings with the `.match()` method on the string you're searching. This method taskes a regex as an argument. 

```javascript
const matchMaker = 'Matchmaker, matchmaker make me a match.';
const matchRe = /matchmaker/i;

matchMaker.match(matchRe); // Expects
```

## Extract more than the first match

To return an array of every instance of the string you're matching for with `.match()`, use the **global** (`g`) flag.

```javascript
const matchMaker = 'Matchmaker, matchmaker make me a match.';
const globalMatchRe = /matchmaker/gi;

matchMaker.match(globalMatchRe);
```

## Match anything with wildcard period

Use the wildcard `.` aka(**dot**, **period**) character**** to match any one character.

```javascript
const attyStr = 'The fat cat sat on a matte rat that went splat.';
const wildRe = /.at/gi;

attyStr.match(wildRe); /* expects:[
                                    'fat', 'cat',
                                    'sat', 'mat',
                                    'rat', 'hat',
                                    'lat'
                                    ] */
```

## Match single character with multiple possibilities

**Character classes** let you match a group of characters inside square brackets `[ ]`.

Example: grove, trove, drove
```javascript
const str = 'I drove to the grove to find a trove';
const re = /[dgt]rove/gi;

str.match(re); // expects: [drove, grove, trove]
```

## Match letters of the alphabet

Within a **character set** aka(**character class**), you can defined a range of characters using a dash (`-`).

Example: `a` through `f` uses `[a-f]`

```javascript
const batStr = 'bat';
const catStr = 'cat';
const hatStr = 'hat';

const re = /[a-f]at/;

batStr.match(re); // Expects: 'bat'
catStr.match(re); // Expects: 'cat
hatStr.match(re); // Expects: null
```

## Match numbers and letters of the alphabet

You can define a range of numbers with a hyphen (`-`) too.

```javascript
const myPassword = '583219084327819';
const re = /[0-9]/gi

myPassword.match(re); // Expects: [5, 8, 3, 2, 1, 9, 0, 8, 4, 3, 2, 7, 8, 1, 9]
```

## Match single characters not specified

**Negated character sets** let us define characters we don't want to match by placing a **caret** (`^`) after the opening bracket and before the characters we don't want to match.

Example: Don't match numbers `[^0-9]`

```javascript
const alphaNumStr = 'i0l1o2v3e4y5o6u';
const re = /[^0-9]/gi;

alphaNumStr.match(re); // Expects: [i, l, o, v, e, y, o, u]j;
```

## Match characters that occur on or more times

Use the `+` character to check if a character or character set is repeated **one or more times**. This only works if the character is repeated consecutively.

Example: Gaga, ooh-la-la - how many 'ga's in Bad Romance?
```javascript
const badRomanceStr = 'Oh-oh-oh{rest of the lyrics...}';
const gaGaRe = /ga+/gi;

badRomanceStr.match(gaGaRe); /*  Expects: [
                                            'Ga', 'ga', 'Ga',
                                            'ga', 'Ga', 'ga',
                                            'Ga', 'ga', 'Ga',
                                            'ga', 'Ga', 'ga'
                                            ] */
```

## Match characters that occur zero or more times

Use the the asterisk or star character (`*`) to match characters or character sets that occur **zero or more times**.

Example: Tracking money
```javascript
const beforeDoge = '$$$';
const toTheMoon = '$$$$$$';
const taxMan = '$$$$';
const buyTwitter = 'no monies';

const checkBankRe = /\$*/; // Doesn't use g flag, special character escaped

beforeDoge.match(checkBankRe); // Expects: [$, $, $]
toTheMoon.match(checkBankRe); // Expects: [$, $, $, $, $, $]
taxMan.match(checkBankRe); // Expects: [$, $, $, $]
buyTwitter.match(checkBankRe); // Expects: null
```

## Find characters with lazy matching

A **greedy** match find the longest possible substring.

Example: greedy state regex
```javascript
const caStr = 'California';
const greedyRe = /C[a-z]*i/;

caStr.match(greedyRe); // Expects: 'Californi'
```

A **lazy** match finds the smallest substring against your regex. Use the `?` character to modify your regex to lazy matching by adding it before the end character you want to lazy match.

Example: lazy state regex
```javascript
const lazyRe = /C[a-z]*?i/;

caStr.match(lazyRe); // Expects: 'Cali' <- for reference, nobody from here (unironically) calls it that
```

## Match beginning string patterns

Outside of a character class or set, the caret (`^`) can be used to look for patterns at the beginning of strings.

```javascript
const darkStr = 'The end is the beginning.';
const startRe = /^(The end).*/;

darkStr.match(startRe); // Expects: ['The end is the beginning.']
```

## Match ending string patterns

Use the dollar sign or bang character (`$`) to match patterns at the end of strings.

Example: Does the story have an end?
```javascript
const shortStoryStr = 'Once upon a time, there was a story. The end.';
const storyEndRe = /The end\.$/;

storyEndRe.test(shortStoryStr); // Expects: true
```

### Note: both `^` and `$` are referred to as **anchor characters**.

## Match all letters, numbers, and underscores

Use the `\w` **shorthand character class** - a short character class for capturing common patters - to match `[A-Za-z0-9_]`.

Example: get the number of alphanumerics in a password.
```javascript
const pw = '213iouuUIOuI432yui';
const shorthandCharClass = /\w/g;

pw.match(shorthandCharClass).length; // Expects: true
```
- Bear in mind that this shorthand also matched underscores (`_`)

## Match everything but letters and numbers

Use the `\W` **shorthand character class** to match `[^A-Za-z0-9_]`.

Example: find how much money is hidden in this string
```javascript
const symbolicStr = '&@#*($&@#hjKHK@L$#&*@#$HJK&#*$U@#$8728934382974HJ@K#$H@#$897';
const symRe = /\W/g;

symbolicStr.match(symRe).length // Expects: 30
```

## Match all numbers

Use the `\d` shorthand character to match digits; equivalent to `[0-9]`;

Example: How do you measure a year?
```javascript
const minutesInAYear = '525600 minutes - how do you measure, measure a year?';
const measureAYearRe = /\d+/;

minutesInAYear.match(measureAYear); // Expects: '525600'
```