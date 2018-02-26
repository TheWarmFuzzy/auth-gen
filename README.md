# auth-gen

Generates strings using crypto.randomBytes(). Does not use any additional packages to mitigate dependency vulnerabilities.

## Installation
```bash
npm install auth-gen
```

## Usage
```js
var authGen = require('auth-gen');
```

### uniqueStr
Generates a unique string from a provided length. Optionally you can provide a string of characters to use instead of the default.
```js
authGen.uniqueStr(16) // -> t8yKHADypFe57KsU

authGen.uniqueStr(16, "abcde") // -> bbedeabaeadccead
```

### id
Generates a three-part unique 32 byte id value using the uniqueStr function.
```js
authGen.id() // -> DYYNZYdUBd-9c36jm5hL2-gRNbLBMPuZ
```

### password
Generates a temporary password from a provided length using the uniqueStr function. Adds symbols to the list of valid characters.
```js
authGen.password(16) // -> BrPXuAKqdWg?es=y
```
