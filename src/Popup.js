import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const styles = {
  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  settings: {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
  pics:{
      first: "https://picsum.photos/id/1/200/300",
      second: "https://picsum.photos/id/10/200/300",
      third: "https://picsum.photos/id/1024/200/300",
  }
};

function Popup({ toggler, handleClose }) {
  return (
    <div>
      <Modal
        open={toggler}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <div>
            <h2> Single Item</h2>
            <Slider {...styles.settings}>
              <div>
                <img src={styles.pics.first} alt="first" />
              </div>
              <div>
                <img src={styles.pics.second} alt="second" />
              </div>
              <div>
                <img src={styles.pics.third} alt="third"/>
              </div>
            </Slider>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;
