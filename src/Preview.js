import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import CardActionArea from '@material-ui/core/CardActionArea';
import Text from './Text';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};
function Preview (props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (<>
    <Card id={props.title} key={props.title}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Text type="title" value={props.content.title}/>
          <Text type="description" value={props.content.description}/>
        </CardContent>
      </CardActionArea>
    </Card>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={props.content.title}
        aria-describedby={props.content.description}
      >
        <Box sx={style}>
          <Text type="title" value={props.content.title}/>
          <Text value={`${props.content.date} | ${props.content.description}`}/> 
          <Text value={props.content.blurb}/>
        </Box>
      </Modal>
      </>
  )
}

Preview.defaultProps = {
  "title": "Preview Title Placeholder", 
  "description": "Preview description placeholder", 
  "image": "",
  "date": 1990,
  "blurb": "Blub placeholder"
}

export default Preview;