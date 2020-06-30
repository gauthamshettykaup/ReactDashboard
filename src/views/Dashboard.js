
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";
import Overview from "../views/Overview.js";
import Array from "../views/Array.js";
import Health from "../views/Health.js";
import Settings from "../views/Settings.js";


class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="6" md="6" sm="6">
              <Overview></Overview>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Array></Array>
            </Col>
          </Row>

          <Row>
            <Col lg="6" md="6" sm="6">
            <Health></Health>
            </Col>
            <Col lg="6" md="6" sm="6">
            <Settings></Settings>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
