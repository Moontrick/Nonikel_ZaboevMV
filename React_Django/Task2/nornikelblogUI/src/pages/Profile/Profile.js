import React, { useState, useRef,useEffect  } from 'react';
import { useNavigate, Navigate, NavLink  } from "react-router-dom";
import '../Profile/Profile.css';

import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getPhoto, setsecpassword } from '../../features/user';
import Layout from '../../components/Layout';

function Profile() {
    
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading,users_photo } = useSelector(state => state.user);
  const [isViewSecretkey, setisViewSecretkey]= useState(false);
   useEffect(() => {
    dispatch(getPhoto());
	}, []);

  if (!isAuthenticated && !loading && user === null) {
    return <Navigate to="/login" />;
  }
  const onDelete = (pers_ident, per_numb) => {
    
    dispatch(deletePhoto({ photo_pers_identifier: pers_ident, photo_secure_number: per_numb }));
    window.location.reload();
  }
  const onShow = (pers_ident, per_numb) => {
    dispatch(setsecpassword({ sec_ident: pers_ident, sec_passwof: per_numb }));
  }

  return (
    <Layout title='Профиль' content='Login page'>
    <div className='ProfilePage'>
      <div className='Profile_left '>
        <div className='h3 d-flex flex-column profile_let_number'>
          <a>Логин</a>
         {user && (<a className='profile_let_number_a'>{user.first_name}</a>)}
        </div>
      </div>
      <div className='Profile_center'>
        <div className='Profile_center_header'>
          <a >Новости</a>
          <NavLink className='nav-link active uploadlink add_new_reviews' to='/photoupload'>
            <h1>Добавить новую</h1>
          </NavLink>
        </div>
        <table class="table Profile_reviews table-bordered">
        <thead className='Profile_review_header'>
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Фото</th>
            <th scope="col">Дата загрузки</th>
            <th scope="col">Посмотреть</th> 
            <th scope="col">Удалить</th> 
          </tr>
        </thead>
        <tbody>
        {users_photo && users_photo.map((photo, index) => (
          <tr key={photo.user_photo}>
            <th style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle",
              fontSize: "2vh" 
              }}scope="row">{index + 1}</th>
            <td><img className='Profile_info_image'
              src={`http://localhost:8000${photo.user_photo}`}
            /></td>
            <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>{photo.date_upload}</td>
            <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}>
              <NavLink type='show' 
              className='ShowButton nav-link ' 

              onClick={() => onShow(photo.photo_pers_identifier, photo.photo_secure_number)}
              to={{
                pathname: '/resultphoto',
              }}
              >Посмотреть</NavLink>
              </td>
              <td style={{
              minHeight: "10em",
              display: "table-cell",
              verticalAlign: "middle" ,
              fontSize: "2vh" 
              }}> 
              <button type='delete' 
              className='DeleteButton' 
              onClick={() => onDelete(photo.photo_pers_identifier, photo.photo_secure_number)}>Удалить</button>
              </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
    </Layout>
  );
}

export default Profile;
