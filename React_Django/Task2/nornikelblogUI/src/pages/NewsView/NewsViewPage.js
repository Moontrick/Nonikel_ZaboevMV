import React, {useEffect, useState, useRef  } from 'react';
import {Navigate  } from "react-router-dom";
import '../NewsUpload/NewsUpload.css';
import { useSelector, useDispatch } from 'react-redux';
import { postphoto, getResultPhoto } from '../../features/user';
import Layout from '../../components/Layout';
import './NewsViewPage.css';


function NewsViewpage() {
  const dispatch = useDispatch();
  const {isAuthenticated,loading, user, posting_photo, sec_ident, sec_passwof, users_result_photo } = useSelector(state => state.user);
  
  useEffect(() => {
    dispatch(getResultPhoto({ photo_pers_identifier: sec_ident, photo_secure_number: sec_passwof }));
	}, []);
  
  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  
  
    return(
        <Layout title='Загрузка' content='Login page'>       
        <div className='Photo_center' >
        {users_result_photo && users_result_photo.map((photo, index) => (
            <div key={photo.user_photo}>
              <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img className='Profile_Result_image'
              src={`http://localhost:8000${photo.user_photo_first}`}
            />
         </div> </div>

          
    
        ))}
        </div>
      
        </Layout>
    );
}
export default NewsViewpage;
