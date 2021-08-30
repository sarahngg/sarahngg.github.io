import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Section from './Section';


function Home(props) {
  const sections = [
    <Section title="Fname Lname" description="👋 Hello" layout="hero"/>,
    <Section title="Projects" description="Things I did" contentList={props.projectList}/>
  ];

  function addPropsToSections (sections) {
    return sections.map((section, index) => {
      return React.cloneElement(section, {
        id: index,
        key: index
      })
    })
  }

  return (
      <Grid container direction="column">
      {addPropsToSections(sections)}
      </Grid>
  );
}

export default Home;
