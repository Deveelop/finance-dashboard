

const ChartBar = ({label}) => {
  return (
    <div className="h-[100%] flex flex-col items-center">
    <div className=" h-[100%] w-[100%] border-solid border border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end">
      <div
        className=" bg-[#4826b9] w-[100%] h-[10%]"
      ></div>
    </div>
    <div className=" font-bold text-sm text-center">{label}</div>
  </div>
  )
}

export default ChartBar
