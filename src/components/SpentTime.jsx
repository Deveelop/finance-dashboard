import { useState } from "react"
import LineChart from "./LineChart"
import { ObjDays, OptionsDays } from "./arrayobj"

const SpentTime = () => {
    const [userData, setUserData] = useState(ObjDays)
  return (
    <div className=" mt-10">
      
      <div className=" w-[400px] rounded-xl shadow-xl">
      <LineChart chartData={userData} chartOptions={ OptionsDays}/>
      </div>
      
    </div>
  )
}

export default SpentTime
