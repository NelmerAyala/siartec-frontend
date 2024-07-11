import * as React from 'react';
import Modal from '@mui/material/Modal';
import SignInOutContainer from './tab-sign';
import { useRouter } from 'next/navigation';

export default function BasicModal(props) {

  const router = useRouter()
  const handleClose = () => {router.push('/');}

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