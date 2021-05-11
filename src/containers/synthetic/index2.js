import React, { Component } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container,Button } from "react-bootstrap";


import { Jumbotron } from "react-bootstrap";
import { IoMdAdd, IoIosRemove } from "react-icons/io";

let lineData;

const lineDataSignal = {
  labels: ["1s", "2s", "3s", "4s", "5s", "6s", "7s","8s","9s","10s","11s","12s","13s","14s","15s","16s","17s"],
  datasets: [
    {
      label:"Signal",
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
      data: [100, 110,0,30,44,56,32,77,93,109,81,5,47,98,14,31,99],
    },
  ],
};


const lineDataSpend4 = {
    labels: ["March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "AAEFS DATA",
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
        pointHoverBackgroundColor: 'blue',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [5, 5, 5, 0, 0, 0, 40],
      },
    ],
  };
  
  const lineDataRev4 = {
    labels: ["March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Sin 90",
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
        pointHoverBackgroundColor: 'blue',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [7, 9, 7, 1, 12, 2, 9],
      },
    ],
  };
  const lineDataKav4 = {
    labels: ["March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "sin 180",
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
        pointHoverBackgroundColor: 'blue',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 27, 3, 84, 53, 6, 97],
      },
    ],
  };
  
  const lineDataSpend5 = {
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
  
  const lineDataRev5 = {
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
  const lineDataKav5 = {
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
class App5 extends Component {
    state = {
        
        selectedOption: "",
        options: [
          { value: "AAEFS DATA", label: "AAEFS DATA" },
          { value: "Customer Data 1", label: "Customer Data 1" },
          { value: "Customer Data 2", label: "Customer Data 2" },
        ],
      };
    
      handleChange = (selectedOption) => {
        console.log(selectedOption);
        this.setState({
            selectedOption: this.state.options.value,
          });
          if (selectedOption.value === "AAEFS DATA") {
            lineData = lineDataSpend4;
          }
          if (selectedOption.value === "Sin 90") {
            lineData = lineDataRev4;
          }
          
          if (selectedOption.value === "Sin 180") {
            lineData = lineDataKav4;
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
              <div class="col-6">
                <h2 class="text-left">Customer Data</h2>
  
                <td width="20%" scope="col" class="text">
                  <Select onChange={this.handleChange} options={options} />
                </td>
              </div>
              <div class="col-8">
                <Line data={lineData} options={lineOptions} />
              </div>
             
          </div>
        </Container>
      
    );
  }
  }
  
  class App6 extends Component {
    state = {
      selectedOption: "",
      options: [
        { value: "Point", label: "Point" },
        { value: "Contextual", label: "Contextual" },
        { value: "Collective", label: "Collective" },
      ],
    };
  
    handleChange = (selectedOption) => {
      console.log(selectedOption);
      this.setState({
        selectedOption: this.state.options.value,
      });
      if (selectedOption.value === "Point") {
        lineData = lineDataSpend5;
      }
      if (selectedOption.value === "Contextual") {
        lineData = lineDataRev5;
      }
  
      if (selectedOption.value === "Collective") {
        lineData = lineDataKav5;
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
            
              <div class="col-6">
                <h2 class="text-left">Anomaly</h2>
  
                <td width="20%" scope="col" class="text">
                  <Select onChange={this.handleChange} options={options} />
                </td>
              </div>
              <div class="col-8">
                <Line data={lineData} options={lineOptions} />
              </div>
             
          </div>
        </Container>
      );
    }
  }
 class CustomerForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: [{
          firstName: props.firstName,
          lastName: props.lastName,
      
          value: "Normal",
          label:"Normal",
        }
      ],
      rows:[{}],
      }
      this.baseState = this.state 
    }
    handleAddRow = () => {
      this.setState(this.baseState)
      const item = {
       
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
    handleFirstNameChanged(event) {
      var options        = this.state.options;
      options.firstName  = event.target.value;
  
      this.setState({ options: options });
    }
  
    handleLastNameChanged(event) {
      var options     = this.state.options;
      options.lastName = event.target.value;
  
      this.setState({ options: options });
    }
  
    handleChange = (selectedOption) => {
      
      this.setState({
        selectedOption: this.state.options.value,
      });
      if (selectedOption.value === "Normal") {
        lineData = lineDataSpend4;
      }
     
    };
  
    handleButtonClicked() {
      console.log(this.state.options);
    }
  
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
            {
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
      return (
        <div>
          <table>
          <thead>
                    <tr>
                      
                      <th className="text-center"> Distribution Type </th>
                      <th className="text-center"> Mean </th>
                      <th className="text-center"> Std. Dev. </th>
                    </tr>
                  </thead>
                  {this.state.rows.map((item, idx) => (
                      <tr id="addr0" key={idx}>
            <td>
          <Select
                            onChange={this.handleChange}
                            options={this.state.options}
                          /></td> 
              <td>
         
          <input type="text" value={this.state.options.firstName} onChange={this.handleFirstNameChanged.bind(this)}/>
          </td>
         <td> 
          <input type="text" value={this.state.options.lastName} onChange={this.handleLastNameChanged.bind(this)}/>
          </td>
        


                          </tr>))}
            </table>
          <hr/>
          <div className="col-md-2 column">

                <button onClick={this.handleAddRow} className="btn btn-primary">
                add
                </button>
                <button
                  onClick={this.handleRemoveRow}
                  className="btn btn-primary float-right"
                >
                  sub
                </button>

              </div>
          <div class="col-8">
          <Line data={lineData} options={lineOptions} />
        </div>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
        </div>
      );
    }
  }
  class App12 extends Component {
  

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
  export { App5,App6 ,CustomerForm,App12};