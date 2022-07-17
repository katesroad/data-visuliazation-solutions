# D3 essentials

- Data binding:
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
- Scales
