import { UserPostss } from "./arrayobj"
import {FaPlayCircle, FaClock, FaStar} from 'react-icons/fa'

const UserPosts = () => {
  return (
    <div>
     
      <div className=" w-[100%] mt-10">
        <div className=" flex gap-2 mb-5">
        <img src="/veepht.jpg" alt="proimg" className=" w-10 rounded-[50%] h-12 border "/>
        <div>
            <h3 className=" font-semibold">Lily Donovan</h3>
            <span className=" text-gray-400 text-sm">Business trainer</span>
        </div>
        </div>
        <div className=" title">
            <h2 className=" font-semibold mb-3">How to properly manage your personal budget?</h2>

            <div className=" mb-5">
           {
            UserPostss.map((posts) => (
              <div className=" flex gap-4">
              <span className=" flex items-center gap-2"><FaPlayCircle className=" text-[#4826b9]"/><span>{posts.content}</span></span>
              <span className=" flex items-center gap-2"><FaClock className=" text-[#4c93f0]"/><span>{posts.timing}</span></span>
              <span className=" flex items-center gap-2"><FaStar className=" text-[red]"/><span>{posts.numberOfLikes}</span></span>
          </div>
            ))
           }
           </div>
                <div className=" flex justify-between">
                   <span className=" font-medium">5 days ago</span>
              <button className=" bg-[#4826b9] p-2 rounded-3xl text-white">Connect  &gt; </button>
               </div>
          
          
           
        </div>
      </div>
    </div>
  )
}

export default UserPosts
