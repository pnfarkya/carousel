import './App.css';
import * as React from 'react';
import {
  Grid, Table, Typography, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper
  , Tabs, Tab, Box, Card, CardHeader, CardContent
} from '@mui/material';
import { data } from './data'
import Back from './back.jpg';
import { Carousel } from './cous';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function App() {
  const [value, setValue] = React.useState(1);
  const [showScore, setScore] = React.useState(true);
  const [showTeam, setTeam] = React.useState(false);
  const [showPlayer, setPlayer] = React.useState(false);
  const [dates, setDate] = React.useState([]);
  const [selected, setSele] = React.useState("");
  const [match, setMat] = React.useState([])

  React.useEffect(() => {
    if (dates.length == 0) {
      const dt = [];
      data.LiveMatch.map(item => {
        dt.push(item.date)
      })
      setDate(dt);
    }
  });

  const onDateSelect = (item, event) => {
    setSele(item);
    const mat = data.LiveMatch.filter(c => c.date.toLocaleString() == item.toLocaleString())
    setMat(mat);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 1) {
      setScore(true);
      setTeam(false);
      setPlayer(false);
    }
    if (newValue == 2) {
      setScore(false);
      setTeam(true);
      setPlayer(false);
    }
    if (newValue == 5) {
      setScore(false);
      setTeam(false);
      setPlayer(true);

    }
  };
  return (
    <div >
      <Box sx={{ width: '100%', height: '100%', minHeight: '500px' }} >
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Live Score" value={1} />
          <Tab label="Team Positions" value={2} />
          <Tab label="Upcoming Matches" value={3} />
          <Tab label="Player Stats" value={4} />
          <Tab label="COntrol Test" value={5} />
        </Tabs>
        {
          showScore && (
            <Grid>{
              data.LiveMatch.map(row => (
                <Grid container >
                  <Grid item xs={5}>
                    <Typography fontFamily="cursive" fontSize={50} color="Red">
                      {row.Team1}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography fontFamily="cursive" fontSize={30} textAlign='center'>
                      VS
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography fontFamily="cursive" fontSize={50} color="Blue">
                      {row.Team2}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography fontFamily="cursive" fontSize={15}>
                      {row.Score}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>)
        }
        {
          showTeam && (<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">Won</TableCell>
                  <TableCell align="right">Lost</TableCell>
                  <TableCell align="right">Upcoming</TableCell>
                  <TableCell align="right">Upcoming Match Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.TeamPositions.sort((a, b) => a.Won - b.Won).map((row) => (
                  <TableRow
                    key={row.TemaName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.TemaName}</TableCell>
                    <TableCell align="right">{row.Won}</TableCell>
                    <TableCell align="right">{row.Lost}</TableCell>
                    <TableCell align="right">{row.Upcoming}</TableCell>
                    <TableCell align="right">{row.UpcomingMatchDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>)
        }
        {/* {
          showPlayer && (<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: 'transparent' }}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Team</TableCell>
                  <TableCell align="right">Won</TableCell>
                  <TableCell align="right">Lost</TableCell>
                  <TableCell align="right">Upcoming</TableCell>
                  <TableCell align="right">Upcoming Match Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.TeamPositions.sort((a, b) => a.Won - b.Won).map((row) => (
                  <TableRow
                    key={row.TemaName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.TemaName}</TableCell>
                    <TableCell align="right">{row.Won}</TableCell>
                    <TableCell align="right">{row.Lost}</TableCell>
                    <TableCell align="right">{row.Upcoming}</TableCell>
                    <TableCell align="right">{row.UpcomingMatchDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>)
        } */}
        {
          showPlayer && (
            <div style={{ width: '100%' }} >
              <Carousel show={1}>
                {
                  dates.map(item =>
                  (
                    <div style={{ maxWidth: 120, height: 100, margineft: 20 }}>
                      <Card width='50px' height='100px' onClick={(event) => onDateSelect(item, event)}
                        style={{
                          background: (selected != undefined || selected !== null) && item.toLocaleString() === selected.toLocaleString() ? 'Orange' : 'White'
                        }} >
                        <Typography color='Green' align='center'>{days[item.getDay()]}</Typography>
                        <Typography color='Green' align='center'>{item.getDate()}</Typography>
                        <Typography color='Green' align='center'>{months[item.getMonth()]}</Typography>
                        {/* {item.getDate()} */}
                      </Card>
                    </div>
                  ))
                }
              </Carousel>
              <Grid container>
                {
                  match.map(item => (
                    <Card style={{ width: 200, height: 300, marginLeft: 20 }}>
                      <CardContent style={{ height: '30%', background: 'Purple' }}>
                        <Typography color="white" fontWeight='bold' align='left' fontSize='50'>{item.Team1}</Typography>
                        <Typography color='white' align='center' fontWeight='bold'>Vs</Typography>
                        <Typography color='white' align='right' fontWeight='bold'>{item.Team2}</Typography>
                      </CardContent>
                      {/* {CardContent.getDate()} */}
                    </Card>
                  ))
                }</Grid>
            </div>
          )
        }
      </Box >
    </div >
  );
}

export default App;
