




// // import React from "react";
// // import Layout from "../../components/Layout";
// // import { Container, Button, Row, Col ,Table,Form,Modal} from "react-bootstrap";
// // import { Jumbotron } from 'react-bootstrap';
// // import { Link } from "react-router-dom";
// // // import ReactDOM from "react-dom";

// // export class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       buyItems: [ "traffic profile"
// //         // { id: 1, label: 'Switch profile 1', value: false },
// //         // { id: 2, label: 'Switch Profile 2', value: false },
// //         // { id: 3, label: 'Switch PRofile 3', value: false },
// //         // { id: 4, label: 'Switch profile 4', value: true }
// //       ],
// //       message: ''
// //     }
// //   }
// //   handleChange = e => {
// //     const id = e.target.id;
// //     this.setState(prevState => {
// //       return {
// //         buyItems: prevState.buyItems.map(
// //           li => (li.id === +id ? { ...li,
// //             value: !li.value
// //           } : li)
// //         )
// //       };
// //     });
// //   };
// //   handleClick = () => {
// //     this.setState(prevState => {
// //       return {
// //         buyItems: prevState.buyItems.filter(li => !li.value)
// //       };
// //     });
// //   };
// //   addItem(e) {<Link to="/tp" className="navbar-brand">
// //         <button type="submit" className="btn btn-primary">NEW</button> 
// //                               </Link>
// //     e.preventDefault();
// //     const {buyItems} = this.state;
// //     const newItem = this.newItem.value;

// //     const isOnTheList = buyItems.includes(newItem);

// //     if(isOnTheList){
// //       this.setState({
// //         message: 'This Profile is already made.'
// //       })
// //     } else{
// //         newItem!== '' && this.setState({
// //         buyItems: [...this.state.buyItems, newItem],
// //         message: ''
// //       })
// //     }

// //     this.addForm.reset();
// //   }

// //   removeItem(item){

// //     const newBuyItems = this.state.buyItems.filter(buyItem => {
// //       return buyItem !== item;
// //     });

// //     this.setState({
// //       buyItems: [...newBuyItems]
// //     })

// //     if(newBuyItems.length === 0){
// //       this.setState({
// //         message: 'No Profiles!'
// //       })
// //     }
// //   }

// //   clearAll(){
// //     this.setState({
// //       buyItems: [],
// //       message: 'No Profiles!'
// //     })
// //   }

// //   render() {
// //     const { buyItems, message} = this.state;
// //     return (
// //       <Layout>
// //            <Jumbotron style ={{margin: '0rem', background: '#fff'}} className="text-center">
// //            <h1>Traffic Profiles</h1>
           
// //         <Container>
// //       <div>
// //         <header>
        
          
        
        

// //         </header>
// //         <div className="content">
// //           {
// //             (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
// //           }
// //           {
// //             buyItems.length > 0 &&
// //             <table className="table">
// //             {/* <caption>Switch Profiles</caption> */}
// //             <thead>
// //               <tr>
// //                 <th scope="col">#</th>
// //                 <th scope="col">Traffic Profile</th>
// //                 <th scope="col"></th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {
// //                 buyItems.map(item => {
// //                   return (
// //                     <tr key={item}>
// //                       <th scope="row">1</th>
// //                       <td>{item}</td>
                      
// //                       {/* <td className="text-right">
// //                         <button onClick={(e)=> this.removeItem(item)} type="button" className="btn btn-default btn-sm">
// //                           Remove
// //                         </button>
// //                       </td> */}
// //                   </tr>
// //                   )
// //                 })
// //               } 
// //             </tbody>
            
// //           </table>
// //           }
// //         </div>
// //       </div>
// //              <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => this.addItem(e)}>
// //             <div className="form-group">
// //               <label className="sr-only" htmlFor="newItemInput">Add New Profile</label>
// //               <input ref={input => this.newItem = input} type="text" placeholder="Traffic Profile " className="form-control" id="newItemInput" />
// //             </div>
// //             <button type="submit" className="btn btn-primary">Add</button>
// //           </form>
          
// //  </Container>
// //    </Jumbotron>
   
// //  </Layout>
      
      

// //     );
// //   }
// // }

// // export default App;
// // import React, { state } from "react";
// // import Layout from "../../components/Layout";
// // import {
// //   Container,
// //   Button,
// //   Row,
// //   Col,
// //   Table,
// //   Form,
// //   Modal,
// // } from "react-bootstrap";
// // import { Jumbotron } from "react-bootstrap";
// // import { Link } from "react-router-dom";

// // export class App extends React.Component {
// //   state = {
// //     list: [
// //       { id: 1, label: "traffic profile 1", value: false },
// //       { id: 2, label: "traffic profile 2", value: false },
// //       { id: 3, label: "traffic profile 3", value: false },
// //       { id: 4, label: "traffic profile 4", value: false },
// //     ],
// //   };

// //   addItem(e) {
   
// //     e.preventDefault();

// //     const { list } = this.state;
// //    // const newItem = this.newItem;
// //     const newItem = "traffic profile 5";
// //     const newId = Math.floor(Math.random() * 100) + 1;
// //     const newValue = false;
// //     const obj = { id: newId, label: newItem, value: newValue };

   
// //     newItem !== "" &&
// //       this.setState({
// //         list: [...this.state.list, obj],
       
// //       });
    

// //     this.addForm.reset();
// //     console.log(this.state.list);
// //   }

// //   handleChange = (e) => {
// //     const id = e.target.id;
// //     this.setState((prevState) => {
// //       return {
// //         list: prevState.list.map((li) =>
// //           li.id === +id ? { ...li, value: !li.value } : li
// //         ),
// //       };
// //     });
// //   };
// //   handleClick = () => {
// //     this.setState((prevState) => {
// //       return {
// //         list: prevState.list.filter((li) => !li.value),
// //       };
// //     });
// //   };

// //   change(event) {
// //     this.setState({
// //       [event.target.name]: event.target.value,
// //     });
// //   }
// //   render() {
// //     return (
// //       <Layout>
// //         <Jumbotron
// //           style={{ margin: "0rem", background: "#fff" }}
// //           className="text-center"
// //         >
// //           <h1>traffic profile list</h1>

// //           <Container>
// //             <div className="App">
              

// //               {/* <button onClick={this.handleClick}>Delete</button> */}
// //               <table className="table">
// //                 <thead>
// //                   <tr>
// //                     <th scope="col">#</th>
// //                     <th scope="col">Traffic Profile</th>
                    
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {this.state.list.map((e) => {
// //                     return (
// //                       <tr key={e.id}>
// //                         <th scope="row">1</th>
// //                         <td>{e.label}</td>
// //                         <td>
// //                           {/* <div key={e.id}>
// //                             <input
// //                               type="checkbox"
// //                               id={e.id}
// //                               checked={e.value}
// //                               onChange={this.handleChange}
// //                             />
// //                             <label htmlFor={e.id}></label>
// //                           </div> */}
// //                         </td>
// //                       </tr>
// //                     );
// //                   })}
// //                 </tbody>
// //               </table>
// //             </div>

// //             <form
// //               ref={(input) => (this.addForm = input)}
// //               className="form-inline"
// //               onSubmit={(e) => this.addItem(e)}
// //             >
// //               <div className="form-group">
// //                 <label className="sr-only" htmlFor="newItemInput">
// //                   Add New Profile
// //                 </label>
// //                 <input
// //                   ref={(input) => (this.newColumn = input)}
// //                   type="text"
// //                   placeholder="Traffic Profile "
// //                   className="form-control"
// //                   id="newItemInput"
// //                 />
// //               </div>
// //               <button type="submit" className="btn btn-primary">
// //                 Add
// //               </button>
// //             </form>
// //           </Container>
// //         </Jumbotron>
// //       </Layout>
// //     );
// //   }
// // }

// // export default App;

// import React from "react";
// import Layout from "../../components/Layout";
// import { Container, Button, Row, Col ,Table,Form,Modal,Pagination} from "react-bootstrap";
// import { Jumbotron } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// // import ReactDOM from "react-dom";

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       buyItems: ['Traffic profile 1','Traffic profile 2','Traffic profile 3','Traffic profile 4'],
//       message: ''
//     }
//   }

//   addItem(e) {
//     e.preventDefault();
//     const {buyItems} = this.state;
//     const newItem = this.newItem.value;

//     const isOnTheList = buyItems.includes(newItem);

//     if(isOnTheList){
//       this.setState({
//         message: 'This Profile is already made.'
//       })
//     } else{
//         newItem!== '' && this.setState({
//         buyItems: [...this.state.buyItems, newItem],
//         message: ''
//       })
//     }

//     this.addForm.reset();
//   }

//   removeItem(item){

//     const newBuyItems = this.state.buyItems.filter(buyItem => {
//       return buyItem !== item;
//     });

//     this.setState({
//       buyItems: [...newBuyItems]
//     })

//     if(newBuyItems.length === 0){
//       this.setState({
//         message: 'No Profiles!'
//       })
//     }
//   }

//   clearAll(){
//     this.setState({
//       buyItems: [],
//       message: 'No Profiles!'
//     })
//   }

//   render() {
//     const { buyItems, message} = this.state;
//     return (
//       <Layout>
//            <Jumbotron style ={{margin: '0rem', background: '#fff'}} className="text-center">
//            <h1>Traffic Profiles</h1>
           
           
//         <Container>
//       <div>
//         <header>
          

          

//         </header>
//         <div className="content">
//           {
//             (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
//           }
//           {
//             buyItems.length > 0 &&
//             <table className="table">
            
//             <thead>
//               <tr>
//                 {/* <th scope="col">#</th> */}
                
//                 <th scope="col">Traffic Profiles</th>
               
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 buyItems.map(item => {
//                   return (
//                     <tr key={item}>
//                       {/* <th scope="row">1</th> */}
//                       <td>{item}</td>
                      
                      
//                       <td className="text-right">
//                         <button onClick={(e)=> this.removeItem(item)} type="button" className="btn btn-default btn-sm">
//                           Remove
//                         </button>
//                       </td>
//                   </tr>
//                   )
//                 })
//               } 
//             </tbody>
            
//           </table>
//           }
//         </div>
//       </div>
       
//       {/* <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => this.addItem(e)}>
//             <div className="form-group">
//               <label className="sr-only" htmlFor="newItemInput">Add New Profile</label>
//               <input ref={input => this.newItem = input} type="text" placeholder="Counter" className="form-control" id="newItemInput" />
//             </div>
//             <button type="submit" className="btn btn-primary">Add</button>
//           </form> */}
//          <button type="submit" class="center" className="btn btn-primary">
//                 New 
//               </button>
//               <Pagination count={10} />
// <Pagination count={10} color="primary" />
//  </Container>
//    </Jumbotron>
   
//  </Layout>
      
      

//     );
//   }
// }

// export default App;

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
} from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdAdd} from "react-icons/io";
import { RiDeleteBin5Line} from "react-icons/ri";
import { AiOutlineEdit} from "react-icons/ai";
import { BiAnalyse} from "react-icons/bi";
export class App extends React.Component {
  state = {
    list: [
      { id: 1, label: "traffic profile 1", value: false ,des:"descrip 1"},
      { id: 2, label: "traffic profile 2", value: false ,des:"descrip 2"},
      { id: 3, label: "traffic profile 3", value: false ,des:"descrip 3"},
      { id: 4, label: "traffic profile 4", value: false ,des:"descrip 4"},
    ],
  };

  addItem(e) {
   
    e.preventDefault();

    const { list } = this.state;
   // const newItem = this.newItem;
    const newItem = "Tier -5 traffic profile ";
    const newId = Math.floor(Math.random() * 100) + 1;
    const newValue = false;
    const obj = { id: newId, label: newItem, value: newValue };

   
    newItem !== "" &&
      this.setState({
        list: [...this.state.list, obj],
       
      });
    

    this.addForm.reset();
    console.log(this.state.list);
  }

  handleChange = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        list: prevState.list.map((li) =>
          li.id === +id ? { ...li, value: !li.value } : li
        ),
      };
    });
  };
  handleClick = () => {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((li) => !li.value),
      };
    });
  };

  change(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Traffic Profiles</h1>
          <Container>
          
            
          
            <div className="App">
              

              {/* <button onClick={this.handleClick}>Delete</button> */}
              <table className="table">
                <thead>
                  <tr>
                   
                    <th scope="col" class="text-left">Name</th>
                    <th scope="col" class="text-left">Description</th>
                    <th scope="col" class="text-right"></th>
                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((e) => {
                    return (
                      <tr key={e.id}>
                       
                        <td class="text-left">{e.label}</td>
                        <td class="text-left">{e.des}</td>
                        <td class="text-right">
                          <div key={e.id}>
                            <input
                              type="checkbox"
                              id={e.id}
                              checked={e.value}
                              onChange={this.handleChange}
                              
                            />
                            <label htmlFor={e.id}></label>
                          </div>
                        </td>
                       
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div class="text-center">
            <Link to="/Traffic_profiles" className="navbar-brand">
            <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleClick}
                >
                 <IoMdAdd/> New
                </button>


               
              </div>
              
              </Link>

              <button
                type="button"
                class="btn btn-primary"
                onClick={this.handleClick}
              >
               <RiDeleteBin5Line/> Delete
              </button>

              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/Traffic_profiles" className="navbar-brand">
              <button
                type="button"
                class="btn btn-primary"
               
              >
               <AiOutlineEdit/> Edit
              </button>
              </Link>
              
            </div>
              
               
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

export default App;