import React, { useState } from 'react';
import './App.css';



function App() {
  const [displayView, setdisplayView] = useState();
  const [nameView, setnameView] = useState();
  const post = require('./data/posts.json')
  const users = require('./data/users.json')
  const [formData, setFormData] = useState({
    search: '',
  });
  const { search } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDisplay = (e) => {
    setdisplayView(e);
  };
  const onSubmit = () => {
    let name_of_user = users.filter(item => item.name.search(search) >= 0)
    let numberOfpost = post.filter(item => name_of_user[0].id == item.userId)
    setnameView(name_of_user[0].name)
    handleDisplay(numberOfpost)
  };

  return (
    <div className="App">
      <header>
        <h1>Поиск постов</h1>
        <input
          type="text"
          className="searching"
          name="search"
          placeholder='Введите имя пользователя'
          value={search}
          onChange={onChange}
          required
        />
        <button onClick={onSubmit} type="button">
          Найти
        </button>
      </header>
      {displayView && displayView.map((item, index) => 
        <div className='center_post' key={index}>
            <p><span>{nameView}</span></p>
            <p style={{color:"white"}}>{item.title}</p>
            <p style={{color:"white"}}>{item.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
