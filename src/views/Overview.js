
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
import overviewLogo from "../assets/img/hitachi_vantara/svg/overview.svg";

class Overview extends React.Component {
  render() {
    return (
      <>
              <Card className="card-stats">
                <CardHeader style={{ backgroundColor: "#0d98ba" }}>
                  {/* blue green */}
                  <Row>
                    <Col>
                  <CardTitle tag="h10">Overview</CardTitle>
                  </Col>
                  <Col>
                  <img style= {{float: "right"}} src={overviewLogo}/>
                  {/* <i style={{ paddingLeft: "5px" }} class="nc-icon nc-globe text-warning"></i> */}
                  </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row style={{height:"25px"}}>
                    <ul>
                      <li><p className="card-category">Shows overview information. Health, Connectivity, Capacity, Performance</p></li>
                    </ul>
                  </Row>
                  <Row>
                    {/* inside row 1  column1*/}
                    <Col lg="6" md="6" sm="6">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Health
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col>
                              <div style={{textAlign:"center", color:"red"}} className="numbers">
                                <p style={{color:"red"}} className="card-category">1</p>
                                <p style={{color:"red"}} className="card-category">POOR</p>
                              </div>
                            </Col>
                            <Col>
                              <div style={{textAlign:"center"}}  className="numbers">
                                <p style={{color:"yellow"}} className="card-category">3</p>
                                <p style={{color:"yellow"}} className="card-category">FAIR</p>
                                {/* <CardTitle tag="p">FAIR</CardTitle> */}
                              </div>
                            </Col>
                            <Col>
                              <div style={{textAlign:"center"}} className="numbers">
                                <p style={{color:"#0d98ba"}} className="card-category">10</p>
                                <p style={{color:"#0d98ba"}} className="card-category">GOOD</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* inside row 1 column 2*/}
                    <Col lg="6" md="6" sm="6">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Connectivity
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col>
                              <div style={{textAlign:"center"}} className="numbers">
                                <p style={{color:"red"}} className="card-category">2</p>
                                <p style={{color:"red"}} className="card-category">LOST</p>
                              </div>
                            </Col>
                            <Col>
                              <div style={{textAlign:"center"}} className="numbers">
                              <p style={{color:"#0d98ba"}} className="card-category">12</p>
                              <p style={{color:"#0d98ba"}} className="card-category">GOOD</p>
                                {/* <p className="card-category">12</p>
                                <CardTitle tag="p">GOOD</CardTitle>
                                <p /> */}
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    {/* inside row 2  column1*/}
                    <Col lg="6" md="6" sm="6">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Capacity</CardTitle>
                          {/* <p className="card-category">24 Hours performance</p> */}
                        </CardHeader>
                        <CardBody>
                          {/* <Line
                            data={''}
                            // data={dashboard24HoursPerformanceChart.data}
                            // options={dashboard24HoursPerformanceChart.options}
                            width={400}
                            height={100}
                          /> */}
                        </CardBody>
                      </Card>
                    </Col>

                    {/* inside row 2 column 2*/}
                    <Col lg="6" md="6" sm="6">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Performance
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                        {/* <Line
                            data={''}
                            // data={dashboard24HoursPerformanceChart.data}
                            // options={dashboard24HoursPerformanceChart.options}
                            width={400}
                            height={100}
                          /> */}
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                </CardBody>
              </Card>
      </>
    );
  }
}

export default Overview;
