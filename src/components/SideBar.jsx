import {BsPeople, BsPersonWorkspace, BsCashCoin, BsPhone } from 'react-icons/bs'

const  SideBar = () => {
  return (
    <nav className='fixed left-0 top-0 w-[200px] h-screen flex '>
            <figure className="w-[70%] h-full pb-4 bg-[#012E6D] ">
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
  )
}

export default SideBar
