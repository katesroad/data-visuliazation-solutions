# D3 essentials

## Data binding:

- static version: select(selectAll/select) => binding(datum/data) =>
- dynamic version: enter => update => exit ([example](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/NE5k7g25MyN))

```js
d3.select('body')
  .selectAll('p')
  .data([10, 20, 30, 50, 70])
  .text(function (d) {
    return d;
  })
  .enter()
  .append('p')
  .text(function (d) {
    return d;
  });
```

## [Scales](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/N7qyJ7xQnpD)

**Scales** are functions that map input from a domain to output in a range. They take an input, typically a data point, and convert it into position, length, and color.
