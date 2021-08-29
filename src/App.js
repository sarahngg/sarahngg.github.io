import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './App.css';
import Section from './Section';

const sections = [
  <Section title="Fname Lname" description="👋 Hello" layout="hero"/>,
  <Section title="Projects" description="Things I did" contentList={projectList}/>
];

function addPropsToSections (sections) {
  return sections.map((section, index) => {
    return React.cloneElement(section, {
      id: index,
      key: index
    })
  })
}

function App() {
  return (
      <Grid id="app" container direction="column">
      {addPropsToSections(sections)}
      <Copyright />
      </Grid>
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

const projectList = [
	{
		"title": "A section title",
		"description": "Describe section here",
		"image": "",
		"date": 2020,
		"blurb": "This project is made by x for y"
	},
	{
		"title": "Un petite section title",
		"description": "Describe section here ola",
		"image": "",
		"date": 2019,
		"blurb": "Ooolala"
	},
  {
		"title": "Project X",
		"description": "Confidential",
		"image": "",
		"date": 2021,
		"blurb": "Nope"
	}
]

export default App;
