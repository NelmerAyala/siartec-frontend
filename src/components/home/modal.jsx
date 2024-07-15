import * as React from 'react';
import Modal from '@mui/material/Modal';
import SignInOutContainer from './tab-sign';
import { useRouter } from 'next/navigation';

const BasicModal =(props) => {

  const router = useRouter()
  const handleClose = () => {props.setOpen(false);}

  return (
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
  );
}

export default BasicModal;