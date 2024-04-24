import { UserData, DaysOfWeek } from "../components/Data"
export const ObjDetails = {
    labels: UserData.map((data) => data.year ),
    datasets: [{
     
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [ "#ecf0f1"],
      fill: true,
      borderColor: ['blue'],
      pointRadius: 0,
      
   }]
   }

   export const ObjDays = {
    labels: DaysOfWeek.map((data) => data.day ),
    datasets: [{
     
      label: "Spent time",
      data: DaysOfWeek.map((data) => data.time),
      backgroundColor: [ "#ecf0f1"],
      fill: true,
      pointRadius: 0,
      borderWidth: 0,
      borderCapStyle: 'round',
      
   }]
   }

   export const  OptionsDays = {
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 0,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },

      y: {
        grid: {
          display: false, 
        },
         ticks: {
          display: false, 
        },
      },
     
    },
    
  }

   export const  Options = {
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false, 
        },
         ticks: {
          display: false, 
        },
      },
    },
    
  }

 