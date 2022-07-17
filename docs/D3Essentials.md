# D3 Essentials

## d3.js essentials

### Data binding:

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

### [Scales](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/N7qyJ7xQnpD)

**Scales** are functions that map input from a domain to output in a range. They take an input, typically a data point, and convert it into position, length, and color.

## [Chart Fundamentals](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/gxVk8X2pyO6)

- [Axis](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/YM2xVK74WlA)

  - `d3.axisBottom()` creates a bottom horizontal axis.
  - `d3.axisTop()` creates a top horizontal axis.
  - `d3.axisLeft()` creates a left vertical axis.
  - `d3.axisRight()` creates a right vertical axis.

- Label and Margin

  - **[Labels](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/JYg9vywE11y)** provide information for the chart and help to understand the information provided by the axis. D3.js doesn’t have any explicit label component, but `text` is used to add labels to the graph. An example can be found at [drawing the stock chart](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/JYg9vywE11y#Example)
  - [Margins](https://www.educative.io/courses/introduction-to-visualization-using-d3-js/qApPJvDyL52): Although D3.js doesn’t provide an explicit margin component, we will use the `translate()` function to draw margins.

## API references

- [d3.max, d3.min, and d3.extent](https://observablehq.com/@d3/d3-extent)
- [`call`](https://www.d3indepth.com/selections/#call)
