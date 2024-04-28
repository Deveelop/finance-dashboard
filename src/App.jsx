
import FinanceDashboard from "./components/FinanceDashboard"
import SideBar from "./components/SideBar";
function App() {
 
  return (
    <>
      <div className=" flex">
        <SideBar/>
       <div className=""><FinanceDashboard/></div>
      
      </div>
    </>
  )
}

export default App;
