'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _c = require('c3');

var _c2 = _interopRequireDefault(_c);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * React-C3 Chart
 * Copyright 2015 - Cody Reichert <codyreichert@gmail.com>
 */

var ChartComponent = _react2.default.createClass({
    displayName: 'React-C3-Chart',

    propTypes: {
        data: _react2.default.PropTypes.object.isRequired,
        element: _react2.default.PropTypes.string.isRequired,
        type: _react2.default.PropTypes.string.isRequired
    },

    chart: null,

    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
        if (this.props.data.columns.length !== nextProps.data.columns.length) {
            // shallow check
            return true;
        } else if (JSON.stringify(this.props.data.columns) !== JSON.stringify(nextProps.data.columns)) {
            // deeper check
            return true;
        }
        return false;
    },

    componentDidMount: function componentDidMount() {
        this._generateChart(this.props.data.columns, this.props.type, this.props.element);
    },

    componentDidUpdate: function componentDidUpdate(prevProps) {
        if (prevProps.data.columns !== this.props.data.columns) {
            this._generateChart(this.props.data.columns, this.props.type, this.props.element);
        }
    },

    componentWillUnmount: function componentWillUnmount() {
        this._destroyChart();
    },

    _generateChart: function _generateChart(columns, type, element) {
        this.chart = _c2.default.generate({
            bindto: '#' + element,
            data: {
                columns: columns,
                type: type
            }
        });
    },

    _destroyChart: function _destroyChart() {
        this.chart.destroy();
    },

    render: function render() {
        return _react2.default.createElement('div', { className: 'c3 react-c3',
            id: this.props.element,
            style: this.props.styles });
    }
});

exports.default = ChartComponent;