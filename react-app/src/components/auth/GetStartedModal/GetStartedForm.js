import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';
import hitsplat from "../../../images/hitsplat.png"


const GetStartedForm = ({ closeModal }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const user = useSelector(state => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    if (errors.length) {
      return
    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstname, lastname, email, password));
      if (data) {
        setErrors(data)
      }
      else {
        closeModal();
        history.push("/decks");
      }
    }
  };

  useEffect(() => {
    let errors = []
    if (firstname.length < 2 || firstname.length > 50) errors.push("Firstname: Firstname must be between 2 - 50 chars")
    if (lastname.length > 50 || lastname.length < 2) errors.push("Lastname: Lastname must be between 2 - 50 chars")
    if (/[^a-zA-Z]/.test(firstname)) errors.push('Name: First name must contain letters only')
    if (/[^a-zA-Z]/.test(lastname)) errors.push('Last: Last name must contain letters only')
    if (!email) errors.push("Email: Please enter your email")
    if (!password) errors.push("Password: Please enter your password")
    if (!repeatPassword) errors.push("RPassword: Please re-enter your password")
    if (password!==repeatPassword) errors.push("Password: The entered passwords don't match!")
    setErrors(errors)
  }, [ firstname, lastname, email, password, repeatPassword ]);

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
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
      <div className='error-container'>
        {isSubmitted && errors.map((error, ind) => (
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
        <label className="input-label" >First Name</label>
        <input
          className='input-field'
          type='text'
          min={3}
          max={50}
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
          min={3}
          max={50}
          placeholder='Last Name'
          value={lastname}
          onChange={updateLastname}
        ></input>
      </div>
      <div className='input-areas-lf'>
        <label className="input-label" >E-mail</label>
        <input
          className='input-field'
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
        <label className="input-label" >Confirm Password</label>
        <input
          className='input-field'
          type='password'
          name='repeat_password'
          placeholder='Re-enter Password'
          value={repeatPassword}
          onChange={updateRepeatPassword}
        ></input>
      </div>
      <button className='login-button' type='submit'>LET'S GO!</button>
    </form>
  );
};

export default GetStartedForm;
