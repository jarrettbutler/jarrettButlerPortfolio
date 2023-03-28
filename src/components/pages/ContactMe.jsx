import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Styles ={
  divStyle: {
    textAlign: 'center',
    background: '#B8DBD9',
    paddingBottom: '100%'
  },
  h1Style: {
    fontSize: '75px',
    padding: '10px',
},
formStyle: {
  display: 'inline !',
}
}

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
          } else if (inputType === 'email') {
            setEmail(inputValue);
          } else {
            setMessage(inputValue);
          }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Email is invalid');
            return;
          }
          if (message == null) {
            setErrorMessage(
              `The message area is empty`
            );
            return;
          }
          alert(`Thanks for letting me know ${name}!`);
      
          setName('');
          setEmail('');
          setMessage('');
          setErrorMessage('');
    };

    var obj = {};
    obj.name = name;
    obj.email = email;
    obj.messgae = message;


    //Adding responses to local storage to prove that I have control over where the input goes

    useEffect(() => {
        localStorage.setItem('obj', JSON.stringify(obj));
      }, [obj]);

    return (
        <div style={Styles.divStyle}>
            <h1 style={Styles.h1Style}>Contact Me</h1>
            <form style={{display: 'inline'}}>
            <input 
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input 
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    )

}export default ContactMe;