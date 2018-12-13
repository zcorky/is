# is

[![NPM version](https://img.shields.io/npm/v/@zcorky/is.svg?style=flat)](https://www.npmjs.com/package/@zcorky/is)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/is.svg?style=flat)](https://coveralls.io/r/zcorky/is)
[![Dependencies](https://david-dm.org/@zcorky/is/status.svg)](https://david-dm.org/@zcorky/is)
[![Build Status](https://travis-ci.com/zcorky/is.svg?branch=master)](https://travis-ci.com/zcorky/is)
![license](https://img.shields.io/github/license/zcorky/is.svg)
[![issues](https://img.shields.io/github/issues/zcorky/is.svg)](https://github.com/zcorky/is/issues)

> A TypeCheck lib

## Install

```
$ npm install @zcorky/is
```

## Usage

```js
// typescript
import * as is from '@zcorky/is';

// primitive
is.nul(null);
is.undefined(undefined);
is.string('');
is.number(1);
is.boolean(false);
is.symbol(Symbol());

// primitive
is.primitive(true);

// array
is.array([]);

// function
is.func(() => null);

// object
is.object({});

// promise
is.promise(promise);

// date
is.date(new Date());
is.date(+ new Date());
is.date(new Date().toString());

// integer
is.integer(10);
is.int(10);
is.safeInteger(Math.pow(2, 53) - 1);
is.safeInt(Math.pow(2, 53) - 1);

// float
is.float(10.1);
```

### Relatived
* [is](https://github.com/sindresorhus/is) - Type check values: is.string('🦄') //=> true

## License

MIT © [Moeover](https://moeover.com)