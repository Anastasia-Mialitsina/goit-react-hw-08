//src/pages/RegistrationPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'; 
import { register } from '../../redux/auth/operations'; 

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (email, password, username) => {
    
    console.log({ email, password, username });

    dispatch(register({ email, password, username }));
  };

  return (
    <div>
      <h1>Registration</h1>
      <RegistrationForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegistrationPage;
