import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Text from './Text';
function Preview (props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="random image"
        />
        <CardContent sx={{ minHeight: "8rem"}}>
          <Text type="card-title" value={props.title}/>
          <Text type="card-description" value={props.description}/>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

// Preview.defaultProps = {
//   "title": "Preview Title Placeholder", 
//   "description": "Preview description placeholder", 
//   "image": "",
//   "date": 1990,
//   "blurb": "Blub placeholder"
// }

export default Preview;