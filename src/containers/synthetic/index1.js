import React, { Component } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container, FormControl, Form ,Button} from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { flexbox } from "../synthetic/synthetic.css";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { GiSaveArrow} from "react-icons/gi";
let lineData;

const lineDataSignal = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"],
  datasets: [
    {
      label: "Signal",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "red",
      borderColor: "red",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "black",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 10, 0, 30, 44, 56, 32, 77, 93, 109, 81, 5, 47, 98, 14, 31, 99],
    },
  ],
};

const lineDataSpend = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "1 degree polynomial",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 5, -5, 0, 10, -10, 0],
    },
  ],
};

const lineDataRev = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "2 degree polynomial",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [27, 9, 37, 31, 102, 42, 19],
    },
  ],
};
const lineDataKav = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "3 degree polynomial",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [11, 22, 33, 44, 55, 66, 77],
    },
  ],
};

//for seasonality Data

const lineDataSpend1 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "Hourly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 5, 5, 0, 10, 10, 0],
    },
  ],
};

const lineDataRev1 = {
  labels:  ['Sunday', 'monday', 'tuesday','Wednesday','thursday','Friday','Saturday'],
  datasets: [
    {
      label:"Daily",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [49, 22, 23,65,43,21,7]
    },
  ],
};
const lineDataKav1 = {
  label: ['Week 1 ', 'Week 2', 'Week 3','Week 4',],
  datasets: [
    {
      label: "Weekly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 27, 3, 84, 53, 6, 97],
    },
  ],
};

const lineDataKav10 = {
  labels: ['January', 'February', 'March','April','May','June', 'July', 'Aug', 'Sept','Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: "Monthly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 27, 3, 84, 53, 6, 97,23,56,79,91,11],
    },
  ],
};
//for anomaly

const lineDataSpend2 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "Point Anomaly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 5, 5, 0, 10, 10, 0],
    },
  ],
};

const lineDataRev2 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "Contextual Anomaly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [7, 9, 7, 1, 12, 2, 9],
    },
  ],
};
const lineDataKav2 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "Collective Anomaly",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 27, 3, 84, 53, 6, 97],
    },
  ],
};

//residue
const lineDataSpend3 = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
  datasets: [
    {
      label: "Normal1",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "blue",
      borderColor: "blue",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "blue",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 50, 50, 0, 50, 50, 0],
    },
    // {
    //   label: "normal2",
    //   fill: false,
    //   lineTension: 0.1,
    //   backgroundColor: "red",
    //   borderColor: "red",
    //   borderCapStyle: "butt",
    //   borderDash: [],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: "miter",
    //   pointBorderColor: "rgba(75,192,192,1)",
    //   pointBackgroundColor: "#fff",
    //   pointBorderWidth: 1,
    //   pointHoverRadius: 5,
    //   pointHoverBackgroundColor: "blue",
    //   pointHoverBorderColor: "rgba(220,220,220,1)",
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 1,
    //   pointHitRadius: 10,
    //   data: [25, 5, 8, 53, 96, 35, 20],
    // },
    // {
    //   label: "total",
    //   fill: false,
    //   lineTension: 0.1,
    //   backgroundColor: "green",
    //   borderColor: "green",
    //   borderCapStyle: "butt",
    //   borderDash: [],
    //   borderDashOffset: 0.0,
    //   borderJoinStyle: "miter",
    //   pointBorderColor: "rgba(75,192,192,1)",
    //   pointBackgroundColor: "#fff",
    //   pointBorderWidth: 1,
    //   pointHoverRadius: 5,
    //   pointHoverBackgroundColor: "blue",
    //   pointHoverBorderColor: "rgba(220,220,220,1)",
    //   pointHoverBorderWidth: 2,
    //   pointRadius: 1,
    //   pointHitRadius: 10,
    //   data: [25, 55, 58, 53, 146, 85, 20],
    // },
  ],
};

class App1 extends Component {
  state = {
    selectedOption: "",
    options: [
      { value: "Hourly", label: "Hourly" },
      { value: "Daily", label: "Daily" },
      { value: "Weekly", label: "Weekly" },
      { value: "Monthly", label: "Monthly" },
    ],
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "Hourly") {
      lineData = lineDataSpend1;
    }
    if (selectedOption.value === "Daily") {
      lineData = lineDataRev1;
    }

    if (selectedOption.value === "Weekly") {
      lineData = lineDataKav1;
    }
    if (selectedOption.value === "Monthly") {
      lineData = lineDataKav10;
    }
  };

  render() {
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
              labelString: 'y value'
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
              labelString: 'Time'
            },
            label:"Time",
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <Container>
        <div>
          
            <div class="col-12">
              <h2 class="text-left"> Seasonality</h2>
            <table>
              <td  width="40%" scope="col" class="text">
                <Select onChange={this.handleChange} options={options} /></td>
                &nbsp;
               <td width="40%" scope="col" class="text" > <FormControl placeholder="eg. 10+2sin(x)+2sin(7x)" className="col-md-8 column" className="block-example border border-primary" />
                </td>
                </table>
              




            </div>
           
              
            
          </div>
         
        
        <div class="col-8">
          <Line data={lineData} options={lineOptions} />
          </div>
         
      </Container>
    );
  }
}
class App2 extends Component {
  state = {
    selectedOption: "",
    options: [
      { value: "1 degree polynomial", label: "1 degree polynomial" },
      { value: "2 degree polynomial", label: "2 degree polynomial" },
      { value: "3 degree polynomial", label: "3 degree polynomial" },
    ],
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "1 degree polynomial") {
      lineData = lineDataSpend;
    }
    if (selectedOption.value === "2 degree polynomial") {
      lineData = lineDataRev;
    }

    if (selectedOption.value === "3 degree polynomial") {
      lineData = lineDataKav;
    }
  };

  render() {
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
          {scaleLabel: {
            display: true,
            labelString: 'y value'
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
          {scaleLabel: {
            display: true,
            labelString: 'Time'
          },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <Container>
        <div>
          
            <div class="col-12">
              <h2 class="text-left">Trend</h2>

              <table>
              <td  width="40%" scope="col" class="text">
                <Select onChange={this.handleChange} options={options} /></td>
                &nbsp;
               <td width="40%" scope="col" class="text" > <FormControl placeholder="eg. x^2+x+1" className="col-md-8 column" className="block-example border border-primary" />
                </td>
                </table>
            </div>
            
          
        </div>
        <div class="col-8">
              <Line data={lineData} options={lineOptions} />
            </div>
         
      </Container>
    );
  }
}

// class App3 extends Component {
//   state = {
//     selectedOption: "",
//     options: [
//       { value: "Point", label: "Point" },

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

class App4 extends Component {
  state = {
    selectedOption: "",
    options: [
      { id: 1, check: false, value: "Normal", label: "Normal" },
      // { id: 2, check: false, value: "Uniform", label: "Uniform" },
    ],
    rows: [{}],
  };

  handleMeanChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleStdChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };

  handleAddRow = () => {
    const item = {
      mean: 0,
      stdDev: 0,
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1),
    });
  };

  handleChange1 = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        options: prevState.options.map((li) =>
          li.id === +id ? { ...li, check: !li.check } : li
        ),
      };
    });
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "Normal") {
      lineData = lineDataSpend3;
    }
    console.log(lineData);
  };

  render() {
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
          {scaleLabel: {
            display: true,
            labelString: 'y value'
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
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    //     <Container>
    //     <div>
    //       <div class="row justify-content-end">
    //         <div class="col-6">
    //           <h2 class="text-left">Anomaly</h2>

    //           <td width="20%" scope="col" class="text">
    //             <Select onChange={this.handleChange} options={options} />
    //           </td>
    //         </div>
    //         <div class="col-6">
    //           <Line data={lineData} options={lineOptions} />
    //         </div>
    //       </div>
    //     </div>
    //   </Container>
    // );
    return (
      <Container>
        <div>


          <div class="row justify-content-end">
            <div class="col-6">
              <h2 class="text-left">Residue</h2>
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center">Check</th>
                    <th className="text-center"> Distribution Type </th>
                    <th className="text-center"> Mean </th>
                    <th className="text-center"> Std. Dev. </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td width="5%" scope="col" class="text">
                        <input
                          type="checkbox"
                          id={idx.id}
                          checked={idx.check}
                          onChange={this.handleChange1}
                        />
                      </td>
                      <td width="40%" scope="col" class="text">
                        <Select
                          onChange={this.handleChange}
                          options={options}
                        />
                      </td>
                      <td width="15%" scope="col" class="text">
                        <input
                          type="text"
                          name="mean"
                          value={this.state.rows[idx].mean}
                          onChange={this.handleMeanChange(idx)}
                          className="form-control"
                        />
                      </td>

                      <td width="15%" scope="col" class="text">
                        <input
                          type="text"
                          name="std"
                          value={this.state.rows[idx].std}
                          onChange={this.handleStdChange(idx)}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-md-2 column">
              <button onClick={this.handleAddRow} className="btn btn-primary">
                <IoMdAdd />
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-primary float-right"
              >
                <IoIosRemove />
              </button>
            </div>
          </div>

        </div>

        <button type="button" class="btn btn-primary" onClick={this.handleRe}>
          ADD
        </button>
        <div class="col-8">
          <Line data={lineData} options={lineOptions} />
        </div>
      </Container>
    );
  }
}

class App10 extends Component {
  state = {
    selectedOption: "",
    options: [
      {
        id: 2,
        check: false,
        value: "Normal",
        label: "Normal",
        mean: "",
        stdDev: "",

      },
    ],
    // lineData: {
    //   labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
    //   datasets: [
    //     {
    //       label: "Normal1",
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "blue",
    //       borderColor: "blue",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "blue",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [0, 50, 50, 0, 50, 50, 0],
    //     },
    //   ],
    // },
    seriesList: [
      {
        mean: 0,
        stdDev: 0,
        numpts: 7,

      }
    ],
  };

  getTotalSeries = (datasets) => {
    const total = [0, 0, 0, 0, 0, 0, 0];
    datasets.map((item, idx) => {
      for (let i = 0; i < item.data.length; i++) {
        total[i] = total[i] + item.data[i];
      }
    })
    return total;
  }

  generateData = (mean, stdDev, numpts) => {
    var mean = parseInt(mean);
    return [0 + mean, 50 + mean, 50 + mean, 0 + mean, 50 + mean, 50 + mean, 0 + mean]
  }

  getLineData = (seriesList) => {
    const datasets = [];
    const colors = ["blue", "red", "green", "black", "blue", "blueviolet", "brown ", " burlywood ", "cadetblue", "chartreuse", "chocolate"];
    seriesList.map((item, idx) => (
      datasets.push({
        label: `Normal  Mean:${item.mean}  Std.Dev:${item.stdDev} `,
        fill: false,
        lineTension: 0.1,
        backgroundColor: colors[idx],
        borderColor: colors[idx],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: colors[idx],
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.generateData(item.mean, item.stdDev, item.numpts)
      })
    ))
    if (datasets.length > 1) {
      datasets.push({
        label: `total  `,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "coral",
        borderColor: "coral",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "coral",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.getTotalSeries(datasets)
      })
    }
    return {
      labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
      datasets: datasets,
    }
  };



  handleMeanChange = (idx) => (e) => {

    const { name, value } = e.target;
    const seriesList = [...this.state.seriesList];

    seriesList[idx] = {
      [name]: value,
      stdDev: this.state.seriesList[idx].stdDev,
    };
    this.setState({
      seriesList: seriesList,
    });
  };
  handleStdChange = (idx) => (e) => {
    const { name, value } = e.target;

    const seriesList = [...this.state.seriesList];

    seriesList[idx] = {
      [name]: value,
      mean: this.state.seriesList[idx].mean,
    };
    this.setState({
      seriesList: seriesList,
    });
  };

  handleAddRow = () => {
    const item = {
      mean: 0,
      stdDev: 0,
    };
    this.setState({
      seriesList: [...this.state.seriesList, item],
    });
  };

  handleRemoveRow = () => {
    this.setState({
      seriesList: this.state.seriesList.slice(0, -1),
    });
  };

  handleChange1 = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        options: prevState.options.map((li) =>
          li.id === +id ? { ...li, check: !li.check } : li
        ),
      };
    });
  };

  handleChange = (selectedOption) => {
    //console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "Normal") {
      lineData = selectedOption.lineDataSpend3;
    }

    console.log(lineData);
  };

  render() {
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
          {scaleLabel: {
            display: true,
            labelString: 'y value'
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
          {scaleLabel: {
            display: true,
            labelString: 'Time'
          },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };





    return (
      <Container>
        <div>
          <div className="container">
            <h2 class="text-left">Residue </h2>
            <div className="row clearfix">
              <div className="col-md-10 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center">Check</th>
                      <th className="text-center"> Distribution Type </th>
                      <th className="text-center"> Mean </th>
                      <th className="text-center"> Std. Dev. </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.seriesList.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td width="5%" scope="col" class="text">
                          <input
                            type="checkbox"
                            id={idx.id}
                            checked={idx.check}
                            onChange={this.handleChange1}
                          />
                        </td>
                        <td width="40%" scope="col" class="text">
                          <Select
                            onChange={this.handleChange}
                            options={options}
                          />
                        </td>
                        <td width="15%" scope="col" class="text">
                          <input
                            type="text"
                            name="mean"
                            value={this.state.seriesList[idx].mean}
                            onChange={this.handleMeanChange(idx)}
                            className="form-control"
                          />
                        </td>

                        <td width="15%" scope="col" class="text">
                          <input
                            type="text"
                            name="stdDev"
                            value={this.state.seriesList[idx].stdDev}
                            onChange={this.handleStdChange(idx)}
                            className="form-control"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-md-2 column">
                <button onClick={this.handleAddRow} className="btn btn-primary">
                  <IoMdAdd />
                </button>
                <button
                  onClick={this.handleRemoveRow}
                  className="btn btn-primary float-right"
                >
                  <IoIosRemove />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="col-8">
          <Line data={this.getLineData(this.state.seriesList)} options={lineOptions} />
        </div>
      
      </Container>
    );
  }
}

//<Line data={this.getLineData(this.state.seriesList)} options={lineOptions} />


class App11 extends Component {


  render() {

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
          {scaleLabel: {
            display: true,
            labelString: 'y value'
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
          {scaleLabel: {
            display: true,
            labelString: 'Time'
          },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <Container>
        <div>

          <h2 class="text-left">&nbsp;&nbsp;Signal</h2>



          <div class="col-8">
            <Line data={lineDataSignal} options={lineOptions} />
          </div>
        </div>
       

      </Container>
    );
  }
}





///Anamoly modified from residue
class App3 extends Component {
  state = {
    selectedOption: "",
    options: [
      {
        id: 2,
        check: false,
        value: "Point",
        label: "Point",
        mean: "",
        stdDev: "",

      },
    ],
    // lineData: {
    //   labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
    //   datasets: [
    //     {
    //       label: "Normal1",
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "blue",
    //       borderColor: "blue",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "blue",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [0, 50, 50, 0, 50, 50, 0],
    //     },
    //   ],
    // },
    seriesList: [
      {
        mean: 0,
        stdDev: 0,
        numpts: 7,

      }
    ],
  };

  getTotalSeries = (datasets) => {
    const total = [0, 0, 0, 0, 0, 0, 0];
    datasets.map((item, idx) => {
      for (let i = 0; i < item.data.length; i++) {
        total[i] = total[i] + item.data[i];
      }
    })
    return total;
  }

  generateData = (mean, stdDev, numpts) => {
    var mean = parseInt(mean);
    return [0 + mean, 50 + mean, 50 + mean, 0 + mean, 50 + mean, 50 + mean, 0 + mean]
  }

  getLineData = (seriesList) => {
    const datasets = [];
    const colors = ["blue", "red", "green", "black", "blue", "blueviolet", "brown ", " burlywood ", "cadetblue", "chartreuse", "chocolate"];
    seriesList.map((item, idx) => (
      datasets.push({
        label: `Point  Period:${item.mean}  Frequency:${item.stdDev} `,
        fill: false,
        lineTension: 0.1,
        backgroundColor: colors[idx],
        borderColor: colors[idx],
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: colors[idx],
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.generateData(item.mean, item.stdDev, item.numpts)
      })
    ))
    if (datasets.length > 1) {
      datasets.push({
        label: `Total  `,
        fill: false,
        lineTension: 0.1,
        backgroundColor: "coral",
        borderColor: "coral",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "coral",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.getTotalSeries(datasets)
      })
    }
    return {
      labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s"],
      datasets: datasets,
    }
  };



  handleMeanChange = (idx) => (e) => {

    const { name, value } = e.target;
    const seriesList = [...this.state.seriesList];

    seriesList[idx] = {
      [name]: value,
      stdDev: this.state.seriesList[idx].stdDev,
    };
    this.setState({
      seriesList: seriesList,
    });
  };
  handleStdChange = (idx) => (e) => {
    const { name, value } = e.target;

    const seriesList = [...this.state.seriesList];

    seriesList[idx] = {
      [name]: value,
      mean: this.state.seriesList[idx].mean,
    };
    this.setState({
      seriesList: seriesList,
    });
  };

  handleAddRow = () => {
    const item = {
      mean: 0,
      stdDev: 0,
    };
    this.setState({
      seriesList: [...this.state.seriesList, item],
    });
  };

  handleRemoveRow = () => {
    this.setState({
      seriesList: this.state.seriesList.slice(0, -1),
    });
  };

  handleChange1 = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        options: prevState.options.map((li) =>
          li.id === +id ? { ...li, check: !li.check } : li
        ),
      };
    });
  };

  handleChange = (selectedOption) => {
    //console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "Point") {
      lineData = selectedOption.lineDataSpend3;
    }

    console.log(lineData);
  };

  render() {
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
          {scaleLabel: {
            display: true,
            labelString: 'y value'
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
          {scaleLabel: {
            display: true,
            labelString: 'Time'
          },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };





    return (
      <Container>
        <div>
          <div className="container">
            <h2 class="text-left">Anomaly</h2>
            <div className="row clearfix">
              <div className="col-md-10 column">
                <table
                  className="table table-bordered table-hover"
                  id="tab_logic"
                >
                  <thead>
                    <tr>
                      <th className="text-center">Check</th>
                      <th className="text-center"> Anomaly </th>
                      <th className="text-center"> Period </th>
                      <th className="text-center"> Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.seriesList.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td width="5%" scope="col" class="text">
                          <input
                            type="checkbox"
                            id={idx.id}
                            checked={idx.check}
                            onChange={this.handleChange1}
                          />
                        </td>
                        <td width="40%" scope="col" class="text">
                          <Select
                            onChange={this.handleChange}
                            options={options}
                          />
                        </td>
                        <td width="15%" scope="col" class="text">
                          <input
                            type="text"
                            name="mean"
                            value={this.state.seriesList[idx].mean}
                            onChange={this.handleMeanChange(idx)}
                            className="form-control"
                          />
                        </td>

                        <td width="15%" scope="col" class="text">
                          <input
                            type="text"
                            name="stdDev"
                            value={this.state.seriesList[idx].stdDev}
                            onChange={this.handleStdChange(idx)}
                            className="form-control"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="col-md-2 column">
                <button onClick={this.handleAddRow} className="btn btn-primary">
                  <IoMdAdd />
                </button>
                <button
                  onClick={this.handleRemoveRow}
                  className="btn btn-primary float-right"
                >
                  <IoIosRemove />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div class="col-8">
          <Line data={this.getLineData(this.state.seriesList)} options={lineOptions} />
        </div>
        
      </Container>
    );
  }
}




export { App1, App2, App3, App4, App10, App11 };
