import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Link from '@material-ui/core/Link';
import Stack from '@material-ui/core/Stack';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Text from './Text';

const style = {
  width: 600,
  bgcolor: "background.paper",
  border: 0,
  p: 4,
  py: 5,
  overflow: "auto",
};

const styleSmall = {
  width: "100%",
  bgcolor: "background.paper",
  border: 0,
  p: 4,
  py: 5,
  overflow: "auto",
};

const styledModal = {
  // position: "fixed",
  // right: 0,
  // bottom: 0,
  // top: 0,
  // left: 0,
  display: "flex",
  alignItems: "top",
  justifyContent: "center",
};
function Detail (props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    history.goBack();
    setOpen(false);
  }
  const { item, history } = props;
  
  const Links = () => {
    const linkButtons =
    item.links && Object.keys(item.links).map(linkName => {
        let url = item.links[linkName];
        if (url) {
          return (
            <Link key={url} href={url} target="_blank" color="inherit">
              <Button variant="outlined">{linkName}</Button>
            </Link>
          )
        }
      });
    return (
      <Stack direction="row-reverse" justifyContent="flex-start"
      alignItems="center" spacing={1} sx={{ mt: 2 }}>
        {linkButtons && linkButtons}
        <Button onClick={handleClose} size="medium">Back</Button>
      </Stack>
    );
  }

  return (
    <Modal sx={styledModal}
        open={open}
        onClose={handleClose}
        aria-labelledby={item.title}
        aria-describedby={item.description}
      >
    <Box sx={useMediaQuery('(min-width:600px)') ? style : styleSmall}>
      <Container >
        {item.role ? 
          <Text type="modal-title" value={`${item.role} @ ${item.title}`}/> : 
          <Text type="modal-title" value={item.title}/>}
        {item.technologies && (
          <Stack direction="row" spacing={1}>
            {item.technologies.map(tech => (
              <Chip label={tech} size="small" component="a" href="" clickable />
            ))}
          </Stack>)}
        <CardMedia
            component="img"
            height="180"
            image={item.image}
            alt="random image"
            sx={{my: 2}}
          /> 
        {item.date ? (<Text value={`${item.date} | ${item.description}`}/>) : (
          <Text value={item.description}/>
        )}
        <Text type="modal-description" value={item.blurb}/>
        <Links />
      </Container>
    </Box>
    </Modal>
  )
}

Detail.defaultProps = {
  "image": "https://source.unsplash.com/random/640x360/?minimalist",
  "blurb": "An interesting project"
}

export default Detail;