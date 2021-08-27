import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Text from './Text';

function Preview (props) {
  return (
    <Paper variant="outlined" elevation={0}>
      <Box sx={{ my: 4, mx: 4 }}>
      <Avatar variant="square">
        O
      </Avatar>
      <Text type="title" value={props.title}/>
      <Text type="description" value={props.description}/>
      </Box>
    </Paper>
  )
}

Preview.defaultProps = {
  "title": "Preview Title Placeholder", 
  "description": "Preview description placeholder", 
  "image": ""
}

export default Preview;