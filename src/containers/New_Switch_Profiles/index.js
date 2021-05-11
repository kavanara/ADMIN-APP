import React, { state } from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Button,
  Row,
  Col,
  Table,
  Form,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { GiSaveArrow} from "react-icons/gi";
export class App extends React.Component {
  //   state = {
  //     list: [
  //       { id: 1, label: "Tier-1 traffic profile ", value: false },
  //       { id: 2, label: "Tier-2 traffic profile ", value: false },
  //       { id: 3, label: "Tier-3 traffic profile ", value: false },
  //       { id: 4, label: "Tier-4 traffic profile ", value: false },
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
  //           <h1>Switch profile N</h1>
  //           <Container>

  //             <div className="App">
  //                <div class="text-right">

  //                <Link to="/cp" className="navbar-brand">

  //                 <button
  //                   type="button"
  //                   class="btn btn-primary"
  //                   onClick={this.handleClick}
  //                 >
  //                   New
  //                 </button>

  //             </Link>

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

  //                     <th scope="col" className="text-left">Traffic Profile</th>
  //                     <th scope="col" className="text-left">ITL</th>
  //                     <th scope="col"></th>

  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   {this.state.list.map((e) => {
  //                     return (
  //                       <tr key={e.id}>

  //                         {/* <td className="text-left">{e.label}</td> */}
  //                         <td md="4"> <select id="list" className="custom-select" >

  //                 <option >Tier-1 traffic profile</option>
  //                 <option >Tier-2 traffic profile</option>
  //                 <option >Tier-3 traffic profile</option>

  //             </select></td>
  //             <td> <InputGroup as={Col} md="6">
  //     <InputGroup.Prepend>

  //     </InputGroup.Prepend>
  //     <FormControl
  //       placeholder="ITL"

  //     />
  //   </InputGroup></td>

  //                         <td className="text-right">
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

  //           </Container>
  //         </Jumbotron>
  //       </Layout>
  //     );
  //   }
  // }

  state = {
    selectedOption: "",
    options: [
      {
        value: "Tier-1 traffic profile ",
        label: "Tier-1 traffic profile ",
      },
      {
        value: "Tier-2 traffic profile ",
        label: "Tier-2 traffic profile ",
      },
      {
        value: "Tier-3 traffic profile ",
        label: "Tier-3 traffic profile ",
      },
    ],
    rows: [{}],
  };

  handleDistChange = (idx) => (e) => {
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
      name: "",
      mobile: "",
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

  render() {
    const { selectedOption, options } = this.state;
    
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          
          <Container>

          

          
            <div>
              <div className="container">
                <div className="row clearfix">
                  <div className="col-md-10 column">
                  <div>
              <h1>
                <InputGroup>
                  <InputGroup.Text className="h-25 d-inline-block">
                    Name of the Switch Profile
                  </InputGroup.Text>
                  &nbsp;&nbsp;
                  <FormControl
                    className="h-10 d-inline-block"
                    className="w-50 p-3"
                    className="block-example border border-primary"
                  />
                </InputGroup>
              </h1>
            </div>
            <br/>
                    <table
                      className="table table-bordered table-hover"
                      id="tab_logic"
                    >
                      <thead>
                        <tr>
                          <th className="text-center" scope="col" width="40%" > Traffic Profile </th>
                          <th className="text-center" scope="col" width="40%"> ITL </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.rows.map((item, idx) => (
                          <tr id="addr0" key={idx}>
                            <td className="text-center" scope="col" width="40%">
                             
                              <Select
                                onChange={this.handleChange}
                                options={options}
                              />
                            </td>
                            <td className="text-center" scope="col" width="40%">
                              <input
                                type="text"
                                name="name"
                                value={this.state.rows[idx].name}
                                onChange={this.handleDistChange(idx)}
                                className="form-control"
                              />
                            </td>
                          </tr>



                        ))}
                      </tbody>
                    </table>
                  </div>
                  &nbsp;&nbsp;
                 <tr>

                

                  <div className="col-md-0 column">
                    
                    <br/>
                    <br/>
                    <br/>
                    &nbsp;&nbsp;
                    <button
                      onClick={this.handleAddRow}
                      className="btn btn-primary"
                    >
                      <IoMdAdd />
                    </button>
                    &nbsp;&nbsp;
                    <button
                      onClick={this.handleRemoveRow}
                      className="btn btn-primary float-right"
                    >
                      <IoIosRemove />
                    </button>
                  </div>
                  </tr>
                </div>
              </div>
            </div>

            <br/>
            <br/>
            <br/>
            
            
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}
export default App;
