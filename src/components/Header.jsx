import {FaSistrix, FaBell} from 'react-icons/fa'
import {BsPeople, BsPersonWorkspace, BsCashCoin, BsPhone } from 'react-icons/bs'


const Header = () => {
  return (
    <header className=' h-[55px] justify-center'>
      <div className=' flex justify-center items-center pl-32 pt-10'>
        <form className=' relative  flex-auto ml-10'>
            <FaSistrix  className=' absolute bottom-0 top-1 left-2'/>
            <input className=' outline-none rounded-md  bg-gray-100  w-full  pl-10' placeholder="Search"/>
        </form>
        <nav className='w-[550px] ml-10 '>
            <ul className=' flex space-x-10 '>
                <li>Feedback</li>
                <li>Contacts</li>
                <li>Help</li>
            </ul>
        </nav>
        <div className=' w-[200px]'>
        <div className='flex items-center gap-3'>
        <div  className='flex place-items-center cursor-pointer px-3 p-2 relative text-gray-300 '> 
                    <FaBell size={ 22 } />
                    <span className='bg-red-600  animate-ping absolute top-1 right-1 rounded-full flex items-center justify-center w-3 h-3' />
                    <span className='bg-red-600  absolute top-1 right-1 rounded-full flex items-center justify-center w-3 h-3' /> 
                </div>
          
           <img src='/photo' alt='user'/>
        </div>
        </div>
        </div>
        <nav className='fixed left-0 top-0 w-[200px] h-screen flex '>
            <figure className="w-[70%] h-full pb-4 bg-[#012E6D] rounded-r-3xl ">
                <div className="flex justify-between p-4 pl-3 mt-1 border-b-2 border-gray-400 text-white">
                    <li  className=' bg-white rounded'>
                    <span >
                    <img src='/company_logo.png' alt='company' className=' w-10'/>
                    </span>
                    </li>
                   
                </div>

                <ul>
                   

                    <li  className='flex flex-col text-white'>
                        <p className="font-md text-[--col] p-3">{/**/} </p>
                        <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPeople/></span>
            <p className=' cursor-pointer ml-3 '>About Us </p>
        </div>
                    </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPersonWorkspace/></span>
            <p className=' cursor-pointer ml-3 '>Service</p>
        </div>
          
        </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsCashCoin/></span>
            <p className=' cursor-pointer ml-3 '>Portfolio</p>
        </div>
         
        </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
            <span className='text-white'><BsPhone/></span>
            <p className=' cursor-pointer ml-3 '>Contact Us</p>
        </div>
        </li>

                </ul>
            </figure>
            <figure className="w-[30%] h-full  opacity-[0.6]"></figure>
        </nav>

    </header>
  )
}

export default Header
