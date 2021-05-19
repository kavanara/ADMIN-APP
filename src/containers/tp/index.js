// import React, { state } from "react";
// import Layout from "../../components/Layout";
// import {
//   Container,
//   Button,
//   Row,
//   Col,
//   Table,
//   Form,
//   Modal,
// } from "react-bootstrap";
// import { Jumbotron } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import ReactDOM from "react-dom";

// //  function selectTrafficProfile(item){
// //   console.log("selection: " + item)

// // };
// export class App extends React.Component {
//   state = {
//     list: [
//       { id: 1, label: "counter profile 1", value: false },
//       { id: 2, label: "counter profile 2", value: false },
//       { id: 3, label: "counter profile 3", value: false },
//       { id: 4, label: "counter profile 4", value: false },
//     ],
//   };

//   addItem(e) {

//     e.preventDefault();

//     const { list } = this.state;
//    // const newItem = this.newItem;
//     const newItem = "counter profile 5";
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
//           <h1>verification</h1>

//           <Container>
//             <div className="App">
//               <div class="text-right">
//                 <button
//                   type="button"
//                   class="btn btn-primary"
//                   onClick={this.handleClick}
//                 >
//                   Delete
//                 </button>
//               </div>

//               {/* <button onClick={this.handleClick}>Delete</button> */}
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Traffic Profile</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.list.map((e) => {
//                     return (
//                       <tr key={e.id}>
//                         <th scope="row">1</th>
//                         <td>{e.label}</td>
//                         <td>
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

//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <form
//               ref={(input) => (this.addForm = input)}
//               className="form-inline"
//               onSubmit={(e) => this.addItem(e)}
//             >
//               <div className="form-group">
//                 <label className="sr-only" htmlFor="newItemInput">
//                   Add New Profile
//                 </label>
//                 <input
//                   ref={(input) => (this.newColumn = input)}
//                   type="text"
//                   placeholder="Traffic Profile "
//                   className="form-control"
//                   id="newItemInput"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Add
//               </button>
//             </form>
//           </Container>
//         </Jumbotron>
//       </Layout>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HeatMap from "react-heatmap-grid";
import Select from "react-select";
import Layout from "../../components/Layout";
const xLabels = [0, 1];
let lineData = [[], []];
let box = [[], []];
// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 1 === 0 ? true : false));

const yLabels = ["Sun", "Mon"];

const data = [
  [10, 20],
  [30, 40],
];
const data00 = [
  [11, 21],
  [31, 41],
];
const data01 = [
  [12, 22],
  [32, 42],
];
const data10 = [
  [13, 23],
  [33, 43],
];

const data11= [
  [1, 1],
  [2, 2],
];

class App extends Component {
  state = {
    selectedOption: "",
    options: [
      { value: "10k", label: "10k" },
      { value: "20k", label: "20k" },
      { value: "30k", label: "30k" },
      { value: "40k", label: "40k" },
    ],
    anomalyDiscrepancy:[[],[]],
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
      selectedOption: this.state.options.value,
    });
    if (selectedOption.value === "10k") {
      lineData = data;
      
      
    }
    if (selectedOption.value === "20k") {
      lineData = data00;
    }

    
  };

  disp = (a, b) => {
    var a, b;
    this.setState({ anomalyDiscrepancy:data01})
    alert(`Clicked ${a}, ${b}`);
    console.log(a, b);
    
    
  };

  render() {
    const { selectedOption, options } = this.state;
    return (
      <Layout>
        <Container>
          <h4 class="text-left">ITLs</h4>
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
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              xLabelsLocation={"bottom"}
              xLabelsVisibility={xLabelsVisibility}
              xLabelWidth={60}
              data={lineData}
              squares
              height={35}
              onClick={(x, y) => this.disp(x, y)}
              // onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
              cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgb(0, 151, 230, ${
                  1 - (max - value) / (max - min)
                })`,
                fontSize: "11.5px",
                color: "#444",
              })}
              cellRender={(value) => value && <div>{value}</div>}
            />
          </div>
<br/>
<br/>
<br/>

          <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={this.state.anomalyDiscrepancy}
        squares
        height={35}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#444",
        })}
        cellRender={(value) => value && <div>{value}</div>}
      />
        </Container>
      </Layout>
    );
  }
}
export default App;
