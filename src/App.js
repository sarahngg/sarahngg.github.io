import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './App.css';
import Section from './Section';
const list = ["post1", "post1", "post1"];


function App() {
  return (
    <div className="App">
      <Grid id="app" container direction="column">
        <Section title="Fname Lname" description="👋 Hello" layout="hero"/>
        <Section title="Projects" description="Things I did" contentList={list}/>
        <Copyright />
      </Grid>
    </div>
  );
}

function Copyright() {
  return (
    <Grid item>
      <Container sx={{ py: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://sarahngg.github.io/">
            sarahngg.github.io
          </Link>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Grid>
  );
}

export default App;
