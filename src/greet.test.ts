import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { greet } from './greet.ts';

describe('greet()', () => {
  it('should return the correct greeting', () => {
    const greeting = greet('world');
    assert.strictEqual(greeting, 'hello, world');
  });
});
