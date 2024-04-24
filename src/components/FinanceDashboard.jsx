import StatsBox from "./StatsBox"
import { VisitStat } from "./visistate"
import Header from "./Header"
import Chart from "./Chart"
import SpentTime from "./SpentTime"
const FinanceDashboard = () => {
  return (
    <div className="">
       <Header/>
    <div className=" w-[65%]  m-auto">
      <div className="">
        <div className=" flex justify-between mt-10 ">
         {
          VisitStat.map((recs) => (
           <StatsBox key={recs.altrec} {...recs} />
          
          ))
         }
        </div>
        
        <div className=" mt-10">
        <Chart/>
        </div>
         <div className="">
        <SpentTime/>
        <h1>hellooooooo</h1>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default FinanceDashboard;
