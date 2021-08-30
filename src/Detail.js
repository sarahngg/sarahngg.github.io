import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Text from './Text';

function Detail (props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    history.goBack();
    setOpen(false);
  }
  const { item, history } = props;

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={item.title}
        aria-describedby={item.description}
      >
    <Box>
      <Grid container spacing={2}>
        <Grid item className="section-margin" xs={1} md={2}/>
        <Grid item xs={10} md={8} >
        <Container sx={{ py: 4, bgcolor:"background.paper" }}>
          <Text type="modal-title" value={item.title}/>
          <Text value={`${item.date} | ${item.description}`}/>
          <CardMedia
              component="img"
              height="180"
              image={item.image}
              alt="random image"
              sx={{my: 2}}
            /> 
          <Text type="modal-description" value={item.blurb}/>
        </Container>
        </Grid>
        <Grid item className="section-margin" xs={1} md={2}/>
      </Grid>
    </Box>
    </Modal>
  )
}

Detail.defaultProps = {
  "title": "Preview Title Placeholder", 
  "description": "Preview description placeholder", 
  "image": "",
  "date": 1990,
  "blurb": "Blub placeholder"
}

export default Detail;