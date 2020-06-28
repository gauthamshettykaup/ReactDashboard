
import React from "react";
// react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
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

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
              <CardHeader>
                  <CardTitle tag="h5">Overview   
                  <i className="nc-icon nc-globe text-warning" />
                  </CardTitle>
                  <p className="card-category">Shows overview information. Health, Connectivity, Capacity, Performance</p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">OverView</p>
                        {/* <CardTitle tag="p">xx</CardTitle> */}
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Array</p>
                        <CardTitle tag="p">xxx</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> yyy
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Health</p>
                        <CardTitle tag="p">xx</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> yy
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Settings</p>
                        <CardTitle tag="p">xxx</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> yyy
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
