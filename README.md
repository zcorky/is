# is

[![NPM version](https://img.shields.io/npm/v/@zcorky/is.svg?style=flat)](https://www.npmjs.com/package/@zcorky/is)
[![Coverage Status](https://img.shields.io/coveralls/@zcorky/is.svg?style=flat)](https://coveralls.io/r/@zcorky/is)
[![Dependencies](https://david-dm.org/@zcorky/is/status.svg)](https://david-dm.org/@zcorky/is)
[![Build Status](https://travis-ci.com/zcorky/is.svg?branch=master)](https://travis-ci.com/zcorky/is)
![license](https://img.shields.io/github/license/zcorky/is.svg)
[![issues](https://img.shields.io/github/issues/zcorky/is.svg)](https://github.com/zcorky/is/issues)

> A simple TypeCheck lib

## Install

```
$ npm install @zcorky/is
```

## Usage

```js
// typescript
import * as is from '@zcorky/is';

// primitive
is.undefined(undefined);
is.string('');
is.number(1);
is.boolean(false);
is.symbol(Symbol());

// functional
is.object({});
is.array([]); // Array.isArray
is.primitive(true); // null | undefined | string | number | boolean | symbol
is.promise(promise); // promise or promiseLike

// integer
is.integer(10); // Number.isInteger
is.safeInteger(Math.pow(2, 53) - 1); // Number.isSafeInteger
```

### Relatived
* [is](https://github.com/sindresorhus/is) - Type check values: is.string('🦄') //=> true

## License

MIT © [Moeover](https://moeover.com)