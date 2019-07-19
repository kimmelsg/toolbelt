import { attempt } from '../attempt';

test('attempt returns tuple with data', () => {
  const p = new Promise((res, rej) =>
    process.nextTick(() => res({ data: { name: 'bob' } })),
  );
  return expect(attempt(p)).resolves.toStrictEqual([
    undefined,
    { data: { name: 'bob' } },
  ]);
});

test('attempt returns tuple with error', () => {
  const p = new Promise((res, rej) => process.nextTick(() => rej('nope.')));
  return expect(attempt(p)).resolves.toStrictEqual(['nope.', undefined]);
});
