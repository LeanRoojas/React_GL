import './Form.css'
import React, {useState} from "react";
import axios from 'axios';

const Form = props => {
  const [userName, setUserName] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    console.log(resp.data);
    props.onSubmit(resp.data);
    console.log('userName: ',userName);
  }

  const handleOnChange = data => {
    setUserName(data.target.value);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type="type"
        placeholder='Github username'
        value={userName} 
        onChange={handleOnChange}
        required
      />
      <button>Add Card</button>
    </form>
  )
}

export default Form;


