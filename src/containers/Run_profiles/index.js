import React, { Component } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { BiAnalyse} from "react-icons/bi";

import { BsFillPlayFill} from "react-icons/bs";

import { App1, App2 } from "../Run_profiles/index1"

class App extends Component {
  
  render() {
    

    return (
      <Layout>
        <Jumbotron
          style={{ margin: "0rem", background: "#fff" }}
          className="text-center"
        >
          <Container>
            <div>
              
                <h1 class="text-center">Run Profiles</h1>
                <table className="table">
            <thead>
              <tr>
                <th scope="col" class="text-left">
                  &nbsp; &nbsp;Switch Profiles
                </th>
                <th scope="col" class="text-right">
                  ITLs
                </th>
               
              </tr>
            </thead>
          </table>
                <App1/>



                <App2/>
              
            </div>
            <br />
            <br />
            <br />


            
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.handleClick}
            >
              <IoMdAdd />  New
            </button>
            &nbsp; &nbsp;
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.handleClick}
            >
             <BsFillPlayFill/> Run
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.handleClick}
            >
              <BiAnalyse/> Analyze
            </button>
            

            
          </Container>
        </Jumbotron>
      </Layout>
    );
  }
}
export default App;
