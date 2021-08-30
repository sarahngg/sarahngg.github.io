import * as React from 'react';
import Typography from '@material-ui/core/Typography';

function Text(props) {
  if (!props.value) return;
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
    case "card-title":
      textElement = (
        <Typography gutterBottom variant="h5" component="div">
          {props.value}
        </Typography>
      )
      break;
    case "card-description":
      textElement = (
        <Typography variant="body1" color="text.secondary">
          {props.value}
        </Typography>
      )
      break;
    case "modal-title":
      textElement = (
        <Typography gutterBottom variant="h6" component="h2">
          {props.value}
        </Typography>
      )
      break;
    case "modal-description":
      textElement = (
        <Typography color="text.secondary" sx={{ mt: 2 }}>
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