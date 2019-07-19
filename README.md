# Toolbelt

> Useful utility functions for Kimmel projects

[![codecov](https://codecov.io/gh/kimmelsg/toolbelt/branch/master/graph/badge.svg)](https://codecov.io/gh/kimmelsg/toolbelt)

## Installation

In your terminal:

```shell
$ yarn add @kimmel/toolbelt
```

## Functions

- [attempt](#attempt)

### attempt

Wraps a promise in a try/catch block and returns a tuple with the first item being any caught error, and the second item being the resolved promise.

```ts
import { attempt } from '@kimmel/toolbelt';

async function fetchData() {
  return fetch('https://example.com');
}

async function tryToFetch() {
  const [error, result] = await attempt(fetchData);

  if (error) {
    // do something
  }

  return result;
}
```

`attempt` automatically infers the resolves type of your promise.
