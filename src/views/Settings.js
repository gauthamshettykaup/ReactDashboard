
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
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ST from "../views/SettingsTable.js";

class Settings extends React.Component {
  createData(system, sn, enable, connected) {
    return { system, sn, enable, connected };
  }
  _onSelect(value) {

  }
  render() {
    const tableClass = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    const rows = [
      this.createData('Finance', '12345', '', ''),
      this.createData('Dev_TEST', '654321', '', '')
    ];

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
                <img style={{ float: "right" }} src={overviewLogo} />
                {/* <i style={{ paddingLeft: "5px" }} class="nc-icon nc-globe text-warning"></i> */}
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Row style={{ height: "50px" }}>
              <ul>
                <li><p className="card-category">Shows settings information: Enablement of CC, Connectivity, Reporting, Integrated SW</p></li>
              </ul>
            </Row>
            <Row>
              <Col>
                <Dropdown className="float-right" style={{ marginLeft: "0px" }} options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
              </Col>
            </Row>
            <Row>
              <ST></ST>
              {/* <TableContainer component={Paper}>
                <Table className={tableClass.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>System</TableCell>
                      <TableCell align="right">S/N</TableCell>
                      <TableCell align="right">Enable</TableCell>
                      <TableCell align="right">Connected</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.system}>
                        <TableCell component="th" scope="row">
                          {row.system}
                        </TableCell>
                        <TableCell align="right">{row.sn}</TableCell>
                        <TableCell align="right">{row.enable}</TableCell>
                        <TableCell align="right">{row.connected}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
            </Row>

          </CardBody>
        </Card>
      </>
    );
  }
}

export default Settings;
