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
    }
  };

  return (
    <div className='wrapper'>
      {showSuccessMsg && <SuccessfulMessage show={showSuccessMsg} />}
      <div className='bg-white text-gray-900 w-1/2 h-[70%] m-auto rounded-2xl'>
        <h1 className='mx-10 mt-10 text-4xl font-bold'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='text-xs md:text-sm mx-10' noValidate>
          <div className='flex flex-row gap-3 mt-3'>
            <label className='flex flex-col w-1/2'>
              First Name
              <input
                type="text"
                className={`input-name ${firstNameError ? 'border-red-600' : ''}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span className={`text-red-600 h-5 ${firstNameError ? 'visible' : 'invisible'}`}>
                {firstNameError}
              </span>
            </label>
            <label className='flex flex-col w-1/2'>
              Last Name
              <input
                type="text"
                className={`input-name ${lastNameError ? 'border-red-600' : ''}`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className={`text-red-600 h-5 ${lastNameError ? 'visible' : 'invisible'}`}>
                {lastNameError}
              </span>
            </label>
          </div>
          <div>
            <label className='flex flex-col mt-3'>
              Email Address
              <input
                type="email"
                name="email"
                className={`h-10 rounded-md ${emailError ? 'border-red-600' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={`text-red-600 h-5 ${emailError ? 'visible' : 'invisible'}`}>
                {emailError}
              </span>
            </label>
          </div>
          <div>
            <label className='flex flex-col mt-3'>
              Query Type
              <RadioSelected selectedRadio={selectedRadio} setSelectedRadio={setSelectedRadio} radioError={radioError} setRadioError={setRadioError} />
              <span className={`text-red-600 h-5 ${radioError ? 'visible' : 'invisible'}`}>
                {radioError}
              </span>
            </label>
          </div>
          <div>
            <label className='flex flex-col mt-3'>
              Message
              <textarea
                className={`h-24 rounded-md resize-none p-5 overflow-y-visible ${textareaError ? 'border-red-600' : ''}`}
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              >
              </textarea>
              <span className={`text-red-600 h-5 ${textareaError ? 'visible' : 'invisible'}`}>
                {textareaError}
              </span>
            </label>
          </div>
          <div className='h-14'>
            <CheckboxWithSVG isChecked={isChecked} setIsChecked={setIsChecked} />
            <span className={`text-red-600 ${checkboxError ? 'visible' : 'invisible'}`}>
              {checkboxError}
            </span>
          </div>
          <div>
            <label>
              <input
                type="submit"
                value="Submit"
                className="w-full h-10 rounded-md text-white bg-[#0C7D69]"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
