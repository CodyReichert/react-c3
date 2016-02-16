# react-c3

React-C3 is a React.js component for building C3.js graphs. It's a
small file and has a simple interface.

Currently, only a small subset of the C3.js API is supported, but it's
enough to build several types of graphs by simply passing a couple of
props and utilizing the React Component lifecycle methods to render
and update c3.

**Contributing**: This library is useful, but there are couple of [open issues](https://github.com/CodyReichert/react-c3/issues) 
that would make this very useful. If you're looking for a place to contribute,
check out those and feel free to submit a PR!

## Usage

The component takes three required props:
- data:  A list of data points for the c3 graph. Ex:

```js
let data = {
  columns: [
    ['data1', 75],
    ['data2', 42]
  ]
}
```

- element: An HTML Id for the rendered graph. Ex: `mygraph`
- type: The type of graph to generate. Ex: `donut`, `pie`, `guage`


## Example

```js
import React from 'react'
import Chart from 'react-c3'

class DashboardComponent extends React.Component {
  render() {
    let chartData = {
      columns: [
        ['data1', 75],
        ['data2', 42]
      ]
    }

    return (
      <div className="dashboard-component container">
        <div id="testchart"></div>
        <Chart data={chartData} element='testchart' type='pie' />
      </div>
    )
  }
}
```

## License

MIT
