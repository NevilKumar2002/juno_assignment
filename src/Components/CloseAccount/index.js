


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./style.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CloseAccount({handleOpen, handleClose, open}) {
console.log("CloseAccount")
const [isModalOpen, setIsModalOpen] = useState(false);

function handleCloseButton(){
  setIsModalOpen(false);
  handleClose();
}

  return (
    <div>
     <div className='close-account-div'>
     <Button className="close-account-btn" onClick={handleOpen}  style={{backgroundColor:" rgb(243, 203, 203)", color:"red"  }}> { <HighlightOffIcon />}
                 Close Account</Button>
      </div>
               
                 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='close-div'>
         <div className='close-first-div'>
         <h2 className='close-heading'>Close Account</h2>
         <p onClick={handleCloseButton}>  <CloseRoundedIcon /></p>
          </div>
          <form>
            <div className='email-div'>
          <label for="Email">Email</label>
           <select id="emailSelect" name="email">
            <option value="email@product.com">email@product.com</option>
            <option value="sam.altman@email.com">sam.altman@email.com</option>
            <option value="pratik@email.com">pratik@email.com</option>
           
        </select>
        </div>
        <div className="radio-buttons">
           <p>Want to File UAR</p>
           <div className='yes-no-buttons'>
           <input type="radio" id="yes" name="uar" value="yes" />
           <label for="yes">Yes</label>
        <input type="radio" id="no" name="uar" value="no" />
        <label for="no">No</label>
            </div>
            </div>
            <div className='email-div'>
            <label for="reason">Reason</label>
            <select id="reasonSelect" name="reason">
            <option value="Flagging logics triggered">Flagging logics triggered</option>
            <option value="logics triggered">logics triggered</option>
            <option value="other">other</option>
          
        </select>
            </div>
            <div className='email-div1'>
              <label for="reason">Note</label>
              <textarea id="multilineInput" name="text" rows="5" cols="30" maxlength="100" placeholder='Flagging logics triggered'></textarea>
              
            </div>
            <div className='close-line'>
              <div>
              <input type="radio" id="yes" name="uar" value="yes" />
           <label for="yes">Charge Closure Fee</label>
           
              </div>
            <button>Close Account</button>
              </div>


            </form>
         </div>
        
        </Box>
      </Modal>
    </div>
  );
}


// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };
// export default App;