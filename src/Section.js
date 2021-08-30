import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Preview from './Preview';
import Text from './Text';
import { Link } from 'react-router-dom';

const bgcolors = [
  'primary.light',
  'secondary.light'
]

function getColor(id) {
  return bgcolors[id%bgcolors.length];
}

function Section (props) {
  return (
    <Grid item sx={{ bgcolor: getColor(props.id)}}>
      <Grid container spacing={2}>
        <Grid item className="section-margin" xs={1} md={2}/>
        <Grid item xs={10} md={8} >
        <Container sx={{ py: 4 }}>
          <Text type="title" value={props.title}/>
          <Text type="description" value={props.description}/>
          <Grid container spacing={3} sx={{ my: 1 }}>
            {props.contentList.map( content => 
            <Grid item xs={12} md={4} key={content.id} >
            <Link to={`/p/${content.id}`} style={{ textDecoration: 'none' }}>
            <Preview {... content}/>
            </Link>
            </Grid>)}
          </Grid>
        </Container>
        </Grid>
        <Grid item className="section-margin" xs={1} md={2}/>
      </Grid>
    </Grid>
  )
}

Section.defaultProps = {
  title: "Section Title Placeholder", 
  description: "Section Description Placeholder",
  contentList: [],
  layout: "default",
}

export default Section;