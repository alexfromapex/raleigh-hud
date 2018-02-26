import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Table.css';

class Table extends Component {
  componentWillMount() {
      this.props.apiRequest();
  }
  render() {
    if(Object.keys(this.props.APIresponse).length > 0)
    return (
        <div>
            <table>
                <thead>
                    <tr>{
                            Array.isArray(this.props.APIresponse) ?
                            Object.keys(this.props.APIresponse[0]).map((x) => {
                                return <th key={x.toString()}>{x}</th>
                            })
                            : <th></th>
                    }</tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(this.props.APIresponse) ?
                        this.props.APIresponse.map((row,index) => {
                            return <tr key={index}>{
                                Object.values(row).map((value,i) => {
                                    if(value.toString() === '')
                                        return '&nbsp;';
                                    return <td key={i}>{value.toString()}</td>
                                })
                            }</tr>
                        })
                        : <tr><td></td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
    else
        return (
            <table>
            </table>
        )
  }
}

export default Table;
