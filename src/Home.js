import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Section from './components/Section';

function Home(props) {
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [sections, setSections] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/sn`);
      const { user } = response.data;
      setUser(user);
      setName(user.name);
      setTagline(user.tagline);
      document.title = user.siteTitle;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getSections = async (sections) => {
    try {
      sections.forEach(async (sectionId, index ) => {
        const response = await axios.get(`http://localhost:5000/api/sections/${sectionId}`);
        const { section } = response.data;
        setSections(sections => [...sections, section]);
      })
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {    
    getUser();
  }, []);

  useEffect(() => {    
    if (user)
    getSections(user.sections);
  }, [user]);

  // const sections = [
  //   <Section title={name} description={tagline} id="0" key="0"/>,
  //   <Section title="Projects" description="Things I did" 
  //   contentList={props.projectList}/>
  // ];

  // function addPropsToSections (sections) {
  //   return sections.map((section, index) => {
  //     console.log("addPropsToSections")
  //     return React.cloneElement(section, {
  //       id: index,
  //       key: index
  //     })
  //   })
  // }
  const sectionsWithProps = sections.length ? 
    sections.map((section, index) => 
      <Section title={section.name} description={section.description} id={section._id} order={index + 1} key={section.name}/>)
      : undefined;
  return (<>
  <Section title={name} description={tagline} order="0"/>
  {sectionsWithProps}
    </>)
  // </>)
}

export default Home;
