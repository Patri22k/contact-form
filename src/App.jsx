import { useState } from 'react'
import './App.css'
import CheckboxWithSVG from './components/CheckboxWithSVG'
import RadioSelected from './components/RadioSelected'
import SuccessfulMessage from './components/SuccessfulMessage';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [textarea, setTextarea] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [radioError, setRadioError] = useState('');
  const [textareaError, setTextareaError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!firstName) {
      setFirstNameError('This field is required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('This field is required');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!email) {
      setEmailError('This field is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!selectedRadio) {
      setRadioError('Please select a query type');
      isValid = false;
    } else {
      setRadioError('');
    }

    if (!textarea) {
      setTextareaError('This field is required');
      isValid = false;
    } else {
      setTextareaError('');
    }

    if (!isChecked) {
      setCheckboxError('To submit this form, please consent to being contacted');
      isValid = false;
    } else {
      setCheckboxError('');
    }

    if (isValid) {
      setShowSuccessMsg(true);
    } else {
      setShowSuccessMsg(false);
    }
  };

  return (
    <div className='wrapper'>
      <SuccessfulMessage show={showSuccessMsg} />
      <div className='inside-div bg-white text-gray-900 rounded-2xl'>
        <h1 className='title font-semibold text-[#2B4246]'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='body-form' noValidate>
          <div className='names'>
            <label className='flex flex-col w-full'>
              <span>First Name <span className='text-green-600'>*</span></span>
              <input
                type="text"
                className={`input-name ${firstNameError ? 'border-red-600' : ''}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span className={`error-msg text-red-600 h-5 ${firstNameError ? 'visible' : 'invisible'}`}>
                {firstNameError}
              </span>
            </label>
            <label className='flex flex-col w-full'>
              <span>Last Name <span className='text-green-600'>*</span></span>
              <input
                type="text"
                className={`input-name ${lastNameError ? 'border-red-600' : ''}`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className={`error-msg text-red-600 h-5 ${lastNameError ? 'visible' : 'invisible'}`}>
                {lastNameError}
              </span>
            </label>
          </div>
          <div className='email-div'>
            <label className='flex flex-col'>
              <span className='mb-2'>Email Address <span className='text-green-600'>*</span></span>
              <input
                type="email"
                name="email"
                className={`email-input rounded-md ${emailError ? 'border-red-600' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={`error-msg text-red-600 h-5 ${emailError ? 'visible' : 'invisible'}`}>
                {emailError}
              </span>
            </label>
          </div>
          <div className='query-div'>
            <label className='query-label flex flex-col'>
              <span className='mb-2'>Query Type <span className='text-green-600'>*</span></span>
              <RadioSelected selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio} radioError={radioError} setRadioError={setRadioError} />
              <span className={`error-msg text-red-600 h-5 ${radioError ? 'visible' : 'invisible'}`}>
                {radioError}
              </span>
            </label>
          </div>
          <div className='message-div'>
            <label className='flex flex-col'>
              <span>Message <span className='text-green-600'>*</span></span>
              <textarea
                className={`rounded-md resize-none p-5 overflow-y-visible ${textareaError ? 'border-red-600' : ''}`}
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              >
              </textarea>
              <span className={`error-msg text-red-600 h-5 ${textareaError ? 'visible' : 'invisible'}`}>
                {textareaError}
              </span>
            </label>
          </div>
          <div className='cb-div'>
            <CheckboxWithSVG isChecked={isChecked} setIsChecked={setIsChecked} />
            <span className={`error-msg text-red-600 ${checkboxError ? 'visible' : 'invisible'}`}>
              {checkboxError}
            </span>
          </div>
          <div className='submit-div'>
            <label className="submit-label">
              <input
                type="submit"
                value="Submit"
                className="submit-input w-full rounded-md text-white bg-[#0C7D69]"
              />
            </label>
          </div>
        </form>
      </div>
      <footer className="attribution">
        <div className='footer-info'>
          <span>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target='_blank'>Frontend Mentor</a>.
          </span>
          <span>
            Coded by <a href="https://github.com/Patri22k" target='_blank'>Patrik Bajzík</a>.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
