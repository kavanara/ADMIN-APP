import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HeatMap from "react-heatmap-grid";
import Select from "react-select";
import Layout from "../../components/Layout";
import { Line } from "react-chartjs-2";
import { endOfToday, format, set } from 'date-fns' 
import TimeRange from 'react-timeline-range-slider'  
import { boolCompare } from "igniteui-react-core";

const now = new Date()
const getTodayAtSpecificHour = (hour = 12) =>
	set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })

const selectedStart = getTodayAtSpecificHour(0)
const selectedEnd = getTodayAtSpecificHour(1)

const startTime = getTodayAtSpecificHour(0)
const endTime = endOfToday()

 const disabledIntervals = [
   { start: getTodayAtSpecificHour(1), end: getTodayAtSpecificHour(2) },
   { start: getTodayAtSpecificHour(5), end: getTodayAtSpecificHour(6) },
  
 ]


const xLabels = ["","","","","","","",""];
const yLabels = ["", ""];
let lineData = [[], []];

const data = [
  [1.8,2 ,4 , 5, 8,9 ,3 ,4],
  [10,2 ,3 ,4 ,7 ,6 ,2 ,1],
];
const data00 = [
  [11, 21, 31, 41, 51, 61, 71, 81],
  [31, 41, 51, 61, 71, 81, 91, 101],
];
const data01 = [
  [12, 22, 32, 42, 52, 62, 72, 82],
  [32, 42, 52, 62, 72, 82, 92, 102],
];

const data11 = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2, 2, 2, 2],
];
const data0x = [
  [1, 2,3 , 4, 3, 2, 1,9,],
  [9, 8,7, 6, 5, 4, 1, 3,],
];
const data1x = [
  [0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0],
];
const graphline = [1, 1, 0, 0, 0, 0, 0, 0];

const lineDataKav2 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: 'red',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "black",
      pointHoverBorderColor: "red",
      pointHoverBorderWidth: 22,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [1,20 ,4 , 84, 56,2 ,],
    },
  ],
};
const hmm = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "black",
      pointHoverBorderColor: "red",
      pointHoverBorderWidth: 22,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [6,22 ,54 , 17, 14,6 ,],
    },
  ],
};





class App extends Component {
  state = {
    error:true,
    selectedInterval: [selectedStart, selectedEnd],
    selectedOption: "",
    options: [
      { value: "With Anomaly", label: "With Anomaly" },
      { value: "Mismatch", label: "Mismatch" },
    ],
    anomalyDiscrepancy: [[], []],
    graph: [],
    Switchname: "",
  };


  
  errorHandler = ({ error }) => this.setState({ error })  

  onChangeCallback = (selectedInterval )=> {
    //var error1;
    //error1:this.state.error;
    
        this.setState({ selectedInterval });

        // if(selectedInterval===[18,19])
        // {
        //   this.setState({error1:false});
        // }
     }
    
  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "With Anomaly") {
      lineData = data;
    }
    if (selectedOption.value === "Mismatch") {
      lineData = data00;
    }
  };

  disp = (a, b) => {
    var a, b;
    if (lineData === data) {
      if (a == 0 && b == 0) {
        this.setState({
          anomalyDiscrepancy: data0x,
          Switchname: "Switch 1",
        });
      }

      else 
      this.setState({
         anomalyDiscrepancy: data1x,
          Switchname: "Switch 2" 
      });
    } 
    else if (lineData === data00) {
      if (a == 1 && b == 1) {
        this.setState({ 
          anomalyDiscrepancy: data11 ,
          Switchname: "Switch 3",
        });
      }
      else 
      this.setState({ 
        anomalyDiscrepancy: data01,
        Switchname: "Switch 4", 
      });
    }
    
    console.log(a, b);
  };

  disp2 = (p, q) => {
    var p, q;
    if (p == 0 && q == 0) {
      this.setState({ graph: lineDataKav2 });
    }
    else
    this.setState({ graph: hmm });
  };

  render() {
    const { selectedInterval, error } = this.state 
    const { selectedOption, options } = this.state;
    
    const lineOptions = {
      title: {
        display: true,
      },

      legend: {
        display: true,
      },
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "y value",
            },
            ticks: {
              callback: function (value) {
                return parseFloat(value.toFixed(2));
              },
            },
            stacked: false,
            gridLines: {
              display: true,
              color: "rgba(255,99,132,0.2)",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time",
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    return (
      <Layout>
        <Container>
          <br/>
          <br/>
          <div>
            <table>
              <tr>
                <td width="40%" scope="col" class="text">
                  <Select onChange={this.handleChange} options={options} />
                </td>
              </tr>
            </table>

            <br />
            <br />
            <h3 class="text-left">ITL with anomaly</h3>
            <br />
            <br />
            <table className="table">
        <tr>
          <td width="20%" scope="col" class="text-left">
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              data={lineData}
              squares
              height={10}
              onClick={(x, y) => this.disp(x, y)}
              cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgb(245, 27, 0, ${
                  1 - (max - value) / (max - min)
                })`,
                fontSize: "11.5px",
                color: "#444",
              })
              
            }
              //cellRender={(value) => value && <div>{value}</div>}
              
            />
            </td>
            <td> <h2 class="text-right" >  {this.state.Switchname}</h2></td>
</tr>
</table>


            <br/>
           <br/>
         
          </div>
         
          <br />
          <h3 class="text-left">Anomalies</h3>
          <br />
          <br />
          <table className="table">
        <tr>
          <td width="20%" scope="col" class="text-left">
          <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            data={this.state.anomalyDiscrepancy}
            squares
            height={10}
            onClick={(p, q) => this.disp2(p, q)}
            cellStyle={(background, value, min, max, data, x, y) => ({
              background: `rgb(245, 27, 0, ${1 - (max - value) / (max - min)})`,
              fontSize: "11.5px",
              color: "#444",
            })}
            //cellRender={(value) => value && <div>{value}</div>}
          />
          </td>
          <br/>
          <br/>
          <td></td>

          </tr>
        </table>

        <br/>
          <br/>
        
          <h3 class="text-left">Graph</h3>
          <div class="col-8">
            <Line data={this.state.graph} options={lineOptions} />
          </div>





          <TimeRange
         error={error}  
        
          ticksNumber={36}  
          selectedInterval={selectedInterval}  
          timelineInterval={[startTime, endTime]}  
         onUpdateCallback={this.errorHandler}  
          onChangeCallback={this.onChangeCallback}
         
          disabledIntervals={disabledIntervals}  
          
        />
        </Container>
      </Layout>
    );
  }
}
export default App;
//  import React, { Component } from 'react';
// // //import Auth from '../services/Auth'
// import {Form } from 'react-bootstrap'
//  import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router-dom'

// // class Login extends Component {
// //     constructor (props) {
// //         super(props);
// //         this.state = {email: '',password:''};

// //         this.handleChange = this.handleChange.bind(this);
// //         //this.handleClick = this.handleClick.bind(this);
// //     }

// //     handleChange (event) {
// //         this.setState({[event.target.name]: event.target.value});
// //     }

// //     handleClick = (event) => {
// //         var data = {
// //             client_id: 2,
// //             client_secret: 'ispGH4SmkEeV4i5Tz9NoI0RSzid5mciG5ecw011f',
// //             grant_type: 'password',
// //             username: this.state.email,
// //             password: this.state.password
// //         }

// //         fetch('http://127.0.0.1:8000/oauth/token', {
// //             method: 'POST',
// //             headers: {
// //                 'Accept': 'application/json',
// //                 'Content-Type': 'application/json',
// //             },
// //             body: JSON.stringify(data)
// //         })
// //         .then((response) => response.json())
// //         .then((responseData) => {

// //             //Auth.setToken(responseData.access_token,responseData.expires_in+ Date.now());

// //             this.props.history.push("/Switch_profiles");  

// //         })
// //     }
// // }

// // 
// class Register extends React.Component {
//   state = {
//     toDashboard: false,
//     name:"kavana",
//   }

//   handleSubmit = (user) => {
//     this.setState(() => ({
//         toDashboard:true,
//         name:'kav',
//       }))
//   }
//   render() {
//     if (this.state.toDashboard === true) {
//       return <Redirect to='/tp' />
//     }

//     return (
//       <div>
//         <h1>Register</h1>
        
//         <div>{this.state.name}</div>
//         <Form onSubmit={this.handleSubmit} />
//       </div>
//     )
//   }
// }
// export default Register;

// import React, { useState } from "react";
// import Axios from "axios";

// function App(){

//   const [joke,setJoke]=useState("");

//   const getJoke = ()=>{
    
   
//   fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     "method": "POST",
//     "headers": {
//       "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//       "x-rapidapi-key": "apikey",
//       "content-type": "application/json",
//       "accept": "application/json"
//     },
//     "body": JSON.stringify({
//       id: this.state.id,
//       title: this.state.title,
//     })
//   })
//   .then(response => response.json())
//   .then((data)=>{
//     setJoke(data.id+ "..." + data.title);
//   });
  
//   }
//   return(
//     <div>
//       Heloo<button onClick={getJoke}>Joke</button>
//       {joke}
//     </div>
//   );
// }
//  export default App;


// import React, { useState } from 'react';

// function FetchAPI(){
//   const[data,setData]=useState([]);

//   const apiGet=()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response)=>response.json())
//     .then((json)=>{
//       console.log(json);
//       setData( {data:json})
     
//     });
//   };
//   return(
//     <div>
//       my api
//       <button onClick={apiGet}>Fetch API</button>
//       <pre>{JSON.stringify(data,null,2)}</pre>
//       {data.title}
//     </div>
//   );
// }
// export default FetchAPI

