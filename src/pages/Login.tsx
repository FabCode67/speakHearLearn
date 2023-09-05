
import bt from '../assets/bt.png'
import child from '../assets/child.png'
import google from '../assets/google.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="min-h-screen h-screen w-full bg-gray-400">
            <div className="min-h-screen h-screen w-full text-white p-5 flex bg-blue-1000 laptop:flex-row flex-col tablet:flex-row md-flex-row desktop:flex  justify-center text-center items-center m-auto">
                <div className="leftdiv laptop:w-1/2 desktop:w-1/2 md:w-1/2 tablet:w-1/2 laptop:block desktop:block md:block tablet:block hidden la object-cover">
                    <img src={child} alt="" className='r rounded-tl-3xl h-screen' />
                </div>
                <div className="leftdiv w-full h-screen laptop:w-1/2 desktop:w-1/2 md:w-1/2 tablet:w-1/2  bg-blue-1000 ">
                    <div className="flex flex-col justify-center items-center space-y-2 min-h-screen h-ft bg-blue-1000">
                        <div className="companyLogo flex justify-center text-center items-center bg-blue-1000 ">
                            <img src={bt} alt="" className='h-16 w-20' />
                        </div>
                        <div className="companyLogo flex justify-center text-center items-center  laptop:w-[50%] desktop:w-[50%] w-full">
                            <p className='w[-10%]'>Join  SpeakHearLearn and Empoweryour child's potential.</p>
                        </div>
                        <div className="companyLogo flex justify-center text-center items-center ">
                            <button className='bg-white text-black  rounded-md px-4 space-x-3 py-2 flex justify-center text-center items-center '>
                                <img src={google} alt="" className='' />
                                <p className='te text-2xl font-bold'>continue with google</p>
                            </button>
                        </div>
                        <div className="companyLogo flex justify-center text-center items-center ">
                            <div className='w-[7rem] h-1 bg-white'></div>
                            <p className='px-2 text-xl font-bold'>or</p>
                            <div className='w-[7rem] h-1 bg-white'></div>
                        </div>
                        <form className='flex flex-col justify-center items-center space-y-3'>
                            <div className='name flex flex-col justify-center items-center space-y-1'>
                                <label htmlFor="" className='text-white flex justify-start m-auto items-start text-start float-left w-full'>Email</label>
                                <input type="email" className='w-[20rem] h-10 rounded-md px-2' />
                            </div>
                            <div className='name flex flex-col justify-center items-center space-y-1'>
                                <label htmlFor="" className='text-white flex justify-start m-auto items-start text-start float-left w-full'>password</label>
                                <input type="password" className='w-[20rem] h-10 rounded-md px-2' />
                            </div>                            
                            <div className='name flex flex-col justify-center items-center space-y-1 w-full'>
                                <button className='bg-orange-600 text-white rounded-md px-4 space-x-3 py-2 w-full flex justify-center text-center'>
                                    <p className='text-2xl font-bold'>Login</p>
                                </button>
                            </div>
                            <div className='name flex flex-col justify-end items-end text-end m-auto space-y-1 w-full float-right'>
             <Link to='/signup' className='text-blue-400 pr-2 loat-right w-full justify-end items-end text-end m-auto'>not SPH member account? Signup</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login