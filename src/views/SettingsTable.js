import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in='true' timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {row.name}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.data.map((data) => (
                    <TableRow key={data.system}>
                      <TableCell component="th" scope="row">
                        {data.system}
                      </TableCell>
                      <TableCell>{data.sn}</TableCell>
                      <TableCell><Switch checked={data.enable}/></TableCell>
                      <TableCell><Checkbox checked={data.connected}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        system: PropTypes.string.isRequired,
        sn: PropTypes.string.isRequired,
        enable: PropTypes.bool.isRequired,
        connected: PropTypes.bool.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  {
    name: 'Datacenter1',
    data: [
      { system: 'Finance', sn: '123456', enable: true, connected: false },
      { system: 'Dev_TEST', sn: '654321', enable: false, connected: true },
    ],
  },
  {
    name: 'Datacenter2',
    data: [
      { system: 'secondary', sn: '123456', enable: true, connected: false },
      { system: 'ERP', sn: '123456', enable: false, connected: true },
      { system: 'Production', sn: '654321', enable: false, connected: true },
      { system: 'ERP_REmote', sn: '123456', enable: false, connected: true },
    ],
  },
];

export default function SettingsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>System</TableCell>
            <TableCell>S/N</TableCell>
            <TableCell>Enable</TableCell>
            <TableCell>Connected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
