import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Preview from './Preview';
import Text from './Text';
import { Link } from 'react-router-dom';

const bgcolors = [
  'primary.light',
  'secondary.light'
]

function getColor(index) {
  return bgcolors[index%bgcolors.length];
}

function Section (props) {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/items?sectionId=${props.id}`);
      const { items } = response.data;
      setItems(items);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {  
    if (props.id) {
      getItems();
    }
  }, [props.id]);

  return (
    <Grid container bgcolor={getColor(props.order)} py={3}>
      <Grid item xs={1} md={2}/>
      <Grid item xs={10} md={8} >
      <Container>
        <Text type="title" value={props.title}/>
        <Text type="description" value={props.description}/>
        {items.filter(item => item).length ? (<Grid container py={2} spacing={2} >
          {items.map( content => 
          <Grid item xs={12} md={4} key={content._id}>
          <Link to={`/p/${content._id}`} style={{ textDecoration: 'none' }}>
          <Preview {... content}/>
          </Link>
          </Grid>)}
        </Grid>) : undefined}
      </Container>
      </Grid>
      <Grid item xs={1} md={2}/>
    </Grid>
  )
}

// Section.defaultProps = {
//   title: "Section Title Placeholder", 
//   description: "Section Description Placeholder",
//   contentList: [],
// }

export default Section;