import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import "./NewLoginForm.css"
import hitsplat from "../../../images/hitsplat.png"

const NewLoginForm = ({ closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();

    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      history.push("/categories")
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='login-form' onSubmit={onLogin}>
      <div className='error-container'>
        {errors.map((error, ind) => (
          <div key={ind}>
            <div className='error-div'>
              <img
              className='error-splat'
              src={hitsplat} />
              {error.split(": ")[1]}
            </div>
          </div>
        ))}
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" htmlFor='email'>E-mail</label>
        <input
          className='input-field'
          name='email'
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" htmlFor='password'>Password</label>
        <input
          className='input-field'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className='login-form-buttons'>
        <button className='login-button' type='submit'>LOG IN</button>
        <button
        className='login-button'
        onClick={() => {
          setEmail("demo@aa.io")
          setPassword("password")
        }}
        type='submit'
        >DEMO</button>
      </div>
    </form>
  );
};

export default NewLoginForm;
