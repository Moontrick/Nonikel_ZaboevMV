import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { checkAuth } from './features/user';

import './App.css';
import './index.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SingUp from "./pages/SingUp/SingUp";
import Profile from "./pages/Profile/Profile";
import NewsViewpage from "./pages/NewsView/NewsViewPage";
import NewsUpload from "./pages/NewsUpload/NewsUpload";
function App() {
  

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SingUp />} />
        <Route path='/newsupload' element={<NewsViewpage />} />
        <Route path='/newsview' element={<NewsUpload />} />
      </Routes>
  </Router>
  );
}

export default App;
