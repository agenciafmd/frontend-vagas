import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    try {
      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }      
      if (validateEmail(email)){
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);          
        }, 5000);
        setError('');
        console.log("Success")
      }
      await axios.post('http://localhost:5000/newsletter', { email , name});      
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <h1 className='FormMusic'>Acompanhe tudo sobre a banda</h1>
    <form id="form" className="form" onSubmit={handleSubmit}>

      <input type="name" id="name" name="name" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)} required />
      <input type="email" id="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <button className='buttonForm' type='submit'><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >     
          <path
            d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
            fill="currentColor"
            />
          </svg></button>
    </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Thanks for subscribing!</p>}
    </>
  )
}

export default Form;