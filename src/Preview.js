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
    <Card>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="random image"
        />
        <CardContent>
          <Text type="card-title" value={props.title}/>
          <Text type="card-description" value={props.description}/>
        </CardContent>
      </CardActionArea>
    </Card>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={props.title}
        aria-describedby={props.description}
      >
        <Box sx={style}>
          <Text type="modal-title" value={props.title}/>
          <Text value={`${props.date} | ${props.description}`}/>
          <CardMedia
              component="img"
              height="180"
              image={props.image}
              alt="random image"
              sx={{my: 2}}
            /> 
          <Text type="modal-description" value={props.blurb}/>
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