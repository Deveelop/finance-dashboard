import StatsBox from "./StatsBox"
import { VisitStat } from "./visistate"
import Header from "./Header"
import Chart from "./Chart"
import SpentTime from "./SpentTime"
import UserPosts from "./UserPosts"
const FinanceDashboard = () => {
  return (
    <div className="">
       <Header/>
    <div className=" w-[65%]  m-auto">
      <div className="">
        <div className=" flex justify-between mt-10 ">
         {
          VisitStat.map((recs, id) => (
           <StatsBox key={id} {...recs} />
          
          ))
         }
        </div>
        
        <div className=" mt-10">
        <Chart/>
        </div>
         <div className=" flex gap-10 mb-20 ">
        <SpentTime/>
        <UserPosts/>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default FinanceDashboard;
