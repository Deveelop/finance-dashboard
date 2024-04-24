import FilterCmp from "./FilterCmp"
import ChartBar from "./ChartBar";
const Chart = () => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  return (
    <div className=" bg-[#c3b4f3] shadow-lg p-4 rounded-xl ">
    <FilterCmp/>
    <div className=" mt-10  text-center flex justify-around h-[10rem] ">
      {
        chartDataPoints.map((points) => (
       <ChartBar label={points.label} />
        ))
      }
    </div>
</div>
  
  
  
  )
}

export default Chart
