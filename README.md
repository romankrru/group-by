### Intro

`groupBy(array, callback)` - splits an array into sub-arrays stored in an
object, based on the result of calling `callback` function on each element, and
grouping the results according to values returned.

### Example
```js
const result = groupBy([1.2, 1.1, 2.3, 0.4], Math.floor)

// {
//   "0": [0.4],
//   "1": [1.2, 1.1],
//   "2": [2.3],
// }
```
