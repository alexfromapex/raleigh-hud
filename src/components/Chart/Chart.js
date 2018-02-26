import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import './Chart.css';
import * as d3 from 'd3';

class Chart extends Component {
  render() {
    if(Object.keys(this.props.APIresponse).length > 0) {
        let svg = d3.select('body')
        .append('svg')
        .data(this.props.APIresponse)
          .enter()
              .append('rect')
              .attr('x',0)
              .attr('y',(d,i)=>{
                  console.log(i);
                  return i*20;
              })
              .attr('width',(d) => { console.log(d.recno); return d.recno; })
              .attr('height','20');
        return (
            <div id="d3-chart"><svg /></div>
        );
    } else {
            return (
                <div>No data</div>
            )
    }
  }
}

export default Chart;
