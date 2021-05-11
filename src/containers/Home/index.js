import React, { useState } from "react";
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
import { IoMdAdd} from "react-icons/io";

import { AiOutlineEdit} from "react-icons/ai";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
// import ReactDOM from "react-dom";

export class App extends React.Component {
 
    state = {
      buyItems: [
        {id: 1, check: false, id1: "Switch Profile 1", value: "100,000" },
        {id: 2, check: false, id1: "Switch Profile 2", value: "120,000" },
      ],
      
    };
  
  handleChange1 = (e) => {
    const id = e.target.id;
    this.setState((prevState) => {
      return {
        buyItems: prevState.buyItems.map((li) =>
          li.id === +id ? { ...li, check: !li.check } : li
        ),
      };
    });
  };
  render() {
    const { buyItems, message } = this.state;
    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <Container>
            <div>
              <header>
                <h1>Switch Profiles</h1>
              </header>
              <div className="content">
                {(message !== "" || buyItems.length === 0) && (
                  <p className="message text-danger">{message}</p>
                )}
                {buyItems.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        
                      <th scope="col">    </th>
                        <th scope="col">Name</th>
                        <th scope="col">Total no. of ITLs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.buyItems.map((item) => {
                        return (
                          <tr key={item}>

<td>
                          <input
                            type="checkbox"
                            id={item.id}
                            checked={item.check}
                            onChange={this.handleChange1}
                          />
                        </td>
                            <td className="text-center">{item.id1}</td>
                            <td>{item.value}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <Link to="/New_Switch_Profiles" className="navbar-brand">
              <div style={{ float: "center" }}>
                <p align="center">
                  
                  <Button> <IoMdAdd/>  New</Button>   
                  &nbsp; &nbsp;
                  <Button>   < AiOutlineEdit/>  Edit   </Button>
                </p>
              </div>
            </Link>
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}

export default App;
