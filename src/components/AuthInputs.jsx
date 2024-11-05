import { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs"
    className='mx-auto bg-gradient-to-b w-full max-w-sm p-8 rounded shadow-md from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
        <Input invalid={emailNotValid} type='text' label='Email' onChange={(event) => handleInputChange('email', event.target.value)}/>
        <Input invalid={passwordNotValid} type='password' label='Password' onChange={(event) => handleInputChange('password', event.target.value)}/>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
