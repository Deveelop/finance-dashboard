import {FaSistrix, FaBell} from 'react-icons/fa'



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
          
           <img src='/veepht.jpg' className='w-10 rounded-[50%] h-12 border' alt='user'/>
        </div>
        </div>
        </div>
       

    </header>
  )
}

export default Header
