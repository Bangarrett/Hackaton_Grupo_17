import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function Notification(){
    const notify = () => toast("all products at 30% off this month with the code WELCOME ");

    return (
      <div>
        <button className="button" onClick={notify}>Discount</button>
        <ToastContainer />
      </div>
    );
  }
export default Notification;