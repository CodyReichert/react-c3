/**
 * React-C3 Chart
 * Copyright 2015 - Cody Reichert <codyreichert@gmail.com>
 */

import c3    from 'c3';
import React from 'react';


let ChartComponent = React.createClass({

    displayName: 'React-C3-Chart',

    propTypes: {
        data: React.PropTypes.object.isRequired,
        element: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired
    },

    chart: null,

    shouldComponentUpdate: function(nextProps) {
        return this.props !== nextProps;
    },

    componentDidMount: function() {
        this._generateChart(
            this.props.data.columns,
            this.props.type,
            this.props.element
        );
    },

    /**
     * TODO: I think there is still a re-render here, even if the data
     * doesn't chage which can be optimized - not a big deal right
     * now.
     */
    componentDidUpdate: function(prevProps) {
        if(prevProps.data.columns !== this.props.data.columns) {
            this._updateChart(this.props.data.columns);
        }
    },

    componentWillUnmount: function() {
        this._destroyChart();
    },

    _generateChart: function(columns, type, element) {
        this.chart = c3.generate({
            bindto: `#${element}`,
            data: {
                columns: columns,
                type: type
            }
        });
    },

    _updateChart: function(columns) {
        this.chart.unload();
        this.chart.load({
            columns: columns
        });
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
