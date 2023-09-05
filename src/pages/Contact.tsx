import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
function Contact() {
  return (
    <><NavBar /><div className="min-h min-h-screen w-full bg-orange-600 flex">
      <div className="left_div w-1/2  h-screen bg-gray-100 hidden desktop:block laptop:block ">
      </div>
      <div className="laptop:w-1/2 desktop:w-1/2 w-full flex h-screen bg-blue-1000">

        <div className="w-full flex flex-col justify-center text-center items-center m-auto">
          <div className="messasge">
            <h1 className="text-2xl font-bold mb-3 text-white">GET IN TOUCH WITH US</h1>
          </div>
          <form className="space space-y-2">
            <div className='name flex flex-col justify-center items-center space-y-1'>
              <label htmlFor="names" className='text-white flex justify-start m-auto items-start text-start float-left w-full'>Names</label>
              <input type="text" className='w-[20rem] h-10 rounded-md px-2' />
            </div>
            <div className='name flex flex-col justify-center items-center space-y-1'>
              <label htmlFor="names" className='text-white flex justify-start m-auto items-start text-start float-left w-full'>Names</label>
              <input type="text" className='w-[20rem] h-10 rounded-md px-2' />
            </div>
            <div className='name flex flex-col justify-center items-center space-y-1'>
              <label htmlFor="names" className='text-white flex justify-start m-auto items-start text-start float-left w-full'>Message</label>
              <textarea className="w-[20rem] h-24 rounded-md p-2">

              </textarea>

              <div className='name flex flex-col justify-center items-center space-y-1 mt-3 w-full'>
                <button className='bg-orange-600 text-white mt-5 rounded-md px-4 space-x-3 py-2 w-full flex justify-center text-center'>
                  <p className='text-2xl font-bold'>SUBMIT</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact