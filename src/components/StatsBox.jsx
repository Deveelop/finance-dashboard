import { useState } from "react";
import { ObjDetails, Options } from "../components/arrayobj"
import LineChart from "../components/LineChart"
const StatsBox = ({ typerec, numvisit}) => {
  const [userData, setUserData] = useState(ObjDetails)
  return (
    <div>
      <div className=" flex gap-2 shadow-lg p-5 rounded-md">
      <div className=" w-[100px]">
    <LineChart chartData={userData} chartOptions={Options} />
    </div>
        <span>
            <h3 className="uppercase text-sm font-bold text-gray-300 ">{typerec}</h3>
            <span className=" font-semibold">{numvisit}</span>
        </span>
      </div>
    </div>
  )
}

export default StatsBox;
