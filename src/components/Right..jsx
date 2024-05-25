import React from 'react'
import {  IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Right = () => {
  return (
    <div style={{width:"20%"}}>
        <div  className='setting'  >  
       <div style={{marginTop:"34px"}}><IconButton color='inherit'  > <ArrowBackIcon/>   </IconButton></div>   <div style={{marginTop:"40px"}}> Settings</div>
        </div>




    </div>
  )
}

export default Right;