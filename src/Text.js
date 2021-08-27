import * as React from 'react';
import Typography from '@material-ui/core/Typography';

function Text(props) {
  let textElement = "";
  switch (props.type) {
    case "title":
      textElement = (
        <Typography variant="h4" component="h1" gutterBottom>
          {props.value}
        </Typography>
      )
      break;
    case "description":
      textElement = (
        <Typography variant="h5" component="h1" gutterBottom>
          {props.value}
        </Typography>
      )
      break;
    case "normal":  /* fall through (default normal) */
    default:
      textElement = (
        <Typography gutterBottom>
          {props.value}
        </Typography>
      )
  }
  return textElement;
}

Text.defaultProps = {
  type: "normal",
  value: "Placeholder Text"
}

export default Text;