import StatsBox from "./StatsBox"
import { VisitStat } from "./visistate"

const FinanceDashboard = () => {
  return (
    <div className=" w-[65%]  m-auto">
      <div className="">
        <div className=" flex justify-between">
         {
          VisitStat.map((recs) => (
           <StatsBox key={recs.altrec} {...recs} />
         
          ))
         }

         
    
        </div>
        
        <div>
        
        </div>
      </div>
    </div>
  )
}

export default FinanceDashboard;
