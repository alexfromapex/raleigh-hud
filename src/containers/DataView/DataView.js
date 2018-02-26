import React, { Component } from 'react';
import './DataView.css';
import Table from '../../components/Table/Table';
import Chart from '../../components/Chart/Chart';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/index';

class DataView extends Component {
  render() {
    return (
        <div>
            API URL:&nbsp;<input type="text" />
            <Table
                loading={this.props.loading}
                APIresponse={this.props.APIresponse}
                apiRequest={this.props.apiRequest}
            />
            <Chart
                APIresponse={this.props.APIresponse}
                apiRequest={this.props.apiRequest}
                d3={this.props.d3}
                width='100px'
                height='50px'
            />
        </div>
    );
  }

}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps,actionCreators)(DataView);
