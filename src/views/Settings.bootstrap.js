
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
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';



class Settings2 extends React.Component {
  _onSelect(value) {
    
  }
  render() {
    const products = [ {system:'Finance', sn:'12345', enable:'', connected:''}, {system:'Dev_TEST', sn:'654321', enable:'', connected:''} ];
    const columns = [{
      dataField: 'system',
      text: 'System'
    }, {
      dataField: 'sn',
      text: 'S/N'
    }, {
      dataField: 'enable',
      text: 'Enable'
    }  
    , {
      dataField: 'connected',
      text: 'Connected'
    }]; 
    const options = [
      'Settings', 'Settings2', 'Settings3'
    ];
    const defaultOption = options[0];
    return (
      <>
              <Card className="card-stats">
                <CardHeader style={{ backgroundColor: "#0d98ba" }}>
                  {/* blue green */}
                  <Row>
                    <Col>
                  <CardTitle tag="h10">Settings</CardTitle>
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
                      <li><p className="card-category">Shows settings information: Enablement of CC, Connectivity, Reporting, Integrated SW</p></li>
                    </ul>
                  </Row>
                  <Row>
                  <Col>
                  <Dropdown className="float-right" style={{marginLeft:"0px"}} options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                  </Col>
                  </Row>
                  <Row>
                  <BootstrapTable keyField='id' data={ products } columns={ columns } headerClasses="table-header-style"/>

                  </Row>

                </CardBody>
              </Card>
      </>
    );
  }
}

export default Settings2;
