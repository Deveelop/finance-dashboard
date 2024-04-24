

const StatsBox = ({ typerec, numvisit,  imgsrc, altrec}) => {
  return (
    <div>
      <div className=" flex gap-2 shadow-lg p-5 rounded-md">
        <img src={imgsrc} alt={altrec}/>
        <span>
            <h3 className="uppercase">{typerec}</h3>
            <span>{numvisit}</span>
        </span>
      </div>
    </div>
  )
}

export default StatsBox;
