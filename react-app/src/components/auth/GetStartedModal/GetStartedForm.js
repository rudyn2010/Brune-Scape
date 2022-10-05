import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
// import { signUp } from '../../store/session';
import { signUp } from '../../../store/session';

const GetStartedForm = ({ closeModal }) => {
  const [errors, setErrors] = useState([]);
  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstname, lastname, username, email, password));
      if (data) {
        setErrors(data)
      }
      else {
        closeModal();
      }
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className='login-form' onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >First Name</label>
        <input
          className='input-field'
          type='text'
          placeholder='First Name'
          value={firstname}
          onChange={updateFirstname}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >Last Name</label>
        <input
          className='input-field'
          type='text'
          placeholder='Last Name'
          value={lastname}
          onChange={updateLastname}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >Username</label>
        <input
          className='input-field'
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={updateUsername}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >E-mail</label>
        <input
          className='input-field'
          type='text'
          name='email'
          placeholder='E-mail'
          value={email}
          onChange={updateEmail}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >Password</label>
        <input
          className='input-field'
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >Repeat Password</label>
        <input
          className='input-field'
          type='password'
          name='repeat_password'
          placeholder='Repeat Password'
          value={repeatPassword}
          onChange={updateRepeatPassword}
          required={true}
        ></input>
      </div>
      <button className='login-button' type='submit'>Sign Up</button>
    </form>
  );
};

export default GetStartedForm;
