
import './App.css';
import React, {useState} from 'react';
import CardList from './components/Card_List/CardList';
import Form from './components/Form/Form';

function App() {
  const [profile, setProfile] = useState([])
  const addNewProfile = profileData => {
    setProfile([...profile, profileData])
  }
  return (
    <div>
      <div className='header'>GitHub Cards App</div>
        <Form onSubmit={addNewProfile}/>
        <CardList data={profile}/>
    </div>
  );
};

export default App;
