// import React, { state } from "react";
// import Layout from "../../components/Layout";
// import {
//   Container,
//   Button,
//   Row,
//   Col,
//   Table,
//   Form,
//   Modal,InputGroup,FormControl
// } from "react-bootstrap";
// import { Jumbotron } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { IoMdAdd } from "react-icons/io";
// import { BsFillPlayFill} from "react-icons/bs";
// import Select from "react-select";

// export class App extends React.Component {
//   state = {
//     list: [
//       { id: 1, label: "Switch profile 1 ", value: true ,count:"40000"},
//       { id: 2, label: "Switch profile 1 ", value: true ,count:"40000"},
//       { id: 3, label: "Switch profile 1 ", value: true ,count:"40000"},
//       { id: 4, label: " Switch profile 1 ", value: true,count:"40000" },
//     ],
    
//   };
 
   

    


//   addItem(e) {
   
//     e.preventDefault();

//     const { list } = this.state;
//    // const newItem = this.newItem;
//     const newItem = "Tier -5 traffic profile ";
//     const newId = Math.floor(Math.random() * 100) + 1;
//     const newValue = false;
//     const obj = { id: newId, label: newItem, value: newValue };

   
//     newItem !== "" &&
//       this.setState({
//         list: [...this.state.list, obj],
       
//       });
    

//     this.addForm.reset();
//     console.log(this.state.list);
//   }

//   handleChange = (e) => {
//     const id = e.target.id;
//     this.setState((prevState) => {
//       return {
//         list: prevState.list.map((li) =>
//           li.id === +id ? { ...li, value: !li.value } : li
//         ),
//       };
//     });
//   };
//   handleClick = () => {
//     this.setState((prevState) => {
//       return {
//         list: prevState.list.filter((li) => !li.value),
//       };
//     });
//   };

//   change(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
//   render() {
//     return (
//       <Layout>
//         <Jumbotron
//           style={{ margin: "0rem", background: "#fff" }}
//           className="text-center"
//         >
//           <h1>Run Profiles</h1>
//           <Container>
         
            
          
//             <div className="App">
//                <div class="text-right"> 
              
               
             
              
              
                
//               </div>

//               {/* <button onClick={this.handleClick}>Delete</button> */}
//               <table className="table">
//                 <thead>
//                   <tr>
//                   <th scope="col" className="text-left"><input
//                               type="checkbox"
                              
//                               onChange={this.handleChange}
//                             /></th>
//                     <th scope="col" className="text">Switch Profiles</th>
//                     <th scope="col" className="text">ITL</th>
                    
                    
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.list.map((e) => {
//                     return (
//                       <tr key={e.id}>
                       
//                         {/* <td className="text-left">{e.label}</td> */}
//                         <td md ="6"className="text-left">
//                           <div key={e.id}>
//                             <input
//                               type="checkbox"
//                               id={e.id}
//                               checked={e.value}
//                               onChange={this.handleChange}
//                             />
//                             <label htmlFor={e.id}></label>
//                           </div>
//                         </td>
//                         <td md="14"> hello</td>
//             <td> {this.state.list.count}</td>
                       
                        
                       
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <button
//               type="button"
//               class="btn btn-primary"
              
//             >
//               <IoMdAdd />  New
//             </button>
//             &nbsp; &nbsp;
//             <button
//               type="button"
//               class="btn btn-primary"
              
//             >
//              <BsFillPlayFill/> Run
//             </button>
//             &nbsp;&nbsp;
//             <button
//               type="button"
//               class="btn btn-primary"
             
//             >
//               Analyze
//             </button>
            
//             {/* <button
//                   type="button"
//                   class="btn btn-primary"
//                   onClick={this.handleClick}
//                 >
//                   Delete
//                 </button> */}

               
//           </Container>
//         </Jumbotron>
//       </Layout>
//     );
//   }
// }



// import React,{Component} from 'react';
// import {Line} from 'react-chartjs-2';
// import Layout from "../../components/Layout";
// import { Container } from "react-bootstrap";
// import { Jumbotron } from "react-bootstrap";

// class BarChart extends Component
// {
//   constructor() {
//     super();
//     this.state = {
//       lineChartData: []
//     }
// //EVENT BINDINGS FOR ONCLICK EVENTS ON BUTTONS
//     this.change0 = this.change0.bind(this);
//     this.change1 = this.change1.bind(this);
//     this.change2 = this.change2.bind(this);
//   }

//   componentDidMount() {
//     this.change0();
//     }


//   change0(){
//     this.setState({
//       lineChartData:{
//         labels: ['9 am', '3 pm', '9 pm',],
//         datasets: [
//           {
//             label: 'Daily',
//             fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'red',
//       borderColor: 'red',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'blue',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
            
//             data: [65, 59, 80]
//           }
//         ]
//       }
//     })
//   }
//     //OUR TWO NEW METHODS FOR  UPDATING THE STATE barChartData BASED ON EVENTS ON CLICK 
//     change1(){
//       this.setState({
//         lineChartData:{
//           labels: ['Sunday', 'monday', 'tuesday','Wednesday','thursday','Friday','Saturday'],
//           datasets: [
//             {
//               label: 'weekly',
//               fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'red',
//       borderColor: 'red',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'blue',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//               data: [49, 22, 23,65,43,21,7]
//             }
//           ]
//         }
//       })
//     }

//   change2(){
//     this.setState({
//       lineChartData:{
//         labels: ['January', 'February', 'March','April','May','June', 'July', 'Aug', 'Sept','Oct', 'Nov', 'Dec'],
//         datasets: [
//           {
//             label: 'Monthly',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'red',
//             borderColor: 'red',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'blue',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [49, 22, 23,65,43,21,56,57, 100,23,43,21,]
//           }
//         ]
//       }
//     })
//   }

//   render() {
//     return (
//       <Layout>
//       <Jumbotron
//         style={{ margin: "0rem", background: "#fff" }}
//         className="text-center"
//       >
//         <Container>
//          <h1 class="text-left">Time Series</h1>
//         <div>
//         <div class="col-6">
//           <Line data={this.state.lineChartData}  />
        
//           <button onClick={this.change0}>Daily</button>
//           &nbsp;&nbsp;
//           <button onClick={this.change1}>Weekly</button>
//           &nbsp;&nbsp;
//           <button onClick={this.change2}>Monthly</button>
//           {/*<button onClick={this.change2}></button>*/}
//         </div>
//         </div>
//         </Container>
//         </Jumbotron>
//       </Layout>
//   )
//   }
// }

// export default (BarChart);


// class App3 extends Component {
//   state = {
//     selectedOption: "",
//     options: [
//       { value: "Daily", label: "Daily" },
//       { value: "Weekly", label: "Weekly" },
//       { value: "Monthly", label: "Monthly" },
//     ],
//   };

//   handleChange = (selectedOption) => {
//     console.log(selectedOption);
//     this.setState({
//       selectedOption: this.state.options.value,
//     });
//     if (selectedOption.value === "Point") {
//       lineData = lineDataSpend2;
//     }
//     if (selectedOption.value === "Contextual") {
//       lineData = lineDataRev2;
//     }

//     if (selectedOption.value === "Collective") {
//       lineData = lineDataKav2;
//     }
//   };

//   render() {
//     const { selectedOption, options } = this.state;
//     const lineOptions = {
//       title: {
//         display: true,
//       },

//       legend: {
//         display: true,
//       },
//       maintainAspectRatio: true,
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               callback: function (value) {
//                 return parseFloat(value.toFixed(2));
//               },
//             },
//             stacked: false,
//             gridLines: {
//               display: true,
//               color: "rgba(255,99,132,0.2)",
//             },
//           },
//         ],
//         xAxes: [
//           {
//             gridLines: {
//               display: false,
//             },
//           },
//         ],
//       },
//     };

//     return (
//       <Container>
//         <div>
//           <div class="row justify-content-end">
//             <div class="col-6">
//               <h2 class="text-left">Anomaly</h2>

//               <td width="20%" scope="col" class="text">
//                 <Select onChange={this.handleChange} options={options} />
//               </td>
//             </div>
//             <div class="col-6">
//               <Line data={lineData} options={lineOptions} />
//             </div>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container, InputGroup, FormControl, Tabs } from "react-bootstrap";
import { Jumbotron,Button } from "react-bootstrap";
import { App1, App2, App3, App4, App10, App11 } from "../Analyze/index1";

import { GiSaveArrow} from "react-icons/gi";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Synthetic",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <Container>
            <div>
              <h1>
                
              </h1>
            </div>

            <div>
              
                      <App3/>
                      <App10/>
                  {/* <br />
                  <br />
                  <App3/>
                  <br/>
                  <br/>
                  <App1 />
                  <br />
                  <br />
                  <App2 />
                  <br />
                  <br />
                 
                 
                  */}
                
              {/* <Link to="/Run_profiles" className="navbar-brand">
              <Button> <GiSaveArrow/> Save</Button> 
              </Link> */}
            </div>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

//render(<App />, document.body);
export default App;
