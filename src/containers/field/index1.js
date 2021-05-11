import React, { Component } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

let lineData;

const lineDataSpend = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "1 degree polynomial",
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
      data: [0, 5, -5, 0, 10, -10, 0],
    },
  ],
};

const lineDataRev = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "2 degree polynomial",
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
      data: [27, 9, 37, 31, 102, 42, 19],
    },
  ],
};
const lineDataKav = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "3 degree polynomial",
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
      data: [11, 22, 33, 44, 55, 66, 77],
    },
  ],
};

//for seasonality Data


const lineDataSpend1 = {
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
      data: [0, 5, 5, 0, 10, 10, 0],
    },
  ],
};

const lineDataRev1 = {
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
const lineDataKav1 = {
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

//for anomaly

const lineDataSpend2 = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "Point Anomaly",
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
      data: [0, 5, 5, 0, 10, 10, 0],
    },
  ],
};

const lineDataRev2 = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "Contextual Anomaly",
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
const lineDataKav2 = {
  labels: ["March", "April", "May", "June", "July", "August", "September"],
  datasets: [
    {
      label: "Collective Anomaly",
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

class App1 extends Component {
    state = {
        
        selectedOption: "",
        options: [
          { value: "AAEFS DATA", label: "AAEFS DATA" },
          { value: "Sin 90", label: "Sin 90" },
          { value: "Sin 180", label: "Sin 180" },
        ],
      };
    
      handleChange = (selectedOption) => {
        console.log(selectedOption);
        this.setState({
            selectedOption: this.state.options.value,
          });
          if (selectedOption.value === "AAEFS DATA") {
            lineData = lineDataSpend1;
          }
          if (selectedOption.value === "Sin 90") {
            lineData = lineDataRev1;
          }
          
          if (selectedOption.value === "Sin 180") {
            lineData = lineDataKav1;
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
      <Container>
          
        <div>
         
          <h2 class="text-left">Field data</h2>
          
          
          <td width="20%" scope="col" class="text">
            <Select
width='200px'
menuColor='red'
              onChange={this.handleChange}
              options={options}
             />
              </td>
            
          
          

          <div className="row">
            <div className="col-xl-5">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify" />
                </div>
                <div className="card-block">
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}


class App2 extends Component {
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
            lineData = lineDataSpend2;
          }
          if (selectedOption.value === "Contextual") {
            lineData = lineDataRev2;
          }
          
          if (selectedOption.value === "Collective") {
            lineData = lineDataKav2;
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
      <Container>
          
        <div>
         
          <h2 class="text-left">Anomaly</h2>
          
         
          <td width="20%" scope="col" class="text">
            <Select 
              onChange={this.handleChange}
              options={options}
             />
              </td>
            
          
          

          <div className="row">
            <div className="col-xl-5">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify" />
                </div>
                <div className="card-block">
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export { App1, App2 };
