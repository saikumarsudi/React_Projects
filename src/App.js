import { PieChart, Pie, Legend, Cell, ResponsiveContainer,Label } from "recharts"
import './App.css'

const hindi = 60;
const num = (hindi/100) * 17711034

const data = [
  
  {
    count: 7438634.28,
    language: "SAS",
  },

  {
    count:  1593993.06,
    language: "SATA",
  },
  {
    count: 2656655.1,
    language: "SSD",
  },
]



console.log(num)

const App = () => {
  return (

    
    <>
   <div className="card">
     <div className="head">
       <h1 className="heading">Drive summary</h1>
       <img src= 'https://res.cloudinary.com/des7uyibo/image/upload/q_100/v1638442457/Vector_dahlhi.png'
       className="image"
       alt="imag" 
       />
     </div>
        <ResponsiveContainer  width="100%" height="80%" >
          <PieChart>
          
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              startAngle={33}
              endAngle={480}
              innerRadius="70%"
              outerRadius="90%"
              dataKey="count"
              stroke = "#00000D"
              // label="Drive summary"
            >
            
              <Cell name="SAS" fill="#336699" />
              <Cell name="SATA" fill="#AEAE5D" />
              <Cell name="SSD" fill="#99CCFF" />
              
          
              <Label value="Total" position="centerBottom"  style={{fontSize:"16px" , fill:"#EEEEEE"}} className="labels" />
              <Label value="46435489"  position="centerTop" style={{fontSize:"16px" , fill:"#EEEEEE"}}/>
            </Pie>
          
            <Legend
              iconType="square"
              iconSize="12"
              fontSize = "12"
              
              // layout="horizontal"
              // align="center"
              position="bottom"
              contentAlign ="center"
              margin = "16px,0px,0px,0px"
            
              // position ="center"
              // marginLeft ="56"
              // cx ="50%"
              // cy ="30%"
              //  ={{ top: "16px",
              //            left:"56px",
              //            bottom:"18px",
              //            right:"0px"  }} 
            />

            
          </PieChart>
        </ResponsiveContainer>
    </div>
  </>
    
    
  )
}

export default App