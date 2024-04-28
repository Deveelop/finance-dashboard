import { FaHome, FaSignal, FaComment, FaWallet } from 'react-icons/fa'

const  SideBar = () => {
  return (
    <nav className='fixed left-0 top-0 w-[200px] h-screen md:flex hidden '>
            <figure className="w-[70%] h-full pb-4 bg-[#012E6D] ">
                <div className="flex justify-between p-4 pl-3 mt-1  text-white">
                    <li  className=' bg-white rounded'>
                    <span >
                    <img src='/company_logo.png' alt='company' className=' w-10'/>
                    </span>
                    </li>
                   
                </div>

                <ul>
                   

                    <li  className='flex flex-col text-white'>
                       
                        <div
            className="flex place-items-center p-3 font-thin">
            <span className='text-white'><FaHome/></span>
        </div>
        </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 font-thin">
            <span className='text-white'><FaSignal/></span>
        </div>
          
        </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 font-thin">
            <span className='text-white'><FaComment/></span>
            
        </div>
         
        </li>
                    <li className='flex flex-col text-white'>
                    <div
            className="flex place-items-center p-3 font-thin">
            <span className='text-white'><FaWallet/></span>
           
        </div>
        </li>

                </ul>
            </figure>
            <figure className="w-[30%] h-full  opacity-[0.6]"></figure>
        </nav>
  )
}

export default SideBar
