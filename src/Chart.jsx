/**
 * React-C3 Chart
 * Copyright 2015 - Cody Reichert <codyreichert@gmail.com>
 */

import c3    from 'c3';
import React from 'react';

const ChartComponent = React.createClass({
    displayName: 'React-C3-Chart',

    propTypes: {
        data: React.PropTypes.object.isRequired,
        element: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        options: React.PropTypes.object.isRequired
    },

    chart: null,

    shouldComponentUpdate: function(nextProps) {
        if(this.props.data.columns.length
            !== nextProps.data.columns.length) { // shallow check
            return true;
        } else if(JSON.stringify(this.props.data.columns)
                !== JSON.stringify(nextProps.data.columns)) { // deeper check
            return  true;
        }
        return false;
    },

    componentDidMount: function() {
        this._generateChart(
            this.props.data.columns,
            this.props.type,
            this.props.element,
            this.props.options
        );
    },

    componentDidUpdate: function(prevProps) {
        if(prevProps.data.columns !== this.props.data.columns) {
            this._generateChart(
                this.props.data.columns,
                this.props.type,
                this.props.element,
                this.props.options
            );
        }
    },

    componentWillUnmount: function() {
        this._destroyChart();
    },

    _generateChart: function(columns, type, element, options) {
      let build = Object.assign({}, {
        bindto: '#' + element,
        data: {
          columns: columns,
          type: type
        }
      }, options);
      this.chart = c3.generate(build);
    },

    _destroyChart: function() {
        this.chart.destroy();
    },

    render: function() {
        return (
            <div className="c3 react-c3"
                 id={this.props.element}
                 style={this.props.styles}>
            </div>
        );
    }
});


export default ChartComponent;
