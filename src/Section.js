import * as React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Preview from './Preview';
import Text from './Text';

function Section (props) {
  return (
    <Grid item spacing={2}>
      <Box backgroundColor="primary" >
        <Container sx={{ py: 4, width: '60em' }}>
          <Text type="title" value={props.title}/>
          <Text type="description" value={props.description}/>
          <Grid container spacing={1}>
            {props.contentList.map( content => 
            <Grid item xs={4} spacing={3}><Preview></Preview></Grid>)}
          </Grid>
        </Container>
      </Box>
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