import * as React from 'react';
import Section from './Section';


function Home(props) {
  const sections = [
    <Section title="Sarah Ng" description="👋 Hello" layout="hero"/>,
    <Section title="Projects" description="Things I did" 
    contentList={props.projectList}/>
  ];

  function addPropsToSections (sections) {
    return sections.map((section, index) => {
      return React.cloneElement(section, {
        id: index,
        key: index
      })
    })
  }
  const sectionsWithIdKey = addPropsToSections(sections);
  return sectionsWithIdKey;
}

export default Home;
