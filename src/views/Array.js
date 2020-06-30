
import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "assets/scss/eris.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import overviewLogo from "../assets/img/hitachi_vantara/svg/overview.svg";

class Array extends React.Component {
  _onSelect(value) {
    
  }
  render() {
    const options = [
      'Configuration', 'Configuration2', 'Configuration3'
    ];
    const defaultOption = options[0];
    return (
      <>
              <Card className="card-stats">
                <CardHeader style={{ backgroundColor: "#0d98ba" }}>
                  {/* blue green */}
                  <Row>
                    <Col>
                  <CardTitle tag="h10">Array</CardTitle>
                  </Col>
                  <Col>
                  <img style= {{float: "right"}} src={overviewLogo}/>
                  {/* <i style={{ paddingLeft: "5px" }} class="nc-icon nc-globe text-warning"></i> */}
                  </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row style={{height:"50px"}}>
                    <ul>
                      <li><p className="card-category">Shows array information: Contract information, Location, Microcode version</p></li>
                    </ul>
                  </Row>
                  <Row>
                  <Col>
                  <Dropdown className="float-right" style={{marginLeft:"0px"}} options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                  </Col>
                  </Row>
                  <Row>
                    {/* inside row 1  column1*/}
                    <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Finance
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* inside row 1 column 2*/}
                    <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Dev_TEST
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                     {/* inside row 1 column 3*/}
                     <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Secondary
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    {/* inside row 2  column1*/}
                    <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">ERP</CardTitle>
                          {/* <p className="card-category">24 Hours performance</p> */}
                        </CardHeader>
                        <CardBody>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* inside row 2 column 2*/}
                    <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">Production
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                        </CardBody>
                      </Card>
                    </Col>
                    {/* inside row 2 column 3*/}
                    <Col lg="4" md="4" sm="4">
                      <Card className="card-stats">
                        <CardHeader>
                          <CardTitle tag="h10">ERP REmote
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
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

export default Array;
