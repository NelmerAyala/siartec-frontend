import * as React from 'react';
import Modal from '@mui/material/Modal';
import SignInOutContainer from './tab-sign';

export default function BasicModal(props) {
  const ref = React.createRef();

  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          position: 'absolute',
          // overflow: 'scroll',
          height: '100%',
          display: 'block'
        }}
      >
        <SignInOutContainer />
      </Modal>
    </div>
  );
}