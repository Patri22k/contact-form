import './App.css'
import CheckboxWithSVG from './components/CheckboxWithSVG'
import RadioSelected from './components/RadioSelected'

//TODO: error messages

function App() {
  return (
    <div className='wrapper'>
      <div className='bg-white text-gray-900 w-1/2 h-4/5 m-auto rounded-2xl'>
        <h1 className='mx-10 mt-10 text-4xl font-bold'>Contact Us</h1>
        <form className='text-sm md:text-base lg:text-lg mx-10'>
          <div className='flex flex-row gap-3 my-5'>
            <label className='flex flex-col w-1/2'>
              First Name
              <input type="text" className='input-name' />
            </label>
            <label className='flex flex-col w-1/2'>
              Last Name
              <input type="text" className='input-name' />
            </label>
          </div>
          <div>
            <label className='flex flex-col my-5'>
              Email Address
              <input type="email" className='h-12 rounded-md' />
            </label>
          </div>
          <div>
            <label className='flex flex-col my-5'>
              Query Type
              <RadioSelected />
            </label>
          </div>
          <div>
            <label className='flex flex-col my-5'>
              Message
              <textarea className='h-40 rounded-md resize-none p-5 overflow-y-visible'>
              </textarea>
            </label>
          </div>
          <CheckboxWithSVG />
          <div>
            <label>
              <input
                type="submit"
                className="w-full h-12 rounded-md text-white bg-[#0C7D69]"
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
