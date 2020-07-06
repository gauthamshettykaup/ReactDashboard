import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { erisActions } from '../_actions';
import { connect } from "react-redux";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "assets/scss/eris.scss";
import {
  Row,
  Col,
} from "reactstrap";

class CapacityDoughnut extends React.Component {
  constructor(props) {
    super(props);
    this.filteredDougnutData = '';
    this.dateOptions = [];
    this.groupbyDate = [];

    this.state = {
    free_tb: 0,
    allocated_tb : 0,
    total_tb : 0 };

    this.selectedDate = '';
    this.isDataLoaded = false
    this._onSelect = this._onSelect.bind(this);
  }
  _onSelect(newDate) {
    
     const {value} = newDate;
     const filteredValue = this.groupbyDate.filter(entity => entity.date  == value);
     this.setState({free_tb:  filteredValue[0].free_tb});
     this.setState({allocated_tb:  filteredValue[0].allocated_tb})
     this.setState({total_tb:  filteredValue[0].total_tb})

  }

  // https://stackoverflow.com/questions/46802448/how-do-i-group-items-in-an-array-by-date/46802505
  // https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
  groupbyDateLogic(data) {
    const groups = data.reduce((groups, capacity) => {
      const date = capacity.datetime.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
        this.dateOptions.push(date);
      }
      groups[date].push(capacity);
      
      return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        free_tb: this.averageGroup(groups[date], 'free_tb'),
        allocated_tb: this.averageGroup(groups[date], 'allocated_tb'),
        total_tb: this.averageGroup(groups[date], 'total_tb')
      };
    });

    return groupArrays;
  }

  averageGroup(groups, property) {
     return groups.reduce((avg, entity)=>{ 
      avg = avg + (entity[property])
      return avg;

   }, 0)/groups.length

  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(erisActions.getCapacity());

  }

  render() {
    if (this.props.capacity && !this.isDataLoaded) {
      this.groupbyDate = this.groupbyDateLogic(this.props.capacity);
      this.selectedDate = this.selectedDate ? this.selectedDate : this.dateOptions[0];
      const filteredValue = this.groupbyDate.filter(entity => entity.date  === this.selectedDate);
      this.state.free_tb = filteredValue ? filteredValue[0].free_tb : 0;
      this.state.allocated_tb = filteredValue ? filteredValue[0].allocated_tb : 0;
      this.state.total_tb = filteredValue ? filteredValue[0].total_tb : 0;
      this.isDataLoaded = true
    
    }

    const state = {
      labels: [
        'Free',
        'Allocated',
        'Total'
      ],
      datasets: [{
        data: [this.state.free_tb, this.state.allocated_tb, this.state.total_tb],
        backgroundColor: [
          '#CCC',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    return (
      <React.Fragment>
        <Row>
          <Col>
            <Dropdown className="float-right" style={{ marginLeft: "0px" }} options={this.dateOptions} onChange={this._onSelect} value={this.selectedDate} placeholder="Select an option" />
          </Col>
        </Row>
        <Doughnut width={400}
          // height={100}
          height={310} data={state} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  capacity: state.eris.capacity
});

export default connect(mapStateToProps)(CapacityDoughnut);
