# Basic uid generator for your stuff

Intended to be used in client side apps served on the web, kept bare minimum in code size for that reason.

Uses `crypto.getRandomValues` when available, fallbacks to `Math.random()` otherwise.

collision-free generation is not guranteed. Increase length for less collision probability.

## Usage

### Install
```bash
npm i tiny-uid
```
### Use

```javascript
import uid from 'tiny-uid';

console.log(uid()); // > 5oylanv
console.log(uid(12)); // > a6ps30ruclh0
```

## API

### `uid([length = 7])`

Returns randomly generated alpha-numeric string. Optionally you can specify custom length for returned string, defaults to `7`.

> Note: At the moment, generated string is all lowercase, but is subject to change in future releases, should needs/use cases, require so.
